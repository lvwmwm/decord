// Module ID: 1054
// Function ID: 11292
// Name: _getUnhandledRejectionError
// Dependencies: []

// Module 1054 (_getUnhandledRejectionError)
function _getUnhandledRejectionError(arg0) {
  if (obj.isPrimitive(arg0)) {
    return arg0;
  } else if ("reason" in tmp) {
    return tmp.reason;
  } else if ("detail" in tmp) {
    if ("reason" in tmp.detail) {
      return tmp.detail.reason;
    }
  }
}
function _eventFromRejectionWithPrimitive(reason) {
  let obj = {};
  obj = {};
  obj = { type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(reason) };
  const items = [obj];
  obj.values = items;
  obj.exception = obj;
  return obj;
}
function globalHandlerLog(arg0) {
  if (require(dependencyMap[3]).DEBUG_BUILD) {
    const debug = require(dependencyMap[0]).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Global Handler attached: " + arg0);
  }
}
function getOptions() {
  let options;
  let obj = require(dependencyMap[0]);
  const client = obj.getClient();
  if (null != client) {
    options = client.getOptions();
  }
  if (!options) {
    obj = {
      stackParser(stack, arg1, arg2) {
          return [];
        },
      attachStacktrace: false
    };
    options = obj;
  }
  return options;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export { _eventFromRejectionWithPrimitive };
export { _getUnhandledRejectionError };
export const globalHandlersIntegration = _module.defineIntegration(function _globalHandlersIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({ "Null": null, 0: null }, {});
    const obj = {
      name: "GlobalHandlers",
      setupOnce() {
          Error.stackTraceLimit = 50;
        },
      setup(arg0) {
          if (closure_0.onerror) {
            function _installGlobalOnErrorHandler(arg0) {
              const result = arg0(closure_1[0]).addGlobalErrorInstrumentationHandler((msg) => {
                let attachStacktrace;
                let column;
                let error;
                let line;
                let stackParser;
                let url;
                ({ stackParser, attachStacktrace } = callback());
                let obj = msg(closure_1[0]);
                if (obj.getClient() === msg) {
                  if (!obj5.shouldIgnoreOnError()) {
                    ({ url, line, column, error } = msg);
                    const obj2 = msg(closure_1[2]);
                    msg = error;
                    if (!error) {
                      msg = msg.msg;
                    }
                    const result = obj2.eventFromUnknownInput(stackParser, msg, undefined, attachStacktrace, false);
                    function _enhanceEventWithInitialFrame(result, url, line, column) {
                      const tmp = result.exception || {};
                      result.exception = tmp;
                      const tmp2 = tmp.values || [];
                      tmp.values = tmp2;
                      const tmp3 = tmp2[0] || {};
                      tmp2[0] = tmp3;
                      const tmp4 = tmp3.stacktrace || {};
                      tmp3.stacktrace = tmp4;
                      let arr = tmp4.frames || [];
                      tmp4.frames = arr;
                      let obj = callback(closure_1[0]);
                      let combined;
                      if (obj.isString(url)) {
                        if (0 !== url.length) {
                          combined = url;
                          if (url.startsWith("data:")) {
                            const _HermesInternal = HermesInternal;
                            combined = "<" + callback(closure_1[0]).stripDataUrlContent(url, false) + ">";
                            const obj2 = callback(closure_1[0]);
                          }
                        }
                      }
                      if (null == combined) {
                        combined = callback(closure_1[0]).getLocationHref();
                        const obj3 = callback(closure_1[0]);
                      }
                      if (0 === arr.length) {
                        obj = { colno: column, filename: combined, function: callback(closure_1[0]).UNKNOWN_FUNCTION, in_app: true, lineno: line };
                        arr = arr.push(obj);
                      }
                      return result;
                    }(result, url, line, column);
                    result.level = "error";
                    obj = { originalException: error, mechanism: {} };
                    msg(closure_1[0]).captureEvent(result, obj);
                    const obj3 = msg(closure_1[0]);
                  }
                  const obj5 = msg(closure_1[1]);
                }
              });
            }(arg0);
            callback("onerror");
          }
          if (closure_0.onunhandledrejection) {
            function _installGlobalOnUnhandledRejectionHandler(arg0) {
              const result = arg0(closure_1[0]).addGlobalUnhandledRejectionInstrumentationHandler((arg0) => {
                let attachStacktrace;
                let stackParser;
                ({ stackParser, attachStacktrace } = callback3());
                let num = 0;
                let obj = arg0(closure_1[0]);
                if (obj.getClient() === arg0) {
                  if (!obj6.shouldIgnoreOnError()) {
                    obj = callback(arg0);
                    if (obj3.isPrimitive(obj)) {
                      let result = callback2(obj);
                    } else {
                      const obj4 = arg0(closure_1[2]);
                      result = obj4.eventFromUnknownInput(stackParser, obj, undefined, attachStacktrace, true);
                    }
                    result.level = "error";
                    num = arg0(closure_1[num]);
                    obj = {};
                    obj.originalException = obj;
                    obj = {};
                    obj.mechanism = obj;
                    num.captureEvent(result, obj);
                    const obj3 = arg0(closure_1[num]);
                  }
                  const obj6 = arg0(closure_1[1]);
                }
              });
            }(arg0);
            callback("onunhandledrejection");
          }
        }
    };
    return obj;
  }
});
