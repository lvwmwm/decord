// Module ID: 13399
// Function ID: 102845
// Name: result5
// Dependencies: [453, 13400, 184, 974]
// Exports: default

// Module 13399 (result5)
import install from "install";

if (!install) {
  let obj = { default: install };
  let tmp3 = obj;
} else {
  tmp3 = install;
}
let closure_4 = tmp3.default;
let closure_5 = { veto: null };
function objectifyError(arr) {
  let closure_0 = arr;
  const obj = {};
  const ownPropertyNames = Object.getOwnPropertyNames(arr);
  const item = ownPropertyNames.forEach((arg0) => {
    obj[arg0] = arr[arg0];
  });
  return obj;
}

export default function trackGlobalErrors(arg0) {
  let closure_0 = arg0;
  return (log) => {
    function reportError(stack) {
      const log = stack;
      if (outer2_2) {
        if (outer2_3) {
          if (outer2_2) {
            if (outer2_3) {
              if ("function" !== typeof outer2_2) {
                log.error("parseErrorStack is not a function", []);
                let obj = { parseErrorStackType: typeof outer2_2, parseErrorStack: outer2_2 };
                log.debug(obj);
              } else if ("function" !== typeof outer2_3) {
                log.error("symbolicateStackTrace is not a function", []);
                obj = { symbolicateStackTraceType: typeof outer2_3, symbolicateStackTrace: outer2_3 };
                log.debug(obj);
              } else {
                const promise = outer2_3(outer2_2(stack.stack));
                outer2_3(outer2_2(stack.stack)).then((stack) => {
                  stack = stack.stack;
                  const mapped = stack.map((file) => ({ fileName: file.file, functionName: file.methodName, lineNumber: file.lineNumber }));
                  let found = mapped;
                  if (outer1_1.veto) {
                    found = mapped.filter((arg0) => {
                      let vetoResult;
                      if (null != outer2_1) {
                        vetoResult = outer2_1.veto(arg0);
                      }
                      return vetoResult;
                    });
                  }
                  stack.error(stack.message, found);
                }).catch((arg0) => {
                  stack.error("Unable to symbolicate stack trace from error object", []);
                  stack.debug(outer3_6(arg0));
                });
              }
            }
          }
          log.error("parseErrorStack or symbolicateStackTrace is not available", []);
          obj = { parseErrorStackAvailable: outer2_2, symbolicateStackTraceAvailable: outer2_3 };
          log.debug(obj);
        } else {
          const tmp9 = log(outer2_1[3]);
          if ("function" === typeof tmp9) {
            let _default2 = tmp9;
          } else {
            _default2 = tmp10.default;
          }
          outer2_3 = _default2;
        }
      } else {
        const tmp3 = log(outer2_1[2]);
        if ("function" === typeof tmp3) {
          let _default = tmp3;
        } else {
          _default = tmp4.default;
        }
        outer2_2 = _default;
      }
    }
    const result = callback(outer1_1[1]).assertHasLoggerPlugin(log);
    callback = log;
    let obj = callback;
    if (!callback) {
      obj = {};
    }
    let closure_1 = Object.assign({}, outer1_5, obj);
    obj = {
      onConnect() {
        const proxy = new Proxy(outer2_4.addException, {
          apply(apply) {
            outer1_2(arg2[0]);
            return apply.apply(arg1, arg2);
          }
        });
        outer2_4.addException = proxy;
      },
      features: { reportError }
    };
    return obj;
  };
};
