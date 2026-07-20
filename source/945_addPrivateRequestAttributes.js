// Module ID: 945
// Function ID: 10231
// Name: addPrivateRequestAttributes
// Dependencies: []
// Exports: instrumentAnthropicAiClient

// Module 945 (addPrivateRequestAttributes)
function addPrivateRequestAttributes(setAttributes, prompt) {
  const obj = require(dependencyMap[5]);
  const messagesFromParamsResult = require(dependencyMap[5]).messagesFromParams(prompt);
  require(dependencyMap[5]).setMessagesAttribute(setAttributes, messagesFromParamsResult);
  if ("prompt" in prompt) {
    const _JSON = JSON;
    setAttributes.setAttributes(callback({}, require(dependencyMap[2]).GEN_AI_PROMPT_ATTRIBUTE, JSON.stringify(prompt.prompt)));
  }
}
function addResponseAttributes(setAttributes, type) {
  let tmp = type;
  if (type) {
    tmp = "object" === typeof type;
  }
  if (tmp) {
    if ("type" in type) {
      if ("error" === type.type) {
        require(dependencyMap[5]).handleResponseError(setAttributes, type);
        const obj4 = require(dependencyMap[5]);
      }
    }
    if (arg2) {
      function addContentAttributes(setAttributes, content) {
        if ("content" in content) {
          const _Array = Array;
          if (Array.isArray(content.content)) {
            content = content.content;
            const mapped = content.map((text) => text.text);
            const found = mapped.filter((arg0) => arg0);
            setAttributes.setAttributes(callback2({}, callback(closure_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, found.join("")));
            const items = [];
            content = content.content;
            const iter = content[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp9 = nextResult;
              let tmp10 = "tool_use" !== nextResult.type;
              let tmp11 = tmp10;
              if (tmp10) {
                let tmp12 = nextResult;
                tmp11 = "server_tool_use" !== tmp9.type;
              }
              if (!tmp11) {
                let tmp13 = items;
                let tmp14 = nextResult;
                let arr = items.push(tmp9);
              }
              // continue
            }
            if (items.length > 0) {
              const _JSON = JSON;
              setAttributes.setAttributes(callback2({}, callback(closure_1[2]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(items)));
            }
          }
        }
        if ("completion" in content) {
          setAttributes.setAttributes(callback2({}, callback(closure_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, content.completion));
        }
        if ("input_tokens" in content) {
          const _JSON2 = JSON;
          setAttributes.setAttributes(callback2({}, callback(closure_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(content.input_tokens)));
        }
      }(setAttributes, type);
    }
    let tmp4 = "id" in type;
    if (tmp4) {
      tmp4 = "model" in type;
    }
    if (tmp4) {
      setAttributes.setAttributes(callback(callback({}, require(dependencyMap[2]).GEN_AI_RESPONSE_ID_ATTRIBUTE, type.id), require(dependencyMap[2]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, type.model));
      let tmp10 = "created" in type;
      if (tmp10) {
        tmp10 = "number" === typeof type.created;
      }
      if (tmp10) {
        const _Date = Date;
        const date = new Date(1000 * type.created);
        setAttributes.setAttributes(callback({}, require(dependencyMap[2]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE, date.toISOString()));
      }
      let tmp19 = "created_at" in type;
      if (tmp19) {
        tmp19 = "number" === typeof type.created_at;
      }
      if (tmp19) {
        const _Date2 = Date;
        const date1 = new Date(1000 * type.created_at);
        setAttributes.setAttributes(callback({}, require(dependencyMap[2]).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE, date1.toISOString()));
      }
      if (tmp28) {
        const obj3 = require(dependencyMap[3]);
        const result = obj3.setTokenUsageAttributes(setAttributes, type.usage.input_tokens, type.usage.output_tokens, type.usage.cache_creation_input_tokens, type.usage.cache_read_input_tokens);
      }
      const tmp28 = "usage" in type && type.usage;
      const tmp8 = callback({}, require(dependencyMap[2]).GEN_AI_RESPONSE_ID_ATTRIBUTE, type.id);
    }
  }
}
function handleStreamingError(arg0, isRecording, arg2) {
  let obj = require(dependencyMap[6]);
  obj = { alignItems: 0.0000000000000000000000016547797096533966, justifyContent: 131124.41455078972 };
  obj = { function: arg2 };
  obj.data = obj;
  obj.captureException(arg0, { mechanism: obj });
  if (isRecording.isRecording()) {
    const obj1 = { code: require(dependencyMap[7]).SPAN_STATUS_ERROR, message: "internal_error" };
    isRecording.setStatus(obj1);
    isRecording.end();
  }
  throw arg0;
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  const proxy = new Proxy(arg0, {
    apply(arg0, arg1, arr) {
      arg1 = arr;
      let obj = arg0(arg1[3]);
      const tmp2 = arg3({}, arg0(arg1[2]).GEN_AI_SYSTEM_ATTRIBUTE, "anthropic");
      const tmp4 = arg3(arg3(arg3({}, arg0(arg1[2]).GEN_AI_SYSTEM_ATTRIBUTE, "anthropic"), arg0(arg1[2]).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getFinalOperationName(arg1)), arg0(arg1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.anthropic");
      if (arr.length > 0) {
        if ("object" === typeof arr[0]) {
          if (null !== arr[0]) {
            const first = arr[0];
            let tools = first.tools;
            if (tools) {
              const _Array = Array;
              tools = Array.isArray(first.tools);
            }
            if (tools) {
              const _JSON = JSON;
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(first.tools);
            }
            const model = first.model;
            let str4 = "unknown";
            if (null != model) {
              str4 = model;
            }
            tmp4[arg0(arg1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str4;
            if ("temperature" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
            }
            if ("top_p" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
            }
            if ("stream" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
            }
            if ("top_k" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
            }
            if ("frequency_penalty" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
            }
            if ("max_tokens" in first) {
              tmp4[arg0(arg1[2]).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
            }
          }
          let str11 = "unknown";
          if (null != tmp4[closure_0(undefined, closure_1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE]) {
            str11 = tmp27;
          }
          const finalOperationName = arg0(arg1[3]).getFinalOperationName(arg1);
          let first1;
          if ("object" === typeof arr[0]) {
            first1 = arr[0];
          }
          arr = first1;
          let stream;
          if (null != first1) {
            stream = first1.stream;
          }
          const BooleanResult = Boolean(stream);
          if (!BooleanResult) {
            if (!tmp38) {
              obj = {};
              const _HermesInternal = HermesInternal;
              obj.name = "" + finalOperationName + " " + str11;
              const obj3 = arg0(arg1[8]);
              obj.op = arg0(arg1[3]).getSpanOperation(arg1);
              obj.attributes = tmp4;
              let startSpanResult = obj3.startSpan(obj, (arg0) => {
                if (tmp) {
                  callback(arg0, first1);
                }
                return arg0(arg2[10]).handleCallbackErrors(() => arg0.apply(closure_2, closure_1), (arg0) => {
                  let obj = arg0(closure_1[6]);
                  obj = { alignItems: 0.0000000000000000000000016547797096533966, justifyContent: 131124.41455078972 };
                  obj = { function: closure_1 };
                  obj.data = obj;
                  obj.captureException(arg0, { mechanism: obj });
                }, () => {

                }, (arg0) => {
                  callback(arg0, arg0, recordOutputs.recordOutputs);
                });
              });
              const obj5 = arg0(arg1[3]);
            }
            return startSpanResult;
          }
          startSpanResult = function handleStreamingRequest(arg0, arg1, arg2, arr, attributes, finalOperationName, arr, first1, arg8, BooleanResult, arg10) {
            arg2 = arg1;
            first1 = arg2;
            const obj = {};
            let str = "unknown";
            if (null != attributes[closure_0(undefined, closure_1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE]) {
              str = tmp;
            }
            obj.name = "" + finalOperationName + " " + str + " stream-response";
            obj.op = arg0(arg2[3]).getSpanOperation(arr);
            obj.attributes = attributes;
            if (BooleanResult) {
              if (!arg10) {
                let startSpanManualResult = arg0(arg2[8]).startSpanManual(obj, () => {
                  let closure_0 = arg2(async (arg0) => {
                    const recordInputs = closure_6.recordInputs;
                    let tmp = recordInputs;
                    if (recordInputs) {
                      tmp = closure_5;
                    }
                    if (tmp) {
                      callback2(arg0, closure_5);
                    }
                    const tmp6 = yield closure_0.apply(closure_2, closure_3);
                    const recordOutputs = closure_6.recordOutputs;
                    let tmp8 = tmp7;
                    if (null != recordOutputs) {
                      tmp8 = recordOutputs;
                    }
                    return callback(closure_1[9]).instrumentAsyncIterableStream(tmp6, arg0, tmp8);
                  });
                  return function(arg0) {
                    return callback(...arguments);
                  };
                }());
                const obj3 = arg0(arg2[8]);
              }
              return startSpanManualResult;
            }
            const obj2 = arg0(arg2[3]);
            startSpanManualResult = arg0(arg2[8]).startSpanManual(obj, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, self) => {
              const recordInputs = self.recordInputs;
              let tmp = recordInputs;
              if (recordInputs) {
                tmp = arg7;
              }
              if (tmp) {
                arg6(arg0, arg7);
              }
              const applyResult = arg1.apply(arg2, arg3);
              const recordOutputs = self.recordOutputs;
              let tmp8 = tmp7;
              if (null != recordOutputs) {
                tmp8 = recordOutputs;
              }
              return arg0(arg1[9]).instrumentMessageStream(applyResult, arg0, tmp8);
            });
          }(arg0, arg0, arr, arr, tmp4, finalOperationName, arg1, first1, arg3, BooleanResult, tmp38);
          const obj2 = arg0(arg1[3]);
        }
      }
      if ("models.retrieve" === arg1) {
        let str2 = arr[0];
      } else {
        str2 = "unknown";
      }
      tmp4[arg0(arg1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
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
      const methodPath = str(tmp[3]).buildMethodPath(str, String(arg1));
      if ("function" === typeof iter[arg1]) {
        if (obj3.shouldInstrument(methodPath)) {
          let bindResult = callback(obj, methodPath, iter, tmp);
        }
        return bindResult;
      }
      if ("function" === typeof iter[arg1]) {
        bindResult = obj.bind(iter);
      } else {
        bindResult = obj;
        if (obj) {
          bindResult = obj;
          if ("object" === tmp2) {
            bindResult = callback2(obj, methodPath, tmp);
          }
        }
      }
    }
  });
  return proxy;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAnthropicAiClient = function instrumentAnthropicAiClient(arg0, arg1) {
  const client = require(dependencyMap[11]).getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
