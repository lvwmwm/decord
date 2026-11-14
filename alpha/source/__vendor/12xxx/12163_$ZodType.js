// Module ID: 12163
// Function ID: 12164
// Name: $ZodType
// Dependencies: [32, 5, 12164, 12159, 12165, 12160, 12166, 12167, 12161]
// Exports: getDiscriminatedOption, isValidBase64URL, isValidCIDRv6, isValidCreditCard, isValidIPv6, standardProps

// Module 12163 ($ZodType)
import NEVER2 from "NEVER" /* 12159 */;
import _parse from "_parse" /* 12161 */;
import $ZodCheck2 from "$ZodCheck" /* 12164 */;
import cuid2 from "cuid" /* 12165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import captureStackTrace from "captureStackTrace" /* 12160 */;

const require = globalThis.__r;
let _exports, _self, assignProp, c1, c2, closure_1_0, closure_7, hasOwnProperty, map, map1, number, set;

const f104143 = (arg0) => {
  let str = "/";
  if ("-" === arg0) {
    str = "+";
  }
  return str;
};
const f104144 = (item) => item[0];
const f104149 = (issues) => {
  issues = issues.issues;
  return issues.map((item) => closure_2_10.finalizeIssue(item, closure_1_0, closure_2_8.config()));
};
let self = this;
let obj = function _validateAsync() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c3;
    let _zod = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const obj4 = { async: true };
      closure_2 = toStandardResult;
      _zod = _zod._zod;
      const obj5 = { value, issues: [] };
      await _zod.run(obj5, obj4);
      return closure_2(value, obj4);
    })();
  });
  return obj(...arguments);
};
function canParseURL(arg0) {
  try {
    const _URL = URL;
    if (typeof URL !== "undefined") {
      let flag;
      const _URL4 = URL;
      if (typeof URL.canParse === "function") {
        const _URL3 = URL;
        flag = URL.canParse(arg0);
      }
      return flag;
    }
    const _URL2 = URL;
    const self = this;
    const uRL = new URL(arg0);
    flag = true;
  } catch (err) {
    return false;
  }
}
function validateURL(arg0, protocol) {
  if (!("normalize" in protocol)) {
    if (!("hostname" in protocol)) {
      let URL_UNPARSEABLE;
      if (!("protocol" in protocol)) {
        URL_UNPARSEABLE = canParseURL(arg0) || exports.URL_UNPARSEABLE;
      }
      return URL_UNPARSEABLE;
    }
  }
  URL_UNPARSEABLE = parseURLObject(arg0, protocol);
}
function parseURLObject(arg0, protocol) {
  if (!protocol.normalize) {
    protocol = protocol.protocol;
    let source;
    if (protocol != null) {
      source = protocol.source;
    }
    if (source === cuid.httpProtocol.source) {
      obj = /^https?:\/\//i;
      if (!obj.test(arg0)) {
        return exports.URL_BAD_FORMAT;
      }
    }
  }
  try {
    const _URL = URL;
    if (typeof URL !== "undefined") {
      const _URL4 = URL;
      if (typeof URL.parse === "function") {
        const _URL3 = URL;
        const URL_UNPARSEABLE = _URL4.parse(arg0) ?? exports.URL_UNPARSEABLE;
        return URL_UNPARSEABLE;
      }
    }
    const _URL2 = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(arg0);
    return uRL;
  } catch (err) {
    return exports.URL_UNPARSEABLE;
  }
}
function stripTabAndNewline(trimmed) {
  return trimmed.replace(re16, "");
}
function urlHostnameOk(hostname, hostname2) {
  hostname.lastIndex = 0;
  return hostname.test(hostname.hostname);
}
function urlProtocolOk(protocol, protocol2) {
  let substr;
  protocol.lastIndex = 0;
  protocol = protocol.protocol;
  const test = protocol.test;
  const protocol1 = protocol.protocol;
  if (protocol.endsWith(":")) {
    substr = protocol1.slice(0, -1);
  } else {
    substr = protocol1;
  }
  return test(substr);
}
function isValidBase64(value) {
  if ("" === value) {
    return true;
  } else {
    obj = /\s/;
    if (obj.test(value)) {
      return false;
    } else if (value.length % 4 !== 0) {
      return false;
    } else {
      try {
        const _atob = atob;
        atob(value);
        return true;
      } catch (err) {
        return false;
      }
    }
  }
}
function isValidIBAN(value) {
  let result;
  const iban = cuid.iban;
  let isMatch = iban.test(value);
  if (isMatch) {
    let num9 = 4;
    let num10 = 0;
    let num11 = 0;
    if (4 < value.length) {
      do {
        let sum;
        let charCodeAtResult = value.charCodeAt(num9);
        if (charCodeAtResult >= 65) {
          sum = 100 * num10 + (charCodeAtResult - 55);
        } else {
          sum = 10 * num10 + (charCodeAtResult - 48);
        }
        num10 = sum % 97;
        num9 = num9 + 1;
        num11 = num10;
      } while (num9 < value.length);
    }
    let num12 = 0;
    do {
      let sum1;
      let charCodeAtResult1 = value.charCodeAt(num12);
      if (charCodeAtResult1 >= 65) {
        sum1 = 100 * num11 + (charCodeAtResult1 - 55);
      } else {
        sum1 = 10 * num11 + (charCodeAtResult1 - 48);
      }
      result = sum1 % 97;
      num12 = num12 + 1;
      num11 = result;
    } while (num12 < 4);
    isMatch = 1 === result;
  }
  return isMatch;
}
function isValidJWT(str) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  try {
    const parts = str.split(".");
    if (3 !== parts.length) {
      return false;
    } else {
      const first = _slicedToArray(tmp3, 1)[0];
      const tmp19 = first;
      if (tmp19) {
        const _JSON = JSON;
        const _atob = atob;
        const parsed = JSON.parse(atob(first));
        let tmp7 = !("typ" in parsed);
        if (!tmp7) {
          let typ;
          if (parsed != null) {
            typ = tmp6.typ;
          }
          tmp7 = "JWT" === typ;
        }
        if (tmp7) {
          let alg = tmp6.alg;
          if (alg) {
            let tmp13 = !tmp;
            if (!tmp13) {
              tmp13 = "alg" in tmp6 && parsed.alg === tmp;
              const tmp15 = "alg" in tmp6 && parsed.alg === tmp;
            }
            alg = tmp13;
          }
          tmp7 = alg;
        }
        return tmp7;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
}
function normalizeDef(shape) {
  let optionalKeysResult;
  const keys = Object.keys(shape.shape);
  let ownPropertySymbols = Object.getOwnPropertySymbols(shape.shape);
  if (!ownPropertySymbols.length) {
    ownPropertySymbols = closure_28;
  }
  let tmp2 = keys;
  if (ownPropertySymbols.length) {
    const items = [];
    HermesBuiltin.arraySpread(items, ownPropertySymbols, HermesBuiltin.arraySpread(items, keys, 0));
    tmp2 = items;
  }
  const iter = tmp2[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = nextResult;
    shape = shape.shape;
    let hasItem;
    if (shape != null) {
      let tmp12 = shape[tmp9];
      if (tmp12 != null) {
        let _zod = tmp12._zod;
        if (_zod != null) {
          let traits = _zod.traits;
          if (traits != null) {
            hasItem = traits.has("$ZodType");
          }
        }
      }
    }
    if (hasItem) {
      continue;
    } else {
      let _Error = Error;
      let _String = String;
      let _HermesInternal = HermesInternal;
      let str = "\": expected a Zod schema";
      let str2 = "Invalid element at key \"";
      let self = this;
      let self2 = this;
      let error = new Error("Invalid element at key \"" + String(tmp9) + "\": expected a Zod schema");
      throw error;
    }
  }
  obj = { allKeys: tmp2, symbolKeys: ownPropertySymbols, keySet: new Set(keys), numKeys: keys.length, optionalKeys: new Set(optionalKeysResult) };
  optionalKeysResult = captureStackTrace.optionalKeys(shape.shape);
  const merged = Object.assign(shape);
  new Set(keys);
  new Set(optionalKeysResult);
  return obj;
}
function handleCatchall(items, value, value2, abortEarly, value22, inst, arg6) {
  let items2;
  let closure_0 = value;
  let iter = value;
  let closure_1 = value;
  items = [];
  const keySet = value2.keySet;
  const _zod = value2.catchall._zod;
  const type = _zod.def.type;
  const optin = _zod.optin;
  const optout = _zod.optout;
  let tmp4 = "optional" === optout;
  let num = 0;
  const tmp3 = "defaulted" === optin;
  const keys = Object.keys();
  if (keys !== undefined) {
    let tmp6 = num;
    while (keys[tmp] !== undefined) {
      let num2;
      closure_0 = tmp7;
      let length = tmp6;
      if (arg6) {
        length = tmp6;
        if (iter.issues.length !== tmp6) {
          num2 = 0;
          if (!captureStackTrace.aborted(iter, tmp6)) {
            length = iter.issues.length;
          }
        }
        num = tmp6;
        if (0 === num2) {
          break;
        }
      }
      tmp6 = length;
      num2 = 1;
      if (!keySet.has(tmp7)) {
        if ("__proto__" === tmp7) {
          tmp6 = length;
          num2 = 1;
          if ("never" === type) {
            let arr = items.push(tmp7);
            tmp6 = length;
            num2 = 1;
          }
        } else if ("never" === type) {
          let arr2 = items.push(tmp7);
          tmp6 = length;
          num2 = 1;
        } else {
          let obj2 = { value: value[tmp7], issues: [] };
          let runResult = _zod.run(obj2, abortEarly);
          let _Promise2 = Promise;
          if (runResult instanceof Promise) {
            let arr3 = items.push(runResult.then((issues) => {
              let items1;
              let tmp4 = closure_0 in closure_0;
              if (issues.issues.length) {
                issues = iter.issues;
                const push = issues.push;
                const items = [];
                HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(closure_0, issues.issues), 0);
                HermesBuiltin.apply(push, items, issues);
              }
              if (!tmp4) {
                if (undefined === optin) {
                  if (!issues.issues.length) {
                    const issues1 = iter.issues;
                    obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: items1 };
                    items1 = [closure_0];
                    issues1.push(obj);
                  }
                }
              }
              if (undefined === issues.value) {
                if (!tmp4) {
                  tmp4 = "defaulted" === optin && "optional" !== optout;
                }
                if (tmp4) {
                  _exports.value[closure_0] = undefined;
                }
              } else {
                _exports.value[closure_0] = issues.value;
              }
            }));
            tmp6 = length;
          } else {
            let tmp9 = tmp7 in value;
            if (!tmp9) {
              if (tmp4) {
                tmp6 = length;
              }
            }
            if (runResult.issues.length) {
              if (undefined !== optin) {
                if (tmp4) {
                  tmp6 = length;
                }
              }
              let issues = iter.issues;
              let push = issues.push;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(items1, captureStackTrace.prefixIssues(tmp7, runResult.issues), 0);
              let applyResult = HermesBuiltin.apply(push, items1, issues);
            }
            if (!tmp9) {
              if (undefined === optin) {
                tmp6 = length;
                if (!runResult.issues.length) {
                  let issues1 = iter.issues;
                  obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: items2 };
                  items2 = [tmp7];
                  let arr4 = issues1.push(obj);
                  tmp6 = length;
                }
              }
            }
            if (undefined === runResult.value) {
              if (!tmp9) {
                let tmp18 = tmp3 && !tmp4;
                tmp9 = tmp18;
              }
              tmp6 = length;
              if (tmp9) {
                iter.value[tmp7] = undefined;
                tmp6 = length;
              }
            } else {
              iter.value[tmp7] = runResult.value;
              tmp6 = length;
            }
          }
        }
      }
    }
  }
  if (items.length) {
    const issues2 = iter.issues;
    const obj3 = { code: "unrecognized_keys", keys: items, input: value, inst, continue: true };
    issues2.push(obj3);
  }
  if (items.length) {
    const allPromises = Promise.all(items);
    iter = allPromises.then(() => _exports);
  }
  return iter;
}
function handleUnionResults(arr, issues, inst, arg3) {
  let first;
  let closure_0 = arg3;
  const iter = arr[Symbol.iterator]();
  const iter2 = iter.next();
  while (iter !== undefined) {
    if (0 === iter2.issues.length) {
      issues.value = iter2.value;
      iter.return();
      return issues;
    }
  }
  const found = arr.filter((item) => !captureStackTrace.aborted(item));
  if (1 === found.length) {
    issues.value = found[0].value;
    first = found[0];
  } else {
    issues = issues.issues;
    const push = issues.push;
    obj = {
      code: "invalid_union",
      input: issues.value,
      inst,
      errors: arr.map((issues) => {
          issues = issues.issues;
          return issues.map((item) => captureStackTrace.finalizeIssue(item, closure_1_0, NEVER.config()));
        })
    };
    push(obj);
    first = issues;
  }
  return first;
}
function handleExclusiveUnionResults(arr, issues, inst, arg3) {
  let num;
  let closure_0 = arg3;
  const items = [];
  for (let num = 0; num < arr.length; num = num + 1) {
    if (0 === arr[num].issues.length) {
      arr = items.push(num);
    }
  }
  if (1 === items.length) {
    issues.value = arr[items[0]].value;
  } else if (0 === items.length) {
    issues = issues.issues;
    const push = issues.push;
    const obj2 = { code: "invalid_union", input: issues.value, inst, errors: arr.map(f104149) };
    push(obj2);
  } else {
    const issues1 = issues.issues;
    obj = { code: "invalid_union", input: issues.value, inst, errors: [], inclusive: false, matches: items };
    issues1.push(obj);
  }
  return issues;
}
function discriminatorMap(def) {
  map = new Map();
  const iter = def.options[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let propValues = nextResult._zod.propValues;
    let tmp3;
    let tmp2 = nextResult;
    if (propValues != null) {
      tmp3 = propValues[def.discriminator];
    }
    let tmp4 = tmp3;
    if (tmp4) {
      if (0 !== tmp4.size) {
        for (const item10029 of tmp3) {
          let tmp7 = item10029;
          if (map.has(item10029)) {
            if (undefined !== tmp7) {
              let _Error = Error;
              let _String = String;
              let _HermesInternal = HermesInternal;
              let str = "\"";
              let str2 = "Duplicate discriminator value \"";
              let self = this;
              let self2 = this;
              let error = new Error("Duplicate discriminator value \"" + String(tmp7) + "\"");
              throw error;
            } else {
              let result = map.set(tmp7, null);
            }
          } else {
            let result1 = map.set(tmp7, tmp2);
          }
          continue;
        }
        continue;
      }
    }
    let _Error2 = Error;
    let options = def.options;
    let _HermesInternal2 = HermesInternal;
    let str3 = "\"";
    let str4 = "Invalid discriminated union option at index \"";
    let self3 = this;
    let self4 = this;
    let error1 = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
    throw error1;
  }
  return map;
}
function mergeValues(data, arg1) {
  let items;
  let items2;
  if (data === arg1) {
    return { valid: true, data };
  } else {
    const _Date2 = Date;
    if (data instanceof Date) {
      const _Date = Date;
      if (arg1 instanceof Date) {
        if (+data === +arg1) {
          return { valid: true, data };
        }
      }
    }
    obj = captureStackTrace;
    if (captureStackTrace.isPlainObject(data)) {
      if (obj.isPlainObject(arg1)) {
        const _Object = Object;
        let closure_0 = Object.keys(arg1);
        const _Object2 = Object;
        const keys = Object.keys(data);
        const found = keys.filter((item) => -1 !== closure_0.indexOf(item));
        const obj4 = {};
        const merged = Object.assign(data);
        const merged1 = Object.assign(arg1);
        const _Object3 = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (hasOwnProperty.call(obj4, "__proto__")) {
          delete obj6["__proto__"];
        }
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp19 = nextResult;
          if ("__proto__" !== nextResult) {
            let tmp22 = mergeValues(data[tmp19], arg1[tmp19]);
            let tmp23 = tmp22;
            if (tmp22.valid) {
              obj4[tmp19] = tmp23.data;
            } else {
              let obj5 = { valid: false, mergeErrorPath: items };
              items = [tmp19];
              let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp23.mergeErrorPath, 1);
              iter.return();
              return obj5;
            }
          }
          continue;
        }
        return { valid: true, data: obj4 };
      }
    }
    const _Array = Array;
    if (Array.isArray(data)) {
      const _Array2 = Array;
      if (Array.isArray(arg1)) {
        if (data.length !== arg1.length) {
          return { valid: false, mergeErrorPath: [] };
        } else {
          const items1 = [];
          let num2 = 0;
          if (0 < data.length) {
            const tmp3 = mergeValues(data[num2], arg1[num2]);
            while (tmp3.valid) {
              let arr = items1.push(tmp3.data);
              num2 = num2 + 1;
            }
            const obj9 = { valid: false, mergeErrorPath: items2 };
            items2 = [num2];
            HermesBuiltin.arraySpread(items2, tmp3.mergeErrorPath, 1);
            return obj9;
          }
          return { valid: true, data: items1 };
        }
      }
    }
    return { valid: false, mergeErrorPath: [] };
  }
}
function handleIntersectionResults(nextPromise, runResult, runResult1) {
  let keys;
  map = new Map();
  map1 = new Map();
  function collect(nextResult, l) {
    if ("unrecognized_keys" === nextResult.code) {
      const path = nextResult.path;
      let length;
      if (path != null) {
        length = path.length;
      }
      if (!length) {
        if (closure_1_0 == null) {
          closure_1_0 = nextResult;
        }
        keys = nextResult.keys;
      }
      const iter = keys[Symbol.iterator]();
      nextResult = iter.next();
      while (iter !== undefined) {
        let tmp10 = nextResult;
        obj = map;
        if (!map.has(nextResult)) {
          let result = obj.set(tmp10, {});
        }
        obj.get(tmp10)[l] = true;
        continue;
      }
      return true;
    }
    if ("invalid_key" === nextResult.code) {
      if ("record" === nextResult.origin) {
        const path1 = nextResult.path;
        let length1;
        if (path1 != null) {
          length1 = path1.length;
        }
        if (1 === length1) {
          const _String = String;
          const StringResult = String(nextResult.path[0]);
          const obj2 = map1;
          if (!map1.has(StringResult)) {
            const result1 = obj2.set(StringResult, nextResult);
          }
          const items = [StringResult];
          keys = items;
        }
      }
    }
    return false;
  }
  let iter = runResult.issues[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (!collect(nextResult, "l")) {
      let issues = nextPromise.issues;
      let arr = issues.push(tmp3);
    }
    continue;
  }
  const iter2 = runResult1.issues[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp7 = nextResult1;
    if (!collect(nextResult1, "r")) {
      let issues1 = nextPromise.issues;
      let arr2 = issues1.push(tmp7);
    }
    continue;
  }
  let items = [...map];
  const found = items.filter((item) => {
    let tmp;
    [, tmp] = item;
    return tmp.l && tmp.r;
  });
  const mapped = found.map((item) => {
    let tmp;
    [tmp] = item;
    return tmp;
  });
  if (mapped.length) {
    let found1;
    let tmp10 = keys;
    if (tmp10) {
      found1 = mapped.filter((item) => {
        keys = keys.keys;
        return keys.includes(item);
      });
    } else {
      found1 = [];
    }
    if (found1.length) {
      const issues2 = nextPromise.issues;
      obj = { keys: found1 };
      let tmp11 = keys;
      const push = issues2.push;
      const merged = Object.assign(keys);
      push(obj);
    }
    for (const item10075 of mapped) {
      let tmp17 = item10075;
      let hasItem = found1.includes(item10075);
      let hasItem1 = !hasItem;
      if (hasItem1) {
        hasItem1 = map1.has(tmp17);
      }
      if (hasItem1) {
        let issues3 = nextPromise.issues;
        let arr4 = issues3.push(map1.get(tmp17));
      }
      continue;
    }
  }
  const tmp23 = mergeValues(runResult.value, runResult1.value);
  if (tmp23.valid) {
    nextPromise.value = tmp23.data;
    return nextPromise;
  } else if (captureStackTrace.aborted(nextPromise)) {
    return nextPromise;
  } else {
    const _Error = Error;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unmergable intersection. Error path: " + JSON.stringify(tmp23.mergeErrorPath));
    throw error;
  }
}
function getTupleOptStart(arg0, arg1) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp3;
      if ("optin" === arg1) {
        tmp3 = undefined !== arg0[diff]._zod.optin;
      } else {
        tmp3 = "optional" === arg0[diff]._zod.optout;
      }
      if (!tmp3) {
        break;
      } else {
        diff = diff - 1;
      }
    }
    return diff + 1;
  }
  return 0;
}
function handleTupleResult(issues, issues2, keys) {
  if (issues.issues.length) {
    issues = issues2.issues;
    const push = issues.push;
    const items = [];
    HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(keys, issues.issues), 0);
    HermesBuiltin.apply(push, items, issues);
  }
  issues2.value[keys] = issues.value;
}
function handleTupleResults(array, value, items, value2, arg4) {
  let num = 0;
  if (0 < items.length) {
    while (true) {
      let iter = array[num];
      let tmp2 = num < value.length;
      if (!tmp2) {
        if (num >= arg4) {
          if ("optional" === items[num]._zod.optin) {
            break;
          }
        }
      }
      if (iter.issues.length) {
        if (!tmp2) {
          if (num >= arg4) {
            value.value.length = num;
          }
        }
        let issues = value.issues;
        let push = issues.push;
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(num, iter.issues), 0);
        let applyResult = HermesBuiltin.apply(push, items, issues);
      }
      value.value[num] = iter.value;
      num = num + 1;
    }
    value.value.length = num;
  }
  let diff = value.value.length - 1;
  if (diff >= value.length) {
    if ("optional" === items[diff]._zod.optout) {
      if (undefined === value.value[diff]) {
        value.value.length = diff;
        const diff1 = diff - 1;
        while (diff1 >= value.length) {
          if ("optional" !== items[diff1]._zod.optout) {
            break;
          } else {
            diff = diff1;
            if (undefined !== value.value[diff1]) {
              break;
            }
          }
        }
      }
    }
  }
  return value;
}
function handleMapResult(issues, issues2, issues3, key, value, inst, arg6) {
  let issues1;
  let closure_0 = arg6;
  if (issues.issues.length) {
    const propertyKeyTypes = captureStackTrace.propertyKeyTypes;
    issues = issues3.issues;
    const push = issues.push;
    obj = captureStackTrace;
    if (propertyKeyTypes.has(typeof key)) {
      const items = [];
      HermesBuiltin.arraySpread(items, obj.prefixIssues(key, issues.issues), 0);
      HermesBuiltin.apply(push, items, issues);
    } else {
      const obj2 = { code: "invalid_key", origin: "map", input: value, inst, issues: issues1.map((item) => captureStackTrace.finalizeIssue(item, closure_0, NEVER.config())) };
      issues1 = issues.issues;
      push(obj2);
    }
  }
  if (issues2.issues.length) {
    const propertyKeyTypes2 = captureStackTrace.propertyKeyTypes;
    issues2 = issues3.issues;
    const push2 = issues2.push;
    const obj3 = captureStackTrace;
    if (propertyKeyTypes2.has(typeof key)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items1, obj3.prefixIssues(key, issues2.issues), 0);
      HermesBuiltin.apply(push2, items1, issues2);
    } else {
      const obj4 = { origin: "map", code: "invalid_element", input: value, inst, key, issues: issues3.map((item) => captureStackTrace.finalizeIssue(item, closure_0, NEVER.config())) };
      issues3 = issues2.issues;
      push2(obj4);
    }
  }
  value = issues3.value;
  const result = value.set(issues.value, issues2.value);
}
function handleSetResult(promise, nextPromise) {
  if (promise.issues.length) {
    const issues = nextPromise.issues;
    const push = issues.push;
    const items = [];
    HermesBuiltin.arraySpread(items, promise.issues, 0);
    HermesBuiltin.apply(push, items, issues);
  }
  const value = nextPromise.value;
  value.add(promise.value);
}
function handleCodecAResult(issues, transform, direction) {
  let closure_1 = transform;
  let closure_2 = direction;
  if (issues.issues.length) {
    issues.aborted = true;
    return issues;
  } else {
    const tmp = direction.direction || "forward";
    if ("forward" === tmp) {
      let nextPromise;
      const transformResult = transform.transform(issues.value, issues);
      if (transformResult instanceof Promise) {
        nextPromise = transformResult.then((value) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = tmp;
          } else {
            const _zod = tmp2._zod;
            obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise = issues;
      } else {
        const _zod2 = tmp5._zod;
        const obj2 = { value: transformResult, issues: issues.issues };
        nextPromise = _zod2.run(obj2, direction);
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const reverseTransformResult = transform.reverseTransform(issues.value, issues);
      if (reverseTransformResult instanceof Promise) {
        nextPromise1 = reverseTransformResult.then((value) => {
          let runResult;
          if (issues.issues.length) {
            issues.aborted = true;
            runResult = tmp;
          } else {
            const _zod = tmp2._zod;
            obj = { value, issues: issues.issues };
            runResult = _zod.run(obj, tmp3);
          }
          return runResult;
        });
      } else if (issues.issues.length) {
        issues.aborted = true;
        nextPromise1 = issues;
      } else {
        let _zod = tmp2._zod;
        obj = { value: reverseTransformResult, issues: issues.issues };
        nextPromise1 = _zod.run(obj, direction);
      }
      return nextPromise1;
    }
  }
}
function handleReadonlyResult(memo) {
  if (!memo.memo) {
    const _Object = Object;
    memo.value = Object.freeze(memo.value);
  }
  return memo;
}
function partPattern(innerType) {
  function leafPattern(_zod) {
    let format;
    let pattern;
    let tmp;
    let tmp2;
    const def = _zod._zod.def;
    ({ pattern, format } = def);
    let hasItem;
    if (format != null) {
      hasItem = format.includes("int");
    }
    let tmp4 = hasItem;
    let checks = def.checks;
    if (checks == null) {
      checks = [];
    }
    const iter = checks[Symbol.iterator]();
    while (iter !== undefined) {
      let def2 = iter.next()._zod.def;
      let arr2 = def2;
      if (def2.pattern) {
        pattern = arr2.pattern;
      }
      let tmp6 = tmp4;
      if (!tmp6) {
        let format2 = arr2.format;
        let hasItem1;
        if (format2 != null) {
          hasItem1 = format2.includes("int");
        }
        tmp4 = hasItem1;
      }
      let length = arr2.minimum;
      if (length == null) {
        length = arr2.length;
      }
      let tmp11 = length;
      let length2 = arr2.maximum;
      if (length2 == null) {
        length2 = arr2.length;
      }
      let tmp14 = length2;
      let tmp16 = undefined !== tmp11;
      if (tmp16) {
        let tmp18 = undefined === tmp;
        if (!tmp18) {
          tmp18 = tmp11 > tmp;
        }
        tmp16 = tmp18;
      }
      if (tmp16) {
        tmp = length;
      }
      let tmp22 = undefined !== tmp14;
      if (tmp22) {
        let tmp24 = undefined === tmp2;
        if (!tmp24) {
          tmp24 = tmp14 < tmp2;
        }
        tmp22 = tmp24;
      }
      if (tmp22) {
        tmp2 = length2;
      }
      continue;
    }
    const tmp27 = pattern;
    if (tmp27) {
      return pattern.source;
    } else {
      if (undefined !== tmp) {
        if (undefined !== tmp2) {
          if (tmp > tmp2) {
            return "(?!)";
          }
        }
      }
      if (undefined === tmp) {
        if (undefined === tmp2) {
          const pattern2 = _zod._zod.pattern;
          let integer = pattern2;
          if (tmp4) {
            integer = pattern2;
            if (pattern2 === cuid.number) {
              integer = cuid.integer;
            }
          }
          let source;
          if (integer != null) {
            source = integer.source;
          }
          return source;
        }
      }
      obj = { minimum: tmp, maximum: tmp2 };
      return cuid.string(obj).source;
    }
  }
  let def = innerType._zod.def;
  let pattern = innerType._zod.pattern;
  innerType = def.innerType;
  if (innerType == null) {
    innerType = innerType._zod.innerType;
  }
  if (innerType) {
    let source;
    let pattern2 = innerType._zod.pattern;
    if (pattern2 != null) {
      source = pattern2.source;
    }
    let tmp4 = partPattern(innerType);
    let closure_0 = tmp4;
    let replaced = str;
    if (replaced) {
      replaced = str;
      if (source) {
        replaced = str;
        if (tmp4) {
          replaced = str;
          if (tmp4 !== source) {
            let tmp6 = captureStackTrace;
            replaced = str.replace(captureStackTrace.cleanRegex(source), () => captureStackTrace.cleanRegex(closure_0));
          }
        }
      }
    }
    return replaced;
  } else {
    if (def.options) {
      const options = def.options;
      let tmp = partPattern;
      const mapped = options.map(partPattern);
      let tmp2 = globalThis;
      const _Boolean = Boolean;
      if (mapped.every(Boolean)) {
        const mapped1 = mapped.map((item) => captureStackTrace.cleanRegex(item));
        const _HermesInternal = HermesInternal;
        return "^(" + mapped1.join("|") + ")$";
      }
    }
    return leafPattern(innerType);
  }
}
let tmp = this && self.__createBinding;
if (!tmp) {
  let tmp2 = globalThis;
  let _Object = Object;
  tmp = Object.create ? ((arg0, __esModule, arg2, arg3) => {
    function get() {
      return __esModule[closure_1];
    }
    let closure_0 = __esModule;
    let closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(__esModule, arg2);
    let tmp3 = ownPropertyDescriptor;
    if (tmp3) {
      let tmp4;
      if ("get" in ownPropertyDescriptor) {
        tmp4 = !__esModule.__esModule;
      } else {
        tmp4 = ownPropertyDescriptor.writable || ownPropertyDescriptor.configurable;
      }
      tmp3 = !tmp4;
    }
    if (!tmp3) {
      ownPropertyDescriptor = { enumerable: true, get };
      obj = { enumerable: true, get };
    }
    Object.defineProperty(arg0, tmp, ownPropertyDescriptor);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_5 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  let tmp4 = globalThis;
  let _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_6 = tmp3;
let tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_5(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_6(obj, __esModule);
  return obj;
});
function standardProps(arg0) {
  let closure_0 = arg0;
  return {
    validate(value) {
      function validateAsync(self, value) {
        return closure_1_12(...arguments);
      }
      try {
        obj = { async: false };
        const _zod = self._zod;
        const obj2 = { value, issues: [] };
        const runResult = _zod.run(obj2, obj);
        if (runResult instanceof Promise) {
          return validateAsync(self, value);
        } else {
          return toStandardResult(tmp3, obj);
        }
      } catch (err) {
      }
    },
    vendor: "zod",
    version: 1
  };
}
function isValidIPv6(arg0) {
  let isMatch = re20.test(arg0);
  if (isMatch) {
    const _HermesInternal = HermesInternal;
    isMatch = canParseURL("http://[" + arg0 + "]");
  }
  return isMatch;
}
function isValidCIDRv6(str) {
  let tmp11;
  let tmp12;
  const parts = str.split("/");
  if (2 !== parts.length) {
    return false;
  } else {
    [tmp11, tmp12] = parts;
    _slicedToArray(parts, 2);
    if (tmp12) {
      const _Number = Number;
      const NumberResult = Number(tmp12);
      const _HermesInternal = HermesInternal;
      let tmp3 = "" + NumberResult === tmp12;
      if (tmp3) {
        let tmp5 = !(NumberResult < 0 || NumberResult > 128);
        const tmp4 = NumberResult < 0 || NumberResult > 128;
        if (tmp5) {
          let isMatch = re20.test(tmp11);
          if (isMatch) {
            const _HermesInternal2 = HermesInternal;
            isMatch = canParseURL("http://[" + tmp11 + "]");
          }
          tmp5 = isMatch;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    } else {
      return false;
    }
  }
}
function isValidBase64URL(str) {
  const base64urlCharset = exports.base64urlCharset;
  if (base64urlCharset.test(str)) {
    const replaced = str.replace(/[-_]/g, f104143);
    const _Math = Math;
    return isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
  } else {
    return false;
  }
}
function isValidCreditCard(str) {
  const creditCard = cuid.creditCard;
  let isMatch = creditCard.test(str);
  if (isMatch) {
    const replaced = str.replace(re22, "");
    let length = replaced.length;
    let num4 = 0;
    let num5 = 1;
    let num6 = 0;
    while (length) {
      let diff = length - 1;
      let diff1 = replaced.charCodeAt(diff) - 48;
      let tmp5 = num5 ^ 1;
      let tmp7 = diff1;
      if (tmp5) {
        tmp7 = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][diff1];
      }
      num4 = num4 + tmp7;
      num5 = tmp5;
      num6 = num4;
      length = diff;
    }
    isMatch = num6 % 10 === 0;
  }
  return isMatch;
}
let $ZodCheck = tmp5($ZodCheck2);
let NEVER = tmp5(NEVER2);
let cuid = tmp5(cuid2);
obj = {};
const $constructor = NEVER.$constructor;
Object.defineProperty(obj, "~standard", {
  get: function() {
    const self = this;
    obj = {
      validate(value) {
        function validateAsync(self, value) {
          return closure_1_12(...arguments);
        }
        try {
          obj = { async: false };
          const _zod = self._zod;
          const obj2 = { value, issues: [] };
          const runResult = _zod.run(obj2, obj);
          if (runResult instanceof Promise) {
            return validateAsync(self, value);
          } else {
            return toStandardResult(tmp3, obj);
          }
        } catch (err) {
        }
      },
      vendor: "zod",
      version: 1
    };
    return captureStackTrace.hide(this, "~standard", obj);
  },
  set: function(value) {
    captureStackTrace.own(this, "~standard", value);
  }
});
function toStandardResult(issues, arg1) {
  let closure_0 = arg1;
  if (issues.issues.length) {
    const obj2 = { issues: issues.map((item) => captureStackTrace.finalizeIssue(item, closure_0, NEVER.config())) };
    issues = issues.issues;
    obj = obj2;
  } else {
    obj = { value: issues.value };
  }
  return obj;
}
const re16 = /[\t\n\r]/g;
const re20 = /^[0-9a-fA-F:.]+$/;
const re22 = /[- ]/g;
function arraySize(arg0) {
  let num = -1;
  if (Array.isArray(arg0)) {
    num = arg0.length;
  }
  return num;
}
function mapSize(size) {
  let num = -1;
  if (size instanceof Map) {
    num = size.size;
  }
  return num;
}
function setSize(size) {
  let num = -1;
  if (size instanceof Set) {
    num = size.size;
  }
  return num;
}
let closure_28 = [];
let tmp8 = (() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();
const URL_UNPARSEABLE_export = 2;
const base64urlCharset_export = /^[A-Za-z0-9_-]*$/;

export { standardProps };
export { canParseURL };
export { validateURL };
export { parseURLObject };
export { stripTabAndNewline };
export { urlHostnameOk };
export { urlProtocolOk };
export { isValidIPv6 };
export { isValidCIDRv6 };
export { isValidBase64 };
export { isValidBase64URL };
export { isValidCreditCard };
export { isValidIBAN };
export { isValidJWT };
export function getDiscriminatedOption(_zod, arg1) {
  _zod = _zod._zod;
  let optionsMap = _zod.bag.optionsMap;
  if (!optionsMap) {
    const tmp2 = discriminatorMap(_zod.def);
    _zod.bag.optionsMap = tmp2;
    optionsMap = tmp2;
  }
  const value = optionsMap.get(arg1);
  if (null === value) {
    const _Error = Error;
    const _String = String;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Ambiguous discriminator value \"" + String(arg1) + "\"");
    throw error;
  } else {
    return value;
  }
}
export { mergeValues };
export const $ZodType = $constructor("$ZodType", (arg0, def) => {
  let arr3;
  let runChecks;
  let tmp2 = arg0;
  obj = arg0;
  if (arg0 == null) {
    obj = {};
    tmp2 = obj;
  }
  tmp2._zod.def = def;
  let bag = tmp2._zod.bag;
  let _zod = tmp2._zod;
  if (!bag) {
    bag = {};
  }
  _zod.bag = bag;
  tmp2._zod.version = obj(runChecks[6]).version;
  const checks = tmp2._zod.def.checks;
  const traits = tmp2._zod.traits;
  if (traits.has("$ZodCheck")) {
    const items = [tmp2];
    let items1 = checks;
    if (checks == null) {
      items1 = [];
    }
    let tmp8 = items1;
    HermesBuiltin.arraySpread(items, items1, 1);
    arr3 = items;
  } else {
    let length;
    if (checks != null) {
      length = checks.length;
    }
    const items2 = [];
    if (length) {
      let num = 0;
      let tmp4 = items2;
      let tmp5 = checks;
      HermesBuiltin.arraySpread(items2, checks, 0);
      arr3 = items2;
    } else {
      arr3 = items2;
    }
  }
  for (const item10040 of arr3) {
    let onattach = item10040._zod.onattach;
    let tmp10 = onattach;
    for (const item10047 of onattach) {
      let item10047Result = item10047(tmp2);
      continue;
    }
    continue;
  }
  if (0 === arr3.length) {
    let _zod2 = tmp2._zod;
    if (_zod2.deferred == null) {
      _zod2.deferred = [];
    }
    const deferred = tmp2._zod.deferred;
    if (deferred != null) {
      deferred.push(() => {
        obj._zod.run = obj._zod.parse;
      });
    }
  } else {
    runChecks = function runChecks(parsed1, arr3, skipChecks) {
      let closure_0 = parsed1;
      if (parsed1.memo) {
        return parsed1;
      } else {
        const tmp = arr3;
        let tmp2 = captureStackTrace;
        let closure_3 = captureStackTrace.aborted(parsed1);
        let tmp3 = arr3;
        function _loop() {
          let length;
          if (_zod._zod.def.when) {
            const tmp3 = captureStackTrace;
            const tmp4 = length;
            if (captureStackTrace.explicitlyAborted(length)) {
              return 0;
            } else {
              const def = tmp._zod.def;
              if (!def.when(tmp4)) {
                return 0;
              }
            }
          } else {
            const tmp2 = closure_3;
            if (tmp2) {
              return 0;
            }
          }
          length = length.issues.length;
          _zod = tmp._zod;
          const checkResult = _zod.check(length);
          skipChecks = checkResult;
          if (checkResult instanceof Promise) {
            let async;
            if (skipChecks != null) {
              async = skipChecks.async;
            }
            if (false === async) {
              const tmp15 = NEVER;
              const self = this;
              const self2 = this;
              const ZodAsyncError = new NEVER.$ZodAsyncError();
              throw ZodAsyncError;
            }
          }
          const tmp9 = closure_2;
          if (!tmp9) {
            if (!(checkResult instanceof Promise)) {
              if (length.issues.length === length) {
                return 0;
              } else {
                let tmp10 = captureStackTrace;
                captureStackTrace.attachSchema(length.issues, length, parsed1);
                const tmp13 = closure_3;
                if (!tmp13) {
                  closure_3 = captureStackTrace.aborted(tmp5, length);
                }
              }
            }
          }
          let resolved = closure_2;
          if (closure_2 == null) {
            resolved = Promise.resolve();
          }
          closure_2 = resolved.then(_asyncToGenerator(async (arg0, value) => {
            let closure_0;
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c2 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    c1 = 1;
                    c2 = 1;
                    const obj4 = { value: checkResult, done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  if (tmp3.issues.length !== closure_128_0) {
                    captureStackTrace.attachSchema(tmp3.issues, closure_128_0, length);
                    const tmp10 = closure_3;
                    if (!tmp10) {
                      closure_3 = captureStackTrace.aborted(tmp3, closure_128_0);
                    }
                  }
                  c2 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp15) {
                c2 = 3;
                throw tmp15;
              }
            }
          }));
        }
        const iter = arr3[Symbol.iterator]();
        let tmp4 = arr3;
        const tmp5 = iter;
        while (iter !== undefined) {
          let _zod = iter.next();
          let _loopResult = _loop();
          continue;
        }
        let nextPromise = parsed1;
        if (runChecks) {
          nextPromise = promise.then(() => parsed1);
        }
        return nextPromise;
      }
    };
    function handleCanaryResult(arg0, arg1, arg2) {

    }
    tmp2._zod.run = function(value, skipChecks) {
      const f132004 = (result) => {
        _zod = _zod._zod;
        return _zod.parse(result, closure_0);
      };
      let closure_0 = value;
      if (skipChecks.skipChecks) {
        const _zod4 = closure_0._zod;
        return _zod4.parse(value, skipChecks);
      } else if ("backward" === skipChecks.direction) {
        let nextPromise;
        const _zod2 = closure_0._zod;
        obj = { value: value.value, issues: [] };
        const parse = _zod2.parse;
        const obj2 = { skipChecks: true };
        const merged = Object.assign(skipChecks);
        const parsed = parse(obj, obj2);
        const tmp8 = closure_0;
        if (parsed instanceof Promise) {
          nextPromise = parsed.then(function(result) {
            if (typeof handleCanaryResult === "function") {
              let nextPromise;
              let _zod = tmp2;
              if (closure_1_10.aborted(result)) {
                result.aborted = true;
                nextPromise = result;
              } else {
                const promise = runChecks(tmp, arr3, skipChecks);
                if (promise instanceof Promise) {
                  if (false === skipChecks.async) {
                    const self = this;
                    const self2 = this;
                    ZodAsyncError = new ZodAsyncError.$ZodAsyncError();
                    throw ZodAsyncError;
                  } else {
                    nextPromise = promise.then(f132004);
                  }
                } else {
                  _zod = obj._zod;
                  nextPromise = _zod.parse(promise, tmp2);
                }
              }
              return nextPromise;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        } else if (typeof handleCanaryResult === "function") {
          closure_0 = skipChecks;
          if (captureStackTrace.aborted(parsed)) {
            parsed.aborted = true;
            nextPromise = parsed;
          } else {
            const promise3 = runChecks(value, skipChecks, skipChecks);
            if (promise3 instanceof Promise) {
              if (false === skipChecks.async) {
                const self3 = this;
                const self4 = this;
                let ZodAsyncError = new NEVER.$ZodAsyncError();
                throw ZodAsyncError;
              } else {
                nextPromise = promise3.then(f132004);
              }
            } else {
              const _zod3 = tmp8._zod;
              nextPromise = _zod3.parse(promise3, skipChecks);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        return nextPromise;
      } else {
        const tmp = closure_0;
        let _zod = closure_0._zod;
        const parsed1 = _zod.parse(value, skipChecks);
        const tmp2 = globalThis;
        if (parsed1 instanceof Promise) {
          if (false === skipChecks.async) {
            let self = this;
            let self2 = this;
            const ZodAsyncError1 = new NEVER.$ZodAsyncError();
            throw ZodAsyncError1;
          } else {
            return parsed1.then((result) => runChecks(result, arr3, skipChecks));
          }
        } else {
          return runChecks(parsed1, skipChecks, skipChecks);
        }
      }
    };
  }
}, obj);
export const clone = require("captureStackTrace").clone;
export const $ZodString = NEVER.$constructor("$ZodString", (_zod, pattern) => {
  let closure_0 = _zod;
  let closure_1 = pattern;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, pattern);
  let anyString = pattern.pattern;
  _zod = _zod._zod;
  if (anyString == null) {
    anyString = cuid.anyString;
  }
  _zod.pattern = anyString;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _String = String;
        value.value = String(value.value);
      } catch (err) {
      }
    }
    if (typeof value.value !== "string") {
      const issues = value.issues;
      obj = { expected: "string", code: "invalid_type", input: value.value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodStringFormat = NEVER.$constructor("$ZodStringFormat", (arg0, arg1) => {
  const $ZodCheckStringFormat = $ZodCheck.$ZodCheckStringFormat;
  $ZodCheckStringFormat.init(arg0, arg1);
  const $ZodString = exports.$ZodString;
  $ZodString.init(arg0, arg1);
});
export const $ZodGUID = NEVER.$constructor("$ZodGUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.guid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodUUID = NEVER.$constructor("$ZodUUID", function(arg0, version) {
  if (version.version) {
    const tmp3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[version.version];
    if (undefined === tmp3) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Invalid UUID version: \"" + version.version + "\"");
      throw error;
    } else if (version.pattern == null) {
      version.pattern = cuid.uuid(tmp3);
    }
  } else if (version.pattern == null) {
    version.pattern = cuid.uuid();
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, version);
});
export const $ZodEmail = NEVER.$constructor("$ZodEmail", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.email;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const URL_BAD_FORMAT = 1;
export { URL_UNPARSEABLE_export as URL_UNPARSEABLE };
export const $ZodURL = NEVER.$constructor("$ZodURL", (_zod, arg1) => {
  let abort;
  const inst = _zod;
  _exports = arg1;
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    try {
      const str = value.value;
      const trimmed = str.trim();
      const url = abort;
      const tmp5 = validateURL(trimmed, abort);
      const tmp2 = trimmed;
      if (tmp5 === exports.URL_BAD_FORMAT) {
        const issues = value.issues;
        const obj2 = { code: "invalid_format", format: "url", note: "Invalid URL format", input: value.value, inst, continue: !url.abort };
        issues.push(obj2);
      } else if (tmp5 === tmp7.URL_UNPARSEABLE) {
        const issues1 = value.issues;
        const obj3 = { code: "invalid_format", format: "url", input: value.value, inst, continue: !url.abort };
        issues1.push(obj3);
      } else if (true === tmp5) {
        value.value = stripTabAndNewline(trimmed);
      } else {
        let href;
        const hostname = url.hostname && !urlHostnameOk(tmp6, url.hostname);
        if (hostname) {
          const issues2 = value.issues;
          obj = { code: "invalid_format", format: "url", note: "Invalid hostname", pattern: url.hostname.source, input: value.value, inst, continue: !url.abort };
          issues2.push(obj);
        }
        const protocol = url.protocol && !urlProtocolOk(tmp6, url.protocol);
        if (protocol) {
          const issues3 = value.issues;
          const obj4 = { code: "invalid_format", format: "url", note: "Invalid protocol", pattern: url.protocol.source, input: value.value, inst, continue: !url.abort };
          issues3.push(obj4);
        }
        if (url.normalize) {
          href = tmp5.href;
        } else {
          href = stripTabAndNewline(tmp2);
        }
        value.value = href;
      }
      return tmp24;
    } catch (err) {
      const issues4 = value.issues;
      const obj5 = { code: "invalid_format", format: "url", input: value.value, inst, continue: !abort.abort };
      issues4.push(obj5);
    }
  };
});
export const $ZodEmoji = NEVER.$constructor("$ZodEmoji", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.emoji();
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodNanoID = NEVER.$constructor("$ZodNanoID", function(arg0, pattern) {
  if (undefined !== pattern.length) {
    const _Number = Number;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid nanoid length: " + pattern.length);
    throw error;
  }
  if (pattern.pattern == null) {
    let nanoid;
    if (undefined === pattern.length) {
      nanoid = cuid.nanoid;
    } else {
      nanoid = cuid.nanoidOfLength(pattern.length);
    }
    pattern.pattern = nanoid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCUID = NEVER.$constructor("$ZodCUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cuid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCUID2 = NEVER.$constructor("$ZodCUID2", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cuid2;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodULID = NEVER.$constructor("$ZodULID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ulid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodXID = NEVER.$constructor("$ZodXID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.xid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodKSUID = NEVER.$constructor("$ZodKSUID", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ksuid;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODateTime = NEVER.$constructor("$ZodISODateTime", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.datetime(pattern);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODate = NEVER.$constructor("$ZodISODate", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.date;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISOTime = NEVER.$constructor("$ZodISOTime", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.time(pattern);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodISODuration = NEVER.$constructor("$ZodISODuration", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.duration;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodIPv4 = NEVER.$constructor("$ZodIPv4", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ipv4;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodIPv6 = NEVER.$constructor("$ZodIPv6", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.ipv6;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    value = value.value;
    let isMatch = re20.test(value);
    if (isMatch) {
      const _HermesInternal = HermesInternal;
      isMatch = canParseURL("http://[" + value + "]");
    }
    if (!isMatch) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "ipv6", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodMAC = NEVER.$constructor("$ZodMAC", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.mac(pattern.delimiter);
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCIDRv4 = NEVER.$constructor("$ZodCIDRv4", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cidrv4;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCIDRv6 = NEVER.$constructor("$ZodCIDRv6", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.cidrv6;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    let tmp14;
    let tmp15;
    const str = value.value;
    const parts = str.split("/");
    let flag = false;
    if (2 === parts.length) {
      [tmp14, tmp15] = parts;
      flag = false;
      _slicedToArray(parts, 2);
      if (tmp15) {
        const _Number = Number;
        const NumberResult = Number(tmp15);
        const _HermesInternal = HermesInternal;
        let tmp3 = "" + NumberResult === tmp15;
        if (tmp3) {
          let tmp5 = !(NumberResult < 0 || NumberResult > 128);
          const tmp4 = NumberResult < 0 || NumberResult > 128;
          if (tmp5) {
            let isMatch = re20.test(tmp14);
            if (isMatch) {
              const _HermesInternal2 = HermesInternal;
              isMatch = canParseURL("http://[" + tmp14 + "]");
            }
            tmp5 = isMatch;
          }
          tmp3 = tmp5;
        }
        flag = tmp3;
      }
    }
    if (!flag) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "cidrv6", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
export const $ZodBase64 = NEVER.$constructor("$ZodBase64", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = _exports.base64Charset;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    if (!isValidBase64(value.value)) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "base64", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export { base64urlCharset_export as base64urlCharset };
export const $ZodBase64URL = NEVER.$constructor("$ZodBase64URL", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = _exports.base64urlCharset;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    let str = value.value;
    const base64urlCharset = exports.base64urlCharset;
    let flag = false;
    if (base64urlCharset.test(str)) {
      const replaced = str.replace(/[-_]/g, f104143);
      const _Math = Math;
      flag = isValidBase64(replaced.padEnd(4 * Math.ceil(replaced.length / 4), "="));
    }
    if (!flag) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "base64url", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodE164 = NEVER.$constructor("$ZodE164", (arg0, pattern) => {
  if (pattern.pattern == null) {
    pattern.pattern = cuid.e164;
  }
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(arg0, pattern);
});
export const $ZodCreditCard = NEVER.$constructor("$ZodCreditCard", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.creditCard;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    const creditCard = cuid.creditCard;
    let isMatch = creditCard.test(str);
    if (isMatch) {
      const replaced = str.replace(re22, "");
      let length = replaced.length;
      let num4 = 0;
      let num5 = 1;
      let num6 = 0;
      while (length) {
        let diff = length - 1;
        let diff1 = replaced.charCodeAt(diff) - 48;
        let tmp5 = num5 ^ 1;
        let tmp7 = diff1;
        if (tmp5) {
          tmp7 = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][diff1];
        }
        num4 = num4 + tmp7;
        num5 = tmp5;
        num6 = num4;
        length = diff;
      }
      isMatch = num6 % 10 === 0;
    }
    if (!isMatch) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "credit_card", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodIBAN = NEVER.$constructor("$ZodIBAN", (_zod, pattern) => {
  const inst = _zod;
  _exports = pattern;
  if (pattern.pattern == null) {
    pattern.pattern = cuid.iban;
  }
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, pattern);
  _zod._zod.check = (value) => {
    if (!isValidIBAN(value.value)) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "iban", input: value.value, inst, continue: !pattern.abort };
      issues.push(obj);
    }
  };
});
export const $ZodJWT = NEVER.$constructor("$ZodJWT", (_zod, arg1) => {
  let alg;
  const inst = _zod;
  _exports = arg1;
  const $ZodStringFormat = _exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    const tmp = alg;
    if (!isValidJWT(value.value, alg.alg)) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: "jwt", input: value.value, inst, continue: !tmp.abort };
      issues.push(obj);
    }
  };
});
export const $ZodCustomStringFormat = NEVER.$constructor("$ZodCustomStringFormat", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodStringFormat = exports.$ZodStringFormat;
  $ZodStringFormat.init(_zod, arg1);
  _zod._zod.check = (value) => {
    if (!closure_1.fn(value.value)) {
      const issues = value.issues;
      obj = { code: "invalid_format", format: closure_1.format, input: value.value, inst, continue: !closure_1.abort };
      issues.push(obj);
    }
  };
});
export const $ZodNumber = NEVER.$constructor("$ZodNumber", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.number;
  _zod._zod.parse = (value, arg1) => {
    let obj3;
    if (coerce.coerce) {
      try {
        const _Number = Number;
        value.value = Number(value.value);
      } catch (err) {
      }
    }
    value = value.value;
    if (typeof value === "number") {
      const _Number4 = Number;
      if (!Number.isNaN(value)) {
        const _Number2 = Number;
        if (Number.isFinite(value)) {
          return value;
        }
      }
    }
    let tmp2;
    if (typeof value === "number") {
      const _Number5 = Number;
      let str = "NaN";
      if (!Number.isNaN(value)) {
        const _Number3 = Number;
        let StringResult;
        if (!Number.isFinite(value)) {
          const _String = String;
          StringResult = String(value);
        }
        str = StringResult;
      }
      tmp2 = str;
    }
    const issues = value.issues;
    const push = issues.push;
    obj = { expected: "number", code: "invalid_type", input: value, inst };
    if (tmp2) {
      obj3 = { received: tmp2 };
      const obj2 = { received: tmp2 };
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    push(obj);
    return value;
  };
});
export const $ZodNumberFormat = NEVER.$constructor("$ZodNumberFormat", (arg0, arg1) => {
  const $ZodCheckNumberFormat = $ZodCheck.$ZodCheckNumberFormat;
  $ZodCheckNumberFormat.init(arg0, arg1);
  const $ZodNumber = exports.$ZodNumber;
  $ZodNumber.init(arg0, arg1);
});
export const $ZodBoolean = NEVER.$constructor("$ZodBoolean", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.boolean;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _Boolean = Boolean;
        value.value = Boolean(value.value);
      } catch (err) {
      }
    }
    value = value.value;
    if (typeof value !== "boolean") {
      const issues = value.issues;
      obj = { expected: "boolean", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodBigInt = NEVER.$constructor("$ZodBigInt", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.bigint;
  _zod._zod.parse = (value, arg1) => {
    if (coerce.coerce) {
      try {
        const _BigInt = BigInt;
        value.value = BigInt(value.value);
      } catch (err) {
      }
    }
    if (typeof value.value !== "bigint") {
      const issues = value.issues;
      obj = { expected: "bigint", code: "invalid_type", input: value.value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodBigIntFormat = NEVER.$constructor("$ZodBigIntFormat", (arg0, arg1) => {
  const $ZodCheckBigIntFormat = $ZodCheck.$ZodCheckBigIntFormat;
  $ZodCheckBigIntFormat.init(arg0, arg1);
  const $ZodBigInt = exports.$ZodBigInt;
  $ZodBigInt.init(arg0, arg1);
});
export const $ZodSymbol = NEVER.$constructor("$ZodSymbol", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (typeof value !== "symbol") {
      const issues = value.issues;
      obj = { expected: "symbol", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodUndefined = NEVER.$constructor("$ZodUndefined", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.undefined;
  const items = [undefined];
  _zod = _zod._zod;
  _zod.values = new Set(items);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (undefined !== value) {
      const issues = value.issues;
      obj = { expected: "undefined", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
  new Set(items);
});
export const $ZodNull = NEVER.$constructor("$ZodNull", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.pattern = cuid.null;
  _zod = _zod._zod;
  _zod.values = new Set([null]);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (null !== value) {
      const issues = value.issues;
      obj = { expected: "null", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
  new Set([null]);
});
export const $ZodAny = NEVER.$constructor("$ZodAny", (_zod, arg1) => {
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0) => arg0;
});
export const $ZodUnknown = NEVER.$constructor("$ZodUnknown", (_zod, arg1) => {
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0) => arg0;
});
export const $ZodNever = NEVER.$constructor("$ZodNever", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (input, arg1) => {
    const issues = input.issues;
    obj = { expected: "never", code: "invalid_type", input: input.value, inst };
    issues.push(obj);
    return input;
  };
});
export const $ZodVoid = NEVER.$constructor("$ZodVoid", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (undefined !== value) {
      const issues = value.issues;
      obj = { expected: "void", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodDate = NEVER.$constructor("$ZodDate", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function(value, arg1) {
    if (coerce.coerce) {
      try {
        const _Date = Date;
        const self = this;
        const self2 = this;
        value.value = new Date(value.value);
        const date = new Date(value.value);
      } catch (err) {
      }
    }
    value = value.value;
    let tmp5 = tmp4;
    if (tmp5) {
      const _Number = Number;
      tmp5 = !Number.isNaN(value.getTime());
    }
    if (!tmp5) {
      const issues = value.issues;
      const push = issues.push;
      obj = { expected: "date", code: "invalid_type", input: value, inst };
      const tmp6 = value instanceof Date ? { received: "Invalid Date" } : {};
      const merged = Object.assign(tmp6);
      push(obj);
    }
    return value;
  };
});
export const $ZodArray = NEVER.$constructor("$ZodArray", (_zod, arg1) => {
  let closure_1;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  let memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = (value, abortEarly) => {
    let nextPromise = value;
    inst = value;
    value = value.value;
    memoizer = value;
    if (Array.isArray(value)) {
      let allocResult;
      if (memoizer) {
        const _Array2 = Array;
        let tmp9 = abortEarly;
        allocResult = obj2.alloc(inst, nextPromise, Array(value.length), abortEarly);
      } else {
        const _Array = Array;
        allocResult = Array(value.length);
      }
      nextPromise.value = allocResult;
      let items = [];
      abortEarly = undefined;
      if (abortEarly != null) {
        abortEarly = abortEarly.abortEarly;
      }
      if (0 < value.length) {
        function _loop2(sum) {
          let closure_0 = sum;
          const _zod = abortEarly.element._zod;
          obj = { value: value[sum], issues: [] };
          const runResult = _zod.run(obj, abortEarly);
          if (runResult instanceof Promise) {
            items.push(runResult.then((issues) => {
              if (issues.issues.length) {
                issues = iter.issues;
                const push = issues.push;
                items = [];
                HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(inst, issues.issues), 0);
                HermesBuiltin.apply(push, items, issues);
              }
              inst.value[inst] = issues.value;
            }));
          } else {
            const iter = closure_0;
            if (runResult.issues.length) {
              let issues = iter.issues;
              let push = issues.push;
              items = [];
              HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(sum, runResult.issues), 0);
              HermesBuiltin.apply(push, items, issues);
            }
            iter.value[sum] = runResult.value;
            const tmp9 = abortEarly;
            if (tmp9) {
              if (0 !== runResult.issues.length) {
                if (captureStackTrace.aborted(runResult)) {
                  return 1;
                }
              }
            }
          }
        }
        let num3 = 0;
        if (!_loop2(0)) {
          const sum = num3 + 1;
          while (sum < value.length) {
            num3 = sum;
            if (_loop2(sum)) {
              break;
            }
          }
        }
      }
      if (items.length) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then(() => inst);
      }
      return nextPromise;
    } else {
      let issues = nextPromise.issues;
      obj = { expected: "array", code: "invalid_type", input: value, inst };
      issues.push(obj);
      return nextPromise;
    }
  };
  inst = _zod;
  _exports = arraySize;
  let closure_2;
  let parse;
  const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
  if (sizeCapsResult.length) {
    const _Math = Math;
    let items = [];
    let num = 0;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, sizeCapsResult.map(f104144), 0);
    let tmp7 = min;
    const _Math2 = Math;
    closure_2 = HermesBuiltin.apply(min, items, Math);
    parse = _zod._zod.parse;
    _zod._zod.parse = (value, skipChecks) => {
      const tmp = closure_1(value.value);
      if (tmp > closure_2) {
        skipChecks = undefined;
        if (skipChecks != null) {
          skipChecks = skipChecks.skipChecks;
        }
        if (!skipChecks) {
          let direction;
          if (skipChecks != null) {
            direction = skipChecks.direction;
          }
          if ("backward" !== direction) {
            const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
            obj = sizeCapsResult[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp8 = _slicedToArray(tmp5, 2);
              let tmp9 = tmp8[1];
              if (tmp > tmp8[0]) {
                let def = tmp9._zod.def;
                if (def.when(value)) {
                  let length = value.issues.length;
                  _zod = tmp9._zod;
                  let checkResult = _zod.check(value);
                  let flag = false;
                  value.issues[length].continue = false;
                  let attachSchemaResult = captureStackTrace.attachSchema(value.issues, length, _zod);
                  obj.return();
                  return value;
                }
              }
              continue;
            }
          }
        }
      }
      return parse(value, skipChecks);
    };
  }
});
export const $ZodObject = NEVER.$constructor("$ZodObject", (_zod, shape) => {
  let memoizer;
  let raw;
  let inst = _zod;
  _exports = shape;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, shape);
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(shape, "shape");
  let get1;
  if (ownPropertyDescriptor != null) {
    get1 = ownPropertyDescriptor.get;
  }
  if (get1) {
    raw = ownPropertyDescriptor.get.raw;
  } else {
    raw = shape.shape;
    if (raw == null) {
      raw = {};
    }
  }
  if (raw) {
    function get() {
      raw = {};
      const merged = Object.assign(raw);
      Object.defineProperty(shape, "shape", { value: raw });
      get.raw = raw;
      return raw;
    }
    get.raw = raw;
    let _Object = Object;
    obj = { get };
    Object.defineProperty(shape, "shape", obj);
  }
  let closure_4 = captureStackTrace.cached(() => normalizeDef(shape));
  captureStackTrace.defineLazyInternal(_zod, "propValues", function(def) {
    shape = def.def.shape;
    obj = {};
    for (const key10008 in shape) {
      let _zod = shape[key10008]._zod;
      if (!_zod.values) {
        continue;
      } else {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, key10008)) {
          let _Set = Set;
          let self = this;
          let self2 = this;
          assignProp = assignProp.assignProp;
          set = new Set();
          let assignPropResult = assignProp(obj, key10008, set);
        }
        let values = _zod.values;
        for (const item10026 of values) {
          let obj2 = obj[key10008];
          let addResult = obj2.add(item10026);
          continue;
        }
        if (undefined === _zod.optin) {
          continue;
        } else {
          let obj3 = obj[key10008];
          let addResult1 = obj3.add(undefined);
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  });
  const isObject = captureStackTrace.isObject;
  const catchall = shape.catchall;
  memoizer = memoizer.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = (value, abortEarly) => {
    inst = value;
    let closure_1 = abortEarly;
    if (value == null) {
      value = closure_4.value;
    }
    value = value.value;
    if (isObject(value)) {
      let allocResult;
      let obj2 = memoizer;
      const obj3 = {};
      if (memoizer) {
        let tmp7 = value;
        allocResult = obj2.alloc(inst, value, obj3, abortEarly);
      } else {
        allocResult = obj3;
      }
      value.value = allocResult;
      let items = [];
      shape = value.shape;
      abortEarly = undefined;
      if (abortEarly != null) {
        abortEarly = abortEarly.abortEarly;
      }
      const length = value.issues.length;
      const allKeys = value.allKeys;
      function _loop4(iter) {
        let items1;
        issues = iter;
        const tmp2 = abortEarly;
        if (tmp2) {
          let tmp4 = length;
          const tmp3 = issues;
          if (issues.issues.length !== length) {
            if (closure_1_10.aborted(tmp3, length)) {
              return 0;
            }
          }
        }
        if ("__proto__" === iter) {
          return 1;
        } else {
          const optin = tmp21._zod.optin;
          const optout = tmp21._zod.optout;
          const _zod = tmp21._zod;
          const obj2 = { value: optout[iter], issues: [] };
          const runResult = _zod.run(obj2, optin);
          const tmp22 = optout;
          if (runResult instanceof Promise) {
            items.push(runResult.then((issues) => {
              let items1;
              let tmp4 = iter in value;
              if (issues.issues.length) {
                issues = iter.issues;
                const push = issues.push;
                items = [];
                HermesBuiltin.arraySpread(items, assignProp.prefixIssues(iter, issues.issues), 0);
                HermesBuiltin.apply(push, items, issues);
              }
              if (!tmp4) {
                if (undefined === optin) {
                  if (!issues.issues.length) {
                    const issues1 = iter.issues;
                    obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: items1 };
                    items1 = [iter];
                    issues1.push(obj);
                  }
                }
              }
              if (undefined === issues.value) {
                if (!tmp4) {
                  tmp4 = "defaulted" === optin && "optional" !== optout;
                }
                if (tmp4) {
                  iter.value[iter] = undefined;
                }
              } else {
                iter.value[iter] = issues.value;
              }
            }));
          } else {
            iter = issues;
            let tmp7 = iter in tmp22;
            if (runResult.issues.length) {
              issues = iter.issues;
              let push = issues.push;
              items = [];
              HermesBuiltin.arraySpread(items, closure_1_10.prefixIssues(iter, runResult.issues), 0);
              HermesBuiltin.apply(push, items, issues);
            }
            if (!tmp7) {
              if (undefined === optin) {
                if (!runResult.issues.length) {
                  let issues1 = iter.issues;
                  obj = { code: "invalid_type", expected: "nonoptional", input: "Array", path: items1 };
                  items1 = [iter];
                  issues1.push(obj);
                }
              }
            }
            if (undefined === runResult.value) {
              if (!tmp7) {
                tmp7 = "defaulted" === optin && "optional" !== optout;
              }
              if (tmp7) {
                iter.value[iter] = undefined;
              }
            } else {
              iter.value[iter] = runResult.value;
            }
          }
        }
      }
      let iter = allKeys[Symbol.iterator]();
      let tmp14 = allKeys;
      while (iter !== undefined) {
        let nextPromise;
        if (0 === _loop4(iter.next())) {
          iter.return();
          break;
        }
        let tmp17 = catchall;
        if (tmp17) {
          let tmp21 = closure_4;
          let tmp22 = inst;
          let flag = true;
          nextPromise = handleCatchall(items, value, value, abortEarly, closure_4.value, inst, true === abortEarly);
        } else {
          nextPromise = value;
          if (items.length) {
            let tmp19 = globalThis;
            let _Promise = Promise;
            let allPromises = Promise.all(items);
            nextPromise = allPromises.then(() => issues);
          }
        }
        return nextPromise;
      }
    } else {
      let issues = value.issues;
      obj = { expected: "object", code: "invalid_type", input: value, inst };
      let tmp2 = inst;
      const arr = issues.push(obj);
      return value;
    }
  };
});
export const $ZodObjectJIT = NEVER.$constructor("$ZodObjectJIT", (_zod, catchall) => {
  const inst = _zod;
  _exports = catchall;
  const $ZodObject = _exports.$ZodObject;
  $ZodObject.init(_zod, catchall);
  const parse = _zod._zod.parse;
  catchall.cached(() => normalizeDef(catchall));
  const memoizer = NEVER.globalConfig.memoizer;
  const isObject = catchall.isObject;
  const jitless = NEVER.globalConfig.jitless;
  let value = !jitless;
  NEVER = value;
  if (!jitless) {
    value = catchall.allowsEval.value;
  }
  cuid = value;
  catchall = catchall.catchall;
  _zod._zod.parse = (value, arg1) => {
    let memo;
    let tmp4;
    if (value == null) {
      value = value.value;
    }
    value = value.value;
    if (isObject(value)) {
      let tmp5 = arg1;
      let tmp6 = value;
      if (tmp6) {
        const tmp7 = value;
        if (tmp7) {
          let async;
          if (arg1 != null) {
            async = arg1.async;
          }
          if (false === async) {
            let tmp10;
            if (true !== arg1.jitless) {
              let tmp11 = closure_2;
              if (!tmp11) {
                let tmp12 = catchall;
                let num = 0;
                const tmp13 = ((shape) => {
                  value = value.value;
                  const symbolKeys = value.symbolKeys;
                  obj = { shape, inst, memo, syms: symbolKeys };
                  const doc = new inst(closure_2[7]).Doc(["payload", "ctx"], obj);
                  function prefixStr(arg0, arg1) {
                    return "\n          let " + arg0 + "_ab = false;\n          for (let i = 0; i < " + arg0 + ".issues.length; i++) {\n            const iss = " + arg0 + ".issues[i];\n            iss.path = iss.path ? [" + arg1 + ", ...iss.path] : [" + arg1 + "];\n            payload.issues.push(iss);\n            if (iss.continue !== true) " + arg0 + "_ab = true;\n          }\n          if (" + arg0 + "_ab && ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }";
                  }
                  function parseStr(arg0) {
                    return "shape[" + arg0 + "]._zod.run({ value: input[" + arg0 + "], issues: [] }, ctx)";
                  }
                  doc.write("const input = payload.value;");
                  const obj2 = Object.create(null);
                  let num = 0;
                  const tmp3 = value.allKeys[Symbol.iterator]();
                  while (tmp3 !== undefined) {
                    let tmp6 = +num;
                    num = tmp6 + 1;
                    obj2[tmp4] = `key_${tmp6}`;
                    continue;
                  }
                  let str = "const newResult = {};";
                  const write = doc.write;
                  if (memo) {
                    str = "const newResult = memo.alloc(inst, payload, {}, ctx);";
                  }
                  write(str);
                  const iter = value.allKeys[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp9 = nextResult;
                    if ("__proto__" !== nextResult) {
                      let combined;
                      let tmp75 = obj2[tmp9];
                      if (typeof tmp9 === "symbol") {
                        let _HermesInternal = HermesInternal;
                        combined = "syms[" + symbolKeys.indexOf(tmp9) + "]";
                      } else {
                        combined = catchall.esc(tmp9);
                      }
                      let tmp12 = combined;
                      let _HermesInternal2 = HermesInternal;
                      let combined1 = "" + combined + " in input";
                      let tmp15 = shape[tmp9];
                      let tmp16 = tmp15;
                      let optin;
                      if (tmp15 != null) {
                        let _zod = tmp15._zod;
                        if (_zod != null) {
                          optin = _zod.optin;
                        }
                      }
                      let tmp18 = optin;
                      let tmp19 = undefined !== optin;
                      let optout;
                      if (tmp16 != null) {
                        let _zod2 = tmp16._zod;
                        if (_zod2 != null) {
                          optout = _zod2.optout;
                        }
                      }
                      let tmp22 = "optional" === optout;
                      let _HermesInternal3 = HermesInternal;
                      let str2 = "const ";
                      let str3 = " = ";
                      let str4 = ";";
                      let writeResult2 = doc.write("const " + tmp75 + " = " + parseStr(tmp12) + ";");
                      let tmp27 = tmp19;
                      if (tmp27) {
                        let tmp28 = tmp22;
                        if (tmp28) {
                          let combined2;
                          if ("optional" === tmp18) {
                            let _HermesInternal9 = HermesInternal;
                            combined2 = "" + tmp75 + "_present";
                          } else {
                            let _HermesInternal8 = HermesInternal;
                            let str27 = "";
                            let str28 = ".value !== undefined || ";
                            let str29 = "_present";
                            combined2 = "" + tmp75 + ".value !== undefined || " + tmp75 + "_present";
                          }
                          let _HermesInternal10 = HermesInternal;
                          let str30 = "\n        const ";
                          let str31 = "_present = ";
                          let str32 = ";\n        if (!";
                          let str33 = ".issues.length || ";
                          let str34 = "_present) {\n          if (";
                          let str35 = ".issues.length) {";
                          let str36 = "\n          }\n\n          if (";
                          let str37 = ") {\n            newResult[";
                          let str38 = "] = ";
                          let str39 = ".value;\n          }\n        }\n\n      ";
                          let writeResult3 = doc.write("\n        const " + tmp75 + "_present = " + combined1 + ";\n        if (!" + tmp75 + ".issues.length || " + tmp75 + "_present) {\n          if (" + tmp75 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n          }\n\n          if (" + combined2 + ") {\n            newResult[" + combined + "] = " + tmp75 + ".value;\n          }\n        }\n\n      ");
                        }
                      }
                      let write2 = doc.write;
                      let tmp30 = tmp75;
                      if (tmp19) {
                        let _HermesInternal5 = HermesInternal;
                        let str16 = "\n        if (";
                        let str17 = ".issues.length) {";
                        let str18 = "\n        }\n      ";
                        let write2Result = write2("\n        if (" + tmp30 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n        }\n      ");
                        if ("defaulted" === tmp18) {
                          let _HermesInternal7 = HermesInternal;
                          let str24 = "newResult[";
                          let str25 = "] = ";
                          let str26 = ".value;";
                          let writeResult4 = doc.write("newResult[" + tmp12 + "] = " + tmp75 + ".value;");
                        } else {
                          let _HermesInternal6 = HermesInternal;
                          let str19 = "\n        if (";
                          let str20 = ".value !== undefined || ";
                          let str21 = ") {\n          newResult[";
                          let str22 = "] = ";
                          let str23 = ".value;\n        }\n      ";
                          let writeResult5 = doc.write("\n        if (" + tmp75 + ".value !== undefined || " + combined1 + ") {\n          newResult[" + tmp12 + "] = " + tmp75 + ".value;\n        }\n      ");
                        }
                      } else {
                        let _HermesInternal4 = HermesInternal;
                        let str5 = "\n        const ";
                        let str6 = "_present = ";
                        let str7 = ";\n        if (";
                        let str8 = ".issues.length) {";
                        let str9 = "\n        }\n        if (!";
                        let str10 = "_present && !";
                        let str11 = ".issues.length) {\n          payload.issues.push({\n            code: \"invalid_type\",\n            expected: \"nonoptional\",\n            input: undefined,\n            path: [";
                        let str12 = "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (";
                        let str13 = "_present) {\n          newResult[";
                        let str14 = "] = ";
                        let str15 = ".value;\n        }\n\n      ";
                        let write2Result1 = write2("\n        const " + tmp30 + "_present = " + combined1 + ";\n        if (" + tmp30 + ".issues.length) {" + prefixStr(tmp75, tmp12) + "\n        }\n        if (!" + tmp30 + "_present && !" + tmp30 + ".issues.length) {\n          payload.issues.push({\n            code: \"invalid_type\",\n            expected: \"nonoptional\",\n            input: undefined,\n            path: [" + combined + "]\n          });\n          if (ctx && ctx.abortEarly) {\n            payload.value = newResult;\n            return payload;\n          }\n        }\n\n        if (" + tmp30 + "_present) {\n          newResult[" + combined + "] = " + tmp30 + ".value;\n        }\n\n      ");
                      }
                    }
                    continue;
                  }
                  doc.write("payload.value = newResult;");
                  doc.write("return payload;");
                  return doc.compile();
                })(catchall.shape);
                closure_2 = tmp13;
                tmp11 = tmp13;
              }
              const tmp11Result = tmp11(value, arg1);
              let tmp15 = catchall;
              let tmp17Result = tmp11Result;
              if (catchall) {
                let tmp18 = value;
                let tmp19 = inst;
                let abortEarly;
                const tmp17 = handleCatchall;
                if (arg1 != null) {
                  abortEarly = arg1.abortEarly;
                }
                let tmp22 = tmp11Result;
                let tmp23 = arg1;
                let tmp24 = tmp18;
                let tmp25 = tmp19;
                tmp17Result = tmp17([], value, tmp11Result, arg1, tmp18, tmp19, true === abortEarly);
              }
              tmp10 = tmp17Result;
            }
            tmp4 = tmp10;
          }
        }
      }
      let tmp9 = parse;
      tmp10 = parse(value, arg1);
    } else {
      const issues = value.issues;
      obj = { expected: "object", code: "invalid_type", input: value, inst };
      issues.push(obj);
      tmp4 = value;
    }
    return tmp4;
  };
});
export const $ZodUnion = NEVER.$constructor("$ZodUnion", (_zod, options) => {
  let closure_0 = _zod;
  _exports = options;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, options);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => {
    options = def.def.options;
    let str = "defaulted";
    if (!options.some((_zod) => "defaulted" === _zod._zod.optin)) {
      const options2 = def.def.options;
      let str2;
      if (options2.some((_zod) => undefined !== _zod._zod.optin)) {
        str2 = "optional";
      }
      str = str2;
    }
    return str;
  });
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => {
    options = def.def.options;
    let str;
    if (options.some((_zod) => "optional" === _zod._zod.optout)) {
      str = "optional";
    }
    return str;
  });
  captureStackTrace.defineLazyInternal(_zod, "values", function(def) {
    options = def.def.options;
    if (options.every((_zod) => _zod._zod.values)) {
      const _Set = Set;
      const options2 = def.def.options;
      const self = this;
      const self2 = this;
      set = new Set(options2.flatMap((_zod) => Array.from(_zod._zod.values)));
      return set;
    }
  });
  captureStackTrace.defineLazyInternal(_zod, "pattern", function(def) {
    options = def.def.options;
    if (options.every((_zod) => _zod._zod.pattern)) {
      const options1 = def.def.options;
      const mapped = options1.map((_zod) => _zod._zod.pattern);
      const _RegExp = RegExp;
      const mapped1 = mapped.map((source) => closure_1_10.cleanRegex(source.source));
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const regExp = new RegExp("^(" + mapped1.join("|") + ")$");
      return regExp;
    }
  });
  let run = null;
  if (1 === options.options.length) {
    run = options.options[0]._zod.run;
  }
  _zod._zod.parse = (value, arg1) => {
    let closure_1;
    let closure_0 = value;
    options = arg1;
    if (run) {
      return run(value, arg1);
    } else {
      let nextPromise;
      let flag = false;
      const items = [];
      options = options.options;
      const iter = options[Symbol.iterator]();
      while (iter !== undefined) {
        _zod = iter.next()._zod;
        obj = { value: value.value, issues: [] };
        let runResult = _zod.run(obj, arg1);
        let tmp7 = runResult;
        let _Promise = Promise;
        if (runResult instanceof Promise) {
          let arr = items.push(tmp7);
          flag = true;
        } else if (0 === tmp7.issues.length) {
          iter.return();
          return tmp7;
        } else {
          let arr3 = items.push(tmp7);
        }
        continue;
      }
      if (flag) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then((result) => handleUnionResults(result, _zod, _zod, closure_1));
      } else {
        nextPromise = handleUnionResults(items, value, closure_0, arg1);
      }
      return nextPromise;
    }
  };
});
export const $ZodXor = NEVER.$constructor("$ZodXor", (_zod, options) => {
  let closure_0 = _zod;
  _exports = options;
  const $ZodUnion = _exports.$ZodUnion;
  $ZodUnion.init(_zod, options);
  options.inclusive = false;
  let run = null;
  if (1 === options.options.length) {
    run = options.options[0]._zod.run;
  }
  _zod._zod.parse = (value, arg1) => {
    let closure_1;
    let inst = value;
    options = arg1;
    if (run) {
      return run(value, arg1);
    } else {
      let nextPromise;
      let flag = false;
      let items = [];
      options = options.options;
      let tmp2 = options;
      const iter = options[Symbol.iterator]();
      while (iter !== undefined) {
        _zod = iter.next()._zod;
        obj = { value: value.value, issues: [] };
        let runResult = _zod.run(obj, arg1);
        let _Promise = Promise;
        let tmp8 = runResult instanceof Promise;
        let arr = items.push(runResult);
        if (tmp8) {
          flag = true;
        }
        continue;
      }
      if (flag) {
        const allPromises = Promise.all(items);
        nextPromise = allPromises.then((arr) => {
          let num;
          inst = closure_1;
          const items = [];
          for (let num = 0; num < arr.length; num = num + 1) {
            if (0 === arr[num].issues.length) {
              arr = items.push(num);
            }
          }
          if (1 === items.length) {
            inst.value = arr[items[0]].value;
          } else if (0 === items.length) {
            let issues = iter.issues;
            const push = issues.push;
            const obj2 = { code: "invalid_union", input: inst.value, inst, errors: arr.map(f104149) };
            push(obj2);
          } else {
            const issues1 = iter.issues;
            obj = { code: "invalid_union", input: inst.value, inst, errors: [], inclusive: false, matches: items };
            issues1.push(obj);
          }
          return inst;
        });
      } else {
        const num = 0;
        handleExclusiveUnionResults(items, value, inst, arg1);
        nextPromise = value;
      }
      return nextPromise;
    }
  };
});
export const $ZodDiscriminatedUnion = NEVER.$constructor("$ZodDiscriminatedUnion", (_zod, options) => {
  const inst = _zod;
  _exports = options;
  options.inclusive = false;
  const $ZodUnion = _exports.$ZodUnion;
  $ZodUnion.init(_zod, options);
  const parse = _zod._zod.parse;
  captureStackTrace.defineLazyInternal(_zod, "propValues", function(def) {
    obj = {};
    let num = 0;
    const iter = def.def.options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let propValues = nextResult._zod.propValues;
      let tmp3 = propValues;
      if (tmp3) {
        let _Object = Object;
        if (0 !== Object.keys(tmp3).length) {
          let obj4 = tmp3[def.def.discriminator];
          let hasItem;
          if (obj4 != null) {
            hasItem = obj4.has(undefined);
          }
          if (hasItem) {
            num = num + 1;
          }
          let _Object2 = Object;
          let entries = Object.entries(tmp3);
          for (const item10039 of entries) {
            let tmp12 = closure_3(item10039, 2);
            let first = tmp12[0];
            let tmp14 = first;
            let tmp15 = tmp12[1];
            let _Object3 = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            if (!hasOwnProperty.call(obj, first)) {
              let _Set = Set;
              let self = this;
              let self2 = this;
              assignProp = assignProp.assignProp;
              set = new Set();
              let assignPropResult = assignProp(obj, tmp14, set);
            }
            for (const item10064 of tmp15) {
              let obj2 = obj[tmp14];
              let addResult = obj2.add(item10064);
              continue;
            }
            continue;
          }
          continue;
        }
      }
      let _Error = Error;
      options = def.def.options;
      let _HermesInternal = HermesInternal;
      let str = "\"";
      let str2 = "Invalid discriminated union option at index \"";
      let self3 = this;
      let self4 = this;
      let error = new Error("Invalid discriminated union option at index \"" + options.indexOf(nextResult) + "\"");
      throw error;
    }
    const tmp27 = !def.def.unionFallback && num > 1;
    if (tmp27) {
      if (obj[def.def.discriminator] != null) {
        obj[def.def.discriminator].delete(undefined);
      }
    }
    return obj;
  });
  options = options.options;
  const item = options.forEach(function(_zod, index) {
    const rawShapeResult = captureStackTrace.rawShape(_zod._zod.def);
    if (rawShapeResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(rawShapeResult, options.discriminator)) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid discriminated union option at index \"" + index + "\"");
        throw error;
      }
    }
  });
  let closure_3 = captureStackTrace.cached(() => discriminatorMap(options));
  _zod._zod.parse = (value, direction) => {
    let arr;
    let items;
    value = value.value;
    if (captureStackTrace.isObject(value)) {
      let runResult;
      let tmp4;
      if (value != null) {
        tmp4 = value[options.discriminator];
      }
      const value2 = value.value;
      const value3 = value2.get(tmp4);
      const iter = value;
      if (!value3) {
        if (!options.unionFallback) {
          let tmp11;
          if ("backward" !== direction.direction) {
            const issues = value.issues;
            const _Array = Array;
            const value6 = iter.value;
            const push = issues.push;
            const obj2 = {
              code: "invalid_union",
              errors: [],
              note: "No matching discriminator",
              discriminator: options.discriminator,
              options: arr.filter((item) => {
                        value = value.value;
                        return null !== value.get(item);
                      }),
              input: value,
              path: items,
              inst
            };
            items = [options.discriminator];
            arr = Array.from(value6.keys());
            push(obj2);
            tmp11 = value;
          }
          runResult = tmp11;
        }
        tmp11 = parse(value, direction);
      } else {
        const _zod = value3._zod;
        runResult = _zod.run(value, direction);
      }
      return runResult;
    } else {
      const issues1 = value.issues;
      obj = { code: "invalid_type", expected: "object", input: value, inst };
      issues1.push(obj);
      return value;
    }
  };
});
export const $ZodIntersection = NEVER.$constructor("$ZodIntersection", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    let nextPromise = value;
    closure_0 = value;
    value = value.value;
    const _zod = closure_0.left._zod;
    const runResult = _zod.run({ value, issues: [] }, arg1);
    const _zod2 = closure_0.right._zod;
    const runResult1 = _zod2.run({ value, issues: [] }, arg1);
    if (!(runResult instanceof Promise)) {
      if (!(runResult1 instanceof Promise)) {
        handleIntersectionResults(nextPromise, runResult, runResult1);
      }
      return nextPromise;
    }
    const items = [runResult, runResult1];
    const allPromises = Promise.all(items);
    nextPromise = allPromises.then((result) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = result;
      closure_2_35(closure_0, tmp, tmp2);
      return closure_0;
    });
  };
});
export const $ZodTuple = NEVER.$constructor("$ZodTuple", (_zod, items) => {
  let inst = _zod;
  _exports = items;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, items);
  items = items.items;
  const memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = function(value, abortEarly) {
    let items1;
    let length;
    function _loop5(arg0) {
      let closure_0 = arg0;
      const _zod = items[arg0]._zod;
      obj = { value: items[arg0], issues: [] };
      const runResult = _zod.run(obj, closure_1);
      if (runResult instanceof Promise) {
        items1.push(runResult.then((result) => {
          array[closure_0] = result;
        }));
      } else {
        array[arg0] = runResult;
        const length = abortEarly && !closure_7 && runResult.issues.length;
        if (length) {
          closure_7 = captureStackTrace.aborted(runResult);
        }
      }
    }
    let nextPromise = value;
    inst = value;
    value = value.value;
    items = value;
    if (Array.isArray(value)) {
      let allocResult;
      items = [];
      if (items1) {
        allocResult = obj2.alloc(inst, nextPromise, items, abortEarly);
      } else {
        allocResult = items;
      }
      nextPromise.value = allocResult;
      items1 = [];
      let arr5 = items;
      const tmp11 = getTupleOptStart(items, "optin");
      const tmp12 = getTupleOptStart(items, "optout");
      let closure_4 = tmp12;
      const tmp14 = items;
      if (!items.rest) {
        if (value.length < tmp11) {
          let issues = nextPromise.issues;
          const obj3 = { code: "too_small", minimum: tmp11, inclusive: true, input: value, inst, origin: "array" };
          issues.push(obj3);
          return nextPromise;
        } else if (value.length > arr5.length) {
          const issues1 = nextPromise.issues;
          const obj4 = { code: "too_big", maximum: arr5.length, inclusive: true, input: value, inst, origin: "array" };
          issues1.push(obj4);
        }
      }
      const _Array = Array;
      const self = this;
      const self2 = this;
      const array = new Array(arr5.length);
      let tmp22;
      const tmp20 = array;
      if (tmp14.rest) {
        abortEarly = undefined;
        if (abortEarly != null) {
          abortEarly = abortEarly.abortEarly;
        }
        tmp22 = abortEarly;
      }
      abortEarly = tmp22;
      let c7 = false;
      let num3 = 0;
      if (0 < arr5.length) {
        do {
          let tmp25 = _loop5(num3);
          num3 = num3 + 1;
          arr5 = items;
          length = items.length;
        } while (num3 < length);
      }
      if (items.rest) {
        const tmp29 = c7;
        if (!tmp29) {
          const diff = arr5.length - 1;
          let tmp31 = diff;
          let closure_8 = diff;
          const substr = value.slice(arr5.length);
          let length2 = nextPromise.issues.length;
          for (const item10087 of substr) {
            let tmp35 = item10087;
            if (tmp22) {
              if (nextPromise.issues.length !== length2) {
                if (captureStackTrace.aborted(nextPromise, length2)) {
                  obj5.return();
                  break;
                } else {
                  length2 = nextPromise.issues.length;
                }
                break;
              }
              break;
            }
            let sum = tmp31 + 1;
            tmp31 = sum;
            closure_8 = sum;
            let _zod = items.rest._zod;
            let obj6 = { value: tmp35, issues: [] };
            let runResult = _zod.run(obj6, abortEarly);
            let promise = runResult;
            let _Promise = Promise;
            if (runResult instanceof Promise) {
              let arr3 = items1.push(promise.then((issues) => {
                if (issues.issues.length) {
                  issues = iter.issues;
                  const push = issues.push;
                  items = [];
                  HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(closure_8, issues.issues), 0);
                  HermesBuiltin.apply(push, items, issues);
                }
                inst.value[closure_8] = issues.value;
              }));
            } else {
              let tmp48 = handleTupleResult(promise, nextPromise, tmp31);
            }
            continue;
          }
        }
      }
      if (items1.length) {
        const allPromises = Promise.all(items1);
        nextPromise = allPromises.then(() => {
          handleTupleResults(array, inst, items, items, closure_4);
          return inst;
        });
      } else {
        handleTupleResults(tmp20, nextPromise, items, value, tmp12);
      }
      return nextPromise;
    } else {
      const issues2 = nextPromise.issues;
      obj = { input: value, inst, expected: "tuple", code: "invalid_type" };
      issues2.push(obj);
      return nextPromise;
    }
  };
});
export const $ZodRecord = NEVER.$constructor("$ZodRecord", (_zod, arg1) => {
  let closure_1;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  let memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = function(value, abortEarly) {
    let tmp18;
    let iter = value;
    inst = value;
    value = value.value;
    memoizer = value;
    if (captureStackTrace.isPlainObject(value)) {
      let allocResult1;
      let items = [];
      const values = abortEarly.keyType._zod.values;
      if (values) {
        if (!abortEarly.partial) {
          let allocResult;
          let obj2 = memoizer;
          let obj3 = {};
          if (memoizer) {
            allocResult = obj2.alloc(inst, iter, obj3, abortEarly);
          } else {
            allocResult = obj3;
          }
          iter.value = allocResult;
          const _Set = Set;
          let self = this;
          let self2 = this;
          set = new Set();
          function _loop6(iter2) {
            let issues1;
            inst = iter2;
            let str1 = iter2;
            const add = set.add;
            if (typeof iter2 === "number") {
              str1 = iter2.toString();
            }
            add(str1);
            if ("__proto__" === iter2) {
              return 0;
            } else {
              const _zod = abortEarly.keyType._zod;
              const obj2 = { value: iter2, issues: [] };
              const iter = _zod.run(obj2, abortEarly);
              const tmp21 = abortEarly;
              const tmp22 = abortEarly;
              if (iter instanceof Promise) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Async schemas not supported in object keys currently");
                throw error;
              } else if (iter.issues.length) {
                let issues = inst.issues;
                obj = { code: "invalid_key", origin: "record", issues: issues1.map((item) => captureStackTrace.finalizeIssue(item, value, NEVER.config())), input: iter2, path: items, inst };
                issues1 = iter.issues;
                const push2 = issues.push;
                items = [iter2];
                push2(obj);
                return 0;
              } else {
                value = iter.value;
                abortEarly = value;
                if ("__proto__" === value) {
                  return 0;
                } else {
                  const _zod2 = tmp21.valueType._zod;
                  const obj3 = { value: value[iter2], issues: [] };
                  const runResult = _zod2.run(obj3, tmp22);
                  if (runResult instanceof Promise) {
                    items.push(runResult.then((issues) => {
                      if (issues.issues.length) {
                        issues = iter2.issues;
                        const push = issues.push;
                        items = [];
                        HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(iter2, issues.issues), 0);
                        HermesBuiltin.apply(push, items, issues);
                      }
                      iter2.value[value] = issues.value;
                    }));
                  } else {
                    if (runResult.issues.length) {
                      const issues2 = inst.issues;
                      let push = issues2.push;
                      const items1 = [];
                      HermesBuiltin.arraySpread(items1, captureStackTrace.prefixIssues(iter2, runResult.issues), 0);
                      HermesBuiltin.apply(push, items1, issues2);
                    }
                    inst.value[value] = runResult.value;
                  }
                }
              }
            }
          }
          const iter2 = values[Symbol.iterator]();
          while (iter2 !== undefined) {
            let _loop6Result = _loop6(iter2.next());
            continue;
          }
          let tmp17 = null;
          let tmp19;
          keys = Object.keys();
          if (keys !== undefined) {
            let tmp21 = tmp18;
            tmp19 = tmp18;
            let tmp22 = keys[tmp];
            while (tmp22 !== undefined) {
              if (set.has(tmp22)) {
                continue;
              } else {
                if ("loose" === abortEarly.mode) {
                  tmp18 = tmp21;
                  if ("__proto__" === tmp22) {
                    continue;
                  } else {
                    iter.value[tmp22] = value[tmp22];
                    tmp18 = tmp21;
                    continue;
                  }
                  continue;
                } else {
                  let items1 = tmp21;
                  if (tmp21 == null) {
                    items1 = [];
                  }
                  let arr = items1.push(tmp22);
                  tmp18 = items1;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
          const tmp25 = tmp19 && tmp19.length > 0;
          if (tmp25) {
            let issues = iter.issues;
            let obj4 = { code: "unrecognized_keys", input: value, inst, keys: tmp19, continue: true };
            issues.push(obj4);
          }
        }
        if (items.length) {
          const allPromises = Promise.all(items);
          iter = allPromises.then(() => inst);
        }
        return iter;
      }
      const obj5 = {};
      if (memoizer) {
        allocResult1 = obj6.alloc(inst, iter, obj5, abortEarly);
      } else {
        allocResult1 = obj5;
      }
      iter.value = allocResult1;
      const _Reflect = Reflect;
      function _loop7(iter3) {
        let issues1;
        let items1;
        inst = iter3;
        if ("__proto__" === iter3) {
          return 0;
        } else {
          const _Object = Object;
          if (propertyIsEnumerable.call(value, iter3)) {
            const _zod = abortEarly.keyType._zod;
            obj = { value: iter3, issues: [] };
            const runResult = _zod.run(obj, abortEarly);
            if (runResult instanceof Promise) {
              const _Error2 = Error;
              const self3 = this;
              const self4 = this;
              const error = new Error("Async schemas not supported in object keys currently");
              throw error;
            } else {
              let iter = runResult;
              if (typeof iter3 === "string") {
                number = number.number;
                iter = runResult;
                if (number.test(iter3)) {
                  iter = runResult;
                  if (runResult.issues.length) {
                    const _zod2 = tmp2.keyType._zod;
                    const _Number = Number;
                    const run = _zod2.run;
                    const obj2 = { value: Number(iter3), issues: [] };
                    const runResult1 = run(obj2, abortEarly);
                    if (runResult1 instanceof Promise) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error1 = new Error("Async schemas not supported in object keys currently");
                      throw error1;
                    } else {
                      iter = runResult;
                      if (0 === runResult1.issues.length) {
                        iter = runResult1;
                      }
                    }
                  }
                }
              }
              if (iter.issues.length) {
                if ("loose" === abortEarly.mode) {
                  inst.value[iter3] = value[iter3];
                } else {
                  const tmp17 = values;
                  if (tmp17) {
                    if (items == null) {
                      items = [];
                    }
                    items.push(iter3);
                  } else {
                    let issues = inst.issues;
                    const obj3 = { code: "invalid_key", origin: "record", issues: issues1.map((item) => captureStackTrace.finalizeIssue(item, value, NEVER.config())), input: iter3, path: items1, inst };
                    issues1 = iter.issues;
                    const push2 = issues.push;
                    items1 = [iter3];
                    push2(obj3);
                  }
                }
                return 0;
              } else {
                value = iter.value;
                abortEarly = value;
                if ("__proto__" === value) {
                  return 0;
                } else {
                  const _zod3 = tmp2.valueType._zod;
                  const obj4 = { value: value[iter3], issues: [] };
                  const runResult2 = _zod3.run(obj4, abortEarly);
                  if (runResult2 instanceof Promise) {
                    items.push(runResult2.then((issues) => {
                      if (issues.issues.length) {
                        issues = iter3.issues;
                        const push = issues.push;
                        items = [];
                        HermesBuiltin.arraySpread(items, captureStackTrace.prefixIssues(iter3, issues.issues), 0);
                        HermesBuiltin.apply(push, items, issues);
                      }
                      iter3.value[value] = issues.value;
                    }));
                  } else {
                    if (runResult2.issues.length) {
                      const issues2 = inst.issues;
                      let push = issues2.push;
                      const items2 = [];
                      HermesBuiltin.arraySpread(items2, captureStackTrace.prefixIssues(iter3, runResult2.issues), 0);
                      HermesBuiltin.apply(push, items2, issues2);
                    }
                    inst.value[value] = runResult2.value;
                  }
                }
              }
            }
          } else {
            return 0;
          }
        }
      }
      const ownKeysResult = Reflect.ownKeys(value);
      const iter3 = ownKeysResult[Symbol.iterator]();
      while (iter3 !== undefined) {
        let _loop7Result = _loop7(iter3.next());
        continue;
      }
      const tmp40 = keys && keys.length > 0;
      if (tmp40) {
        let issues1 = iter.issues;
        const obj7 = { code: "unrecognized_keys", input: value, inst, keys, continue: true };
        issues1.push(obj7);
      }
    } else {
      let issues2 = iter.issues;
      obj = { expected: "record", code: "invalid_type", input: value, inst };
      const tmp2 = inst;
      issues2.push(obj);
      return iter;
    }
  };
});
export const $ZodMap = NEVER.$constructor("$ZodMap", (_zod, arg1) => {
  let closure_1;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  let memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = function(value, abortEarly) {
    let nextPromise = value;
    inst = value;
    value = value.value;
    memoizer = value;
    if (value instanceof Map) {
      let allocResult;
      let items = [];
      if (memoizer) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        const alloc = tmp4.alloc;
        map = new Map();
        allocResult = alloc(inst, nextPromise, map, abortEarly);
      } else {
        const _Map = Map;
        const self = this;
        const self2 = this;
        allocResult = new Map();
      }
      nextPromise.value = allocResult;
      abortEarly = undefined;
      if (abortEarly != null) {
        abortEarly = abortEarly.abortEarly;
      }
      const length = nextPromise.issues.length;
      function _loop8(value) {
        const tmp = abortEarly;
        if (tmp) {
          const tmp2 = value;
          if (value.issues.length !== length) {
            if (captureStackTrace.aborted(tmp2, length)) {
              return 1;
            }
          }
        }
        const _zod = abortEarly.keyType._zod;
        obj = { value, issues: [] };
        const runResult = _zod.run(obj, abortEarly);
        const _zod2 = abortEarly.valueType._zod;
        const obj2 = { value: value2, issues: [] };
        const runResult1 = _zod2.run(obj2, abortEarly);
        if (!(runResult instanceof Promise)) {
          if (!(runResult1 instanceof Promise)) {
            handleMapResult(runResult, runResult1, value, value, closure_2, value, abortEarly);
          }
        }
        items = [runResult, runResult1];
        const push = items.push;
        const allPromises = Promise.all(items);
        push(allPromises.then((result) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = result;
          handleMapResult(tmp, tmp2, inst, inst, memoizer, inst, abortEarly);
        }));
      }
      let obj2 = value[Symbol.iterator]();
      while (obj2 !== undefined) {
        let tmp19 = _slicedToArray(tmp16, 2);
        let value2 = tmp19[1];
        if (_loop8(tmp19[0])) {
          obj2.return();
          break;
        }
        if (items.length) {
          let _Promise = Promise;
          let allPromises = Promise.all(items);
          nextPromise = allPromises.then(() => inst);
        }
        return nextPromise;
      }
    } else {
      const issues = nextPromise.issues;
      obj = { expected: "map", code: "invalid_type", input: value, inst };
      let tmp2 = inst;
      issues.push(obj);
      return nextPromise;
    }
  };
  inst = _zod;
  _exports = mapSize;
  let closure_2;
  let parse;
  const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
  if (sizeCapsResult.length) {
    const tmp4 = globalThis;
    const _Math = Math;
    let items = [];
    HermesBuiltin.arraySpread(items, sizeCapsResult.map(f104144), 0);
    const _Math2 = Math;
    closure_2 = HermesBuiltin.apply(min, items, Math);
    parse = _zod._zod.parse;
    _zod._zod.parse = (value, skipChecks) => {
      const tmp = closure_1(value.value);
      if (tmp > closure_2) {
        skipChecks = undefined;
        if (skipChecks != null) {
          skipChecks = skipChecks.skipChecks;
        }
        if (!skipChecks) {
          let direction;
          if (skipChecks != null) {
            direction = skipChecks.direction;
          }
          if ("backward" !== direction) {
            const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
            obj = sizeCapsResult[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp8 = _slicedToArray(tmp5, 2);
              let tmp9 = tmp8[1];
              if (tmp > tmp8[0]) {
                let def = tmp9._zod.def;
                if (def.when(value)) {
                  let length = value.issues.length;
                  _zod = tmp9._zod;
                  let checkResult = _zod.check(value);
                  let flag = false;
                  value.issues[length].continue = false;
                  let attachSchemaResult = captureStackTrace.attachSchema(value.issues, length, _zod);
                  obj.return();
                  return value;
                }
              }
              continue;
            }
          }
        }
      }
      return parse(value, skipChecks);
    };
  }
});
export const $ZodSet = NEVER.$constructor("$ZodSet", (_zod, arg1) => {
  let valueType;
  let inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  const memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.attach(_zod);
  }
  _zod._zod.parse = function(value, abortEarly) {
    let nextPromise = value;
    inst = value;
    value = value.value;
    if (value instanceof Set) {
      let allocResult;
      let items = [];
      if (memoizer) {
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const alloc = tmp5.alloc;
        set = new Set();
        allocResult = alloc(inst, nextPromise, set, abortEarly);
      } else {
        const _Set = Set;
        const self = this;
        const self2 = this;
        allocResult = new Set();
      }
      nextPromise.value = allocResult;
      if (abortEarly != null) {
        abortEarly = abortEarly.abortEarly;
      }
      let length = nextPromise.issues.length;
      const iter = value[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp18 = nextResult;
        if (abortEarly) {
          if (nextPromise.issues.length !== length) {
            if (captureStackTrace.aborted(nextPromise, length)) {
              iter.return();
              break;
            } else {
              length = nextPromise.issues.length;
            }
            break;
          }
          if (items.length) {
            let _Promise2 = Promise;
            let allPromises = Promise.all(items);
            nextPromise = allPromises.then(() => closure_0);
          }
          return nextPromise;
        }
        let _zod = valueType.valueType._zod;
        let obj2 = { value: tmp18, issues: [] };
        let runResult = _zod.run(obj2, abortEarly);
        let promise = runResult;
        let _Promise = Promise;
        if (runResult instanceof Promise) {
          let arr = items.push(promise.then((issues) => {
            if (issues.issues.length) {
              issues = iter.issues;
              const push = issues.push;
              const items = [];
              HermesBuiltin.arraySpread(items, issues.issues, 0);
              HermesBuiltin.apply(push, items, issues);
            }
            const value = iter.value;
            value.add(issues.value);
          }));
        } else {
          let tmp27 = handleSetResult(promise, nextPromise);
        }
        continue;
      }
    } else {
      let issues = nextPromise.issues;
      obj = { input: value, inst, expected: "set", code: "invalid_type" };
      issues.push(obj);
      return nextPromise;
    }
  };
  inst = _zod;
  _exports = setSize;
  let closure_2;
  let parse;
  let sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
  if (sizeCapsResult.length) {
    const tmp4 = globalThis;
    const _Math = Math;
    let items = [];
    const tmp5 = items;
    HermesBuiltin.arraySpread(items, sizeCapsResult.map(f104144), 0);
    let tmp7 = min;
    let tmp8 = items;
    const _Math2 = Math;
    closure_2 = HermesBuiltin.apply(min, items, Math);
    parse = _zod._zod.parse;
    _zod._zod.parse = (value, skipChecks) => {
      const tmp = closure_1(value.value);
      if (tmp > closure_2) {
        skipChecks = undefined;
        if (skipChecks != null) {
          skipChecks = skipChecks.skipChecks;
        }
        if (!skipChecks) {
          let direction;
          if (skipChecks != null) {
            direction = skipChecks.direction;
          }
          if ("backward" !== direction) {
            const sizeCapsResult = captureStackTrace.sizeCaps(_zod._zod.def.checks);
            obj = sizeCapsResult[Symbol.iterator]();
            while (obj !== undefined) {
              let tmp8 = _slicedToArray(tmp5, 2);
              let tmp9 = tmp8[1];
              if (tmp > tmp8[0]) {
                let def = tmp9._zod.def;
                if (def.when(value)) {
                  let length = value.issues.length;
                  _zod = tmp9._zod;
                  let checkResult = _zod.check(value);
                  let flag = false;
                  value.issues[length].continue = false;
                  let attachSchemaResult = captureStackTrace.attachSchema(value.issues, length, _zod);
                  obj.return();
                  return value;
                }
              }
              continue;
            }
          }
        }
      }
      return parse(value, skipChecks);
    };
  }
});
export const $ZodEnum = NEVER.$constructor("$ZodEnum", (_zod, arg1) => {
  let enumValues;
  const inst = _zod;
  const $ZodType = enumValues.$ZodType;
  $ZodType.init(_zod, arg1);
  enumValues = captureStackTrace.getEnumValues(arg1.entries);
  set = new Set(enumValues);
  _zod._zod.values = set;
  captureStackTrace.defineLazyInternal(_zod, "pattern", (def) => {
    enumValues = enumValues.getEnumValues(def.def.entries);
    const found = enumValues.filter((item) => {
      const propertyKeyTypes = enumValues.propertyKeyTypes;
      return propertyKeyTypes.has(typeof item);
    });
    let str = "^[^\\s\\S]$";
    const _RegExp = RegExp;
    if (found.length) {
      const mapped = found.map((item) => enumValues.escapeRegex(item.toString()));
      const _HermesInternal = HermesInternal;
      str = "^(" + mapped.join("|") + ")$";
    }
    const _RegExp1 = new _RegExp(str);
    return _RegExp1;
  });
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (!set.has(value)) {
      const issues = value.issues;
      obj = { code: "invalid_value", values: enumValues, input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodLiteral = NEVER.$constructor("$ZodLiteral", (_zod, arg1) => {
  const inst = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  set = new Set(arg1.values);
  _zod._zod.values = set;
  captureStackTrace.defineLazyInternal(_zod, "pattern", (def) => {
    values = def.def.values;
    let str = "^[^\\s\\S]$";
    const _RegExp = RegExp;
    if (values.length) {
      const mapped = values.map((item) => {
        let escapeRegexResult;
        if (typeof item === "string") {
          escapeRegexResult = closure_1_10.escapeRegex(item);
        } else if (item) {
          escapeRegexResult = closure_1_10.escapeRegex(item.toString());
        } else {
          const _String = String;
          escapeRegexResult = String(item);
        }
        return escapeRegexResult;
      });
      const _HermesInternal = HermesInternal;
      str = "^(" + mapped.join("|") + ")$";
    }
    const _RegExp1 = new _RegExp(str);
    return _RegExp1;
  });
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (!set.has(value)) {
      const issues = value.issues;
      obj = { code: "invalid_value", values: values.values, input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodFile = NEVER.$constructor("$ZodFile", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    if (!(value instanceof File)) {
      const issues = value.issues;
      obj = { expected: "file", code: "invalid_type", input: value, inst };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodTransform = NEVER.$constructor("$ZodTransform", (_zod, arg1) => {
  let closure_1;
  let constructor = _zod;
  _exports = arg1;
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "optional";
  const memoizer = NEVER.globalConfig.memoizer;
  if (memoizer != null) {
    memoizer.guard(_zod);
  }
  _zod._zod.parse = function(value, direction) {
    constructor = value;
    if ("backward" === direction.direction) {
      const self3 = this;
      const self4 = this;
      const ZodEncodeError = new NEVER.$ZodEncodeError(constructor.constructor.name);
      throw ZodEncodeError;
    } else {
      const transformResult = closure_1.transform(value.value, value);
      if (direction.async) {
        let resolved = transformResult;
        if (!(transformResult instanceof Promise)) {
          resolved = Promise.resolve(transformResult);
        }
        return resolved.then((value) => {
          closure_0.value = value;
          return closure_0;
        });
      } else if (transformResult instanceof Promise) {
        const self = this;
        const self2 = this;
        const ZodAsyncError = new NEVER.$ZodAsyncError();
        throw ZodAsyncError;
      } else {
        value.value = transformResult;
        return value;
      }
    }
  };
});
export const $ZodOptional = NEVER.$constructor("$ZodOptional", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => {
    let str = "optional";
    if ("defaulted" === def.def.innerType._zod.optin) {
      str = "defaulted";
    }
    return str;
  });
  _zod._zod.optout = "optional";
  captureStackTrace.defineLazyInternal(_zod, "values", function(def) {
    const values = def.def.innerType._zod.values;
    set = undefined;
    if (values) {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, values, 0)] = undefined;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    return set;
  });
  captureStackTrace.defineLazyInternal(_zod, "pattern", function(def) {
    const pattern = def.def.innerType._zod.pattern;
    let regExp;
    if (pattern) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^(" + captureStackTrace.cleanRegex(pattern.source) + ")?$");
    }
    return regExp;
  });
  _zod._zod.parse = (value, arg1) => {
    closure_0 = value;
    if (undefined === value.value) {
      if ("defaulted" !== closure_0.innerType._zod.optin) {
        return value;
      } else {
        let nextPromise;
        const _zod2 = tmp2.innerType._zod;
        obj = { value: value.value, issues: [] };
        const runResult = _zod2.run(obj, arg1);
        if (runResult instanceof Promise) {
          nextPromise = runResult.then((issues) => {
            let value;
            if (!issues.issues.length) {
              value = issues.value;
            }
            closure_0.value = value;
            return closure_0;
          });
        } else {
          value = undefined;
          if (!runResult.issues.length) {
            value = runResult.value;
          }
          value.value = value;
          nextPromise = value;
        }
        return nextPromise;
      }
    } else {
      const _zod = closure_0.innerType._zod;
      return _zod.run(value, arg1);
    }
  };
});
export const $ZodExactOptional = NEVER.$constructor("$ZodExactOptional", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodOptional = exports.$ZodOptional;
  $ZodOptional.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
  captureStackTrace.defineLazyInternal(_zod, "pattern", (def) => def.def.innerType._zod.pattern);
  _zod._zod.parse = (arg0, arg1) => {
    const _zod = innerType.innerType._zod;
    return _zod.run(arg0, arg1);
  };
});
export const $ZodNullable = NEVER.$constructor("$ZodNullable", (_zod, arg1) => {
  const innerType = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => def.def.innerType._zod.optin);
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => def.def.innerType._zod.optout);
  captureStackTrace.defineLazyInternal(_zod, "pattern", function(def) {
    const pattern = def.def.innerType._zod.pattern;
    let regExp;
    if (pattern) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      regExp = new RegExp("^(" + captureStackTrace.cleanRegex(pattern.source) + "|null)$");
    }
    return regExp;
  });
  captureStackTrace.defineLazyInternal(_zod, "values", function(def) {
    set = undefined;
    if (def.def.innerType._zod.values) {
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, def.def.innerType._zod.values, 0)] = null;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    return set;
  });
  _zod._zod.parse = (value, arg1) => {
    let runResult = value;
    if (null !== value.value) {
      const _zod = innerType.innerType._zod;
      runResult = _zod.run(value, arg1);
    }
    return runResult;
  };
});
export const $ZodDefault = NEVER.$constructor("$ZodDefault", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "defaulted";
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    if ("backward" === direction.direction) {
      const _zod2 = defaultValue.innerType._zod;
      return _zod2.run(value, direction);
    } else if (undefined === value.value) {
      value.value = defaultValue.defaultValue;
      return value;
    } else {
      let nextPromise;
      const _zod = defaultValue.innerType._zod;
      const runResult = _zod.run(value, direction);
      const tmp = defaultValue;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((value) => {
          if (undefined === value.value) {
            value.value = defaultValue.defaultValue;
          }
          return value;
        });
      } else {
        nextPromise = runResult;
        if (undefined === runResult.value) {
          runResult.value = tmp.defaultValue;
          nextPromise = runResult;
        }
      }
      return nextPromise;
    }
  };
});
export const $ZodPrefault = NEVER.$constructor("$ZodPrefault", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.optin = "defaulted";
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    if ("backward" !== direction.direction) {
      if (undefined === value.value) {
        value.value = closure_0.defaultValue;
      }
    }
    const _zod = closure_0.innerType._zod;
    return _zod.run(value, direction);
  };
});
export const $ZodNonOptional = NEVER.$constructor("$ZodNonOptional", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "values", function(def) {
    const values = def.def.innerType._zod.values;
    set = undefined;
    if (values) {
      const _Set = Set;
      const items = [];
      HermesBuiltin.arraySpread(items, values, 0);
      const self = this;
      const self2 = this;
      set = new Set(items.filter((item) => undefined !== item));
    }
    return set;
  });
  _zod._zod.parse = (arg0, arg1) => {
    let nextPromise;
    const _zod = innerType.innerType._zod;
    const runResult = _zod.run(arg0, arg1);
    if (runResult instanceof Promise) {
      nextPromise = runResult.then((issues) => {
        let length = issues.issues.length;
        const tmp = closure_1_0;
        if (!length) {
          length = undefined !== issues.value;
        }
        if (!length) {
          issues = issues.issues;
          obj = { code: "invalid_type", expected: "nonoptional", input: issues.value, inst: tmp };
          issues.push(obj);
        }
        return issues;
      });
    } else {
      let length = runResult.issues.length;
      let tmp = closure_0;
      if (!length) {
        length = undefined !== runResult.value;
      }
      nextPromise = runResult;
      if (!length) {
        let issues = runResult.issues;
        obj = { code: "invalid_type", expected: "nonoptional", input: runResult.value, inst: tmp };
        issues.push(obj);
        nextPromise = runResult;
      }
    }
    return nextPromise;
  };
});
export const $ZodSuccess = NEVER.$constructor("$ZodSuccess", (_zod, arg1) => {
  let innerType = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = function(arg0, direction) {
    let nextPromise = arg0;
    innerType = arg0;
    if ("backward" === direction.direction) {
      const self = this;
      const self2 = this;
      const ZodEncodeError = new NEVER.$ZodEncodeError("ZodSuccess");
      throw ZodEncodeError;
    } else {
      const _zod = innerType.innerType._zod;
      const runResult = _zod.run(nextPromise, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          closure_0.value = 0 === issues.issues.length;
          return closure_0;
        });
      } else {
        nextPromise.value = 0 === runResult.issues.length;
      }
      return nextPromise;
    }
  };
});
export const $ZodCatch = NEVER.$constructor("$ZodCatch", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => {
    let str = "optional";
    if ("defaulted" === def.def.innerType._zod.optin) {
      str = "defaulted";
    }
    return str;
  });
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => def.def.innerType._zod.optout);
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
  _zod._zod.parse = (value, direction) => {
    let issues;
    let obj3;
    const f104157 = (item) => closure_2_10.finalizeIssue(item, closure_0, closure_2_8.config());
    let closure_1 = direction;
    if ("backward" === direction.direction) {
      const _zod = value.innerType._zod;
      return _zod.run(value, direction);
    } else {
      let nextPromise;
      const _zod2 = value.innerType._zod;
      let obj2 = { value: value.value, issues: [] };
      const runResult = _zod2.run(obj2, direction);
      const tmp6 = value;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          let obj2;
          const tmp = value;
          value = direction;
          if (issues.issues.length) {
            const catchValue = tmp.catchValue;
            obj = { value: value.value, error: obj2, input: value.value };
            const merged = Object.assign(issues);
            obj2 = { issues: issues.map(f104157) };
            issues = issues.issues;
            value.value = catchValue(obj);
          } else {
            value.value = issues.value;
            if (issues.memo) {
              value.memo = true;
            }
          }
          return value;
        });
      } else {
        value = direction;
        if (runResult.issues.length) {
          obj = { value: value.value, error: obj3, input: value.value };
          let catchValue = tmp6.catchValue;
          let merged = Object.assign(runResult);
          obj3 = { issues: issues.map(f104157) };
          issues = runResult.issues;
          value.value = catchValue(obj);
          nextPromise = value;
        } else {
          value.value = runResult.value;
          nextPromise = value;
          if (runResult.memo) {
            value.memo = true;
            nextPromise = value;
          }
        }
      }
      return nextPromise;
    }
  };
});
export const $ZodNaN = NEVER.$constructor("$ZodNaN", (_zod, arg1) => {
  let closure_0 = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    value = value.value;
    let isNaNResult = typeof value === "number";
    if (typeof value === "number") {
      const _Number = Number;
      isNaNResult = Number.isNaN(value.value);
    }
    if (!isNaNResult) {
      const issues = value.issues;
      obj = { input: value.value, inst, expected: "nan", code: "invalid_type" };
      issues.push(obj);
    }
    return value;
  };
});
export const $ZodPipe = NEVER.$constructor("$ZodPipe", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.in._zod.values);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => def.def.in._zod.optin);
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => def.def.out._zod.optout);
  captureStackTrace.defineLazyInternal(_zod, "propValues", (def) => def.def.in._zod.propValues);
  _zod._zod.parse = (arg0, direction) => {
    const f104158 = (code) => "unrecognized_keys" !== code.code;
    if ("backward" === direction.direction) {
      let nextPromise;
      const _zod2 = direction.out._zod;
      let runResult = _zod2.run(arg0, direction);
      const tmp2 = direction;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((issues) => {
          let runResult;
          issues = issues.issues;
          const _in = direction.in;
          const tmp = direction;
          if (issues.some(f104158)) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = _in._zod;
            obj = { value: null, issues: null };
            ({ value: obj.value, issues: obj.issues } = issues);
            runResult = _zod.run(obj, tmp);
          }
          return runResult;
        });
      } else {
        const issues2 = runResult.issues;
        let _in = tmp2.in;
        if (issues2.some(f104158)) {
          runResult.aborted = true;
          nextPromise = runResult;
        } else {
          const _zod3 = _in._zod;
          const obj3 = { value: null, issues: null };
          ({ value: obj2.value, issues: obj2.issues } = runResult);
          nextPromise = _zod3.run(obj3, direction);
        }
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const _zod4 = direction.in._zod;
      const runResult1 = _zod4.run(arg0, direction);
      const tmp5 = direction;
      if (runResult1 instanceof Promise) {
        nextPromise1 = runResult1.then((issues) => {
          let runResult;
          issues = issues.issues;
          const out = direction.out;
          const tmp = direction;
          if (issues.some(f104158)) {
            issues.aborted = true;
            runResult = issues;
          } else {
            const _zod = out._zod;
            obj = { value: null, issues: null };
            ({ value: obj.value, issues: obj.issues } = issues);
            runResult = _zod.run(obj, tmp);
          }
          return runResult;
        });
      } else {
        let issues = runResult1.issues;
        let out = tmp5.out;
        if (issues.some(f104158)) {
          runResult1.aborted = true;
          nextPromise1 = runResult1;
        } else {
          let _zod = out._zod;
          obj = { value: null, issues: null };
          ({ value: obj.value, issues: obj.issues } = runResult1);
          nextPromise1 = _zod.run(obj, direction);
        }
      }
      return nextPromise1;
    }
  };
});
export const $ZodCodec = NEVER.$constructor("$ZodCodec", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.in._zod.values);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => def.def.in._zod.optin);
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => def.def.out._zod.optout);
  captureStackTrace.defineLazyInternal(_zod, "propValues", (def) => def.def.in._zod.propValues);
  _zod._zod.parse = (arg0, direction) => {
    closure_0 = direction;
    const tmp = direction.direction || "forward";
    if ("forward" === tmp) {
      let nextPromise;
      const _zod2 = closure_0.in._zod;
      const runResult = _zod2.run(arg0, direction);
      const tmp6 = closure_0;
      if (runResult instanceof Promise) {
        nextPromise = runResult.then((result) => handleCodecAResult(result, closure_0, closure_0));
      } else {
        nextPromise = handleCodecAResult(runResult, tmp6, direction);
      }
      return nextPromise;
    } else {
      let nextPromise1;
      const _zod = closure_0.out._zod;
      const runResult1 = _zod.run(arg0, direction);
      const tmp2 = closure_0;
      if (runResult1 instanceof Promise) {
        nextPromise1 = runResult1.then((result) => handleCodecAResult(result, closure_0, closure_0));
      } else {
        nextPromise1 = handleCodecAResult(runResult1, tmp2, direction);
      }
      return nextPromise1;
    }
  };
});
export const $ZodPreprocess = NEVER.$constructor("$ZodPreprocess", (arg0, arg1) => {
  const $ZodPipe = exports.$ZodPipe;
  $ZodPipe.init(arg0, arg1);
});
export const $ZodReadonly = NEVER.$constructor("$ZodReadonly", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazyInternal(_zod, "propValues", (def) => def.def.innerType._zod.propValues);
  captureStackTrace.defineLazyInternal(_zod, "values", (def) => def.def.innerType._zod.values);
  captureStackTrace.defineLazyInternal(_zod, "optin", (def) => {
    const innerType = def.def.innerType;
    let optin;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optin = _zod.optin;
      }
    }
    return optin;
  });
  captureStackTrace.defineLazyInternal(_zod, "optout", (def) => {
    const innerType = def.def.innerType;
    let optout;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optout = _zod.optout;
      }
    }
    return optout;
  });
  _zod._zod.parse = (arg0, direction) => {
    if ("backward" === direction.direction) {
      const _zod2 = closure_0.innerType._zod;
      return _zod2.run(arg0, direction);
    } else {
      let nextPromise;
      const _zod = closure_0.innerType._zod;
      const runResult = _zod.run(arg0, direction);
      if (runResult instanceof Promise) {
        nextPromise = runResult.then(handleReadonlyResult);
      } else {
        nextPromise = runResult;
        if (!runResult.memo) {
          const _Object = Object;
          runResult.value = Object.freeze(runResult.value);
          nextPromise = runResult;
        }
      }
      return nextPromise;
    }
  };
});
export const $ZodTemplateLiteral = NEVER.$constructor("$ZodTemplateLiteral", function(_zod, arg1) {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  const items = [];
  const iter = arg1.parts[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (typeof nextResult === "object") {
      if (null !== tmp4) {
        let tmp16 = partPattern(tmp4);
        if (tmp16) {
          let arr = items.push(captureStackTrace.cleanRegex(tmp17));
          continue;
        } else {
          let _Error2 = Error;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp4._zod.traits, 0);
          let _HermesInternal3 = HermesInternal;
          let str2 = "Invalid template literal part, no pattern found: ";
          let self3 = this;
          let self4 = this;
          let error = new Error("Invalid template literal part, no pattern found: " + items1.shift());
          throw error;
        }
      }
    }
    if (null !== tmp4) {
      let primitiveTypes = captureStackTrace.primitiveTypes;
      if (!primitiveTypes.has(typeof tmp4)) {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = "Invalid template literal part: ";
        let self = this;
        let self2 = this;
        let error1 = new Error("Invalid template literal part: " + tmp4);
        throw error1;
      }
    }
    let _HermesInternal2 = HermesInternal;
    let arr2 = items.push(captureStackTrace.escapeRegex("" + tmp4));
  }
  _zod = _zod._zod;
  const regExp = new RegExp("^" + items.join("") + "$");
  _zod.pattern = regExp;
  _zod._zod.parse = (value, arg1) => {
    let str;
    if (typeof value.value !== "string") {
      const issues = value.issues;
      const obj2 = { input: value.value, inst, expected: "string", code: "invalid_type" };
      issues.push(obj2);
    } else {
      inst._zod.pattern.lastIndex = 0;
      const pattern = inst._zod.pattern;
      if (!pattern.test(value.value)) {
        const issues1 = value.issues;
        obj = { input: value.value, inst, code: "invalid_format", format: str, pattern: inst._zod.pattern.source };
        str = format.format;
        const push = issues1.push;
        if (str == null) {
          str = "template_literal";
        }
        push(obj);
      }
    }
    return value;
  };
});
export const $ZodFunction = NEVER.$constructor("$ZodFunction", (_zod, value) => {
  let inst = _zod;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, value);
  obj = { value };
  Object.defineProperty(_zod, "_def", obj);
  _zod._zod.def = value;
  _zod.implement = function(fn) {
    let _def;
    inst = fn;
    if (typeof fn !== "function") {
      const tmp = globalThis;
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("implement() must be called with a function");
      throw error;
    } else {
      const _Object = Object;
      obj = { value: inst._zod, enumerable: false };
      return Object.defineProperty(function() {
        const items = [...arguments];
        let parsed = items;
        if (_def._def.input) {
          parsed = _parse.parse(tmp._def.input, items);
        }
        const applyResult = Reflect.apply(_def, this, parsed);
        let parsed1 = applyResult;
        if (_def._def.output) {
          parsed1 = _parse.parse(tmp._def.output, applyResult);
        }
        return parsed1;
      }, "_zod", obj);
    }
  };
  _zod.implementAsync = function(fn) {
    inst = fn;
    if (typeof fn !== "function") {
      const tmp = globalThis;
      const _Error = Error;
      let self = this;
      const self2 = this;
      const error = new Error("implementAsync() must be called with a function");
      throw error;
    } else {
      const _Object = Object;
      let tmp5 = _asyncToGenerator;
      obj = { value: inst._zod, enumerable: false };
      return Object.defineProperty(_asyncToGenerator(async function() {
        const self = this;
        let closure_1 = [...arguments];
        let c5 = 0;
        let c6 = 0;
        const iter = (async (arg0, value) => {
          let tmp11;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else if (self._def.input) {
              c5 = 2;
              c6 = 1;
              const obj5 = { value: _self(closure_2_2[8]).parseAsync(self._def.input, _self), done: false };
              return obj5;
            } else {
              tmp11 = _self;
            }
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else {
              tmp11 = value;
              if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
            }
          } else {
            let tmp5;
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = value;
                if (self._def.output) {
                  c5 = 4;
                  c6 = 1;
                  const obj8 = { value: _self(closure_2_2[8]).parseAsync(self._def.output, closure_2), done: false };
                  return obj8;
                } else {
                  tmp5 = closure_2;
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              }
            }
            c6 = 3;
            return { value: tmp5, done: true };
          }
          closure_1 = tmp11;
          const _Reflect = Reflect;
          await Reflect.apply(closure_131_0, closure_4, closure_1);
          closure_4 = self;
          closure_3 = self;
          closure_2 = tmp;
          _self = closure_1;
          return "Path";
        })();
        iter.next();
        return iter;
      }), "_zod", obj);
    }
  };
  _zod._zod.parse = (value, arg1) => {
    if (typeof value.value !== "function") {
      const issues = value.issues;
      obj = { code: "invalid_type", expected: "function", input: value.value, inst };
      issues.push(obj);
      return value;
    } else {
      let implementAsyncResult;
      const output = inst._def.output && "promise" === obj2._def.output._zod.def.type;
      if (output) {
        implementAsyncResult = obj2.implementAsync(value.value);
      } else {
        implementAsyncResult = obj2.implement(value.value);
      }
      value.value = implementAsyncResult;
      return value;
    }
  };
  _zod.input = function() {
    let constructor1;
    const items = [...arguments];
    const constructor = inst.constructor;
    obj = { type: "function", input: null, output: null };
    if (Array.isArray(items[0])) {
      const obj3 = { type: "tuple", items: null, rest: null };
      [obj2.items, obj2.rest] = items;
      const self3 = this;
      const self4 = this;
      const ZodTuple = new exports.$ZodTuple(obj3);
      obj.input = ZodTuple;
      obj.output = inst._def.output;
      const self5 = this;
      const self6 = this;
      constructor1 = new constructor(obj);
    } else {
      obj.input = items[0];
      obj.output = inst._def.output;
      const self = this;
      const self2 = this;
      constructor1 = new constructor(obj);
    }
    return constructor1;
  };
  _zod.output = (output) => {
    obj = { type: "function", input: inst._def.input, output };
    const constructor = new inst.constructor(obj);
    return constructor;
  };
  return _zod;
});
export const $ZodPromise = NEVER.$constructor("$ZodPromise", (_zod, arg1) => {
  let closure_0 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (value, arg1) => {
    const innerType = arg1;
    const resolved = Promise.resolve(value.value);
    return resolved.then((value) => {
      const _zod = innerType.innerType._zod;
      obj = { value, issues: [] };
      return _zod.run(obj, innerType);
    });
  };
});
export const $ZodLazy = NEVER.$constructor("$ZodLazy", (_zod, arg1) => {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const $ZodType = exports.$ZodType;
  $ZodType.init(_zod, arg1);
  captureStackTrace.defineLazy(_zod._zod, "innerType", () => {
    if (!_cachedInner._cachedInner) {
      _cachedInner._cachedInner = _cachedInner.getter();
    }
    return _cachedInner._cachedInner;
  });
  captureStackTrace.defineLazyInternal(_zod, "pattern", (innerType) => {
    innerType = innerType.innerType;
    let pattern;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        pattern = _zod.pattern;
      }
    }
    return pattern;
  });
  captureStackTrace.defineLazyInternal(_zod, "propValues", (innerType) => {
    innerType = innerType.innerType;
    let propValues;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        propValues = _zod.propValues;
      }
    }
    return propValues;
  });
  captureStackTrace.defineLazyInternal(_zod, "optin", (innerType) => {
    innerType = innerType.innerType;
    let optin;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optin = _zod.optin;
      }
    }
    return optin;
  });
  captureStackTrace.defineLazyInternal(_zod, "optout", (innerType) => {
    innerType = innerType.innerType;
    let optout;
    if (innerType != null) {
      const _zod = innerType._zod;
      if (_zod != null) {
        optout = _zod.optout;
      }
    }
    return optout;
  });
  _zod._zod.parse = (arg0, arg1) => {
    _zod = _zod._zod.innerType._zod;
    return _zod.run(arg0, arg1);
  };
});
export const $ZodCustom = NEVER.$constructor("$ZodCustom", (_zod, arg1) => {
  let closure_0 = _zod;
  _exports = arg1;
  $ZodCheck = $ZodCheck.$ZodCheck;
  $ZodCheck.init(_zod, arg1);
  const $ZodType = _exports.$ZodType;
  $ZodType.init(_zod, arg1);
  _zod._zod.parse = (arg0, arg1) => arg0;
  _zod._zod.check = (value) => {
    let items;
    const inst = value;
    value = value.value;
    closure_1 = value;
    const fnResult = closure_1.fn(value);
    if (fnResult instanceof Promise) {
      return fnResult.then((result) => {
        let items;
        const tmp5 = result;
        if (!tmp5) {
          obj = { code: "custom", input: tmp3, inst, path: items, continue: !inst._zod.def.abort };
          let path = tmp4._zod.def.path;
          if (path == null) {
            path = [];
          }
          items = [];
          HermesBuiltin.arraySpread(items, path, 0);
          if (inst._zod.def.params) {
            obj.params = inst._zod.def.params;
          }
          const issues = tmp2.issues;
          issues.push(captureStackTrace.issue(obj));
        }
      });
    } else {
      const tmp2 = inst;
      if (!fnResult) {
        obj = { code: "custom", input: value, inst: tmp2, path: items, continue: !tmp2._zod.def.abort };
        let path = tmp2._zod.def.path;
        const tmp3 = null;
        if (path == null) {
          path = [];
        }
        items = [];
        const tmp4 = items;
        let tmp5 = path;
        HermesBuiltin.arraySpread(items, path, 0);
        if (tmp2._zod.def.params) {
          obj.params = tmp2._zod.def.params;
        }
        let issues = value.issues;
        issues.push(captureStackTrace.issue(obj));
      }
    }
  };
});
