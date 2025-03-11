import { z, IntegrationDefinition } from "@botpress/sdk";
import llm from './bp_modules/llm'

export default new IntegrationDefinition({
  name: "my-llm",
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
  entities: {
    modelRef: {
      schema: z.object({
        id: z.string(),
      }),
    },
  },
}).extend(llm, ({ modelRef }) => ({
  modelRef,
}));