/* eslint-disable */
/* tslint:disable */
// This file is generated. Do not edit it manually.

import { z } from "@botpress/sdk";
export const input = {
  schema: z.object({
    model: /** Model to use for content generation */ z.optional(
      /** Model to use for content generation */ z.ref("modelRef")
    ),
    reasoningEffort:
      /** Reasoning effort level to use for models that support reasoning */ z.optional(
        /** Reasoning effort level to use for models that support reasoning */ z.enum(
          ["low", "medium", "high"]
        )
      ),
    systemPrompt: /** Optional system prompt to guide the model */ z.optional(
      /** Optional system prompt to guide the model */ z.string()
    ),
    messages: z.array(
      z.object({
        role: z.enum(["user", "assistant"]),
        type: z
          .enum(["text", "tool_calls", "tool_result", "multipart"])
          .default("text"),
        toolCalls: /** Required if `type` is "tool_calls" */ z.optional(
          z.array(
            z.object({
              id: z.string(),
              type: z.literal("function"),
              function: z.object({
                name: z.string(),
                arguments:
                  /** Some LLMs may generate invalid JSON for a tool call, so this will be `null` when it happens. */ z.union(
                    [z.record(z.string(), z.any()), z.null()]
                  ),
              }),
            })
          )
        ),
        toolResultCallId: /** Required if `type` is "tool_result" */ z.optional(
          /** Required if `type` is "tool_result" */ z.string()
        ),
        content:
          /** Required unless `type` is "tool_call". If `type` is "multipart", this field must be an array of content objects. If `type` is "tool_result" then this field should be the result of the tool call (a plain string or a JSON-encoded array or object). If `type` is "tool_call" then the `toolCalls` field should be used instead. */ z.union(
            [
              z.union([
                z.string(),
                z.array(
                  z.object({
                    type: z.enum(["text", "image"]),
                    mimeType:
                      /** Indicates the MIME type of the content. If not provided it will be detected from the content-type header of the provided URL. */ z.optional(
                        /** Indicates the MIME type of the content. If not provided it will be detected from the content-type header of the provided URL. */ z.string()
                      ),
                    text: /** Required if part type is "text"  */ z.optional(
                      /** Required if part type is "text"  */ z.string()
                    ),
                    url: /** Required if part type is "image" */ z.optional(
                      /** Required if part type is "image" */ z.string()
                    ),
                  })
                ),
              ]),
              z.null(),
            ]
          ),
      })
    ),
    responseFormat:
      /** Response format expected from the model. If "json_object" is chosen, you must instruct the model to generate JSON either via the system prompt or a user message. */ z.optional(
        /** Response format expected from the model. If "json_object" is chosen, you must instruct the model to generate JSON either via the system prompt or a user message. */ z.enum(
          ["text", "json_object"]
        )
      ),
    maxTokens:
      /** Maximum number of tokens allowed in the generated response */ z.optional(
        /** Maximum number of tokens allowed in the generated response */ z.number()
      ),
    temperature:
      /** Sampling temperature for the model. Higher values result in more random outputs. */ /** Sampling temperature for the model. Higher values result in more random outputs. */ z
        .number()
        .default(1),
    topP: /** Top-p sampling parameter. Limits sampling to the smallest set of tokens with a cumulative probability above the threshold. */ /** Top-p sampling parameter. Limits sampling to the smallest set of tokens with a cumulative probability above the threshold. */ z
      .number()
      .default(1),
    stopSequences:
      /** Sequences where the model should stop generating further tokens. */ z.optional(
        z.array(z.string())
      ),
    tools: z.optional(
      z.array(
        z.object({
          type: z.literal("function"),
          function: z.object({
            name: /** Function name */ z.string(),
            description: z.optional(z.string()),
            argumentsSchema:
              /** JSON schema of the function arguments */ z.optional(
                /** JSON schema of the function arguments */ z.object({})
              ),
          }),
        })
      )
    ),
    toolChoice: z.optional(
      z.object({
        type: z.optional(z.enum(["auto", "specific", "any", "none", ""])),
        functionName: /** Required if `type` is "specific" */ z.optional(
          /** Required if `type` is "specific" */ z.string()
        ),
      })
    ),
    userId: z.optional(z.string()),
    debug:
      /** Set to `true` to output debug information to the bot logs */ z.optional(
        /** Set to `true` to output debug information to the bot logs */ z.boolean()
      ),
    meta: z.optional(
      z.object({
        promptSource:
          /** Source of the prompt, e.g. agent/:id/:version cards/ai-generate, cards/ai-task, nodes/autonomous, etc. */ z.optional(
            /** Source of the prompt, e.g. agent/:id/:version cards/ai-generate, cards/ai-task, nodes/autonomous, etc. */ z.string()
          ),
        promptCategory: z.optional(z.string()),
        integrationName:
          /** Name of the integration that originally received the message that initiated this action */ z.optional(
            /** Name of the integration that originally received the message that initiated this action */ z.string()
          ),
      })
    ),
  }),
};
