// Module ID: 7326
// Function ID: 59072
// Name: extraErrorDataIntegration
// Dependencies: [7292, 7243, 7281, 7242, 7245, 7264, 7236]

// Module 7326 (extraErrorDataIntegration)
import setupIntegration from "setupIntegration";


export const extraErrorDataIntegration = setupIntegration.defineIntegration(function _extraErrorDataIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const depth = first.depth;
    let num = 3;
    if (undefined !== depth) {
      num = depth;
    }
    const captureErrorCause = first.captureErrorCause;
    let closure_1 = undefined === captureErrorCause || captureErrorCause;
    let obj = {
      name: "ExtraErrorData",
      processEvent(contexts, arg1, getOptions) {
          const maxValueLength = getOptions.getOptions().maxValueLength;
          let num = 250;
          if (undefined !== maxValueLength) {
            num = maxValueLength;
          }
          return (function _enhanceEventWithErrorData(contexts, arg1, arg2, arg3, arg4) {
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
                  const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
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
                      continue;
                    } else {
                      let tmp15 = originalException;
                      let tmp16 = nextResult;
                      let tmp17 = obj3[tmp53];
                      let tmp18 = tmp17;
                      let tmp19 = obj;
                      let tmp20 = num;
                      let tmp21 = dependencyMap;
                      let obj5 = num(7243);
                      if (!obj5.isError(tmp17)) {
                        let tmp22 = tmp17;
                        if ("string" !== typeof tmp18) {
                          let truncateResult = tmp17;
                        }
                        obj[tmp53] = truncateResult;
                      }
                      let tmp24 = num;
                      let tmp25 = dependencyMap;
                      let obj6 = num(7245);
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
                        let tmp40 = num;
                        let tmp41 = dependencyMap;
                        let obj8 = num(7243);
                        let tmp42 = tmp38;
                        if (obj8.isError(tmp38)) {
                          str = str5.toString();
                        } else {
                          str = str5;
                        }
                        obj[item10100] = str;
                        continue;
                      }
                      const tmp57 = toJSONResult;
                    }
                    while (true) {
                      if (tmp44) {
                        let tmp45 = globalThis;
                        let _Object2 = Object;
                        let merged = Object.assign({}, contexts.contexts);
                        let tmp47 = num;
                        let tmp48 = dependencyMap;
                        let obj9 = num(7281);
                        let normalizeResult = obj9.normalize(tmp44, tmp);
                        let obj10 = num(7243);
                        if (obj10.isPlainObject(normalizeResult)) {
                          let tmp50 = num;
                          let tmp51 = dependencyMap;
                          let obj11 = num(7242);
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
                    obj7 = num(7243);
                  }
                  tmp6 = obj.originalException.name || obj.originalException.constructor.name;
                  tmp8 = tmp3;
                }
                obj2 = num(7243);
              }
              return contexts;
            }
            obj = {};
          })(contexts, arg1, num, closure_1, num);
        }
    };
    return obj;
  }
  first = {};
});
