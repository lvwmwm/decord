// Module ID: 13950
// Function ID: 13951
// Name: objectifyError
// Dependencies: [473, 13951, 190, 863]
// Exports: default

// Module 13950 (objectifyError)
import emptyPromise from "emptyPromise" /* 13951 */;
import install_mod from "install" /* 473 */;

let install = install_mod;
if (!install) {
  let obj = { default: install };
  let tmp3 = obj;
} else {
  tmp3 = install;
}
install = tmp3.default;
let closure_5 = { veto: null };
function objectifyError(headers) {
  closure_0 = headers;
  const obj = {};
  const ownPropertyNames = Object.getOwnPropertyNames(headers);
  const item = ownPropertyNames.forEach((item) => {
    obj[item] = error[item];
  });
  return obj;
}

export default (arg0) => {
  closure_0 = arg0;
  return (arg0) => {
    function reportError(stack) {
      logger = stack;
      try {
        if (_default) {
          if (_default2) {
            if (_default) {
              if (_default2) {
                if (typeof tmp16 !== "function") {
                  logger.error("parseErrorStack is not a function", []);
                  const obj2 = { parseErrorStackType: typeof _default, parseErrorStack: _default };
                  logger.debug(obj2);
                } else if (typeof tmp18 !== "function") {
                  logger.error("symbolicateStackTrace is not a function", []);
                  const obj3 = { symbolicateStackTraceType: typeof _default2, symbolicateStackTrace: _default2 };
                  logger.debug(obj3);
                } else {
                  try {
                    const promise = _default2(_default(stack.stack));
                    _default2(_default(stack.stack)).then((stack) => {
                      stack = stack.stack;
                      const mapped = stack.map((file) => ({ fileName: file.file, functionName: file.methodName, lineNumber: file.lineNumber }));
                      let found = mapped;
                      if (veto.veto) {
                        found = mapped.filter((item) => {
                          let vetoResult;
                          if (veto != null) {
                            vetoResult = veto.veto(item);
                          }
                          return vetoResult;
                        });
                      }
                      stack.error(stack.message, found);
                    }).catch((error) => {
                      stack.error("Unable to symbolicate stack trace from error object", []);
                      if (typeof closure_2_6 === "function") {
                        stack = error;
                        const obj = {};
                        const _Object = Object;
                        const ownPropertyNames = Object.getOwnPropertyNames(error);
                        const item = ownPropertyNames.forEach((item) => {
                          obj[item] = error[item];
                        });
                        tmp3(obj);
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                  } catch (tmp32) {
                    logger.error("Unable to parse stack trace from error object", []);
                    logger.debug(closure_1_6(tmp32));
                  }
                }
              }
            }
            logger.error("parseErrorStack or symbolicateStackTrace is not available", []);
            let obj = { parseErrorStackAvailable: _default, symbolicateStackTraceAvailable: _default2 };
            logger.debug(obj);
          } else {
            const tmp12 = logger(863);
            if (typeof tmp12 === "function") {
              _default2 = tmp12;
            } else {
              _default2 = tmp13.default;
            }
          }
        } else {
          const tmp5 = logger(190);
          if (typeof tmp5 === "function") {
            _default = tmp5;
          } else {
            _default = tmp6.default;
          }
        }
      } catch (tmp47) {
        logger.error("Unable to load \"react-native/Libraries/Core/Devtools/parseErrorStack\" or \"react-native/Libraries/Core/Devtools/symbolicateStackTrace\"", []);
        logger.debug(closure_1_6(tmp47));
      }
    }
    const result = emptyPromise.assertHasLoggerPlugin(arg0);
    let logger = arg0;
    let obj = logger;
    if (!logger) {
      obj = {};
    }
    dependencyMap = Object.assign({}, closure_5, obj);
    return {
      onConnect() {
        const proxy = new Proxy(addException.addException, {
          apply(apply, arg1, arg2) {
            _default(arg2[0]);
            return apply.apply(arg1, arg2);
          }
        });
        addException.addException = proxy;
      },
      features: { reportError }
    };
  };
};
