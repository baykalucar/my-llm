import * as sdk from '@botpress/sdk'
import * as bp from '.botpress'
import { AzureOpenAIClient } from './azureOpenAIClient'

export default new bp.Integration({
  register: async () => {
    /**
     * This is called when an integration configuration is saved.
     * You should use this handler to instanciate ressources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  unregister: async () => {
    /**
     * This is called when a bot removes the integration.
     * You should use this handler to instanciate ressources in the external service and ensure that the configuration is valid.
     */
    throw new sdk.RuntimeError('Invalid configuration') // replace this with your own validation logic
  },
  actions: {
    generateContent: async ({input}) => {
      // Implement your own logic for generating content using your LLM
      const apiKey = process.env.AZURE_OPENAI_API_KEY;
      const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
      const deploymentId = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
      if (!apiKey || !endpoint || !deploymentId) {
        throw new sdk.RuntimeError('Missing Azure OpenAI environment variables');
      }
      const acl = new AzureOpenAIClient({ apiKey, endpoint, deploymentId });
      const result = await acl.generateText(input);
      return result;
    },
    listLanguageModels: async ({ ctx }) => {
      // Implement your own logic for listing available models
      const models: {
        id: string;
        name: string;
        description: string;
        tags: ("recommended" | "vision" | "deprecated" | "general-purpose" | "low-cost" | "coding" | "agents" | "function-calling" | "roleplay" | "storytelling" | "reasoning" | "preview")[];
        input: { costPer1MTokens: number; maxTokens: number };
        output: { costPer1MTokens: number; maxTokens: number };
      }[] = [
        {
          id: "model1",
          name: "Beko Azure OpenAI",
          description: "A highly accurate LLM",
          tags: ["recommended", "general-purpose"], // Explicitly declared as a mutable array
          input: {
            costPer1MTokens: 1,
            maxTokens: 200_000,
          },
          output: {
            costPer1MTokens: 12,
            maxTokens: 4096,
          },
        },
      ];
      return { models };
    },
  },
  channels: {},
  handler: async () => {},
})
