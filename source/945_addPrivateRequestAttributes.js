// Module ID: 945
// Function ID: 10236
// Name: addPrivateRequestAttributes
// Dependencies: [5, 77, 934, 936, 816, 946, 845, 817, 842, 948, 843, 825]
// Exports: instrumentAnthropicAiClient

// Module 945 (addPrivateRequestAttributes)
import asyncGeneratorStep from "handleResponseError";
import _defineProperty from "_defineProperty";

function addPrivateRequestAttributes(setAttributes, prompt) {
  const obj = require(946) /* handleResponseError */;
  const messagesFromParamsResult = require(946) /* handleResponseError */.messagesFromParams(prompt);
  require(946) /* handleResponseError */.setMessagesAttribute(setAttributes, messagesFromParamsResult);
  if ("prompt" in prompt) {
    const _JSON = JSON;
    setAttributes.setAttributes(_defineProperty({}, require(934).GEN_AI_PROMPT_ATTRIBUTE, JSON.stringify(prompt.prompt)));
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
        require(946) /* handleResponseError */.handleResponseError(setAttributes, type);
        const obj4 = require(946) /* handleResponseError */;
      }
    }
    if (arg2) {
      (function addContentAttributes(setAttributes, content) {
        if ("content" in content) {
          const _Array = Array;
          if (Array.isArray(content.content)) {
            content = content.content;
            const mapped = content.map((text) => text.text);
            const found = mapped.filter((arg0) => arg0);
            setAttributes.setAttributes(outer1_3({}, outer1_0(outer1_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, found.join("")));
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
              continue;
            }
            if (items.length > 0) {
              const _JSON = JSON;
              setAttributes.setAttributes(outer1_3({}, outer1_0(outer1_1[2]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(items)));
            }
          }
        }
        if ("completion" in content) {
          setAttributes.setAttributes(outer1_3({}, outer1_0(outer1_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, content.completion));
        }
        if ("input_tokens" in content) {
          const _JSON2 = JSON;
          setAttributes.setAttributes(outer1_3({}, outer1_0(outer1_1[2]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(content.input_tokens)));
        }
      })(setAttributes, type);
    }
    let tmp4 = "id" in type;
    if (tmp4) {
      tmp4 = "model" in type;
    }
    if (tmp4) {
      setAttributes.setAttributes(_defineProperty(_defineProperty({}, require(934).GEN_AI_RESPONSE_ID_ATTRIBUTE, type.id), require(934).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, type.model));
      let tmp10 = "created" in type;
      if (tmp10) {
        tmp10 = "number" === typeof type.created;
      }
      if (tmp10) {
        const _Date = Date;
        const date = new Date(1000 * type.created);
        setAttributes.setAttributes(_defineProperty({}, require(934).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE, date.toISOString()));
      }
      let tmp19 = "created_at" in type;
      if (tmp19) {
        tmp19 = "number" === typeof type.created_at;
      }
      if (tmp19) {
        const _Date2 = Date;
        const date1 = new Date(1000 * type.created_at);
        setAttributes.setAttributes(_defineProperty({}, require(934).ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE, date1.toISOString()));
      }
      if (tmp28) {
        const obj3 = require(936) /* getFinalOperationName */;
        const result = obj3.setTokenUsageAttributes(setAttributes, type.usage.input_tokens, type.usage.output_tokens, type.usage.cache_creation_input_tokens, type.usage.cache_read_input_tokens);
      }
      tmp28 = "usage" in type && type.usage;
      const tmp8 = _defineProperty({}, require(934).GEN_AI_RESPONSE_ID_ATTRIBUTE, type.id);
    }
  }
}
function handleStreamingError(arg0, isRecording, arg2) {
  let obj = require(845) /* captureCheckIn */;
  obj = { handled: false, type: "auto.ai.anthropic" };
  obj = { function: arg2 };
  obj.data = obj;
  obj.captureException(arg0, { mechanism: obj });
  if (isRecording.isRecording()) {
    const obj1 = { code: require(817) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR, message: "internal_error" };
    isRecording.setStatus(obj1);
    isRecording.end();
  }
  throw arg0;
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  const proxy = new Proxy(arg0, {
    apply(closure_0, arg1, closure_1) {
      let callback = closure_0;
      let dependencyMap = closure_1;
      let obj = callback(936);
      const tmp2 = callback2({}, callback(934).GEN_AI_SYSTEM_ATTRIBUTE, "anthropic");
      const tmp4 = callback2(callback2(callback2({}, callback(934).GEN_AI_SYSTEM_ATTRIBUTE, "anthropic"), callback(934).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getFinalOperationName(dependencyMap)), callback(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.anthropic");
      if (closure_1.length > 0) {
        if ("object" === typeof closure_1[0]) {
          if (null !== closure_1[0]) {
            const first = closure_1[0];
            let tools = first.tools;
            if (tools) {
              const _Array = Array;
              tools = Array.isArray(first.tools);
            }
            if (tools) {
              const _JSON = JSON;
              tmp4[callback(934).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = JSON.stringify(first.tools);
            }
            const model = first.model;
            let str4 = "unknown";
            if (null != model) {
              str4 = model;
            }
            tmp4[callback(934).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str4;
            if ("temperature" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = first.temperature;
            }
            if ("top_p" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = first.top_p;
            }
            if ("stream" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_STREAM_ATTRIBUTE] = first.stream;
            }
            if ("top_k" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_TOP_K_ATTRIBUTE] = first.top_k;
            }
            if ("frequency_penalty" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = first.frequency_penalty;
            }
            if ("max_tokens" in first) {
              tmp4[callback(934).GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = first.max_tokens;
            }
          }
          const tmp27 = tmp4[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
          let str11 = "unknown";
          if (null != tmp27) {
            str11 = tmp27;
          }
          const finalOperationName = callback(936).getFinalOperationName(dependencyMap);
          let first1;
          if ("object" === typeof closure_1[0]) {
            first1 = closure_1[0];
          }
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
              let obj3 = callback(842);
              obj.op = callback(936).getSpanOperation(dependencyMap);
              obj.attributes = tmp4;
              let startSpanResult = obj3.startSpan(obj, (arg0) => {
                const callback = arg0;
                if (tmp) {
                  outer2_4(arg0, first1);
                }
                return callback(843).handleCallbackErrors(() => callback.apply(first1, outer1_1), (arg0) => {
                  let obj = callback(table[6]);
                  obj = { handled: false, type: "auto.ai.anthropic" };
                  obj = { function: table };
                  obj.data = obj;
                  obj.captureException(arg0, { mechanism: obj });
                }, () => {

                }, (arg0) => {
                  outer3_5(closure_0, arg0, outer2_3.recordOutputs);
                });
              });
              const obj5 = callback(936);
            }
            return startSpanResult;
          }
          startSpanResult = (function handleStreamingRequest(closure_0, closure_0, first1, closure_1, attributes, finalOperationName, closure_1, first12, closure_3, BooleanResult, arg10) {
            const callback = closure_0;
            const dependencyMap = closure_0;
            let closure_2 = first1;
            closure_3 = closure_1;
            let closure_4 = closure_1;
            let closure_5 = first12;
            let closure_6 = closure_3;
            const obj = {};
            let tmp = attributes[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE];
            let str = "unknown";
            if (null != tmp) {
              str = tmp;
            }
            obj.name = "" + finalOperationName + " " + str + " stream-response";
            obj.op = callback(936).getSpanOperation(closure_1);
            obj.attributes = attributes;
            if (BooleanResult) {
              if (!arg10) {
                let startSpanManualResult = callback(842).startSpanManual(obj, (() => {
                  let closure_0 = callback2(async (arg0) => {
                    const recordInputs = outer2_6.recordInputs;
                    let tmp = recordInputs;
                    if (recordInputs) {
                      tmp = outer2_5;
                    }
                    if (tmp) {
                      outer5_4(arg0, outer2_5);
                    }
                    const tmp6 = yield closure_0.apply(outer2_2, outer2_3);
                    const recordOutputs = outer2_6.recordOutputs;
                    let tmp8 = tmp7;
                    if (null != recordOutputs) {
                      tmp8 = recordOutputs;
                    }
                    return callback(table[9]).instrumentAsyncIterableStream(tmp6, arg0, tmp8);
                  });
                  return function(arg0) {
                    return callback(...arguments);
                  };
                })());
                const obj3 = callback(842);
              }
              return startSpanManualResult;
            }
            const obj2 = callback(936);
            startSpanManualResult = callback(842).startSpanManual(obj, (arg0) => {
              const recordInputs = closure_6.recordInputs;
              let tmp = recordInputs;
              if (recordInputs) {
                tmp = closure_5;
              }
              if (tmp) {
                outer3_4(arg0, closure_5);
              }
              const applyResult = dependencyMap.apply(closure_2, closure_3);
              const recordOutputs = closure_6.recordOutputs;
              let tmp8 = tmp7;
              if (null != recordOutputs) {
                tmp8 = recordOutputs;
              }
              return callback(948).instrumentMessageStream(applyResult, arg0, tmp8);
            });
          })(callback, closure_0, first1, closure_1, tmp4, finalOperationName, dependencyMap, first1, callback2, BooleanResult, tmp38);
          let obj2 = callback(936);
        }
      }
      if ("models.retrieve" === dependencyMap) {
        let str2 = closure_1[0];
      } else {
        str2 = "unknown";
      }
      tmp4[callback(934).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = str2;
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
      const methodPath = str(tmp[3]).buildMethodPath(str, String(arg1));
      if ("function" === typeof iter[arg1]) {
        if (obj3.shouldInstrument(methodPath)) {
          let bindResult = outer1_7(obj, methodPath, iter, tmp);
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
            bindResult = outer1_8(obj, methodPath, tmp);
          }
        }
      }
    }
  });
  return proxy;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentAnthropicAiClient = function instrumentAnthropicAiClient(arg0, arg1) {
  const client = require(825) /* getCurrentScope */.getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
