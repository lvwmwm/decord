// Module ID: 897
// Function ID: 898
// Name: ignoreNextOnError
// Dependencies: [686]
// Exports: getHttpRequestData, shouldIgnoreOnError

// Module 897 (ignoreNextOnError)
import _mod686 from "module_686" /* 686 */;

const require = globalThis.__r;

function ignoreNextOnError() {
  closure_2 = closure_2 + 1;
  const timerId = setTimeout(() => {
    closure_2 = closure_2 - 1;
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_2 = 0;
function wrap(__sentry_wrapped__) {
  _require = __sentry_wrapped__;
  let obj = arg1;
  let tmp2;
  if (arg1 === undefined) {
    obj = {};
  }
  if ((function isFunction(fn) {
    return typeof fn === "function";
  })(__sentry_wrapped__)) {
    try {
      __sentry_wrapped__ = __sentry_wrapped__.__sentry_wrapped__;
      if (__sentry_wrapped__) {
        let tmp15 = __sentry_wrapped__;
        if (typeof tmp3 === "function") {
          tmp15 = __sentry_wrapped__;
        }
        return tmp15;
      } else {
        if (obj2.getOriginalFunction(__sentry_wrapped__)) {
          return __sentry_wrapped__;
        } else {
          function sentryWrapped() {
            const items = [...arguments];
            try {
              const self = this;
              return items.apply(this, items.map((item) => wrap(item, closure_1)));
            } catch (tmp2) {
              obj = tmp2;
              ignoreNextOnError();
              obj = __sentry_wrapped__(obj[0]);
              obj.withScope((addEventProcessor) => {
                addEventProcessor.addEventProcessor((extra) => {
                  if (mechanism.mechanism) {
                    obj = _arguments(obj[0]);
                    const result = obj.addExceptionTypeValue(extra, undefined, undefined);
                    const result1 = _arguments(obj[0]).addExceptionMechanism(extra, tmp.mechanism);
                    const obj2 = _arguments(obj[0]);
                  }
                  const obj3 = {};
                  const merged = Object.assign(extra.extra);
                  obj3.arguments = _arguments;
                  extra.extra = obj3;
                  return extra;
                });
                _mod686.captureException(mechanism);
              });
              throw tmp2;
            }
          }
          try {
            for (const key10019 in arg0) {
              let tmp17 = key10019;
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10019);
              } else {
                hasOwnPropertyResult = call(arg0, key10019);
              }
              if (!hasOwnPropertyResult) {
                continue;
              } else {
                sentryWrapped[tmp17] = arg0[tmp17];
                continue;
              }
              continue;
            }
            require("module_686").markFunctionWrapped(sentryWrapped, __sentry_wrapped__);
            tmp2 = require("module_686");
            let result = tmp2.addNonEnumerableProperty(__sentry_wrapped__, "__sentry_wrapped__", sentryWrapped);
            let obj3 = require("module_686");
          } catch (err) {
          }
        }
        obj2 = require("module_686");
      }
    } catch (err) {
      return tmp;
    }
  } else {
    return __sentry_wrapped__;
  }
}

export const WINDOW = _mod686.GLOBAL_OBJ;
export const getHttpRequestData = function getHttpRequestData() {
  const locationHref = _mod686.getLocationHref();
  const referrer = _mod686.GLOBAL_OBJ.document || {}.referrer;
  const tmp4 = _mod686.GLOBAL_OBJ.document || {};
  const userAgent = _mod686.GLOBAL_OBJ.navigator || {}.userAgent;
  const obj2 = { url: locationHref, headers: null };
  let tmp6 = referrer;
  if (referrer) {
    const obj3 = { Referer: referrer };
    tmp6 = obj3;
  }
  const merged = Object.assign(tmp6);
  let tmp8 = userAgent;
  if (userAgent) {
    const obj5 = { "User-Agent": userAgent };
    tmp8 = obj5;
  }
  const merged1 = Object.assign(tmp8);
  obj2.headers = {};
  return obj2;
};
export { ignoreNextOnError };
export function shouldIgnoreOnError() {
  return closure_2 > 0;
}
export { wrap };
