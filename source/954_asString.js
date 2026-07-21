// Module ID: 954
// Function ID: 10345
// Name: asString
// Dependencies: []
// Exports: extractChatModelRequestAttributes, extractLLMRequestAttributes, extractLlmResponseAttributes, getInvocationParams

// Module 954 (asString)
function asString(arg0) {
  if ("string" === typeof arg0) {
    return arg0;
  } else {
    const _JSON = JSON;
    return JSON.stringify(tmp);
  }
}
function normalizeMessageRole(str) {
  let formatted = str.toLowerCase();
  const tmp2 = require(dependencyMap[1]).ROLE_MAP[formatted];
  if (null != tmp2) {
    formatted = tmp2;
  }
  return formatted;
}
function normalizeRoleNameFromCtor(arr) {
  let str = "system";
  if (!arr.includes("System")) {
    let str3 = "user";
    let str4 = "user";
    if (!arr.includes("Human")) {
      let str7 = "assistant";
      if (!arr.includes("AI")) {
        str7 = "assistant";
        if (!arr.includes("Assistant")) {
          let str10 = "function";
          if (!arr.includes("Function")) {
            if (arr.includes("Tool")) {
              str3 = "tool";
            }
            str10 = str3;
          }
          str7 = str10;
        }
      }
      str4 = str7;
    }
    str = str4;
  }
  return str;
}
function normalizeLangChainMessages(substr) {
  return substr.map((_getType) => {
    _getType = _getType._getType;
    if ("function" === typeof _getType) {
      let obj = { role: callback2(_getType.call(_getType)), content: callback(_getType.content) };
      return obj;
    } else {
      const constructor = _getType.constructor;
      let name;
      if (null != constructor) {
        name = constructor.name;
      }
      if (name) {
        obj = { role: callback2(callback3(name)), content: callback(_getType.content) };
        return obj;
      } else if (_getType.type) {
        const obj1 = {};
        const _String2 = String;
        obj1.role = callback2(String(_getType.type).toLowerCase());
        obj1.content = callback(_getType.content);
        return obj1;
      } else if (_getType.role) {
        const obj2 = {};
        const _String = String;
        obj2.role = callback2(String(_getType.role));
        obj2.content = callback(_getType.content);
        return obj2;
      } else {
        if (1 === _getType.lc) {
          if (_getType.kwargs) {
            const id = _getType.id;
            const _Array = Array;
            let str3 = "";
            if (Array.isArray(id)) {
              str3 = "";
              if (id.length > 0) {
                str3 = id[id.length - 1];
              }
            }
            const obj3 = {};
            let str4 = "user";
            if ("string" === typeof str3) {
              str4 = callback3(str3);
            }
            obj3.role = callback2(str4);
            const kwargs = _getType.kwargs;
            let content;
            if (null != kwargs) {
              content = kwargs.content;
            }
            obj3.content = callback(content);
            return obj3;
          }
        }
        obj = { role: "user", content: callback(_getType.content) };
        return obj;
      }
    }
  });
}
function baseRequestAttributes(arg0, arg1, arg2, kwargs, temperature, ls_temperature) {
  let str = "langchain";
  if (null != arg0) {
    str = arg0;
  }
  let tmpResult = tmp({}, require(dependencyMap[2]).GEN_AI_SYSTEM_ATTRIBUTE, asString(str));
  tmpResult = tmp(tmpResult, require(dependencyMap[2]).GEN_AI_OPERATION_NAME_ATTRIBUTE, arg2);
  const obj = {};
  const tmp2 = asString;
  const tmpResult1 = closure_2(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE, asString(arg1));
  if ("kwargs" in kwargs) {
    kwargs = kwargs.kwargs;
  }
  temperature = undefined;
  if (null != temperature) {
    temperature = temperature.temperature;
  }
  if (null == temperature) {
    ls_temperature = undefined;
    if (null != ls_temperature) {
      ls_temperature = ls_temperature.ls_temperature;
    }
    temperature = ls_temperature;
  }
  if (null == temperature) {
    let temperature1;
    if (null != kwargs) {
      temperature1 = kwargs.temperature;
    }
    temperature = temperature1;
  }
  setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE, temperature);
  let max_tokens;
  if (null != temperature) {
    max_tokens = temperature.max_tokens;
  }
  if (null == max_tokens) {
    let ls_max_tokens;
    if (null != ls_temperature) {
      ls_max_tokens = ls_temperature.ls_max_tokens;
    }
    max_tokens = ls_max_tokens;
  }
  if (null == max_tokens) {
    let max_tokens1;
    if (null != kwargs) {
      max_tokens1 = kwargs.max_tokens;
    }
    max_tokens = max_tokens1;
  }
  setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE, max_tokens);
  let top_p;
  if (null != temperature) {
    top_p = temperature.top_p;
  }
  if (null == top_p) {
    let top_p1;
    if (null != kwargs) {
      top_p1 = kwargs.top_p;
    }
    top_p = top_p1;
  }
  setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE, top_p);
  let frequency_penalty;
  if (null != temperature) {
    frequency_penalty = temperature.frequency_penalty;
  }
  setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE, frequency_penalty);
  let presence_penalty;
  if (null != temperature) {
    presence_penalty = temperature.presence_penalty;
  }
  setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE, presence_penalty);
  let tmp22 = temperature;
  if (temperature) {
    tmp22 = "stream" in temperature;
  }
  if (tmp22) {
    const _Boolean = Boolean;
    setIfDefined(obj, require(dependencyMap[2]).GEN_AI_REQUEST_STREAM_ATTRIBUTE, Boolean(temperature.stream));
  }
  return Object.assign(closure_2(closure_2(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE, asString(arg1)), require(dependencyMap[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, require(dependencyMap[1]).LANGCHAIN_ORIGIN), obj);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function setIfDefined(tmpResult, GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, length) {
  if (null != length) {
    tmpResult[GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = length;
  }
}
function setNumberIfDefined(arg0, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, cache_creation_input_tokens) {
  const NumberResult = Number(cache_creation_input_tokens);
  if (!Number.isNaN(NumberResult)) {
    arg0[GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = NumberResult;
  }
}

export const extractChatModelRequestAttributes = function extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider) {
  ls_provider = undefined;
  if (null != ls_provider) {
    ls_provider = ls_provider.ls_provider;
  }
  if (null == ls_provider) {
    id = id.id;
    let tmp3;
    if (null != id) {
      tmp3 = id[2];
    }
    ls_provider = tmp3;
  }
  let model;
  if (null != invocationParams) {
    model = invocationParams.model;
  }
  if (null == model) {
    let ls_model_name;
    if (null != ls_provider) {
      ls_model_name = ls_provider.ls_model_name;
    }
    model = ls_model_name;
  }
  let str = "unknown";
  if (null != model) {
    str = model;
  }
  const tmpResult = baseRequestAttributes(ls_provider, str, "chat", id, invocationParams, ls_provider);
  if (closure_0) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        arr = normalizeLangChainMessages(arr.flat());
        setIfDefined(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, arr.length);
        const result = require(dependencyMap[4]).truncateGenAiMessages(arr);
        setIfDefined(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, asString(result));
        const obj = require(dependencyMap[4]);
      }
    }
  }
  return tmpResult;
};
export const extractLLMRequestAttributes = function extractLLMRequestAttributes(arg0, arr, closure_0, invocationParams, ls_provider) {
  ls_provider = undefined;
  if (null != ls_provider) {
    ls_provider = ls_provider.ls_provider;
  }
  let model;
  if (null != invocationParams) {
    model = invocationParams.model;
  }
  if (null == model) {
    let ls_model_name;
    if (null != ls_provider) {
      ls_model_name = ls_provider.ls_model_name;
    }
    model = ls_model_name;
  }
  let str = "unknown";
  if (null != model) {
    str = model;
  }
  const tmpResult = baseRequestAttributes(ls_provider, str, "pipeline", arg0, invocationParams, ls_provider);
  if (closure_0) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        setIfDefined(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, arr.length);
        const mapped = arr.map((content) => ({ role: "user", content }));
        setIfDefined(tmpResult, require(dependencyMap[2]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, asString(mapped));
      }
    }
  }
  return tmpResult;
};
export const extractLlmResponseAttributes = function extractLlmResponseAttributes(generations, closure_1) {
  let generations4;
  let llmOutput2;
  let tokenUsage;
  let usage;
  if (generations) {
    const obj = {};
    const _Array = Array;
    if (Array.isArray(generations.generations)) {
      generations = generations.generations;
      const mapped = generations.flat().map((generationInfo) => {
        generationInfo = generationInfo.generationInfo;
        if (null != generationInfo) {
          if (generationInfo.finish_reason) {
            let finish_reason = generationInfo.generationInfo.finish_reason;
          }
          return finish_reason;
        }
        const generation_info = generationInfo.generation_info;
        finish_reason = null;
        if (null != generation_info) {
          finish_reason = null;
          if (generation_info.finish_reason) {
            finish_reason = generationInfo.generation_info.finish_reason;
          }
        }
      });
      const found = mapped.filter((arg0) => "string" === typeof arg0);
      if (found.length > 0) {
        setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, asString(found));
      }
      const generations2 = generations.generations;
      const items = [];
      const flatResult1 = generations2.flat();
      const iter = flatResult1[Symbol.iterator]();
      while (iter !== undefined) {
        let message = iter.next().message;
        let content;
        if (null != message) {
          let tmp13 = message;
          content = tmp11.content;
        }
        let _Array2 = Array;
        let tmp14 = content;
        if (Array.isArray(content)) {
          let tmp15 = content;
          let tmp16 = tmp14;
          for (const item10056 of content) {
            if ("tool_use" === item10056.type) {
              let tmp18 = items;
              let tmp19 = item10056;
              let arr = items.push(tmp17);
            }
          }
        }
        // continue
      }
      if (items.length > 0) {
        setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, asString(items));
      }
      if (closure_1) {
        const generations3 = generations.generations;
        const mapped1 = generations3.flat().map((text) => {
          text = text.text;
          if (null == text) {
            const message = text.message;
            let content;
            if (null != message) {
              content = message.content;
            }
            text = content;
          }
          return text;
        });
        const found1 = mapped1.filter((arg0) => "string" === typeof arg0);
        if (found1.length > 0) {
          setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, asString(found1));
        }
        const flatResult2 = generations3.flat();
      }
      const flatResult = generations.flat();
    }
    const llmOutput = generations.llmOutput;
    if (llmOutput) {
      ({ tokenUsage, usage } = llmOutput);
      if (tokenUsage) {
        setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, tokenUsage.promptTokens);
        setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, tokenUsage.completionTokens);
        setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, tokenUsage.totalTokens);
      } else if (usage) {
        setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, usage.input_tokens);
        setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, usage.output_tokens);
        const _Number = Number;
        const NumberResult = Number(usage.input_tokens);
        const _Number2 = Number;
        const NumberResult1 = Number(usage.output_tokens);
        const _Number3 = Number;
        let num7 = 0;
        if (!Number.isNaN(NumberResult)) {
          num7 = NumberResult;
        }
        const _Number4 = Number;
        let num8 = 0;
        if (!Number.isNaN(NumberResult1)) {
          num8 = NumberResult1;
        }
        const sum = num7 + num8;
        if (sum > 0) {
          setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, sum);
        }
        if (undefined !== usage.cache_creation_input_tokens) {
          setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE, usage.cache_creation_input_tokens);
        }
        if (undefined !== usage.cache_read_input_tokens) {
          setNumberIfDefined(obj, require(dependencyMap[2]).GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE, usage.cache_read_input_tokens);
        }
      }
    }
    ({ llmOutput: llmOutput2, generations: generations4 } = generations);
    let first1;
    if (null != generations4) {
      const first = generations4[0];
      if (null != first) {
        first1 = first[0];
      }
    }
    if (null != first1) {
      const message2 = first1.message;
    }
    let model_name;
    if (null != llmOutput2) {
      model_name = llmOutput2.model_name;
    }
    if (null == model_name) {
      let model;
      if (null != llmOutput2) {
        model = llmOutput2.model;
      }
      model_name = model;
    }
    if (null == model_name) {
      let model_name1;
      if (null != message2) {
        const response_metadata = message2.response_metadata;
        if (null != response_metadata) {
          model_name1 = response_metadata.model_name;
        }
      }
      model_name = model_name1;
    }
    if (model_name) {
      setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, model_name);
    }
    let id;
    if (null != llmOutput2) {
      id = llmOutput2.id;
    }
    if (null == id) {
      let id1;
      if (null != message2) {
        id1 = message2.id;
      }
      id = id1;
    }
    if (id) {
      setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_ID_ATTRIBUTE, id);
    }
    let stop_reason;
    if (null != llmOutput2) {
      stop_reason = llmOutput2.stop_reason;
    }
    if (null == stop_reason) {
      let finish_reason;
      if (null != message2) {
        const response_metadata2 = message2.response_metadata;
        if (null != response_metadata2) {
          finish_reason = response_metadata2.finish_reason;
        }
      }
      stop_reason = finish_reason;
    }
    if (stop_reason) {
      setIfDefined(obj, require(dependencyMap[2]).GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE, asString(stop_reason));
    }
    return obj;
  }
};
export const getInvocationParams = function getInvocationParams(invocation_params) {
  if (invocation_params) {
    const _Array = Array;
    if (!Array.isArray(invocation_params)) {
      return invocation_params.invocation_params;
    }
  }
};
export { normalizeLangChainMessages };
