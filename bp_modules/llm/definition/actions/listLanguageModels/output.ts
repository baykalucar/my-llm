/* eslint-disable */
/* tslint:disable */
// This file is generated. Do not edit it manually.

import { z } from "@botpress/sdk";
export const output = {
  schema: z.object({
    models: z.array(
      z.intersection(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
          tags: z.array(
            z.enum([
              "recommended",
              "deprecated",
              "general-purpose",
              "low-cost",
              "vision",
              "coding",
              "agents",
              "function-calling",
              "roleplay",
              "storytelling",
              "reasoning",
              "preview",
            ])
          ),
          input: z.object({
            maxTokens: z.number(),
            costPer1MTokens:
              /** Cost per 1 million tokens, in U.S. dollars */ z.number(),
          }),
          output: z.object({
            maxTokens: z.number(),
            costPer1MTokens:
              /** Cost per 1 million tokens, in U.S. dollars */ z.number(),
          }),
        }),
        z.ref("modelRef")
      )
    ),
  }),
};
