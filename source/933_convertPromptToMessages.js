// Module ID: 933
// Function ID: 10118
// Name: convertPromptToMessages
// Dependencies: []
// Exports: _INTERNAL_cleanupToolCallSpan, _INTERNAL_getSpanForToolCallId, accumulateTokensForParent, applyAccumulatedTokens, convertAvailableToolsToJsonString, getSpanOpFromName, requestMessagesFromPrompt

// Module 933 (convertPromptToMessages)
function convertPromptToMessages(arg0) {
  let _prompt;
  let system;
  const parsed = JSON.parse(arg0);
  if (parsed) {
    if ("object" === typeof tmp2) {
      ({ prompt: _prompt, system } = tmp2);
      const items = [];
      if ("string" === typeof system) {
        let obj = { role: "system", content: system };
        items.push(obj);
      }
      if ("string" === typeof _prompt) {
        obj = { role: "user", content: _prompt };
        items.push(obj);
      }
      return items;
    }
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_cleanupToolCallSpan = function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = require(dependencyMap[2]).toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
};
export const _INTERNAL_getSpanForToolCallId = function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = require(dependencyMap[2]).toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
};
export const accumulateTokensForParent = function accumulateTokensForParent(nextResult, get) {
  const parent_span_id = nextResult.parent_span_id;
  if (parent_span_id) {
    if ("number" === typeof nextResult.data[closure_0(undefined, closure_1[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE]) {
      const tmp6 = get.get(parent_span_id) || { pointerEvents: -536870861, accessibilityLabel: -299892737 };
      if (tmp5) {
        tmp6.inputTokens = tmp6.inputTokens + tmp3;
      }
      if ("number" === typeof tmp4) {
        tmp6.outputTokens = tmp6.outputTokens + tmp4;
      }
      const result = get.set(parent_span_id, tmp6);
    }
  }
};
export const applyAccumulatedTokens = function applyAccumulatedTokens(trace, map) {
  const value = map.get(trace.span_id);
  let data = value;
  if (value) {
    data = trace.data;
  }
  if (data) {
    if (value.inputTokens > 0) {
      trace.data[require(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = value.inputTokens;
    }
    if (value.outputTokens > 0) {
      trace.data[require(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = value.outputTokens;
    }
    if (tmp6) {
      trace.data.gen_ai.usage.total_tokens = value.inputTokens + value.outputTokens;
    }
    const tmp6 = value.inputTokens > 0 || value.outputTokens > 0;
  }
};
export const convertAvailableToolsToJsonString = function convertAvailableToolsToJsonString(arr) {
  return JSON.stringify(arr.map((arg0) => {
    if ("string" === typeof arg0) {
      const _JSON = JSON;
      return JSON.parse(tmp);
    } else {
      return tmp;
    }
  }));
};
export { convertPromptToMessages };
export const getSpanOpFromName = function getSpanOpFromName(description) {
  if ("ai.generateText" !== description) {
    if ("ai.streamText" !== description) {
      if ("ai.generateObject" !== description) {
        if ("ai.streamObject" !== description) {
          if ("ai.embed" !== description) {
            if ("ai.embedMany" !== description) {
              if ("ai.generateText.doGenerate" === description) {
                return require(dependencyMap[1]).GEN_AI_GENERATE_TEXT_DO_GENERATE_OPERATION_ATTRIBUTE;
              } else if ("ai.streamText.doStream" === description) {
                return require(dependencyMap[1]).GEN_AI_STREAM_TEXT_DO_STREAM_OPERATION_ATTRIBUTE;
              } else if ("ai.generateObject.doGenerate" === description) {
                return require(dependencyMap[1]).GEN_AI_GENERATE_OBJECT_DO_GENERATE_OPERATION_ATTRIBUTE;
              } else if ("ai.streamObject.doStream" === description) {
                return require(dependencyMap[1]).GEN_AI_STREAM_OBJECT_DO_STREAM_OPERATION_ATTRIBUTE;
              } else if ("ai.embed.doEmbed" === description) {
                return require(dependencyMap[1]).GEN_AI_EMBED_DO_EMBED_OPERATION_ATTRIBUTE;
              } else if ("ai.embedMany.doEmbed" === description) {
                return require(dependencyMap[1]).GEN_AI_EMBED_MANY_DO_EMBED_OPERATION_ATTRIBUTE;
              } else if ("ai.toolCall" === description) {
                return require(dependencyMap[1]).GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE;
              } else {
                let str4;
                if (description.startsWith("ai.stream")) {
                  str4 = "ai.run";
                }
                return str4;
              }
            }
          }
        }
      }
    }
  }
  return require(dependencyMap[1]).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
};
export const requestMessagesFromPrompt = function requestMessagesFromPrompt(setAttribute, data) {
  if (data[closure_0(undefined, closure_1[3]).AI_PROMPT_ATTRIBUTE]) {
    const attr = setAttribute.setAttribute("gen_ai.prompt", require(dependencyMap[4]).getTruncatedJsonString(tmp[closure_0(undefined, closure_1[3]).AI_PROMPT_ATTRIBUTE]));
    const obj = require(dependencyMap[4]);
  }
  if ("string" === typeof data[closure_0(undefined, closure_1[3]).AI_PROMPT_ATTRIBUTE]) {
    if (!tmp[closure_0(undefined, closure_1[1]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE]) {
      if (!tmp[closure_0(undefined, closure_1[3]).AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp7);
        if (arr.length) {
          const obj2 = require(dependencyMap[4]);
          setAttribute.setAttributes(callback(callback({}, require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(arr)), require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, arr.length));
          const tmp16 = callback({}, require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(arr));
        }
      }
    }
  }
  if ("string" === typeof data[closure_0(undefined, closure_1[3]).AI_PROMPT_MESSAGES_ATTRIBUTE]) {
    const _JSON = JSON;
    const parsed = JSON.parse(tmp[closure_0(undefined, closure_1[3]).AI_PROMPT_MESSAGES_ATTRIBUTE]);
    const _Array = Array;
    if (Array.isArray(parsed)) {
      const tmp22 = callback({}, require(dependencyMap[3]).AI_PROMPT_MESSAGES_ATTRIBUTE, undefined);
      const obj3 = require(dependencyMap[4]);
      setAttribute.setAttributes(callback(callback(tmp22, require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(parsed)), require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, parsed.length));
      const tmp23 = callback(tmp22, require(dependencyMap[1]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, require(dependencyMap[4]).getTruncatedJsonString(parsed));
    }
  }
};
