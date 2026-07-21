// Module ID: 939
// Function ID: 10178
// Name: getOperationName
// Dependencies: []
// Exports: addChatCompletionAttributes, addConversationAttributes, addEmbeddingsAttributes, addResponsesApiAttributes, buildMethodPath, extractRequestParameters, getSpanOperation, isChatCompletionChunk, isChatCompletionResponse, isConversationResponse, isEmbeddingsResponse, isResponsesApiResponse, isResponsesApiStreamEvent, shouldInstrument

// Module 939 (getOperationName)
function getOperationName(first) {
  if (first.includes("chat.completions")) {
    let CONVERSATIONS = require(dependencyMap[1]).OPENAI_OPERATIONS.CHAT;
  } else if (first.includes("responses")) {
    CONVERSATIONS = require(dependencyMap[1]).OPENAI_OPERATIONS.RESPONSES;
  } else if (first.includes("embeddings")) {
    CONVERSATIONS = require(dependencyMap[1]).OPENAI_OPERATIONS.EMBEDDINGS;
  } else if (first.includes("conversations")) {
    CONVERSATIONS = require(dependencyMap[1]).OPENAI_OPERATIONS.CONVERSATIONS;
  } else {
    const parts = first.split(".");
    CONVERSATIONS = parts.pop() || "unknown";
  }
  return CONVERSATIONS;
}
function setTokenUsageAttributes(setAttributes) {
  if (undefined !== arg1) {
    setAttributes.setAttributes(callback(callback({}, require(dependencyMap[1]).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE, arg1), require(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, arg1));
    const tmp4 = callback({}, require(dependencyMap[1]).OPENAI_USAGE_PROMPT_TOKENS_ATTRIBUTE, arg1);
  }
  if (undefined !== arg2) {
    setAttributes.setAttributes(callback(callback({}, require(dependencyMap[1]).OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, arg2), require(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, arg2));
    const tmp9 = callback({}, require(dependencyMap[1]).OPENAI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, arg2);
  }
  if (undefined !== arg3) {
    setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, arg3));
  }
}
function setCommonResponseAttributes(setAttributes, id, model, created) {
  setAttributes.setAttributes(callback(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_ID_ATTRIBUTE, id), require(dependencyMap[1]).GEN_AI_RESPONSE_ID_ATTRIBUTE, id));
  const tmp = callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_ID_ATTRIBUTE, id);
  setAttributes.setAttributes(callback(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_MODEL_ATTRIBUTE, model), require(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, model));
  const tmp3 = callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_MODEL_ATTRIBUTE, model);
  setAttributes.setAttributes(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE, new Date(1000 * created).toISOString()));
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addChatCompletionAttributes = function addChatCompletionAttributes(setAttributes, id, recordOutputs) {
  setCommonResponseAttributes(setAttributes, id.id, id.model, id.created);
  if (id.usage) {
    setTokenUsageAttributes(setAttributes, id.usage.prompt_tokens, id.usage.completion_tokens, id.usage.total_tokens);
  }
  if (Array.isArray(id.choices)) {
    const choices = id.choices;
    const mapped = choices.map((finish_reason) => finish_reason.finish_reason);
    const found = mapped.filter((arg0) => null !== arg0);
    if (found.length > 0) {
      const _JSON = JSON;
      setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, JSON.stringify(found)));
    }
    if (recordOutputs) {
      const choices1 = id.choices;
      const mapped1 = choices1.map((message) => {
        message = message.message;
        let tool_calls;
        if (null != message) {
          tool_calls = message.tool_calls;
        }
        return tool_calls;
      });
      const found1 = mapped1.filter((arg0) => {
        let isArray = Array.isArray(arg0);
        if (isArray) {
          isArray = arg0.length > 0;
        }
        return isArray;
      });
      const flatResult = found1.flat();
      if (flatResult.length > 0) {
        const _JSON2 = JSON;
        setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(flatResult)));
      }
    }
  }
};
export const addConversationAttributes = function addConversationAttributes(setAttributes, choices) {
  let created_at;
  let id;
  ({ id, created_at } = choices);
  const tmp = callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_ID_ATTRIBUTE, id);
  setAttributes.setAttributes(callback(callback(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_ID_ATTRIBUTE, id), require(dependencyMap[1]).GEN_AI_RESPONSE_ID_ATTRIBUTE, id), require(dependencyMap[1]).GEN_AI_CONVERSATION_ID_ATTRIBUTE, id));
  if (created_at) {
    const _Date = Date;
    const date = new Date(1000 * created_at);
    setAttributes.setAttributes(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_TIMESTAMP_ATTRIBUTE, date.toISOString()));
  }
};
export const addEmbeddingsAttributes = function addEmbeddingsAttributes(setAttributes, model) {
  setAttributes.setAttributes(callback(callback({}, require(dependencyMap[1]).OPENAI_RESPONSE_MODEL_ATTRIBUTE, model.model), require(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, model.model));
  if (model.usage) {
    setTokenUsageAttributes(setAttributes, model.usage.prompt_tokens, undefined, model.usage.total_tokens);
  }
};
export const addResponsesApiAttributes = function addResponsesApiAttributes(setAttributes, id, recordOutputs) {
  setCommonResponseAttributes(setAttributes, id.id, id.model, id.created_at);
  if (id.status) {
    const _JSON = JSON;
    const items = [id.status];
    setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, JSON.stringify(items)));
  }
  if (id.usage) {
    setTokenUsageAttributes(setAttributes, id.usage.input_tokens, id.usage.output_tokens, id.usage.total_tokens);
  }
  if (recordOutputs) {
    const _Array = Array;
    if (Array.isArray(id.output)) {
      if (id.output.length > 0) {
        const output = id.output;
        const found = output.filter((type) => {
          let tmp = "object" === typeof type;
          if (tmp) {
            tmp = null !== type;
          }
          if (tmp) {
            tmp = "function_call" === type.type;
          }
          return tmp;
        });
        if (found.length > 0) {
          const _JSON2 = JSON;
          setAttributes.setAttributes(callback({}, require(dependencyMap[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(found)));
        }
      }
    }
  }
};
export const buildMethodPath = function buildMethodPath(arg0, arg1) {
  let combined = arg1;
  if (arg0) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "." + arg1;
  }
  return combined;
};
export const extractRequestParameters = function extractRequestParameters(first) {
  const model = first.model;
  let str = "unknown";
  if (null != model) {
    str = model;
  }
  const tmpResult = closure_2({}, require(dependencyMap[1]).GEN_AI_REQUEST_MODEL_ATTRIBUTE, str);
  if ("temperature" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
  }
  if ("top_p" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
  }
  if ("frequency_penalty" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
  }
  if ("presence_penalty" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = first.presence_penalty;
  }
  if ("stream" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
  }
  if ("encoding_format" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = first.encoding_format;
  }
  if ("dimensions" in first) {
    tmpResult[require(dependencyMap[1]).GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = first.dimensions;
  }
  if ("conversation" in first) {
    if ("string" === typeof first.conversation) {
      let previous_response_id = first.conversation;
    }
    if (previous_response_id) {
      tmpResult[require(dependencyMap[1]).GEN_AI_CONVERSATION_ID_ATTRIBUTE] = previous_response_id;
    }
    return tmpResult;
  }
  if ("previous_response_id" in first) {
    if ("string" === typeof first.previous_response_id) {
      previous_response_id = first.previous_response_id;
    }
  }
};
export { getOperationName };
export const getSpanOperation = function getSpanOperation(first) {
  return "gen_ai." + getOperationName(first);
};
export const isChatCompletionChunk = function isChatCompletionChunk(value) {
  let tmp = null !== value;
  if (tmp) {
    tmp = "object" === typeof value;
  }
  if (tmp) {
    tmp = "object" in value;
  }
  if (tmp) {
    tmp = "chat.completion.chunk" === value.object;
  }
  return tmp;
};
export const isChatCompletionResponse = function isChatCompletionResponse(object) {
  let tmp = null !== object;
  if (tmp) {
    tmp = "object" === typeof object;
  }
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "chat.completion" === object.object;
  }
  return tmp;
};
export const isConversationResponse = function isConversationResponse(object) {
  let tmp = null !== object;
  if (tmp) {
    tmp = "object" === typeof object;
  }
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "conversation" === object.object;
  }
  return tmp;
};
export const isEmbeddingsResponse = function isEmbeddingsResponse(object) {
  if (null !== object) {
    if ("object" === typeof object) {
      if ("object" in object) {
        let hasItem = "list" === object.object;
        if (hasItem) {
          hasItem = "string" === typeof object.model;
        }
        if (hasItem) {
          const formatted = object.model.toLowerCase();
          hasItem = formatted.includes("embedding");
          const str4 = object.model;
        }
        return hasItem;
      }
    }
  }
  return false;
};
export const isResponsesApiResponse = function isResponsesApiResponse(object) {
  let tmp = null !== object;
  if (tmp) {
    tmp = "object" === typeof object;
  }
  if (tmp) {
    tmp = "object" in object;
  }
  if (tmp) {
    tmp = "response" === object.object;
  }
  return tmp;
};
export const isResponsesApiStreamEvent = function isResponsesApiStreamEvent(type) {
  let startsWithResult = null !== type;
  if (startsWithResult) {
    startsWithResult = "object" === typeof type;
  }
  if (startsWithResult) {
    startsWithResult = "type" in type;
  }
  if (startsWithResult) {
    startsWithResult = "string" === typeof type.type;
  }
  if (startsWithResult) {
    type = type.type;
    startsWithResult = type.startsWith("response.");
  }
  return startsWithResult;
};
export { setCommonResponseAttributes };
export { setTokenUsageAttributes };
export const shouldInstrument = function shouldInstrument(arg0) {
  const INSTRUMENTED_METHODS = require(dependencyMap[2]).INSTRUMENTED_METHODS;
  return INSTRUMENTED_METHODS.includes(arg0);
};
