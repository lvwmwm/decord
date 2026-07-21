// Module ID: 1044
// Function ID: 11215
// Name: instrumentXHR
// Dependencies: []
// Exports: addXhrInstrumentationHandler

// Module 1044 (instrumentXHR)
function instrumentXHR() {
  if (require(dependencyMap[2]).WINDOW.XMLHttpRequest) {
    const _XMLHttpRequest = XMLHttpRequest;
    const _Proxy = Proxy;
    let obj = {
      apply(apply, onreadystatechange) {
          const error = new Error();
          let obj = onreadystatechange(error[1]);
          let closure_2 = 1000 * obj.timestampInSeconds();
          let obj1 = onreadystatechange(error[1]);
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
              let tmp5 = onreadystatechangeHandler;
              obj = { method: formatted, url: str3, request_headers: {} };
              onreadystatechange[onreadystatechangeHandler] = obj;
              let str4 = "POST";
              let tmp6 = "POST" === formatted && str3.match(/sentry_key/);
              if (tmp6) {
                let flag = true;
                onreadystatechange.__sentry_own_request__ = true;
              }
              function onreadystatechangeHandler(arg0, self) {
                if (self[closure_3]) {
                  if (4 === self.readyState) {
                    tmp2.status_code = self.status;
                    const obj = { endTimestamp: 1000 * self(error[1]).timestampInSeconds(), startTimestamp: closure_2, xhr: self, virtualError: error };
                    const obj2 = self(error[1]);
                    self(error[1]).triggerHandlers("xhr", obj);
                    while (true) {
                      let tmp4 = __exception;
                      // continue
                    }
                    const obj3 = self(error[1]);
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
                          const tmp = callback(arg2, 2);
                          let isStringResult = tmp3;
                          if (arg1[closure_3]) {
                            isStringResult = arg1(error[1]).isString(str);
                            const obj = arg1(error[1]);
                          }
                          if (isStringResult) {
                            isStringResult = arg1(error[1]).isString(tmp2);
                            const obj2 = arg1(error[1]);
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
    const proxy = new Proxy(prototype.open, obj);
    prototype.open = proxy;
    const _Proxy2 = Proxy;
    obj = {
      apply(apply, xhr) {
          if (xhr[closure_3]) {
            if (undefined !== arg2[0]) {
              tmp.body = arg2[0];
            }
            const obj = { startTimestamp: 1000 * callback(closure_1[1]).timestampInSeconds(), xhr };
            const obj2 = callback(closure_1[1]);
            callback(closure_1[1]).triggerHandlers("xhr", obj);
            return apply.apply(xhr, arg2);
          } else {
            return apply.apply(xhr, arg2);
          }
        }
    };
    const proxy1 = new Proxy(prototype.send, obj);
    prototype.send = proxy1;
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = "__sentry_xhr_v3__";

export const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
export const addXhrInstrumentationHandler = function addXhrInstrumentationHandler(arg0) {
  require(dependencyMap[1]).addHandler("xhr", arg0);
  const obj = require(dependencyMap[1]);
  require(dependencyMap[1]).maybeInstrument("xhr", instrumentXHR);
};
export { instrumentXHR };
