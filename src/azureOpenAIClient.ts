import axios from "axios";

interface AzureOpenAIConfig {
  endpoint: string;
  apiKey: string;
  deploymentId: string;
}

export class AzureOpenAIClient {
  private endpoint: string;
  private apiKey: string;
  private deploymentId: string;

  constructor({ endpoint, apiKey, deploymentId }: AzureOpenAIConfig) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
    this.deploymentId = deploymentId;
  }

  public async generateText(input: { messages: any[]; maxTokens?: number }) {
    try {
      const response = await axios.post(
        `${this.endpoint}/openai/deployments/${this.deploymentId}/chat/completions?api-version=2024-02-01`,
        {
          messages: input.messages,
          max_tokens: input.maxTokens || 1000,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": this.apiKey,
          },
        }
      );
  
      return response.data.choices[0].message;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific error
        throw new Error(`Azure OpenAI API Error: ${error.response?.data?.error?.message || error.message}`);
      } else if (error instanceof Error) {
        // Handle generic errors
        throw new Error(`Unexpected Error: ${error.message}`);
      } else {
        // Handle unknown error types
        throw new Error(`An unknown error occurred`);
      }
    }
  }  
}
