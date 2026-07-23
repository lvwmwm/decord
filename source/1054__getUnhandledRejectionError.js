// Module ID: 1054
// Function ID: 11293
// Name: _getUnhandledRejectionError
// Dependencies: [794, 1004, 1007, 1048]

// Module 1054 (_getUnhandledRejectionError)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

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
  if (require(1048).DEBUG_BUILD) {
    const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
    const _HermesInternal = HermesInternal;
    debug.log("Global Handler attached: " + arg0);
  }
}
function getOptions() {
  let options;
  let obj = require(794) /* registerSpanErrorInstrumentation */;
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

export { _eventFromRejectionWithPrimitive };
export { _getUnhandledRejectionError };
export const globalHandlersIntegration = registerSpanErrorInstrumentation.defineIntegration(function _globalHandlersIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({ onerror: true, onunhandledrejection: true }, {});
    let obj = {
      name: "GlobalHandlers",
      setupOnce() {
          Error.stackTraceLimit = 50;
        },
      setup(arg0) {
          if (closure_0.onerror) {
            (function _installGlobalOnErrorHandler(arg0) {
              const callback = arg0;
              let result = callback(outer2_1[0]).addGlobalErrorInstrumentationHandler((msg) => {
                let attachStacktrace;
                let column;
                let error;
                let line;
                let stackParser;
                let url;
                ({ stackParser, attachStacktrace } = outer3_5());
                let obj = callback(outer3_1[0]);
                if (obj.getClient() === callback) {
                  if (!obj5.shouldIgnoreOnError()) {
                    ({ url, line, column, error } = msg);
                    let obj2 = callback(outer3_1[2]);
                    msg = error;
                    if (!error) {
                      msg = msg.msg;
                    }
                    const result = obj2.eventFromUnknownInput(stackParser, msg, undefined, attachStacktrace, false);
                    (function _enhanceEventWithInitialFrame(result, url, line, column) {
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
                      let obj = callback(outer4_1[0]);
                      let combined;
                      if (obj.isString(url)) {
                        if (0 !== url.length) {
                          combined = url;
                          if (url.startsWith("data:")) {
                            const _HermesInternal = HermesInternal;
                            combined = "<" + callback(outer4_1[0]).stripDataUrlContent(url, false) + ">";
                            const obj2 = callback(outer4_1[0]);
                          }
                        }
                      }
                      if (null == combined) {
                        combined = callback(outer4_1[0]).getLocationHref();
                        const obj3 = callback(outer4_1[0]);
                      }
                      if (0 === arr.length) {
                        obj = { colno: column, filename: combined, function: callback(outer4_1[0]).UNKNOWN_FUNCTION, in_app: true, lineno: line };
                        arr = arr.push(obj);
                      }
                      return result;
                    })(result, url, line, column);
                    result.level = "error";
                    obj = { originalException: error, mechanism: { handled: false, type: "auto.browser.global_handlers.onerror" } };
                    callback(outer3_1[0]).captureEvent(result, obj);
                    let obj3 = callback(outer3_1[0]);
                  }
                  obj5 = callback(outer3_1[1]);
                }
              });
            })(arg0);
            outer1_4("onerror");
          }
          if (closure_0.onunhandledrejection) {
            (function _installGlobalOnUnhandledRejectionHandler(arg0) {
              const callback = arg0;
              let result = callback(outer2_1[0]).addGlobalUnhandledRejectionInstrumentationHandler((arg0) => {
                let attachStacktrace;
                let stackParser;
                ({ stackParser, attachStacktrace } = outer3_5());
                let num = 0;
                let obj = callback(outer3_1[0]);
                if (obj.getClient() === callback) {
                  if (!obj6.shouldIgnoreOnError()) {
                    obj = outer3_2(arg0);
                    if (obj3.isPrimitive(obj)) {
                      let result = outer3_3(obj);
                    } else {
                      const obj4 = callback(outer3_1[2]);
                      result = obj4.eventFromUnknownInput(stackParser, obj, undefined, attachStacktrace, true);
                    }
                    result.level = "error";
                    num = callback(outer3_1[num]);
                    obj = {};
                    obj.originalException = obj;
                    obj = { handled: false, type: "auto.browser.global_handlers.onunhandledrejection" };
                    obj.mechanism = obj;
                    num.captureEvent(result, obj);
                    obj3 = callback(outer3_1[num]);
                  }
                  obj6 = callback(outer3_1[1]);
                }
              });
            })(arg0);
            outer1_4("onunhandledrejection");
          }
        }
    };
    return obj;
  }
});
