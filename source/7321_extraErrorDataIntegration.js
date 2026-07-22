// Module ID: 7321
// Function ID: 59038
// Name: extraErrorDataIntegration
// Dependencies: []

// Module 7321 (extraErrorDataIntegration)
const _module = require(dependencyMap[0]);

export const extraErrorDataIntegration = _module.defineIntegration(function _extraErrorDataIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const depth = first.depth;
    let num = 3;
    if (undefined !== depth) {
      num = depth;
    }
    const require = num;
    const captureErrorCause = first.captureErrorCause;
    let closure_1 = undefined === captureErrorCause || captureErrorCause;
    const obj = {
      name: "ExtraErrorData",
      processEvent(contexts, arg1, getOptions) {
          const maxValueLength = getOptions.getOptions().maxValueLength;
          let num = 250;
          if (undefined !== maxValueLength) {
            num = maxValueLength;
          }
          return function _enhanceEventWithErrorData(contexts, arg1, arg2, arg3, arg4) {
            if (arguments.length > 1) {
              if (undefined !== arguments[1]) {
                let obj = arguments[1];
              }
              if (arguments.length > 2) {
                const tmp = arguments[2];
              }
              if (arguments.length > 3) {
                const tmp2 = arguments[3];
              }
              if (arguments.length > 4) {
                const tmp3 = arguments[4];
              }
              if (obj.originalException) {
                if (obj2.isError(obj.originalException)) {
                  const originalException = obj.originalException;
                  const items = [null, null, null, null, null, null, null, null, null];
                  obj = {};
                  const _Object = Object;
                  const keys = Object.keys(originalException);
                  const iter = keys[Symbol.iterator]();
                  let str = "";
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp53 = nextResult;
                    let tmp54 = items;
                    if (-1 !== items.indexOf(nextResult)) {
                      // continue
                    } else {
                      let tmp15 = originalException;
                      let tmp16 = nextResult;
                      let tmp17 = obj3[tmp53];
                      let tmp18 = tmp17;
                      let tmp19 = obj;
                      let tmp20 = callback;
                      let tmp21 = closure_1;
                      let obj5 = callback(closure_1[1]);
                      if (!obj5.isError(tmp17)) {
                        let tmp22 = tmp17;
                        if ("string" !== typeof tmp18) {
                          let truncateResult = tmp17;
                        }
                        obj[tmp53] = truncateResult;
                      }
                      let tmp24 = callback;
                      let tmp25 = closure_1;
                      let obj6 = callback(closure_1[4]);
                      let tmp26 = tmp17;
                      let _HermesInternal = HermesInternal;
                      let tmp27 = tmp3;
                      truncateResult = obj6.truncate("" + tmp18, tmp8);
                    }
                  }
                  let tmp28 = tmp2;
                  if (tmp2) {
                    tmp28 = undefined !== obj3.cause;
                  }
                  if (!tmp28) {
                    if ("function" === typeof obj3.toJSON) {
                      const toJSONResult = obj3.toJSON();
                      const _Object4 = Object;
                      const keys1 = Object.keys(toJSONResult);
                      for (const item10100 of keys1) {
                        let tmp37 = toJSONResult;
                        let tmp38 = tmp57[item10100];
                        let str5 = tmp38;
                        let tmp39 = obj;
                        let tmp40 = closure_0;
                        let tmp41 = closure_1;
                        let obj8 = closure_0(closure_1[1]);
                        let tmp42 = tmp38;
                        if (obj8.isError(tmp38)) {
                          str = str5.toString();
                        } else {
                          str = str5;
                        }
                        obj[item10100] = str;
                      }
                      const tmp57 = toJSONResult;
                    }
                    while (true) {
                      if (tmp44) {
                        let tmp45 = globalThis;
                        let _Object2 = Object;
                        let merged = Object.assign({}, contexts.contexts);
                        let tmp47 = callback;
                        let tmp48 = closure_1;
                        let obj9 = callback(closure_1[2]);
                        let normalizeResult = obj9.normalize(tmp44, tmp);
                        let obj10 = callback(closure_1[1]);
                        if (obj10.isPlainObject(normalizeResult)) {
                          let tmp50 = callback;
                          let tmp51 = closure_1;
                          let obj11 = callback(closure_1[3]);
                          let str6 = "__sentry_skip_normalization__";
                          let flag = true;
                          let result = obj11.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
                          merged[tmp6] = normalizeResult;
                        }
                        let _Object3 = Object;
                        obj = { contexts: merged };
                        return Object.assign({}, contexts, obj);
                      } else {
                        return contexts;
                      }
                    }
                  } else {
                    if (obj7.isError(obj3.cause)) {
                      let str1 = str3.toString();
                    } else {
                      str1 = str3;
                    }
                    obj.cause = str1;
                    const obj7 = callback(closure_1[1]);
                  }
                  const tmp6 = obj.originalException.name || obj.originalException.constructor.name;
                  const tmp8 = tmp3;
                }
                const obj2 = callback(closure_1[1]);
              }
              return contexts;
            }
            obj = {};
          }(contexts, arg1, num, closure_1, num);
        }
    };
    return obj;
  }
  first = {};
});
