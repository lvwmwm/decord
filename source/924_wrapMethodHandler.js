// Module ID: 924
// Function ID: 10067
// Name: wrapMethodHandler
// Dependencies: []
// Exports: wrapAllMCPHandlers

// Module 924 (wrapMethodHandler)
function wrapMethodHandler(arg0, prompt) {
  const require = prompt;
  require(dependencyMap[1]).fill(arg0, prompt, (arg0) => {
    const arg1 = arg0;
    return function(arg0) {
      const self = this;
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const arr = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        arr[num2 - 1] = arguments[num2];
      }
      if ("function" !== typeof arr[arr.length - 1]) {
        const call2 = arg0.call;
        const items = [self, arg0];
        return call2.apply(arg0, items.concat(arr));
      } else {
        const call = arg0.call;
        const items1 = [self, arg0];
        const items2 = [
          function createWrappedHandler(arg0, arg1, arg2) {
              return function() {
                const self = this;
                const length = arguments.length;
                const array = new Array(length);
                for (let num = 0; num < length; num = num + 1) {
                  let tmp3 = array;
                  tmp2[num] = arguments[num];
                }
                return callback.call(self, arg0, arg1, arg2, array);
              };
            }(tmp, arg0, arg0)
        ];
        return call.apply(arg0, items1.concat(callback(arr.slice(0, -1)), items2));
      }
    };
  });
}
function createErrorCapturingHandler(apply) {
  const require = arg1;
  const dependencyMap = arg2;
  const applyResult = apply.apply(this, arg3);
  if (applyResult) {
    if ("object" === typeof promise) {
      if ("function" === typeof promise.then) {
        const resolved = Promise.resolve(applyResult);
        let catchPromise = resolved.catch((arg0) => {
          callback(arg0, arg1, arg2);
          throw arg0;
        });
      }
      return catchPromise;
    }
  }
  catchPromise = applyResult;
}
function captureHandlerError(name, arg1, tool_name) {
  const obj = {};
  if ("tool" === arg1) {
    obj.tool_name = tool_name;
    if ("ProtocolValidationError" !== name.name) {
      const message4 = name.message;
      if (!message4.includes("validation")) {
        const message = name.message;
        if (!message.includes("protocol")) {
          if ("ServerTimeoutError" !== name.name) {
            const message2 = name.message;
            if (!message2.includes("timed out")) {
              const message3 = name.message;
              if (!message3.includes("timeout")) {
                require(dependencyMap[4]).captureError(name, "tool_execution", obj);
                const obj3 = require(dependencyMap[4]);
              }
            }
          }
          require(dependencyMap[4]).captureError(name, "timeout", obj);
          const obj4 = require(dependencyMap[4]);
        }
      }
    }
    require(dependencyMap[4]).captureError(name, "validation", obj);
    const obj5 = require(dependencyMap[4]);
  } else if ("resource" === arg1) {
    obj.resource_uri = tool_name;
    require(dependencyMap[4]).captureError(name, "resource_execution", obj);
    const obj2 = require(dependencyMap[4]);
  } else if ("prompt" === arg1) {
    obj.prompt_name = tool_name;
    require(dependencyMap[4]).captureError(name, "prompt_execution", obj);
    const obj6 = require(dependencyMap[4]);
  }
}
function wrapToolHandlers(arg0) {
  wrapMethodHandler(arg0, "tool");
}
function wrapResourceHandlers(arg0) {
  wrapMethodHandler(arg0, "resource");
}
function wrapPromptHandlers(arg0) {
  wrapMethodHandler(arg0, "prompt");
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const wrapAllMCPHandlers = function wrapAllMCPHandlers(arg0) {
  wrapToolHandlers(arg0);
  wrapResourceHandlers(arg0);
  wrapPromptHandlers(arg0);
};
export { wrapPromptHandlers };
export { wrapResourceHandlers };
export { wrapToolHandlers };
