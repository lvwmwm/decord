// Module ID: 799
// Function ID: 800
// Name: extraErrorDataIntegration
// Dependencies: [764, 704, 742, 699, 709, 700, 701]

// Module 799 (extraErrorDataIntegration)
import _mod699 from "module_699" /* 699 */;
import _mod700 from "module_700" /* 700 */;
import _mod704 from "module_704" /* 704 */;
import module_764 from "module_764" /* 764 */;

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
        let obj5 = _mod704;
        if (!obj5.isError(tmp39)) {
          let tmp16;
          if (typeof tmp40 !== "string") {
            tmp16 = tmp39;
          }
          obj[tmp8] = tmp16;
        }
        if (arg2) {
          let tmp43Result = tmp43(709);
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
        const obj6 = _mod704;
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
        let obj4 = _mod704;
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
    if (_mod700.DEBUG_BUILD) {
      const debug = tmp32(701).debug;
      debug.error("Unable to extract extra data from the Error object:", tmp31);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extraErrorDataIntegration = module_764.defineIntegration(() => {
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
        const obj2 = _mod704;
        if (obj2.isError(obj.originalException)) {
          const tmp6 = obj.originalException.name || obj.originalException.constructor.name;
          const tmp8 = _extractErrorData(obj.originalException, tmp2, maxValueLength);
          tmp3 = contexts;
          if (tmp8) {
            const obj3 = {};
            const merged = Object.assign(contexts.contexts);
            const normalizer = tmp4(742);
            const normalizeResult = normalizer.normalize(tmp8, tmp);
            const tmp4Result = _mod704;
            if (tmp4Result.isPlainObject(normalizeResult)) {
              const tmp4Result2 = _mod699;
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
