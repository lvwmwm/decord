// Module ID: 855
// Function ID: 856
// Name: extractChatModelRequestAttributes
// Dependencies: [856, 836, 715, 837, 838]
// Exports: extractChatModelRequestAttributes, extractLLMRequestAttributes, extractLlmResponseAttributes, getInvocationParams, normalizeLangChainMessages

// Module 855 (extractChatModelRequestAttributes)
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 715 */;
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE" /* 836 */;
import extractSystemInstructions from "extractSystemInstructions" /* 837 */;
import DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT from "DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT" /* 838 */;
import LANGCHAIN_INTEGRATION_NAME from "LANGCHAIN_INTEGRATION_NAME" /* 856 */;

let generationInfo, text;

const f85287 = (_getType) => {
  let content;
  let tmp30;
  _getType = _getType._getType;
  if (typeof _getType === "function") {
    const str30 = _getType.call(_getType);
    const formatted = str30.toLowerCase();
    let tmp35 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted];
    if (tmp35 == null) {
      tmp35 = formatted;
    }
    const obj2 = { role: tmp35, content: asString(_getType.content) };
    return obj2;
  } else {
    if (1 === _getType.lc) {
      if (_getType.kwargs) {
        const id = _getType.id;
        const _Array = Array;
        let str18 = "";
        if (Array.isArray(id)) {
          str18 = "";
          if (id.length > 0) {
            str18 = id[id.length - 1];
          }
        }
        let str19 = "user";
        let str20 = "user";
        if (typeof str18 === "string") {
          let str29 = "system";
          if (!str18.includes("System")) {
            let tmp24 = str19;
            if (!str18.includes("Human")) {
              let str24 = "assistant";
              if (!str18.includes("AI")) {
                str24 = "assistant";
                if (!str18.includes("Assistant")) {
                  let str27 = "function";
                  if (!str18.includes("Function")) {
                    if (str18.includes("Tool")) {
                      str19 = "tool";
                    }
                    str27 = str19;
                  }
                  str24 = str27;
                }
              }
              tmp24 = str24;
            }
            str29 = tmp24;
          }
          str20 = str29;
        }
        const formatted1 = str20.toLowerCase();
        let tmp28 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted1];
        if (tmp28 == null) {
          tmp28 = formatted1;
        }
        const kwargs = _getType.kwargs;
        const obj3 = { role: tmp28, content: tmp30(content) };
        content = undefined;
        tmp30 = asString;
        if (kwargs != null) {
          content = kwargs.content;
        }
        return obj3;
      }
    }
    if (_getType.type) {
      const _String2 = String;
      const str15 = String(_getType.type);
      const str16 = str15.toLowerCase();
      const formatted2 = str16.toLowerCase();
      let tmp20 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted2];
      if (tmp20 == null) {
        tmp20 = formatted2;
      }
      const obj4 = { role: tmp20, content: asString(_getType.content) };
      return obj4;
    } else if (_getType.role) {
      const _String = String;
      const str14 = String(_getType.role);
      const formatted3 = str14.toLowerCase();
      let tmp13 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted3];
      if (tmp13 == null) {
        tmp13 = formatted3;
      }
      const obj5 = { role: tmp13, content: asString(_getType.content) };
      return obj5;
    } else {
      const constructor = _getType.constructor;
      let name;
      if (constructor != null) {
        name = constructor.name;
      }
      if (name) {
        let obj;
        if ("Object" !== name) {
          let str3 = "system";
          if (!name.includes("System")) {
            let str5 = "user";
            let str6 = "user";
            if (!name.includes("Human")) {
              let str9 = "assistant";
              if (!name.includes("AI")) {
                str9 = "assistant";
                if (!name.includes("Assistant")) {
                  let str12 = "function";
                  if (!name.includes("Function")) {
                    if (name.includes("Tool")) {
                      str5 = "tool";
                    }
                    str12 = str5;
                  }
                  str9 = str12;
                }
              }
              str6 = str9;
            }
            str3 = str6;
          }
          const formatted4 = str3.toLowerCase();
          let tmp7 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted4];
          if (tmp7 == null) {
            tmp7 = formatted4;
          }
          obj = { role: tmp7, content: asString(_getType.content) };
          const obj6 = { role: tmp7, content: asString(_getType.content) };
        }
        return obj;
      }
      obj = { role: "user", content: asString(_getType.content) };
    }
  }
};
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    try {
      const _JSON = JSON;
      return JSON.stringify(str);
    } catch (err) {
      const _String = String;
      return String(str);
    }
  }
}
function baseRequestAttributes(arg0, arg1, kwargs, temperature, ls_temperature) {
  let str = arg0;
  const GEN_AI_SYSTEM_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_ATTRIBUTE;
  if (arg0 == null) {
    str = "langchain";
  }
  const obj = {};
  obj[GEN_AI_SYSTEM_ATTRIBUTE] = asString(str);
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE] = "chat";
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = asString(arg1);
  obj[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN;
  if ("kwargs" in kwargs) {
    kwargs = kwargs.kwargs;
  }
  temperature = undefined;
  if (temperature != null) {
    temperature = temperature.temperature;
  }
  if (temperature == null) {
    ls_temperature = undefined;
    if (ls_temperature != null) {
      ls_temperature = ls_temperature.ls_temperature;
    }
    temperature = ls_temperature;
  }
  if (temperature == null) {
    let temperature1;
    if (kwargs != null) {
      temperature1 = kwargs.temperature;
    }
    temperature = temperature1;
  }
  if (typeof setNumberIfDefined === "function") {
    const obj2 = {};
    const _Number = Number;
    const NumberResult = Number(temperature);
    const _Number2 = Number;
    if (!Number.isNaN(NumberResult)) {
      obj2[tmp8] = NumberResult;
    }
    let max_tokens;
    if (temperature != null) {
      max_tokens = temperature.max_tokens;
    }
    if (max_tokens == null) {
      let ls_max_tokens;
      if (ls_temperature != null) {
        ls_max_tokens = ls_temperature.ls_max_tokens;
      }
      max_tokens = ls_max_tokens;
    }
    if (max_tokens == null) {
      let max_tokens1;
      if (kwargs != null) {
        max_tokens1 = kwargs.max_tokens;
      }
      max_tokens = max_tokens1;
    }
    if (typeof setNumberIfDefined === "function") {
      const _Number3 = Number;
      const NumberResult1 = Number(max_tokens);
      const _Number4 = Number;
      if (!Number.isNaN(NumberResult1)) {
        obj2[tmp14] = NumberResult1;
      }
      let top_p;
      if (temperature != null) {
        top_p = temperature.top_p;
      }
      if (top_p == null) {
        let top_p1;
        if (kwargs != null) {
          top_p1 = kwargs.top_p;
        }
        top_p = top_p1;
      }
      if (typeof setNumberIfDefined === "function") {
        let frequency_penalty;
        const _Number5 = Number;
        const NumberResult2 = Number(top_p);
        const _Number6 = Number;
        if (!Number.isNaN(NumberResult2)) {
          obj2[tmp18] = NumberResult2;
        }
        if (temperature != null) {
          frequency_penalty = temperature.frequency_penalty;
        }
        if (typeof setNumberIfDefined === "function") {
          let presence_penalty;
          const _Number7 = Number;
          const NumberResult3 = Number(frequency_penalty);
          const _Number8 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj2[tmp20] = NumberResult3;
          }
          if (temperature != null) {
            presence_penalty = temperature.presence_penalty;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number9 = Number;
            const NumberResult4 = Number(presence_penalty);
            const _Number10 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj2[tmp22] = NumberResult4;
            }
            const tmp24 = temperature && "stream" in temperature;
            if (tmp24) {
              const _Boolean = Boolean;
              const GEN_AI_REQUEST_STREAM_ATTRIBUTE = tmp(836).GEN_AI_REQUEST_STREAM_ATTRIBUTE;
              const BooleanResult = Boolean(temperature.stream);
              if (typeof setIfDefined === "function") {
                if (null != BooleanResult) {
                  obj2[GEN_AI_REQUEST_STREAM_ATTRIBUTE] = BooleanResult;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const merged = Object.assign(obj2);
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function setIfDefined(arg0, arg1, arg2) {
  if (null != arg2) {
    arg0[arg1] = arg2;
  }
}
function setNumberIfDefined(arg0, arg1, arg2) {

}

export const extractChatModelRequestAttributes = function extractChatModelRequestAttributes(id, arr, arg2, invocationParams, ls_provider) {
  let filteredMessages;
  let systemInstructions;
  ls_provider = undefined;
  const tmp = baseRequestAttributes;
  if (ls_provider != null) {
    ls_provider = ls_provider.ls_provider;
  }
  if (ls_provider == null) {
    id = id.id;
    let tmp3;
    if (id != null) {
      tmp3 = id[2];
    }
    ls_provider = tmp3;
  }
  let str;
  if (invocationParams != null) {
    str = invocationParams.model;
  }
  if (str == null) {
    let ls_model_name;
    if (ls_provider != null) {
      ls_model_name = ls_provider.ls_model_name;
    }
    str = ls_model_name;
  }
  if (str == null) {
    str = "unknown";
  }
  const tmpResult = tmp(ls_provider, str, id, invocationParams, ls_provider);
  if (arg2) {
    let tmp7 = globalThis;
    let _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        const flatResult = arr.flat();
        const mapped = flatResult.map(f85287);
        let obj2 = extractSystemInstructions;
        const result = obj2.extractSystemInstructions(mapped);
        ({ systemInstructions, filteredMessages } = result);
        if (systemInstructions) {
          if (typeof setIfDefined === "function") {
            if (null != systemInstructions) {
              tmpResult[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE] = systemInstructions;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const _Array2 = Array;
        let num2 = 0;
        if (Array.isArray(filteredMessages)) {
          num2 = filteredMessages.length;
        }
        const tmp9 = setIfDefined;
        if (typeof setIfDefined === "function") {
          if (null != num2) {
            tmpResult[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = num2;
          }
          const tmp14Result = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
          const result1 = tmp14Result.truncateGenAiMessages(filteredMessages);
          const GEN_AI_INPUT_MESSAGES_ATTRIBUTE = tmp14(836).GEN_AI_INPUT_MESSAGES_ATTRIBUTE;
          const tmp12 = asString(result1);
          if (typeof tmp9 === "function") {
            if (null != tmp12) {
              tmpResult[GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = tmp12;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str3 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  return tmpResult;
};
export const extractLLMRequestAttributes = function extractLLMRequestAttributes(arg0, arr, arg2, invocationParams, ls_provider) {
  ls_provider = undefined;
  if (ls_provider != null) {
    ls_provider = ls_provider.ls_provider;
  }
  let str;
  const tmp2 = baseRequestAttributes;
  if (invocationParams != null) {
    str = invocationParams.model;
  }
  if (str == null) {
    let ls_model_name;
    if (ls_provider != null) {
      ls_model_name = ls_provider.ls_model_name;
    }
    str = ls_model_name;
  }
  if (str == null) {
    str = "unknown";
  }
  const tmp2Result = tmp2(ls_provider, str, arg0, invocationParams, ls_provider);
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        const tmp10 = setIfDefined;
        const tmp11 = require;
        if (typeof setIfDefined === "function") {
          if (null != arr.length) {
            tmp2Result[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = arr.length;
          }
          const mapped = arr.map((content) => ({ role: "user", content }));
          const GEN_AI_INPUT_MESSAGES_ATTRIBUTE = tmp11(836).GEN_AI_INPUT_MESSAGES_ATTRIBUTE;
          const tmp9 = asString(mapped);
          if (typeof tmp10 === "function") {
            if (null != tmp9) {
              tmp2Result[GEN_AI_INPUT_MESSAGES_ATTRIBUTE] = tmp9;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  return tmp2Result;
};
export const extractLlmResponseAttributes = function extractLlmResponseAttributes(generations, flag2) {
  let generations3;
  let llmOutput2;
  let tokenUsage;
  let usage;
  function addToolCallsAttributes(generations, arg1) {
    const items = [];
    const flatResult = generations.flat();
    const iter = flatResult[Symbol.iterator]();
    while (iter !== undefined) {
      let message = iter.next().message;
      let content;
      if (message != null) {
        content = message.content;
      }
      let _Array = Array;
      if (Array.isArray(content)) {
        for (const item10026 of content) {
          if ("tool_use" === item10026.type) {
            let arr = items.push(tmp6);
          }
          continue;
        }
      }
      continue;
    }
    if (items.length > 0) {
      setIfDefined(arg1, ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, asString(items));
    }
  }
  const tmp = generations;
  if (tmp) {
    let message;
    const obj = {};
    let _Array = Array;
    if (Array.isArray(generations.generations)) {
      generations = generations.generations;
      let flatResult = generations.flat();
      const mapped = flatResult.map((generationInfo) => {
        let finish_reason1;
        generationInfo = generationInfo.generationInfo;
        let finish_reason;
        if (generationInfo != null) {
          finish_reason = generationInfo.finish_reason;
        }
        if (finish_reason) {
          finish_reason1 = generationInfo.generationInfo.finish_reason;
        } else {
          const generation_info = generationInfo.generation_info;
          let finish_reason2;
          if (generation_info != null) {
            finish_reason2 = generation_info.finish_reason;
          }
          finish_reason1 = null;
          if (finish_reason2) {
            finish_reason1 = generationInfo.generation_info.finish_reason;
          }
        }
        return finish_reason1;
      });
      const found = mapped.filter((item) => typeof item === "string");
      if (found.length > 0) {
        let tmp3 = setIfDefined;
        let tmp4 = require;
        let tmp5 = dependencyMap;
        const tmp6 = asString;
        const GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
        let tmp7 = asString(found);
        if (typeof setIfDefined === "function") {
          if (null != tmp7) {
            obj[GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = tmp7;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      addToolCallsAttributes(generations.generations, obj);
      if (flag2) {
        const generations2 = generations.generations;
        const flatResult1 = generations2.flat();
        const mapped1 = flatResult1.map((text) => {
          text = text.text;
          if (text == null) {
            const message = text.message;
            let content;
            if (message != null) {
              content = message.content;
            }
            text = content;
          }
          return text;
        });
        const found1 = mapped1.filter((item) => typeof item === "string");
        if (found1.length > 0) {
          const GEN_AI_RESPONSE_TEXT_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
          const tmp15 = asString(found1);
          if (typeof setIfDefined === "function") {
            if (null != tmp15) {
              obj[GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = tmp15;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    const llmOutput = generations.llmOutput;
    if (llmOutput) {
      ({ tokenUsage, usage } = llmOutput);
      if (tokenUsage) {
        if (typeof setNumberIfDefined === "function") {
          const _Number15 = Number;
          const NumberResult = Number(tmp39);
          const _Number16 = Number;
          if (!Number.isNaN(NumberResult)) {
            obj[tmp38] = NumberResult;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number17 = Number;
            const NumberResult1 = Number(tmp42);
            const _Number18 = Number;
            if (!Number.isNaN(NumberResult1)) {
              obj[tmp41] = NumberResult1;
            }
            if (typeof setNumberIfDefined === "function") {
              const _Number19 = Number;
              const NumberResult2 = Number(tmp45);
              const _Number20 = Number;
              if (!Number.isNaN(NumberResult2)) {
                obj[tmp44] = NumberResult2;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (usage) {
        if (typeof setNumberIfDefined === "function") {
          const _Number = Number;
          const NumberResult3 = Number(tmp21);
          const _Number2 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj[tmp20] = NumberResult3;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number3 = Number;
            const NumberResult4 = Number(tmp24);
            const _Number4 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj[tmp23] = NumberResult4;
            }
            const _Number5 = Number;
            const NumberResult5 = Number(usage.input_tokens);
            const _Number6 = Number;
            const NumberResult6 = Number(usage.output_tokens);
            const _Number7 = Number;
            let num3 = 0;
            if (!Number.isNaN(NumberResult5)) {
              num3 = NumberResult5;
            }
            const _Number8 = Number;
            let num4 = 0;
            if (!Number.isNaN(NumberResult6)) {
              num4 = NumberResult6;
            }
            const sum = num3 + num4;
            if (sum > 0) {
              if (typeof setNumberIfDefined === "function") {
                const _Number9 = Number;
                const NumberResult7 = Number(sum);
                const _Number10 = Number;
                if (!Number.isNaN(NumberResult7)) {
                  obj[tmp29] = NumberResult7;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_creation_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number11 = Number;
                const NumberResult8 = Number(tmp32);
                const _Number12 = Number;
                if (!Number.isNaN(NumberResult8)) {
                  obj[tmp31] = NumberResult8;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_read_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number13 = Number;
                const NumberResult9 = Number(tmp69);
                const _Number14 = Number;
                if (!Number.isNaN(NumberResult9)) {
                  obj[tmp68] = NumberResult9;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    ({ llmOutput: llmOutput2, generations: generations3 } = generations);
    let first1;
    if (generations3 != null) {
      const first = generations3[0];
      if (first != null) {
        first1 = first[0];
      }
    }
    if (first1 != null) {
      message = first1.message;
    }
    let model_name;
    if (llmOutput2 != null) {
      model_name = llmOutput2.model_name;
    }
    if (model_name == null) {
      let model;
      if (llmOutput2 != null) {
        model = llmOutput2.model;
      }
      model_name = model;
    }
    if (model_name == null) {
      let model_name1;
      if (message != null) {
        const response_metadata = message.response_metadata;
        if (response_metadata != null) {
          model_name1 = response_metadata.model_name;
        }
      }
      model_name = model_name1;
    }
    if (model_name) {
      if (typeof setIfDefined === "function") {
        if (null != model_name) {
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = model_name;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let id;
    if (llmOutput2 != null) {
      id = llmOutput2.id;
    }
    if (id == null) {
      let id1;
      if (message != null) {
        id1 = message.id;
      }
      id = id1;
    }
    if (id) {
      if (typeof setIfDefined === "function") {
        if (null != id) {
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_ID_ATTRIBUTE] = id;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let stop_reason;
    if (llmOutput2 != null) {
      stop_reason = llmOutput2.stop_reason;
    }
    if (stop_reason == null) {
      let finish_reason;
      if (message != null) {
        const response_metadata2 = message.response_metadata;
        if (response_metadata2 != null) {
          finish_reason = response_metadata2.finish_reason;
        }
      }
      stop_reason = finish_reason;
    }
    if (stop_reason) {
      const GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE;
      const tmp67 = asString(stop_reason);
      if (typeof setIfDefined === "function") {
        if (null != tmp67) {
          obj[GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE] = tmp67;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj;
  }
};
export const getInvocationParams = function getInvocationParams(invocation_params) {
  const tmp = invocation_params;
  if (tmp) {
    const _Array = Array;
    if (!Array.isArray(invocation_params)) {
      return invocation_params.invocation_params;
    }
  }
};
export const normalizeLangChainMessages = function normalizeLangChainMessages(items) {
  return items.map(f85287);
};
