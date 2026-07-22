// Module ID: 7276
// Function ID: 58642
// Name: normalize
// Dependencies: []
// Exports: normalizeUrlToBase

// Module 7276 (normalize)
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
      let memoBuilderResult = arguments[4];
    }
    callback(memoBuilderResult, 2);
    if (null != __sentry_skip_normalization__) {
      const items = [];
      if (!items.includes(typeof __sentry_skip_normalization__)) {
        if ("number" === tmp35) {
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
              return "[VueViewModel]";
            } else {
              if (obj2.isSyntheticEvent(_events)) {
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
                  return "[Function: " + callback(closure_2[4]).getFunctionName(_events) + "]";
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
                  if (prototypeOf) {
                    str7 = prototypeOf.constructor.name;
                  }
                  const _HermesInternal2 = HermesInternal;
                  if (obj3.test(str7)) {
                    let combined = concat(tmp21, "]");
                  } else {
                    combined = concat(tmp21, "]");
                  }
                  return combined;
                }
              }
              const obj2 = callback(closure_2[3]);
            }
            const obj = callback(closure_2[3]);
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
                if ("function" === typeof obj2.toJSON) {
                  return visit("", obj2.toJSON(), tmp12 - 1, tmp, tmp3);
                }
              }
              while (true) {
                let tmp19 = globalThis;
                let _Array = Array;
                let tmp20 = Array.isArray(__sentry_skip_normalization__) ? [] : {};
                let tmp21 = require;
                let tmp22 = dependencyMap;
                let obj3 = require(dependencyMap[2]);
                let convertToPlainObjectResult = obj3.convertToPlainObject(__sentry_skip_normalization__);
                let tmp24 = convertToPlainObjectResult;
                let num5 = 0;
                let keys = Object.keys();
                if (keys !== undefined) {
                  let tmp26 = num5;
                  let tmp27 = keys[tmp11];
                  while (tmp27 !== undefined) {
                    let _Object = Object;
                    let tmp36 = tmp27;
                    if (!hasOwnProperty.call(convertToPlainObjectResult, tmp27)) {
                      continue;
                    } else {
                      let tmp28 = num2;
                      if (tmp26 >= tmp) {
                        let str6 = "[MaxProperties ~]";
                        tmp20[tmp27] = "[MaxProperties ~]";
                        // break
                      } else {
                        let tmp29 = visit;
                        let tmp30 = num;
                        let tmp31 = num2;
                        let tmp32 = memoBuilderResult;
                        let tmp33 = tmp27;
                        tmp20[tmp27] = visit(tmp36, convertToPlainObjectResult[tmp27], tmp12 - 1, tmp, tmp3);
                        num5 = tmp26 + 1;
                        // continue
                      }
                      break;
                    }
                    break;
                  }
                }
                let tmp7Result = tmp7(__sentry_skip_normalization__);
                return tmp20;
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
  memoBuilderResult = require(dependencyMap[1]).memoBuilder();
}
let closure_3 = require(dependencyMap[0]);
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
