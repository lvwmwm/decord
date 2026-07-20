// Module ID: 938
// Function ID: 10153
// Name: extractRequestAttributes
// Dependencies: []
// Exports: instrumentOpenAiClient

// Module 938 (extractRequestAttributes)
function extractRequestAttributes(first, first) {
  let obj = require(dependencyMap[4]);
  const tmp = callback({}, require(dependencyMap[3]).GEN_AI_SYSTEM_ATTRIBUTE, "openai");
  const tmp3 = callback(callback(callback({}, require(dependencyMap[3]).GEN_AI_SYSTEM_ATTRIBUTE, "openai"), require(dependencyMap[3]).GEN_AI_OPERATION_NAME_ATTRIBUTE, obj.getOperationName(first)), require(dependencyMap[5]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.openai");
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
          const combined = items1.concat(callback2(tmp7), items2);
          let json;
          if (combined.length > 0) {
            const _JSON = JSON;
            json = JSON.stringify(combined);
          }
          if (json) {
            tmp3[require(dependencyMap[3]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = json;
          }
          const _Object2 = Object;
          const merged = Object.assign(tmp3, require(dependencyMap[4]).extractRequestParameters(first));
          const obj3 = require(dependencyMap[4]);
        }
        items2 = [];
      }
      return tmp3;
    }
  }
  tmp3[require(dependencyMap[3]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] = "unknown";
}
function addRequestAttributes(setAttribute, input) {
  if ("input" in input) {
    input = input.input;
  } else if ("messages" in input) {
    input = input.messages;
  }
  if (input) {
    if (0 !== length) {
      const truncatedJsonString = require(dependencyMap[6]).getTruncatedJsonString(input);
      const attr = setAttribute.setAttribute(require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE, truncatedJsonString);
      if (length) {
        const attr1 = setAttribute.setAttribute(require(dependencyMap[3]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, length);
      }
      const obj = require(dependencyMap[6]);
    }
  }
}
function instrumentMethod(arg0, arg1, arg2, arg3) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  let closure_3 = arg3;
  return () => {
    let closure_0 = arg2(async () => {
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
        const tmp9 = callback(array, first);
        const operationName = array(first[4]).getOperationName(first);
        first = array[0];
        if (first) {
          if ("object" === typeof first) {
            if (true === first.stream) {
              let obj = {};
              const _HermesInternal2 = HermesInternal;
              obj.name = "" + operationName + " " + tmp12 + " stream-response";
              const obj6 = array(first[7]);
              obj.op = array(first[4]).getSpanOperation(first);
              obj.attributes = tmp9;
              let startSpanManualResult = obj6.startSpanManual(obj, () => {
                let closure_0 = callback(async (arg0) => {
                  const recordInputs = closure_3.recordInputs;
                  let tmp = recordInputs;
                  if (recordInputs) {
                    tmp = closure_1;
                  }
                  if (tmp) {
                    callback2(arg0, closure_1);
                  }
                  const tmp6 = yield closure_0.apply(closure_2, closure_0);
                  const recordOutputs = closure_3.recordOutputs;
                  let tmp8 = tmp7;
                  if (null != recordOutputs) {
                    tmp8 = recordOutputs;
                  }
                  return callback(closure_1[8]).instrumentStream(tmp6, arg0, tmp8);
                });
                return function(arg0) {
                  return callback(...arguments);
                };
              }());
              const obj8 = array(first[4]);
            }
            return startSpanManualResult;
          }
        }
        const obj2 = array(first[4]);
        obj = {};
        const _HermesInternal = HermesInternal;
        obj.name = "" + operationName + " " + tmp9[closure_0(undefined, closure_1[3]).GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
        const obj3 = array(first[7]);
        obj.op = array(first[4]).getSpanOperation(first);
        obj.attributes = tmp9;
        startSpanManualResult = obj3.startSpan(obj, () => {
          let closure_0 = callback(async (arg0) => {
            const recordInputs = closure_3.recordInputs;
            let tmp = recordInputs;
            if (recordInputs) {
              tmp = closure_1;
            }
            if (tmp) {
              callback(arg0, closure_1);
            }
            const tmp6 = yield closure_0.apply(closure_2, closure_0);
            function addResponseAttributes() { ... }(arg0, tmp6, closure_3.recordOutputs);
            return tmp6;
          });
          return function(arg0) {
            return callback(...arguments);
          };
        }());
        const obj5 = array(first[4]);
      }
    });
    return function instrumentedMethod() {
      return callback(...arguments);
    };
  }();
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
      const methodPath = str(tmp[4]).buildMethodPath(str, String(arg1));
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
let closure_4 = require(dependencyMap[2]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentOpenAiClient = function instrumentOpenAiClient(arg0, arg1) {
  const client = require(dependencyMap[11]).getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const recordInputs = Boolean(sendDefaultPii);
  return createDeepProxy(arg0, "", Object.assign({ recordInputs, recordOutputs: recordInputs }, arg1));
};
