// Module ID: 949
// Function ID: 10283
// Name: extractModel
// Dependencies: [5, 65, 77, 934, 950, 936, 816, 951, 937, 842, 952, 817, 845, 843, 825]
// Exports: instrumentGoogleGenAIClient

// Module 949 (extractModel)
import asyncGeneratorStep from "getFinalOperationName";
import _toConsumableArray from "_toConsumableArray";
import _defineProperty from "_defineProperty";

function extractModel(model, model2) {
  if ("model" in model) {
    if ("string" === typeof model.model) {
      return model.model;
    }
  }
  if (model2) {
    if ("object" === typeof model2) {
      if ("model" in model2) {
        if ("string" === typeof model2.model) {
          return model2.model;
        }
      }
      if ("modelVersion" in model2) {
        if ("string" === typeof model2.modelVersion) {
          return model2.modelVersion;
        }
      }
    }
  }
  return "unknown";
}
function extractRequestAttributes(closure_1, config) {
  let obj = require(936) /* getFinalOperationName */;
  const tmp = _defineProperty({}, require(934).GEN_AI_SYSTEM_ATTRIBUTE, require(950).GOOGLE_GENAI_SYSTEM_NAME);
  const tmp3 = _defineProperty(_defineProperty(_defineProperty({}, require(934).GEN_AI_SYSTEM_ATTRIBUTE, require(950).GOOGLE_GENAI_SYSTEM_NAME), require(934).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getFinalOperationName(closure_1)), require(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.google_genai");
  const GEN_AI_REQUEST_MODEL_ATTRIBUTE = require(934).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
  if (config) {
    tmp3[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = tmp4(config, arg2);
    if ("config" in config) {
      if ("object" === typeof config.config) {
        if (config.config) {
          config = config.config;
          obj = {};
          let tmp6 = "temperature" in config;
          if (tmp6) {
            tmp6 = "number" === typeof config.temperature;
          }
          if (tmp6) {
            obj[require(934).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
          }
          let tmp9 = "topP" in config;
          if (tmp9) {
            tmp9 = "number" === typeof config.topP;
          }
          if (tmp9) {
            obj[require(934).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
          }
          let tmp12 = "topK" in config;
          if (tmp12) {
            tmp12 = "number" === typeof config.topK;
          }
          if (tmp12) {
            obj[require(934).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
          }
          let tmp15 = "maxOutputTokens" in config;
          if (tmp15) {
            tmp15 = "number" === typeof config.maxOutputTokens;
          }
          if (tmp15) {
            obj[require(934).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
          }
          let tmp18 = "frequencyPenalty" in config;
          if (tmp18) {
            tmp18 = "number" === typeof config.frequencyPenalty;
          }
          if (tmp18) {
            obj[require(934).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
          }
          let tmp21 = "presencePenalty" in config;
          if (tmp21) {
            tmp21 = "number" === typeof config.presencePenalty;
          }
          if (tmp21) {
            obj[require(934).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
          }
          const merged = Object.assign(tmp3, obj);
          if ("tools" in config) {
            const _Array = Array;
            if (Array.isArray(config.tools)) {
              const tools = config.tools;
              const _JSON = JSON;
              tmp3[require(934).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
              const flatMapResult = tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations);
            }
          }
        }
      }
    }
  } else {
    tmp3[GEN_AI_REQUEST_MODEL_ATTRIBUTE] = tmp4({}, arg2);
  }
  return tmp3;
}
function addPrivateRequestAttributes(setAttributes, config) {
  const items = [];
  let systemInstruction = "config" in config && config.config;
  if (systemInstruction) {
    systemInstruction = "object" === typeof config.config;
  }
  if (systemInstruction) {
    systemInstruction = "systemInstruction" in config.config;
  }
  if (systemInstruction) {
    systemInstruction = config.config.systemInstruction;
  }
  if (systemInstruction) {
    const push = items.push;
    push.apply(items, _toConsumableArray(require(951) /* contentUnionToMessages */.contentUnionToMessages(config.config.systemInstruction, "system")));
    const obj = require(951) /* contentUnionToMessages */;
  }
  if ("history" in config) {
    const push2 = items.push;
    push2.apply(items, _toConsumableArray(require(951) /* contentUnionToMessages */.contentUnionToMessages(config.history, "user")));
    const obj2 = require(951) /* contentUnionToMessages */;
  }
  if ("contents" in config) {
    const push3 = items.push;
    push3.apply(items, _toConsumableArray(require(951) /* contentUnionToMessages */.contentUnionToMessages(config.contents, "user")));
    const obj3 = require(951) /* contentUnionToMessages */;
  }
  if ("message" in config) {
    const push4 = items.push;
    push4.apply(items, _toConsumableArray(require(951) /* contentUnionToMessages */.contentUnionToMessages(config.message, "user")));
    const obj4 = require(951) /* contentUnionToMessages */;
  }
  if (tmp17) {
    const _JSON = JSON;
    const tmp21 = _defineProperty({}, require(934).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, items.length);
    setAttributes.setAttributes(_defineProperty(tmp21, require(934).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, JSON.stringify(require(937) /* truncateTextByBytes */.truncateGenAiMessages(items))));
    const obj5 = require(937) /* truncateTextByBytes */;
  }
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  const _require = arg1;
  let dependencyMap = arg2;
  let closure_2 = arg3;
  let closure_3 = arg1 === _require(950).CHATS_CREATE_METHOD;
  const proxy = new Proxy(arg0, {
    apply(closure_1) {
      let callback = closure_1;
      const dependencyMap = arg2;
      const first = arg2[0];
      const tmp2 = outer1_6(callback, first, dependencyMap);
      const tmp3 = tmp2[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      let str = "unknown";
      if (null != tmp3) {
        str = tmp3;
      }
      let obj = callback(936);
      const finalOperationName = obj.getFinalOperationName(callback);
      const obj2 = callback(951);
      const obj3 = callback(842);
      if (isStreamingMethodResult) {
        obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.name = "" + finalOperationName + " " + str + " stream-response";
        obj.op = callback(936).getSpanOperation(callback);
        obj.attributes = tmp2;
        let startSpanManualResult = obj3.startSpanManual(obj, (() => {
          let closure_0 = callback2(async (arg0) => {
            const recordInputs = first.recordInputs;
            let tmp = recordInputs;
            if (recordInputs) {
              tmp = outer2_2;
            }
            if (tmp) {
              outer4_7(arg0, outer2_2);
            }
            const tmp6 = yield closure_0.apply(closure_1, outer2_1);
            return callback(table[10]).instrumentStream(tmp6, arg0, Boolean(first.recordOutputs));
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
        const tmp6Result = callback(936);
      } else {
        obj = {};
        const _HermesInternal = HermesInternal;
        if (closure_3) {
          let combined = concat(finalOperationName, " ", str, " create");
        } else {
          combined = concat(finalOperationName, " ", str);
        }
        obj.name = combined;
        obj.op = callback(936).getSpanOperation(callback);
        obj.attributes = tmp2;
        startSpanManualResult = obj3.startSpan(obj, (arg0) => {
          const callback = arg0;
          if (tmp) {
            outer2_7(arg0, first);
          }
          return callback(table[13]).handleCallbackErrors(() => callback.apply(closure_1, outer1_1), (arg0) => {
            let obj = callback(table[12]);
            obj = { handled: false, type: "auto.ai.google_genai" };
            obj = { function: callback };
            obj.data = obj;
            obj.captureException(arg0, { mechanism: obj });
          }, () => {

          }, (modelVersion) => {
            if (!outer2_3) {
              (function addResponseAttributes(closure_0, modelVersion, recordOutputs) {
                if (modelVersion) {
                  if ("object" === typeof modelVersion) {
                    if (modelVersion.modelVersion) {
                      const attr = closure_0.setAttribute(callback(934).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, modelVersion.modelVersion);
                    }
                    if (modelVersion.usageMetadata) {
                      if ("object" === typeof modelVersion.usageMetadata) {
                        const usageMetadata = modelVersion.usageMetadata;
                        if ("number" === typeof usageMetadata.promptTokenCount) {
                          closure_0.setAttributes(outer4_4({}, callback(934).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, usageMetadata.promptTokenCount));
                        }
                        if ("number" === typeof usageMetadata.candidatesTokenCount) {
                          closure_0.setAttributes(outer4_4({}, callback(934).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, usageMetadata.candidatesTokenCount));
                        }
                        if ("number" === typeof usageMetadata.totalTokenCount) {
                          closure_0.setAttributes(outer4_4({}, callback(934).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, usageMetadata.totalTokenCount));
                        }
                      }
                    }
                    if (recordOutputs) {
                      let _Array = Array;
                      if (Array.isArray(modelVersion.candidates)) {
                        if (modelVersion.candidates.length > 0) {
                          const candidates = modelVersion.candidates;
                          let mapped = candidates.map(() => { ... });
                          let found = mapped.filter(() => { ... });
                          if (found.length > 0) {
                            closure_0.setAttributes(outer4_4({}, callback(934).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, found.join("")));
                          }
                        }
                      }
                    }
                    if (recordOutputs) {
                      if (modelVersion.functionCalls) {
                        const functionCalls = modelVersion.functionCalls;
                        const _Array2 = Array;
                        let isArray = Array.isArray(functionCalls);
                        if (isArray) {
                          isArray = functionCalls.length > 0;
                        }
                        if (isArray) {
                          const _JSON = JSON;
                          closure_0.setAttributes(outer4_4({}, callback(934).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(functionCalls)));
                        }
                      }
                    }
                  }
                }
              })(closure_0, modelVersion, first.recordOutputs);
            }
          });
        });
        const obj5 = callback(936);
      }
      return startSpanManualResult;
    }
  });
  return proxy;
}
function createDeepProxy(arg0) {
  let str = "";
  if (arguments.length > 1) {
    str = "";
    if (undefined !== arguments[1]) {
      str = arguments[1];
    }
  }
  let tmp;
  if (arguments.length > 2) {
    tmp = arguments[2];
  }
  const dependencyMap = tmp;
  const proxy = new Proxy(arg0, {
    get(iter) {
      const value = Reflect.get(iter, arg1, arg2);
      const methodPath = str(tmp[5]).buildMethodPath(closure_0, String(arg1));
      if ("function" === typeof value) {
        if (obj3.shouldInstrument(methodPath)) {
          if (methodPath === str(tmp[4]).CHATS_CREATE_METHOD) {
            closure_0 = outer1_8(value, methodPath, iter, tmp);
            return function instrumentedAndProxiedCreate() {
              const applyResult = callback(...arguments);
              let tmp2 = applyResult;
              if (applyResult) {
                tmp2 = applyResult;
                if ("object" === typeof applyResult) {
                  tmp2 = outer2_9(applyResult, str(table[4]).CHAT_PATH, outer1_1);
                }
              }
              return tmp2;
            };
          } else {
            return outer1_8(value, methodPath, iter, tmp);
          }
        }
        obj3 = str(tmp[7]);
      }
      if ("function" === typeof value) {
        let bindResult = value.bind(iter);
      } else {
        bindResult = value;
        if (value) {
          bindResult = value;
          if ("object" === tmp2) {
            bindResult = outer1_9(value, methodPath, tmp);
          }
        }
      }
      return bindResult;
    }
  });
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { extractModel };
export const instrumentGoogleGenAIClient = function instrumentGoogleGenAIClient(arg0, arg1) {
  const client = require(825) /* getCurrentScope */.getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
