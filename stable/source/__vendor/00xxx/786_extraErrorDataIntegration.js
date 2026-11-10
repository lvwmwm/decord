// Module ID: 786
// Function ID: 787
// Name: extraErrorDataIntegration
// Dependencies: [751, 691, 729, 686, 696, 687, 688]

// Module 786 (extraErrorDataIntegration)
import _mod686 from "module_686" /* 686 */;
import _mod687 from "module_687" /* 687 */;
import _mod691 from "module_691" /* 691 */;
import module_751 from "module_751" /* 751 */;

function _extractErrorData(cause, arg1, arg2) {
  try {
    const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
    const obj = {};
    const _Object = Object;
    const keys = Object.keys(cause);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = nextResult;
      if (-1 === items.indexOf(nextResult)) {
        let truncateResult;
        let tmp39 = cause[tmp8];
        let tmp40 = tmp39;
        let tmp43 = require;
        let obj5 = _mod691;
        if (!obj5.isError(tmp39)) {
          let tmp16;
          if (typeof tmp40 !== "string") {
            tmp16 = tmp39;
          }
          obj[tmp8] = tmp16;
        }
        if (arg2) {
          let tmp43Result = tmp43(696);
          let _HermesInternal2 = HermesInternal;
          truncateResult = tmp43Result.truncate("" + tmp40, arg2);
        } else {
          let _HermesInternal = HermesInternal;
          truncateResult = "" + tmp40;
        }
        tmp16 = truncateResult;
      }
      continue;
    }
    const tmp17 = arg1;
    if (tmp17) {
      if (undefined !== cause.cause) {
        const obj6 = _mod691;
        if (obj6.isError(cause.cause)) {
          const name = cause.cause.name || cause.cause.constructor.name;
          const obj2 = {};
          obj2[name] = _extractErrorData(cause.cause, false, arg2);
          obj.cause = obj2;
        } else {
          obj.cause = cause.cause;
        }
      }
    }
    if (typeof cause.toJSON === "function") {
      const toJSONResult = cause.toJSON();
      const _Object2 = Object;
      const keys1 = Object.keys(toJSONResult);
      const tmp51 = toJSONResult;
      for (const item10058 of keys1) {
        let str1;
        let tmp23 = tmp51[item10058];
        let str2 = tmp23;
        let obj4 = _mod691;
        if (obj4.isError(tmp23)) {
          str1 = str2.toString();
        } else {
          str1 = str2;
        }
        obj[item10058] = str1;
        continue;
      }
    }
    return obj;
  } catch (tmp31) {
    const tmp32 = require;
    if (_mod687.DEBUG_BUILD) {
      const debug = tmp32(688).debug;
      debug.error("Unable to extract extra data from the Error object:", tmp31);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extraErrorDataIntegration = module_751.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_1;
  const depth = obj.depth;
  let num = 3;
  if (undefined !== depth) {
    num = depth;
  }
  const captureErrorCause = obj.captureErrorCause;
  closure_1 = undefined === captureErrorCause || captureErrorCause;
  let obj2 = {
    name: "ExtraErrorData",
    processEvent(contexts, arg1, getOptions) {
      let obj = arg1;
      const maxValueLength = getOptions.getOptions().maxValueLength;
      const tmp = num;
      const tmp2 = closure_1;
      if (arg1 === undefined) {
        obj = {};
      }
      let tmp3 = contexts;
      if (obj.originalException) {
        tmp3 = contexts;
        const obj2 = _mod691;
        if (obj2.isError(obj.originalException)) {
          const tmp6 = obj.originalException.name || obj.originalException.constructor.name;
          const tmp8 = _extractErrorData(obj.originalException, tmp2, maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            const obj3 = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = tmp4(729);
            const normalizeResult = normalizer.normalize(tmp8, tmp);
            const tmp4Result = _mod691;
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const tmp4Result2 = _mod686;
              const result = tmp4Result2.addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
              obj3[tmp6] = normalizeResult;
            }
            const obj4 = { contexts: obj3 };
            const merged1 = Object.assign(contexts);
            tmp3 = obj4;
          }
        }
      }
      return tmp3;
    }
  };
  return obj2;
});
