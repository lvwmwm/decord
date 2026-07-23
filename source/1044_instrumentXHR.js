// Module ID: 1044
// Function ID: 11216
// Name: instrumentXHR
// Dependencies: [57, 794, 1015]
// Exports: addXhrInstrumentationHandler

// Module 1044 (instrumentXHR)
import _slicedToArray from "_slicedToArray";

function instrumentXHR() {
  if (require(1015) /* WINDOW */.WINDOW.XMLHttpRequest) {
    const _XMLHttpRequest = XMLHttpRequest;
    let _Proxy = Proxy;
    let obj = {
      apply(apply, onreadystatechange) {
          let closure_0 = onreadystatechange;
          const error = new Error();
          let obj = outer1_0(outer1_1[1]);
          let closure_2 = 1000 * obj.timestampInSeconds();
          let obj1 = outer1_0(outer1_1[1]);
          if (obj1.isString(arg2[0])) {
            const formatted = arg2[0].toUpperCase();
            const str = arg2[0];
          }
          if (obj3.isString(arg2[1])) {
            let str3 = tmp3;
          } else {
            str3 = str2.toString();
          }
          while (true) {
            if (!formatted) {
              break;
            } else if (!str3) {
              break;
            } else {
              let tmp5 = outer1_3;
              obj = { method: formatted, url: str3, request_headers: {} };
              onreadystatechange[outer1_3] = obj;
              let str4 = "POST";
              let tmp6 = "POST" === formatted && str3.match(/sentry_key/);
              if (tmp6) {
                let flag = true;
                onreadystatechange.__sentry_own_request__ = true;
              }
              function onreadystatechangeHandler() {
                if (onreadystatechange[outer2_3]) {
                  if (4 === onreadystatechange.readyState) {
                    tmp2.status_code = onreadystatechange.status;
                    const obj = { endTimestamp: 1000 * outer2_0(outer2_1[1]).timestampInSeconds(), startTimestamp: closure_2, xhr: onreadystatechange, virtualError: error };
                    const obj2 = outer2_0(outer2_1[1]);
                    outer2_0(outer2_1[1]).triggerHandlers("xhr", obj);
                    while (true) {
                      let tmp4 = __exception;
                      continue;
                    }
                    const obj3 = outer2_0(outer2_1[1]);
                  }
                }
              }
              let str5 = "onreadystatechange";
              if ("onreadystatechange" in onreadystatechange) {
                let str6 = "function";
                if ("function" === typeof onreadystatechange.onreadystatechange) {
                  let _Proxy = Proxy;
                  obj = {
                    apply(apply) {
                              onreadystatechangeHandler();
                              return apply.apply(arg1, arg2);
                            }
                  };
                  let tmp8 = new.target;
                  let tmp9 = new.target;
                  let tmp10 = obj;
                  let proxy = new Proxy(onreadystatechange.onreadystatechange, obj);
                  let tmp12 = proxy;
                  onreadystatechange.onreadystatechange = proxy;
                }
                let _Proxy2 = Proxy;
                obj1 = {
                  apply(apply) {
                          const tmp = outer2_2(arg2, 2);
                          let isStringResult = tmp3;
                          if (arg1[outer2_3]) {
                            isStringResult = outer2_0(outer2_1[1]).isString(str);
                            const obj = outer2_0(outer2_1[1]);
                          }
                          if (isStringResult) {
                            isStringResult = outer2_0(outer2_1[1]).isString(tmp2);
                            const obj2 = outer2_0(outer2_1[1]);
                          }
                          if (isStringResult) {
                            tmp3.request_headers[str.toLowerCase()] = tmp2;
                          }
                          return apply.apply(arg1, arg2);
                        }
                };
                let tmp13 = new.target;
                let tmp14 = new.target;
                let tmp15 = obj1;
                let proxy1 = new Proxy(onreadystatechange.setRequestHeader, obj1);
                let tmp17 = proxy1;
                onreadystatechange.setRequestHeader = proxy1;
                return apply.apply(onreadystatechange, arg2);
              }
              let str7 = "readystatechange";
              let listener = onreadystatechange.addEventListener("readystatechange", onreadystatechangeHandler);
            }
            return apply.apply(onreadystatechange, arg2);
          }
        }
    };
    let proxy = new Proxy(prototype.open, obj);
    prototype.open = proxy;
    let _Proxy2 = Proxy;
    obj = {
      apply(apply, xhr) {
          if (xhr[outer1_3]) {
            if (undefined !== arg2[0]) {
              tmp.body = arg2[0];
            }
            const obj = { startTimestamp: 1000 * outer1_0(outer1_1[1]).timestampInSeconds(), xhr };
            const obj2 = outer1_0(outer1_1[1]);
            outer1_0(outer1_1[1]).triggerHandlers("xhr", obj);
            return apply.apply(xhr, arg2);
          } else {
            return apply.apply(xhr, arg2);
          }
        }
    };
    let proxy1 = new Proxy(prototype.send, obj);
    prototype.send = proxy1;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __sentry_xhr_v3__ = "__sentry_xhr_v3__";

export const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
export const addXhrInstrumentationHandler = function addXhrInstrumentationHandler(arg0) {
  require(794) /* registerSpanErrorInstrumentation */.addHandler("xhr", arg0);
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  require(794) /* registerSpanErrorInstrumentation */.maybeInstrument("xhr", instrumentXHR);
};
export { instrumentXHR };
