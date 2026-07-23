// Module ID: 898
// Function ID: 9869
// Name: _extractErrorData
// Dependencies: [77, 863, 804, 841, 799, 809, 800, 801]

// Module 898 (_extractErrorData)
import _defineProperty from "_defineProperty";
import setupIntegration from "setupIntegration";

function _extractErrorData(cause, arg1, arg2) {
  const items = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"];
  const obj = {};
  const keys = Object.keys(cause);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp31 = nextResult;
    let tmp32 = items;
    if (-1 !== items.indexOf(nextResult)) {
      continue;
    } else {
      let tmp33 = cause;
      let tmp34 = nextResult;
      let tmp35 = cause[tmp31];
      let tmp36 = tmp35;
      let tmp37 = obj;
      let tmp38 = require;
      let tmp39 = dependencyMap;
      let obj4 = require(804) /* isBuiltin */;
      if (!obj4.isError(tmp35)) {
        let tmp3 = tmp35;
        if ("string" !== typeof tmp36) {
          let tmp4 = tmp35;
          obj[tmp31] = tmp36;
        }
      }
      let tmp5 = arg2;
      if (arg2) {
        let tmp8 = require;
        let tmp9 = dependencyMap;
        let obj2 = require(809) /* isMatchingPattern */;
        let tmp10 = tmp35;
        let _HermesInternal2 = HermesInternal;
        let tmp11 = arg2;
        let truncateResult = obj2.truncate("" + tmp36, arg2);
      } else {
        let tmp6 = tmp35;
        let _HermesInternal = HermesInternal;
        truncateResult = "" + tmp36;
      }
      let tmp12 = truncateResult;
    }
  }
  if (arg1) {
    if (undefined !== cause.cause) {
      if (obj5.isError(cause.cause)) {
        const name = cause.cause.name;
        let name2 = name;
        if (!name) {
          name2 = cause.cause.constructor.name;
        }
        obj.cause = _defineProperty({}, name2, _extractErrorData(cause.cause, false, arg2));
      } else {
        obj.cause = cause.cause;
      }
      obj5 = require(804) /* isBuiltin */;
    }
  }
  if ("function" === typeof cause.toJSON) {
    const toJSONResult = cause.toJSON();
    const _Object = Object;
    const keys1 = Object.keys(toJSONResult);
    for (const item10073 of keys1) {
      let tmp24 = toJSONResult;
      let tmp25 = tmp45[item10073];
      let str = tmp25;
      let tmp26 = obj;
      let tmp27 = require;
      let tmp28 = dependencyMap;
      let obj3 = require(804) /* isBuiltin */;
      let tmp29 = tmp25;
      if (obj3.isError(tmp25)) {
        str = str.toString();
      }
      obj[item10073] = str;
      continue;
    }
    const tmp45 = toJSONResult;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

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
          return (function _enhanceEventWithErrorData(contexts, arg1, arg2, closure_1, maxValueLength) {
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
                  const tmp8 = outer2_3(obj.originalException, tmp2, tmp3);
                  if (tmp8) {
                    const _Object = Object;
                    const merged = Object.assign({}, contexts.contexts);
                    const normalizeResult = num(841).normalize(tmp8, tmp);
                    const obj3 = num(841);
                    if (obj4.isPlainObject(normalizeResult)) {
                      const result = num(799).addNonEnumerableProperty(normalizeResult, "__sentry_skip_normalization__", true);
                      merged[tmp6] = normalizeResult;
                      const obj5 = num(799);
                    }
                    const _Object2 = Object;
                    obj = { contexts: merged };
                    return Object.assign({}, contexts, obj);
                  } else {
                    return contexts;
                  }
                  tmp6 = obj.originalException.name || obj.originalException.constructor.name;
                }
                obj2 = num(804);
              }
              return contexts;
            }
            obj = {};
          })(contexts, arg1, num, closure_1, getOptions.getOptions().maxValueLength);
        }
    };
    return obj;
  }
  first = {};
});
