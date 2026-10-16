// Module ID: 835
// Function ID: 836
// Name: _INTERNAL_cleanupToolCallSpan
// Dependencies: [836, 833, 834, 837]
// Exports: _INTERNAL_cleanupToolCallSpan, _INTERNAL_getSpanForToolCallId, accumulateTokensForParent, applyAccumulatedTokens, convertAvailableToolsToJsonString, getSpanOpFromName, requestMessagesFromPrompt

// Module 835 (_INTERNAL_cleanupToolCallSpan)
import EMBEDDINGS_OPS from "EMBEDDINGS_OPS" /* 833 */;
import AI_MODEL_ID_ATTRIBUTE from "AI_MODEL_ID_ATTRIBUTE" /* 834 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 836 */;
import extractSystemInstructions from "extractSystemInstructions" /* 837 */;

function convertPromptToMessages(data) {
  let _prompt;
  let system;
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(data);
    if (parsed) {
      if (typeof parsed === "object") {
        ({ prompt: _prompt, system } = parsed);
        const items = [];
        const tmp9 = _prompt;
        if (typeof system === "string") {
          const obj = { role: "system", content: system };
          items.push(obj);
        }
        if (typeof tmp9 === "string") {
          const obj2 = { role: "user", content: _prompt };
          items.push(obj2);
        }
        return items;
      }
    }
    return [];
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_cleanupToolCallSpan = function _INTERNAL_cleanupToolCallSpan(arg0) {
  const toolCallSpanMap = EMBEDDINGS_OPS.toolCallSpanMap;
  toolCallSpanMap.delete(arg0);
};
export const _INTERNAL_getSpanForToolCallId = function _INTERNAL_getSpanForToolCallId(arg0) {
  const toolCallSpanMap = EMBEDDINGS_OPS.toolCallSpanMap;
  return toolCallSpanMap.get(arg0);
};
export const accumulateTokensForParent = function accumulateTokensForParent(item10015, map) {
  const parent_span_id = item10015.parent_span_id;
  if (parent_span_id) {
    const tmp3 = item10015.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    const tmp4 = item10015.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    if (typeof tmp3 === "number") {
      const tmp6 = map.get(parent_span_id) || { inputTokens: 0, outputTokens: 0 };
      if (typeof tmp3 === "number") {
        tmp6.inputTokens = tmp6.inputTokens + tmp3;
      }
      if (typeof tmp4 === "number") {
        tmp6.outputTokens = tmp6.outputTokens + tmp4;
      }
      const result = map.set(parent_span_id, tmp6);
    }
  }
};
export const applyAccumulatedTokens = function applyAccumulatedTokens(trace, map) {
  const value = map.get(trace.span_id);
  const tmp2 = value && trace.data;
  if (tmp2) {
    if (value.inputTokens > 0) {
      trace.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = value.inputTokens;
    }
    if (value.outputTokens > 0) {
      trace.data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = value.outputTokens;
    }
    const tmp7 = value.inputTokens > 0 || value.outputTokens > 0;
    if (tmp7) {
      trace.data["gen_ai.usage.total_tokens"] = value.inputTokens + value.outputTokens;
    }
  }
};
export const convertAvailableToolsToJsonString = function convertAvailableToolsToJsonString(data) {
  return JSON.stringify(data.map((item) => {
    if (typeof item === "string") {
      try {
        const _JSON = JSON;
        return JSON.parse(item);
      } catch (err) {
        return item;
      }
    } else {
      return item;
    }
  }));
};
export { convertPromptToMessages };
export const getSpanOpFromName = function getSpanOpFromName(description) {
  let tmp17;
  switch (description) {
    case "ai.generateText":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.streamText":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.generateObject":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.streamObject":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.embed":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.embedMany":
    {
      tmp17 = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE;
      return tmp17.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
    }
    case "ai.generateText.doGenerate":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_GENERATE_TEXT_DO_GENERATE_OPERATION_ATTRIBUTE;
    }
    case "ai.streamText.doStream":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_STREAM_TEXT_DO_STREAM_OPERATION_ATTRIBUTE;
    }
    case "ai.generateObject.doGenerate":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_GENERATE_OBJECT_DO_GENERATE_OPERATION_ATTRIBUTE;
    }
    case "ai.streamObject.doStream":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_STREAM_OBJECT_DO_STREAM_OPERATION_ATTRIBUTE;
    }
    case "ai.embed.doEmbed":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EMBED_DO_EMBED_OPERATION_ATTRIBUTE;
    }
    case "ai.embedMany.doEmbed":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EMBED_MANY_DO_EMBED_OPERATION_ATTRIBUTE;
    }
    case "ai.toolCall":
    {
      return ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE;
    }
    default:
    {
      let str2;
      if (description.startsWith("ai.stream")) {
        str2 = "ai.run";
      }
      return str2;
    }
  }
};
export const requestMessagesFromPrompt = function requestMessagesFromPrompt(setAttribute, data) {
  let filteredMessages;
  let systemInstructions;
  if (data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE]) {
    const tmpResult = extractSystemInstructions;
    const attr = setAttribute.setAttribute("gen_ai.prompt", tmpResult.getTruncatedJsonString(data[tmp(undefined, 834).AI_PROMPT_ATTRIBUTE]));
  }
  const tmp4 = data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_ATTRIBUTE];
  if (typeof tmp4 === "string") {
    if (!data[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]) {
      if (!data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE]) {
        const arr = convertPromptToMessages(tmp4);
        if (arr.length) {
          const tmpResult5 = extractSystemInstructions;
          const result = tmpResult5.extractSystemInstructions(arr);
          ({ systemInstructions, filteredMessages } = result);
          if (systemInstructions) {
            const attr1 = setAttribute.setAttribute(tmp(836).GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
          }
          const _Array = Array;
          let num = 0;
          if (Array.isArray(filteredMessages)) {
            num = filteredMessages.length;
          }
          const obj = {};
          const setAttributes = setAttribute.setAttributes;
          const GEN_AI_INPUT_MESSAGES_ATTRIBUTE = tmp(836).GEN_AI_INPUT_MESSAGES_ATTRIBUTE;
          const tmpResult6 = extractSystemInstructions;
          obj[GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = tmpResult6.getTruncatedJsonString(filteredMessages);
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num;
          setAttributes(obj);
        }
      }
    }
  }
  if (typeof data[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE] === "string") {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(data[tmp(undefined, 834).AI_PROMPT_MESSAGES_ATTRIBUTE]);
      const _Array2 = Array;
      if (Array.isArray(parsed)) {
        const tmpResult7 = extractSystemInstructions;
        const result1 = tmpResult7.extractSystemInstructions(parsed);
        const systemInstructions2 = result1.systemInstructions;
        const filteredMessages1 = result1.filteredMessages;
        if (systemInstructions2) {
          const attr2 = setAttribute.setAttribute(tmp(836).GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions2);
        }
        const _Array3 = Array;
        let num2 = 0;
        if (Array.isArray(filteredMessages1)) {
          num2 = filteredMessages1.length;
        }
        const obj2 = {};
        const setAttributes2 = setAttribute.setAttributes;
        obj2[AI_MODEL_ID_ATTRIBUTE.AI_PROMPT_MESSAGES_ATTRIBUTE] = undefined;
        const GEN_AI_INPUT_MESSAGES_ATTRIBUTE2 = tmp(836).GEN_AI_INPUT_MESSAGES_ATTRIBUTE;
        const tmpResult8 = extractSystemInstructions;
        obj2[GEN_AI_INPUT_MESSAGES_ATTRIBUTE2] = tmpResult8.getTruncatedJsonString(filteredMessages1);
        obj2[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num2;
        setAttributes2(obj2);
      }
    } catch (err) {
    }
  }
};
