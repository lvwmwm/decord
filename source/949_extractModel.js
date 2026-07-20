// Module ID: 949
// Function ID: 10277
// Name: extractModel
// Dependencies: []
// Exports: instrumentGoogleGenAIClient

// Module 949 (extractModel)
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
function extractRequestAttributes(arr, config) {
  let obj = require(dependencyMap[5]);
  const tmp = callback2({}, require(dependencyMap[3]).GEN_AI_SYSTEM_ATTRIBUTE, require(dependencyMap[4]).GOOGLE_GENAI_SYSTEM_NAME);
  const tmp3 = callback2(callback2(callback2({}, require(dependencyMap[3]).GEN_AI_SYSTEM_ATTRIBUTE, require(dependencyMap[4]).GOOGLE_GENAI_SYSTEM_NAME), require(dependencyMap[3]).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getFinalOperationName(arr)), require(dependencyMap[6]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.google_genai");
  const GEN_AI_REQUEST_MODEL_ATTRIBUTE = require(dependencyMap[3]).GEN_AI_REQUEST_MODEL_ATTRIBUTE;
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
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = config.temperature;
          }
          let tmp9 = "topP" in config;
          if (tmp9) {
            tmp9 = "number" === typeof config.topP;
          }
          if (tmp9) {
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = config.topP;
          }
          let tmp12 = "topK" in config;
          if (tmp12) {
            tmp12 = "number" === typeof config.topK;
          }
          if (tmp12) {
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = config.topK;
          }
          let tmp15 = "maxOutputTokens" in config;
          if (tmp15) {
            tmp15 = "number" === typeof config.maxOutputTokens;
          }
          if (tmp15) {
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = config.maxOutputTokens;
          }
          let tmp18 = "frequencyPenalty" in config;
          if (tmp18) {
            tmp18 = "number" === typeof config.frequencyPenalty;
          }
          if (tmp18) {
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = config.frequencyPenalty;
          }
          let tmp21 = "presencePenalty" in config;
          if (tmp21) {
            tmp21 = "number" === typeof config.presencePenalty;
          }
          if (tmp21) {
            obj[require(dependencyMap[3]).GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = config.presencePenalty;
          }
          const merged = Object.assign(tmp3, obj);
          if ("tools" in config) {
            const _Array = Array;
            if (Array.isArray(config.tools)) {
              const tools = config.tools;
              const _JSON = JSON;
              tmp3[require(dependencyMap[3]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(tools.flatMap((functionDeclarations) => functionDeclarations.functionDeclarations));
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
    push.apply(items, callback(require(dependencyMap[7]).contentUnionToMessages(config.config.systemInstruction, "system")));
    const obj = require(dependencyMap[7]);
  }
  if ("history" in config) {
    const push2 = items.push;
    push2.apply(items, callback(require(dependencyMap[7]).contentUnionToMessages(config.history, "user")));
    const obj2 = require(dependencyMap[7]);
  }
  if ("contents" in config) {
    const push3 = items.push;
    push3.apply(items, callback(require(dependencyMap[7]).contentUnionToMessages(config.contents, "user")));
    const obj3 = require(dependencyMap[7]);
  }
  if ("message" in config) {
    const push4 = items.push;
    push4.apply(items, callback(require(dependencyMap[7]).contentUnionToMessages(config.message, "user")));
    const obj4 = require(dependencyMap[7]);
  }
  if (tmp17) {
    const _JSON = JSON;
    const tmp21 = callback2({}, require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, items.length);
    setAttributes.setAttributes(callback2(tmp21, require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, JSON.stringify(require(dependencyMap[8]).truncateGenAiMessages(items))));
    const obj5 = require(dependencyMap[8]);
  }
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  const require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
  let closure_3 = arg1 === require(dependencyMap[4]).CHATS_CREATE_METHOD;
  const proxy = new Proxy(arg0, {
    apply(arr) {
      const arg1 = arr;
      const first = arg2[0];
      const arg3 = first;
      const tmp2 = callback(arg1, first, arg2);
      let str = "unknown";
      if (null != tmp2[closure_0(undefined, closure_1[3]).GEN_AI_REQUEST_MODEL_ATTRIBUTE]) {
        str = tmp3;
      }
      let obj = arg1(arg2[5]);
      const finalOperationName = obj.getFinalOperationName(arg1);
      const obj2 = arg1(arg2[7]);
      const obj3 = arg1(arg2[9]);
      if (isStreamingMethodResult) {
        obj = {};
        const _HermesInternal2 = HermesInternal;
        obj.name = "" + finalOperationName + " " + str + " stream-response";
        obj.op = arg1(arg2[5]).getSpanOperation(arg1);
        obj.attributes = tmp2;
        let startSpanManualResult = obj3.startSpanManual(obj, () => {
          let closure_0 = first(async (arg0) => {
            const recordInputs = closure_2.recordInputs;
            let tmp = recordInputs;
            if (recordInputs) {
              tmp = closure_2;
            }
            if (tmp) {
              callback2(arg0, closure_2);
            }
            const tmp6 = yield closure_0.apply(closure_1, closure_1);
            return callback(closure_1[10]).instrumentStream(tmp6, arg0, Boolean(closure_2.recordOutputs));
          });
          return function(arg0) {
            return callback(...arguments);
          };
        }());
        const tmp6Result = arg1(arg2[5]);
      } else {
        obj = {};
        const _HermesInternal = HermesInternal;
        if (closure_3) {
          let combined = concat(finalOperationName, " ", str, " create");
        } else {
          combined = concat(finalOperationName, " ", str);
        }
        obj.name = combined;
        obj.op = arg1(arg2[5]).getSpanOperation(arg1);
        obj.attributes = tmp2;
        startSpanManualResult = obj3.startSpan(obj, (arg0) => {
          if (tmp) {
            callback(arg0, first);
          }
          return arg0(arg2[13]).handleCallbackErrors(() => arg0.apply(closure_1, closure_1), (arg0) => {
            let obj = arg0(closure_1[12]);
            obj = { alignItems: false, justifyContent: false };
            obj = { function: arg0 };
            obj.data = obj;
            obj.captureException(arg0, { mechanism: obj });
          }, () => {

          }, (modelVersion) => {
            if (!closure_3) {
              function addResponseAttributes(setAttribute, modelVersion, recordOutputs) {
                if (modelVersion) {
                  if ("object" === typeof modelVersion) {
                    if (modelVersion.modelVersion) {
                      const attr = setAttribute.setAttribute(callback(closure_1[3]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, modelVersion.modelVersion);
                    }
                    if (modelVersion.usageMetadata) {
                      if ("object" === typeof modelVersion.usageMetadata) {
                        const usageMetadata = modelVersion.usageMetadata;
                        if ("number" === typeof usageMetadata.promptTokenCount) {
                          setAttribute.setAttributes(callback2({}, callback(closure_1[3]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, usageMetadata.promptTokenCount));
                        }
                        if ("number" === typeof usageMetadata.candidatesTokenCount) {
                          setAttribute.setAttributes(callback2({}, callback(closure_1[3]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, usageMetadata.candidatesTokenCount));
                        }
                        if ("number" === typeof usageMetadata.totalTokenCount) {
                          setAttribute.setAttributes(callback2({}, callback(closure_1[3]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, usageMetadata.totalTokenCount));
                        }
                      }
                    }
                    if (recordOutputs) {
                      const _Array = Array;
                      if (Array.isArray(modelVersion.candidates)) {
                        if (modelVersion.candidates.length > 0) {
                          const candidates = modelVersion.candidates;
                          const mapped = candidates.map(() => { ... });
                          const found = mapped.filter(() => { ... });
                          if (found.length > 0) {
                            setAttribute.setAttributes(callback2({}, callback(closure_1[3]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, found.join("")));
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
                          setAttribute.setAttributes(callback2({}, callback(closure_1[3]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(functionCalls)));
                        }
                      }
                    }
                  }
                }
              }(modelVersion, modelVersion, recordOutputs.recordOutputs);
            }
          });
        });
        const obj5 = arg1(arg2[5]);
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
  const require = str;
  let tmp;
  if (arguments.length > 2) {
    tmp = arguments[2];
  }
  const dependencyMap = tmp;
  const proxy = new Proxy(arg0, {
    get(iter) {
      const value = Reflect.get(iter, arg1, arg2);
      const methodPath = str(tmp[5]).buildMethodPath(str, String(arg1));
      if ("function" === typeof value) {
        if (obj3.shouldInstrument(methodPath)) {
          if (methodPath === str(tmp[4]).CHATS_CREATE_METHOD) {
            let str = callback(value, methodPath, iter, tmp);
            return function instrumentedAndProxiedCreate() {
              const applyResult = callback(...arguments);
              let tmp2 = applyResult;
              if (applyResult) {
                tmp2 = applyResult;
                if ("object" === typeof applyResult) {
                  tmp2 = callback2(applyResult, callback(closure_1[4]).CHAT_PATH, closure_1);
                }
              }
              return tmp2;
            };
          } else {
            return callback(value, methodPath, iter, tmp);
          }
        }
        const obj3 = str(tmp[7]);
      }
      if ("function" === typeof value) {
        let bindResult = value.bind(iter);
      } else {
        bindResult = value;
        if (value) {
          str = "object";
          bindResult = value;
          if ("object" === tmp2) {
            bindResult = callback2(value, methodPath, tmp);
          }
        }
      }
      return bindResult;
    }
  });
  return proxy;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { extractModel };
export const instrumentGoogleGenAIClient = function instrumentGoogleGenAIClient(arg0, arg1) {
  const client = require(dependencyMap[14]).getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
