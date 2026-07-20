// Module ID: 841
// Function ID: 9345
// Name: normalize
// Dependencies: [804, 849, 800, 801]
// Exports: normalizeUrlToBase

// Module 841 (normalize)
import isBuiltin from "isBuiltin";

function normalize(arg0) {
  let num = 100;
  if (arguments.length > 1) {
    num = 100;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let num2 = Infinity;
  if (arguments.length > 2) {
    num2 = Infinity;
    if (undefined !== arguments[2]) {
      num2 = arguments[2];
    }
  }
  return visit("", arg0, num, num2);
}
function visit(arg0, __sentry_skip_normalization__) {
  let num = Infinity;
  if (arguments.length > 2) {
    num = Infinity;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  let num2 = Infinity;
  if (arguments.length > 3) {
    num2 = Infinity;
    if (undefined !== arguments[3]) {
      num2 = arguments[3];
    }
  }
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let tmp2 = arguments[4];
    }
    isBuiltin(tmp2, 2);
    if (null != __sentry_skip_normalization__) {
      const items = [];
      if (!items.includes(typeof __sentry_skip_normalization__)) {
        if ("number" === tmp34) {
          const _Number = Number;
        }
        const str2 = function stringifyValue(arg0, _events) {
          if ("domain" === arg0) {
            if (_events) {
              if ("object" === typeof _events) {
                if (_events._events) {
                  return "[Domain]";
                }
              }
            }
          }
          if ("domainEmitter" === arg0) {
            return "[DomainEmitter]";
          } else {
            if (undefined !== closure_0) {
              if (_events === closure_0) {
                return "[Global]";
              }
            }
            const _window = window;
            if ("undefined" !== typeof window) {
              const _window2 = window;
              if (_events === window) {
                return "[Window]";
              }
            }
            const _document = document;
            if ("undefined" !== typeof document) {
              const _document2 = document;
              if (_events === document) {
                return "[Document]";
              }
            }
            if (obj.isVueViewModel(_events)) {
              let tmp12Result = tmp12(tmp13[3]);
              return tmp12Result.getVueInternalName(_events);
            } else {
              tmp12Result = tmp12(tmp13[2]);
              if (tmp12Result.isSyntheticEvent(_events)) {
                return "[SyntheticEvent]";
              } else {
                if ("number" === typeof _events) {
                  const _Number = Number;
                  if (!Number.isFinite(_events)) {
                    const _HermesInternal = HermesInternal;
                    return "[" + _events + "]";
                  }
                }
                if ("function" === typeof _events) {
                  const _HermesInternal5 = HermesInternal;
                  return "[Function: " + callback(closure_2[3]).getFunctionName(_events) + "]";
                } else if ("symbol" === typeof _events) {
                  const _String2 = String;
                  const _HermesInternal4 = HermesInternal;
                  return "[" + String(_events) + "]";
                } else if ("bigint" === typeof _events) {
                  const _String = String;
                  const _HermesInternal3 = HermesInternal;
                  return "[BigInt: " + String(_events) + "]";
                } else {
                  const _Object = Object;
                  const prototypeOf = Object.getPrototypeOf(_events);
                  let str7 = "null prototype";
                  if (null != prototypeOf) {
                    str7 = "null prototype";
                    if (prototypeOf.constructor) {
                      str7 = prototypeOf.constructor.name;
                    }
                  }
                  const _HermesInternal2 = HermesInternal;
                  if (obj3.test(str7)) {
                    let combined = concat(tmp19, "]");
                  } else {
                    combined = concat(tmp19, "]");
                  }
                  return combined;
                }
              }
            }
            const obj = callback(closure_2[2]);
          }
        }(arg0, __sentry_skip_normalization__);
        if (str2.startsWith("[object ")) {
          if (__sentry_skip_normalization__.__sentry_skip_normalization__) {
            return __sentry_skip_normalization__;
          } else {
            if ("number" === typeof __sentry_skip_normalization__.__sentry_override_normalization_depth__) {
              num = __sentry_skip_normalization__.__sentry_override_normalization_depth__;
            }
            if (0 === num) {
              return str2.replace("object ", "");
            } else if (tmp6(__sentry_skip_normalization__)) {
              return "[Circular ~]";
            } else {
              if (__sentry_skip_normalization__) {
                if ("function" === typeof obj.toJSON) {
                  return visit("", obj.toJSON(), tmp11 - 1, tmp, tmp3);
                }
              }
              while (true) {
                let tmp18 = globalThis;
                let _Array = Array;
                let tmp19 = Array.isArray(__sentry_skip_normalization__) ? [] : {};
                let tmp20 = require;
                let tmp21 = dependencyMap;
                let obj2 = require(dependencyMap[1]);
                let convertToPlainObjectResult = obj2.convertToPlainObject(__sentry_skip_normalization__);
                let tmp23 = convertToPlainObjectResult;
                let num5 = 0;
                let keys = Object.keys();
                if (keys !== undefined) {
                  let tmp25 = num5;
                  let tmp26 = keys["number"];
                  while (tmp26 !== undefined) {
                    let _Object = Object;
                    let tmp35 = tmp26;
                    if (!hasOwnProperty.call(convertToPlainObjectResult, tmp26)) {
                      continue;
                    } else {
                      let tmp27 = num2;
                      if (tmp25 >= tmp) {
                        let str6 = "[MaxProperties ~]";
                        tmp19[tmp26] = "[MaxProperties ~]";
                        // break
                      } else {
                        let tmp28 = visit;
                        let tmp29 = num;
                        let tmp30 = num2;
                        let tmp31 = tmp2;
                        let tmp32 = tmp26;
                        tmp19[tmp26] = visit(tmp35, convertToPlainObjectResult[tmp26], tmp11 - 1, tmp, tmp3);
                        num5 = tmp25 + 1;
                        // continue
                      }
                      break;
                    }
                    break;
                  }
                }
                let tmp7Result = tmp7(__sentry_skip_normalization__);
                return tmp19;
              }
            }
          }
        } else {
          return str2;
        }
      }
    }
    return __sentry_skip_normalization__;
  }
  tmp2 = function memoBuilder() {
    const weakSet = new WeakSet();
    const items = [
      function memoize(arg0) {
        const tmp = !weakSet.has(arg0);
        let flag = !tmp;
        if (tmp) {
          weakSet.add(arg0);
          flag = false;
        }
        return flag;
      },
      function unmemoize(arg0) {
        weakSet.delete(arg0);
      }
    ];
    return items;
  }();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function normalizeToSize(arg0) {
  let num = 3;
  if (arguments.length > 1) {
    num = 3;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  let num2 = 102400;
  if (arguments.length > 2) {
    num2 = 102400;
    if (undefined !== arguments[2]) {
      num2 = arguments[2];
    }
  }
  let tmp = normalize(arg0, num);
  if (function jsonSize(arg0) {
    return ~-encodeURI(JSON.stringify(arg0)).split(/%..|./).length;
  }(tmp) > num2) {
    tmp = normalizeToSize(arg0, num - 1, num2);
  }
  return tmp;
}

export { normalize };
export { normalizeToSize };
export const normalizeUrlToBase = function normalizeUrlToBase(arg0, str) {
  const replaced = str.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  str = str.replace(/\\/g, "/");
  const str2 = decodeURI(arg0);
  const str3 = decodeURI(arg0).replace(/\\/g, "/");
  const regExp = new RegExp("(file://)?/*" + replaced + "/*", "ig");
  const replaced1 = decodeURI(arg0).replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(regExp, "app:///");
};
