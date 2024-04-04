import os
from langchain_community.llms import AzureOpenAI
from langchain_openai import AzureChatOpenAI
from langchain.schema import HumanMessage
from dotenv import load_dotenv
import cv2


if load_dotenv():
    print("dotenv erfolgreich geladen")
else: 
    print("No file .env found")

# Create an instance of Azure OpenAI
llm = AzureChatOpenAI(
    azure_deployment = os.getenv("AZURE_OPENAI_COMPLETION_DEPLOYMENT_NAME"),
    temperature=0.5,
)

# Define the prompt we want the AI to respond to - the message the Human user is asking
msg = HumanMessage(content="tell me three facts about Germany")
# Call the API
r = llm.invoke([msg])

#print(r.content)

#Bring your own Data
from langchain_community.document_loaders import DirectoryLoader
from langchain_community.document_loaders import UnstructuredPDFLoader
from unstructured.partition.pdf import partition_pdf
from pdfminer import psparser
from pillow_heif import register_heif_opener


data_dir = "trainingsdaten"

documents = DirectoryLoader(path=data_dir, glob="*.pdf", show_progress=True, loader_cls=UnstructuredPDFLoader).load()

# Question answering chain
from langchain.chains.question_answering import load_qa_chain

# Prepare the chain and the query
chain = load_qa_chain(llm)
#query = "ich schreibe nächste woche eine klausur, ich muss aufgaben wie z.B. die aufgabe 4 lösen können. erstelle mir ein quiz aus 4 kurzen beispielfragen die auf dem inhalt der aufgabe 4 basieren. "

#result = chain.invoke({'input_documents': documents, 'question': query})

#print (result['output_text'])

#Create Embeddings

from langchain_openai import AzureOpenAIEmbeddings

embeddings_model = AzureOpenAIEmbeddings(    
    azure_deployment = os.getenv("AZURE_OPENAI_EMBEDDING_DEPLOYMENT_NAME"),
    openai_api_version = os.getenv("OPENAI_EMBEDDING_API_VERSION"),
    model= os.getenv("AZURE_OPENAI_EMBEDDING_MODEL")
)

from langchain.text_splitter import CharacterTextSplitter
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
document_chunks = text_splitter.split_documents(documents)

from langchain.vectorstores import Qdrant

qdrant = Qdrant.from_documents(
    document_chunks,
    embeddings_model,
    location=":memory:",
    collection_name="movies",
)

retriever = qdrant.as_retriever()

from langchain.chains import RetrievalQA
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever)

query = "was muss ich alles über die analysis wissen?"

result = qa.invoke(query)

print(result['result'])

