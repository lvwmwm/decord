// Module ID: 13225
// Function ID: 100329
// Name: objectifyError
// Dependencies: []
// Exports: default

// Module 13225 (objectifyError)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
tmp3 = tmp3.default;
let closure_5 = { veto: null };
function objectifyError(arr) {
  const require = arr;
  const obj = {};
  const dependencyMap = obj;
  const ownPropertyNames = Object.getOwnPropertyNames(arr);
  const item = ownPropertyNames.forEach((arg0) => {
    obj[arg0] = arg0[arg0];
  });
  return obj;
}

export default function trackGlobalErrors(arg0) {
  const require = arg0;
  return (log) => {
    function reportError(stack) {
      if (reportError) {
        if (_default2) {
          if (reportError) {
            if (_default2) {
              if ("function" !== typeof reportError) {
                stack.error("parseErrorStack is not a function", []);
                let obj = { parseErrorStackType: typeof reportError, parseErrorStack: reportError };
                stack.debug(obj);
              } else if ("function" !== typeof _default2) {
                stack.error("symbolicateStackTrace is not a function", []);
                obj = { symbolicateStackTraceType: typeof _default2, symbolicateStackTrace: _default2 };
                stack.debug(obj);
              } else {
                const promise = _default2(reportError(stack.stack));
                _default2(reportError(stack.stack)).then((stack) => {
                  stack = stack.stack;
                  const mapped = stack.map((file) => ({ fileName: file.file, functionName: file.methodName, lineNumber: file.lineNumber }));
                  let found = mapped;
                  if (veto.veto) {
                    found = mapped.filter((arg0) => {
                      let vetoResult;
                      if (null != closure_1) {
                        vetoResult = closure_1.veto(arg0);
                      }
                      return vetoResult;
                    });
                  }
                  stack.error(stack.message, found);
                }).catch((self) => {
                  self.error("Unable to symbolicate stack trace from error object", []);
                  self.debug(callback(self));
                });
              }
            }
          }
          stack.error("parseErrorStack or symbolicateStackTrace is not available", []);
          obj = { parseErrorStackAvailable: reportError, symbolicateStackTraceAvailable: _default2 };
          stack.debug(obj);
        } else {
          const tmp9 = stack(closure_1[3]);
          if ("function" === typeof tmp9) {
            let _default2 = tmp9;
          } else {
            _default2 = tmp10.default;
          }
        }
      } else {
        const tmp3 = stack(closure_1[2]);
        if ("function" === typeof tmp3) {
          let _default = tmp3;
        } else {
          _default = tmp4.default;
        }
        const reportError = _default;
      }
    }
    const result = log(closure_1[1]).assertHasLoggerPlugin(log);
    let obj = log;
    if (!log) {
      obj = {};
    }
    closure_1 = Object.assign({}, closure_5, obj);
    obj = {
      onConnect() {
        const proxy = new Proxy(addException.addException, {
          apply(apply) {
            callback(arg2[0]);
            return apply.apply(arg1, arg2);
          }
        });
        addException.addException = proxy;
      },
      features: { reportError }
    };
    return obj;
  };
};
