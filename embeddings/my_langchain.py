from langchain.llms import AzureOpenAI
from langchain_openai import AzureChatOpenAI
from langchain.schema import HumanMessage

import os
import openai
from dotenv import load_dotenv

from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

if load_dotenv():
    print("dotenv erfolgreich geladen")
else: 
    print("No file .env found")

# Create an instance of Azure OpenAI
llm = AzureChatOpenAI(
    azure_deployment = os.getenv("AZURE_OPENAI_COMPLETION_DEPLOYMENT_NAME")
)

# Define the prompt we want the AI to respond to - the message the Human user is asking
msg = HumanMessage(content="who am i?")
msg2 = HumanMessage(content="i am timo")
# Call the API
r = llm.invoke([msg, msg2])

# Print the response
print(r.content)

# Create a prompt template with variables, note the curly braces
#prompt = PromptTemplate(
#    input_variables=["input", "usecase"],
#    template="What {usecase} can I make with a {input}?",
#)

# Create a chain
#chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain only specifying the input variable.
#response = chain.invoke({"input": "apples", "usecase": "meals"})

# As we are using a single input variable, you could also run the string like this:
# response = chain.run("raspberry pi")

#print(response['text'])