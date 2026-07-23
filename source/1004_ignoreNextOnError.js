// Module ID: 1004
// Function ID: 10970
// Name: ignoreNextOnError
// Dependencies: [794]
// Exports: getHttpRequestData, shouldIgnoreOnError

// Module 1004 (ignoreNextOnError)
function ignoreNextOnError() {
  closure_2 = closure_2 + 1;
  const timerId = setTimeout(() => {
    closure_2 = closure_2 - 1;
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = 0;
function wrap(arg0) {
  const _require = arg0;
  if (arguments.length > 1) {
    const dependencyMap = {};
    if ("function" === typeof tmp) {
      const __sentry_wrapped__ = tmp.__sentry_wrapped__;
      if (__sentry_wrapped__) {
        return "function" === typeof tmp6 ? __sentry_wrapped__ : arg0;
      } else {
        let obj = _require(794);
        if (obj.getOriginalFunction(tmp)) {
          return tmp;
        } else {
          function sentryWrapped() {
            const length = arguments.length;
            const array = new Array(length);
            for (let num = 0; num < length; num = num + 1) {
              let tmp3 = array;
              arr[num] = arguments[num];
            }
            return array.apply(this, array.map((arg0) => outer2_4(arg0, outer1_1)));
          }
          for (const key10030 in tmp) {
            let tmp28 = key10030;
            let _Object3 = Object;
            let tmp29 = arg0;
            let tmp27 = key10030;
            if (!hasOwnProperty.call(tmp, key10030)) {
              continue;
            } else {
              let tmp12 = sentryWrapped;
              let tmp13 = tmp27;
              let tmp14 = arg0;
              sentryWrapped[tmp28] = tmp[tmp28];
              continue;
            }
            continue;
          }
          while (true) {
            let tmp15 = _require;
            let tmp16 = dependencyMap;
            let obj2 = _require(794);
            let tmp17 = sentryWrapped;
            let tmp18 = arg0;
            let markFunctionWrappedResult = obj2.markFunctionWrapped(sentryWrapped, tmp);
            let obj3 = _require(794);
            let str2 = "__sentry_wrapped__";
            let result = obj3.addNonEnumerableProperty(tmp, "__sentry_wrapped__", sentryWrapped);
            let tmp21 = globalThis;
            let _Object = Object;
            let tmp22 = sentryWrapped;
            let str3 = "name";
            if (!Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable) {
              break;
            } else {
              let _Object2 = Object;
              let tmp23 = sentryWrapped;
              obj = {
                get() {
                              return name.name;
                            }
              };
              let definePropertyResult = Object.defineProperty(sentryWrapped, "name", obj);
              break;
            }
          }
        }
      }
    } else {
      return tmp;
    }
  }
}

export const WINDOW = require("registerSpanErrorInstrumentation").GLOBAL_OBJ;
export const getHttpRequestData = function getHttpRequestData() {
  let obj = require(794) /* registerSpanErrorInstrumentation */;
  const locationHref = obj.getLocationHref();
  const referrer = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.document || {}.referrer;
  const tmp2 = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.document || {};
  const userAgent = require(794) /* registerSpanErrorInstrumentation */.GLOBAL_OBJ.navigator || {}.userAgent;
  obj = { url: locationHref };
  let tmp4 = referrer;
  if (referrer) {
    obj = { Referer: referrer };
    tmp4 = obj;
  }
  let tmp5 = userAgent;
  if (userAgent) {
    const obj1 = { "User-Agent": userAgent };
    tmp5 = obj1;
  }
  obj.headers = Object.assign({}, tmp4, tmp5);
  return obj;
};
export { ignoreNextOnError };
export const shouldIgnoreOnError = function shouldIgnoreOnError() {
  return c2 > 0;
};
export { wrap };
