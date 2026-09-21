// Module ID: 791
// Function ID: 792
// Name: _extractErrorData
// Dependencies: [756, 696, 734, 691, 701, 692, 693]

// Module 791 (_extractErrorData)
import _mod692 from "module_692" /* 692 */;
import consoleSandbox from "consoleSandbox" /* 693 */;
import _mod696 from "module_696" /* 696 */;
import setupIntegration from "setupIntegration" /* 756 */;

function _extractErrorData(cause, arg1, arg2) {
  try {
    const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
    const obj = {};
    const _Object = Object;
    const keys = Object.keys(cause);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp9 = nextResult;
      if (-1 !== items.indexOf(nextResult)) {
        continue;
      } else {
        let tmp40 = cause[tmp9];
        let tmp41 = tmp40;
        let tmp44 = require;
        let obj5 = _mod696;
        if (!obj5.isError(tmp40)) {
          if (typeof tmp41 !== "string") {
            obj[tmp9] = tmp41;
          }
        }
        if (arg2) {
          let tmp44Result = tmp44(701);
          let _HermesInternal2 = HermesInternal;
          let truncateResult = tmp44Result.truncate("" + tmp41, arg2);
        } else {
          let _HermesInternal = HermesInternal;
          truncateResult = "" + tmp41;
        }
      }
    }
    if (arg1) {
      if (undefined !== cause.cause) {
        if (obj6.isError(cause.cause)) {
          let name = cause.cause.name;
          if (!name) {
            name = cause.cause.constructor.name;
          }
          const obj2 = {};
          obj2[name] = _extractErrorData(cause.cause, false, arg2);
          obj.cause = obj2;
        } else {
          obj.cause = cause.cause;
        }
        obj6 = _mod696;
      }
    }
    if (typeof cause.toJSON === "function") {
      const toJSONResult = cause.toJSON();
      const _Object2 = Object;
      const keys1 = Object.keys(toJSONResult);
      for (const item10058 of keys1) {
        let tmp24 = tmp53[item10058];
        let str2 = tmp24;
        let obj4 = _mod696;
        if (obj4.isError(tmp24)) {
          let str1 = str2.toString();
        } else {
          str1 = str2;
        }
        obj[item10058] = str1;
        continue;
      }
      const tmp53 = toJSONResult;
    }
    return obj;
  } catch (tmp32) {
    if (_mod692.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      debug.error("Unable to extract extra data from the Error object:", tmp32);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extraErrorDataIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_1 = undefined;
  const depth = obj.depth;
  const captureErrorCause = obj.captureErrorCause;
  closure_1 = undefined === captureErrorCause || captureErrorCause;
  return {
    name: "ExtraErrorData",
    processEvent(contexts, arg1, getOptions) {
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        tmp3 = contexts;
        if (obj2.isError(obj.originalException)) {
          const tmp8 = _extractErrorData(obj.originalException, closure_1, getOptions.getOptions().maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            const obj3 = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = tmp4(734);
            const normalizeResult = normalizer.normalize(tmp8, num);
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const result = tmp4(691).addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj3[tmp6] = normalizeResult;
              const tmp4Result2 = tmp4(691);
            }
            const obj4 = {};
            const merged1 = Object.assign(contexts);
            obj4.contexts = obj3;
            tmp3 = obj4;
            tmp4Result = tmp4(696);
          }
          tmp6 = obj.originalException.name || obj.originalException.constructor.name;
        }
        obj2 = _mod696;
      }
      return tmp3;
    }
  };
});
