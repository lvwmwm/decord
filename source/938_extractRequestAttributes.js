// Module ID: 938
// Function ID: 10159
// Name: extractRequestAttributes
// Dependencies: [5, 77, 65, 934, 939, 816, 936, 842, 941, 817, 845, 825]
// Exports: instrumentOpenAiClient

// Module 938 (extractRequestAttributes)
import asyncGeneratorStep from "module_816";
import _defineProperty from "_defineProperty";
import _toConsumableArray from "_toConsumableArray";

function extractRequestAttributes(first, outer2_1) {
  let obj = require(939) /* getOperationName */;
  const tmp = _defineProperty({}, require(934).GEN_AI_SYSTEM_ATTRIBUTE, "openai");
  const tmp3 = _defineProperty(_defineProperty(_defineProperty({}, require(934).GEN_AI_SYSTEM_ATTRIBUTE, "openai"), require(934).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getOperationName(outer2_1)), require(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.openai");
  if (first.length > 0) {
    if ("object" === typeof first[0]) {
      if (null !== first[0]) {
        first = first[0];
        const _Array = Array;
        if (first.web_search_options) {
          if ("object" === typeof first.web_search_options) {
            const _Object = Object;
            obj = { type: "web_search_options" };
            const items = [Object.assign(obj, first.web_search_options)];
            let items2 = items;
          }
          const items1 = [];
          const combined = items1.concat(_toConsumableArray(tmp7), items2);
          let json;
          if (combined.length > 0) {
            const _JSON = JSON;
            json = JSON.stringify(combined);
          }
          if (json) {
            tmp3[require(934).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object2 = Object;
          const merged = Object.assign(tmp3, require(939) /* getOperationName */.extractRequestParameters(first));
          const obj3 = require(939) /* getOperationName */;
        }
        items2 = [];
      }
      return tmp3;
    }
  }
  tmp3[require(934).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
}
function addRequestAttributes(setAttribute, input) {
  if ("input" in input) {
    input = input.input;
  } else if ("messages" in input) {
    input = input.messages;
  }
  if (input) {
    if (0 !== length) {
      const truncatedJsonString = require(936) /* getFinalOperationName */.getTruncatedJsonString(input);
      const attr = setAttribute.setAttribute(require(934).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, truncatedJsonString);
      if (length) {
        const attr1 = setAttribute.setAttribute(require(934).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
      const obj = require(936) /* getFinalOperationName */;
    }
  }
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  return (() => {
    let closure_0 = callback(async () => {
      if (obj) {
        return obj.resume();
      } else {
        let array;
        let first;
        const length = arguments.length;
        const _Array = Array;
        array = new Array(length);
        for (let num2 = 0; num2 < length; num2 = num2 + 1) {
          array[num2] = arguments[num2];
        }
        const tmp9 = outer3_5(array, outer2_1);
        const tmp12 = tmp9[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
        const operationName = callback(939).getOperationName(outer2_1);
        first = array[0];
        if (first) {
          if ("object" === typeof first) {
            if (true === first.stream) {
              obj = {};
              const _HermesInternal2 = HermesInternal;
              obj.name = "" + operationName + " " + tmp12 + " stream-response";
              const obj6 = callback(842);
              obj.op = callback(939).getSpanOperation(outer2_1);
              obj.attributes = tmp9;
              let startSpanManualResult = obj6.startSpanManual(obj, (() => {
                let closure_0 = callback(async (arg0) => {
                  const recordInputs = outer5_3.recordInputs;
                  let tmp = recordInputs;
                  if (recordInputs) {
                    tmp = outer2_1;
                  }
                  if (tmp) {
                    outer6_6(arg0, outer2_1);
                  }
                  const tmp6 = yield closure_0.apply(outer5_2, closure_0);
                  const recordOutputs = outer5_3.recordOutputs;
                  let tmp8 = tmp7;
                  if (null != recordOutputs) {
                    tmp8 = recordOutputs;
                  }
                  return callback(table[8]).instrumentStream(tmp6, arg0, tmp8);
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              })());
              const obj8 = callback(939);
            }
            return startSpanManualResult;
          }
        }
        let obj2 = callback(939);
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.name = "" + operationName + " " + tmp12;
        let obj3 = callback(842);
        obj.op = callback(939).getSpanOperation(outer2_1);
        obj.attributes = tmp9;
        startSpanManualResult = obj3.startSpan(obj, (() => {
          let closure_0 = callback(async (arg0) => {
            const recordInputs = outer5_3.recordInputs;
            let tmp = recordInputs;
            if (recordInputs) {
              tmp = outer2_1;
            }
            if (tmp) {
              outer6_6(arg0, outer2_1);
            }
            const tmp6 = yield closure_0.apply(outer5_2, closure_0);
            (function addResponseAttributes() { ... })(arg0, tmp6, outer5_3.recordOutputs);
            return tmp6;
          });
          return function(arg0) {
            return callback(...arguments);
          };
        })());
        let obj5 = callback(939);
      }
    });
    return function instrumentedMethod() {
      return callback(...arguments);
    };
  })();
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
      const methodPath = str(tmp[4]).buildMethodPath(str, String(arg1));
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

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  const client = require(825) /* getCurrentScope */.getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
