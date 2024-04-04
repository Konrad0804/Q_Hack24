import openai
import os
from dotenv import load_dotenv

# Load environment variables
if load_dotenv():
    print("Found Azure OpenAI API Base Endpoint: " + os.getenv("AZURE_OPENAI_ENDPOINT"))
else: 
    print("Azure OpenAI API Base Endpoint not found. Have you configured the .env file?")


from openai import AzureOpenAI

client = AzureOpenAI(
    azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key = os.getenv("AZURE_OPENAI_API_KEY"),
    api_version = os.getenv("OPENAI_API_VERSION")
)

response = client.chat.completions.create(
    model = os.getenv("AZURE_OPENAI_COMPLETION_DEPLOYMENT_NAME"),
    messages = [{"role" : "assistant", "content" : "best country to travel to with less than 1000 dollars "}],
)

print(response.choices[0].message.content)