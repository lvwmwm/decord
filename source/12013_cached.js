// Module ID: 12013
// Function ID: 92875
// Name: cached
// Dependencies: [7, 6, 65, 57]
// Exports: aborted, assert, assertEqual, assertIs, assertNever, assertNotEqual, base64urlToUint8Array, cached, cleanEnum, cleanRegex, cloneDef, createTransparentProxy, defineLazy, esc, escapeRegex, extend, finalizeIssue, floatSafeRemainder, getElementAtPath, getEnumValues, getLengthableOrigin, getParsedType, getSizableOrigin, hexToUint8Array, issue, joinValues, jsonStringifyReplacer, merge, normalizeParams, nullish, numKeys, objectClone, omit, optionalKeys, parsedType, partial, pick, prefixIssues, promiseAllObject, randomString, required, safeExtend, shallowClone, slugify, uint8ArrayToBase64url, uint8ArrayToHex

// Module 12013 (cached)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";

function cached(arg0) {
  let closure_0 = arg0;
  const obj = {};
  Object.defineProperty(obj, "value", {
    get: function() {
      const tmp = callback();
      Object.defineProperty(this, "value", { value: tmp });
      return tmp;
    },
    set: undefined
  });
  return obj;
}
function assignProp(arg0, arg1, value) {
  const obj = { value, writable: true, enumerable: true, configurable: true };
  Object.defineProperty(arg0, arg1, obj);
}
function mergeDefs(def, arg1) {
  const obj = {};
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  for (const item10017 of array) {
    let _Object = Object;
    let _Object2 = Object;
    let tmp2 = obj;
    let merged = Object.assign(obj, Object.getOwnPropertyDescriptors(item10017));
    continue;
  }
  return Object.defineProperties({}, obj);
}
function isObject(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(arg0);
  }
  return tmp;
}
function isPlainObject(arg0) {
  if (false === isObject(arg0)) {
    return false;
  } else {
    const constructor = arg0.constructor;
    if (undefined === constructor) {
      return true;
    } else if ("function" !== typeof constructor) {
      return true;
    } else {
      const prototype = constructor.prototype;
      let tmp2 = false !== isObject(prototype);
      if (tmp2) {
        const _Object = Object;
        tmp2 = false !== hasOwnProperty.call(prototype, "isPrototypeOf");
      }
      return tmp2;
    }
  }
}
function clone(_zod, arg1, parent) {
  let def = arg1;
  if (null == arg1) {
    def = _zod._zod.def;
  }
  const constr = new _zod._zod.constr(def);
  let tmp2 = !arg1;
  if (!tmp2) {
    tmp2 = null != parent && parent.parent;
    const tmp3 = null != parent && parent.parent;
  }
  if (tmp2) {
    constr._zod.parent = _zod;
  }
  return constr;
}
function stringifyPrimitive(arg0) {
  if ("bigint" === typeof arg0) {
    let text = `${arg0.toString()}n`;
  } else if ("string" === tmp) {
    const _HermesInternal2 = HermesInternal;
    text = "\"" + arg0 + "\"";
  } else {
    const _HermesInternal = HermesInternal;
    text = "" + arg0;
  }
  return text;
}
function unwrapMessage(message) {
  let tmp = message;
  if ("string" !== typeof message) {
    message = undefined;
    if (null != message) {
      message = message.message;
    }
    tmp = message;
  }
  return tmp;
}
function base64ToUint8Array(arr) {
  let length;
  const atobResult = atob(arr);
  const uint8Array = new Uint8Array(atobResult.length);
  let num = 0;
  if (0 < atobResult.length) {
    do {
      uint8Array[num] = atobResult.charCodeAt(num);
      num = num + 1;
      length = atobResult.length;
    } while (num < length);
  }
  return uint8Array;
}
function uint8ArrayToBase64(arg0) {
  let length;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      let _String = String;
      str = `${String.fromCharCode(arg0[num])}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return btoa(str2);
}
let closure_3 = Symbol("evaluating");
if ("captureStackTrace" in Error) {
  let _Error = Error;
  let fn = Error.captureStackTrace;
} else {
  fn = () => {

  };
}
const set = new Set(["string", "number", "symbol"]);
const items = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
const items1 = [-2147483648, 2147483647];
const items2 = [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000];
const items3 = [-Number.MAX_VALUE, Number.MAX_VALUE];
let obj = {};
const items4 = [BigInt("-9223372036854775808"), BigInt("9223372036854775807")];
obj.int64 = items4;
const items5 = [require("_defineProperties"), BigInt("18446744073709551615")];
obj.uint64 = items5;
class Class {
  constructor() {
    tmp = c0(this, Class);
    return;
  }
}

export function assertEqual(arg0) {
  return arg0;
}
export function assertNotEqual(arg0) {
  return arg0;
}
export function assertIs(arg0) {

}
export const assertNever = function assertNever(arg0) {
  const error = new Error("Unexpected value in exhaustive check");
  throw error;
};
export function assert(arg0) {

}
export const getEnumValues = function getEnumValues(entries) {
  const values = Object.values(entries);
  let closure_0 = values.filter((arg0) => "number" === typeof arg0);
  entries = Object.entries(entries);
  const found = entries.filter((arg0) => -1 === closure_0.indexOf(+outer1_2(arg0, 2)[0]));
  return found.map((arg0) => outer1_2(arg0, 2)[1]);
};
export const joinValues = function joinValues(keys, arg1) {
  let str = "|";
  if (arguments.length > 1) {
    str = "|";
    if (undefined !== arguments[1]) {
      str = arguments[1];
    }
  }
  const mapped = keys.map((arg0) => outer1_9(arg0));
  return mapped.join(str);
};
export const jsonStringifyReplacer = function jsonStringifyReplacer(arg0, arg1) {
  let str = arg1;
  if ("bigint" === typeof arg1) {
    str = arg1.toString();
  }
  return str;
};
export { cached };
export const nullish = function nullish(arg0) {
  return null == arg0;
};
export const cleanRegex = function cleanRegex(source) {
  let num = 0;
  if (source.startsWith("^")) {
    num = 1;
  }
  if (source.endsWith("$")) {
    let diff = length - 1;
  } else {
    diff = length;
  }
  return source.slice(num, diff);
};
export const floatSafeRemainder = function floatSafeRemainder(value, value2) {
  const str = value.toString();
  const length = value.toString().split(".")[1] || "".length;
  const str2 = value2.toString();
  const arr = value.toString().split(".")[1] || "";
  const length2 = str2.split(".")[1] || "".length;
  let parsed = length2;
  if (0 === length2) {
    parsed = length2;
    if (obj.test(str2)) {
      const match = str2.match(/\d?e-(\d?)/);
      parsed = length2;
      if (tmp4) {
        const _Number = Number;
        parsed = Number.parseInt(match[1]);
      }
      tmp4 = null != match && match[1];
    }
    obj = /\d?e-\d?/;
  }
  if (length > parsed) {
    parsed = length;
  }
  const arr2 = str2.split(".")[1] || "";
  const parsed1 = Number.parseInt(value.toFixed(parsed).replace(".", ""));
  const str3 = value.toFixed(parsed);
  return parsed1 % Number.parseInt(value2.toFixed(parsed).replace(".", "")) / 10 ** parsed;
};
export const defineLazy = function defineLazy(_zod, values, arg2) {
  let closure_0 = _zod;
  let closure_1 = values;
  let closure_2 = arg2;
  Object.defineProperty(_zod, values, {
    get() {
      if (closure_3 !== outer1_3) {
        if (undefined === closure_3) {
          closure_3 = outer1_3;
          closure_3 = callback();
        }
        return closure_3;
      }
    },
    set(value) {
      Object.defineProperty(closure_0, closure_1, { value });
    },
    configurable: true
  });
};
export const objectClone = function objectClone(item10017) {
  const prototypeOf = Object.getPrototypeOf(item10017);
  return Object.create(prototypeOf, Object.getOwnPropertyDescriptors(item10017));
};
export { assignProp };
export { mergeDefs };
export const cloneDef = function cloneDef(_zod) {
  return mergeDefs(_zod._zod.def);
};
export const getElementAtPath = function getElementAtPath(arg0, arr) {
  let reduced = arg0;
  if (arr) {
    reduced = arr.reduce((arg0, arg1) => {
      let tmp;
      if (null != arg0) {
        tmp = arg0[arg1];
      }
      return tmp;
    }, arg0);
  }
  return reduced;
};
export const promiseAllObject = function promiseAllObject(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  return Promise.all(keys.map((arg0) => table[arg0])).then((arg0) => {
    let length;
    const obj = {};
    let num = 0;
    if (0 < keys.length) {
      do {
        let tmp = keys;
        obj[keys[num]] = arg0[num];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  });
};
export const randomString = function randomString() {
  let num = 10;
  if (arguments.length > 0) {
    num = 10;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  let str = "";
  let num2 = 0;
  let str2 = "";
  if (0 < num) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      str = `${"abcdefghijklmnopqrstuvwxyz"[tmp(Math, 26 * Math.random(Math))]}`;
      num2 = num2 + 1;
      str2 = str;
    } while (num2 < num);
  }
  return str2;
};
export const esc = function esc(nextResult) {
  return JSON.stringify(nextResult);
};
export const slugify = function slugify(str) {
  str = str.toLowerCase();
  const str2 = str.toLowerCase().trim();
  const str3 = str.toLowerCase().trim().replace(/[^\w\s-]/g, "");
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
};
export { isObject };
export { isPlainObject };
export const shallowClone = function shallowClone(closure_0) {
  if (isPlainObject(closure_0)) {
    const _Object = Object;
    let merged = Object.assign({}, closure_0);
  } else {
    const _Array = Array;
    merged = closure_0;
    if (Array.isArray(closure_0)) {
      merged = _toConsumableArray(closure_0);
    }
  }
  return merged;
};
export const numKeys = function numKeys(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp5 = tmp4;
      let _Object = Object;
      if (!hasOwnProperty.call(arg0, tmp4)) {
        continue;
      } else {
        num = tmp3 + 1;
        continue;
      }
      continue;
    }
  }
  return num2;
};
export const escapeRegex = function escapeRegex(includes) {
  return includes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
export { clone };
export const normalizeParams = function normalizeParams(message) {
  let closure_0 = message;
  if (message) {
    if ("string" === typeof message) {
      let obj = {
        error() {
              return closure_0;
            }
      };
      return obj;
    } else {
      message = undefined;
      if (null != message) {
        message = message.message;
      }
      if (undefined !== message) {
        let error;
        if (null != message) {
          error = message.error;
        }
        if (undefined !== error) {
          const _Error = Error;
          const error1 = new Error("Cannot specify both `message` and `error` params");
          throw error1;
        } else {
          message.error = message.message;
        }
      }
      delete tmp.message;
      let merged = message;
      if ("string" === typeof message.error) {
        const _Object = Object;
        obj = {
          error() {
                  return message.error;
                }
        };
        merged = Object.assign({}, message, obj);
      }
      return merged;
    }
  } else {
    return {};
  }
};
export const createTransparentProxy = function createTransparentProxy(arg0) {
  let closure_0 = arg0;
  const proxy = new Proxy({}, {
    get(arg0, arg1, arg2) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.get(closure_1, arg1, arg2);
    },
    set(arg0, arg1, arg2, arg3) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.set(closure_1, arg1, arg2, arg3);
    },
    has(arg0, arg1) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.has(closure_1, arg1);
    },
    deleteProperty(closure_1, arg1) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.deleteProperty(closure_1, arg1);
    },
    ownKeys(arg0) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.ownKeys(closure_1);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.getOwnPropertyDescriptor(closure_1, arg1);
    },
    defineProperty(arg0, arg1, arg2) {
      if (null == closure_1) {
        closure_1 = callback();
      }
      return Reflect.defineProperty(closure_1, arg1, arg2);
    }
  });
  return proxy;
};
export { stringifyPrimitive };
export const optionalKeys = function optionalKeys(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  return keys.filter((arg0) => {
    let tmp = "optional" === dependencyMap[arg0]._zod.optin;
    if (tmp) {
      tmp = "optional" === dependencyMap[arg0]._zod.optout;
    }
    return tmp;
  });
};
export const pick = function pick(_zod) {
  let closure_0 = arg1;
  const def = _zod._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      let error = new Error(".pick() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const obj = {};
      for (const key10003 in closure_0) {
        let tmp9 = key10003;
        let tmp10 = def;
        if (key10003 in def.shape) {
          let tmp6 = table;
          if (!table[key10003]) {
            continue;
          } else {
            let tmp7 = def;
            obj[key10003] = def.shape[key10003];
            continue;
          }
          continue;
        } else {
          let tmp = globalThis;
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = "Unrecognized key: \"";
          let str2 = "\"";
          let tmp2 = new.target;
          let tmp3 = new.target;
          let error = new Error("Unrecognized key: \"" + key10003 + "\"");
          let tmp5 = error;
          throw error;
        }
      }
      outer1_4(this, "shape", obj);
      return obj;
    },
    set: undefined
  });
  obj.checks = [];
  return clone(_zod, mergeDefs(_zod._zod.def, obj));
};
export const omit = function omit(importDefaultResult3Result, closure_3, newline) {
  let closure_0 = importDefaultResult3Result;
  let closure_1 = closure_3;
  const def = importDefaultResult3Result._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      let error = new Error(".omit() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  const obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const merged = Object.assign({}, importDefaultResult3Result._zod.def.shape);
      for (const key10011 in closure_1) {
        let tmp10 = key10011;
        let tmp11 = def;
        if (key10011 in def.shape) {
          let tmp8 = table;
          if (!table[key10011]) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        } else {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          let str = "Unrecognized key: \"";
          let str2 = "\"";
          let tmp4 = new.target;
          let tmp5 = new.target;
          let error = new Error("Unrecognized key: \"" + key10011 + "\"");
          let tmp7 = error;
          throw error;
        }
      }
      outer1_4(this, "shape", merged);
      return merged;
    },
    set: undefined
  });
  obj.checks = [];
  return clone(importDefaultResult3Result, mergeDefs(importDefaultResult3Result._zod.def, obj));
};
export const extend = function extend(_zod, obj) {
  let closure_0 = _zod;
  let closure_1 = obj;
  if (isPlainObject(obj)) {
    const checks = _zod._zod.def.checks;
    if (checks) {
      if (checks.length > 0) {
        for (const key10024 in arg1) {
          let tmp15 = key10024;
          let _Object = Object;
          if (undefined === Object.getOwnPropertyDescriptor(tmp6, key10024)) {
            continue;
          } else {
            let _Error2 = Error;
            let tmp9 = new.target;
            let str2 = "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.";
            let tmp10 = new.target;
            let error = new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            let tmp12 = error;
            throw error;
          }
        }
      }
    }
    obj = {};
    Object.defineProperty(obj, "shape", {
      get: function() {
          const merged = Object.assign({}, _zod._zod.def.shape, closure_1);
          outer1_4(this, "shape", merged);
          return merged;
        },
      set: undefined
    });
    return clone(_zod, mergeDefs(_zod._zod.def, obj));
  } else {
    const _Error = Error;
    const error1 = new Error("Invalid input to extend: expected a plain object");
    throw error1;
  }
};
export const safeExtend = function safeExtend(closure_0, arg1) {
  let closure_1 = arg1;
  if (isPlainObject(arg1)) {
    const obj = {};
    Object.defineProperty(obj, "shape", {
      get: function() {
          const merged = Object.assign({}, _zod._zod.def.shape, closure_1);
          outer1_4(this, "shape", merged);
          return merged;
        },
      set: undefined
    });
    return clone(closure_0, mergeDefs(closure_0._zod.def, obj));
  } else {
    const _Error = Error;
    const error = new Error("Invalid input to safeExtend: expected a plain object");
    throw error;
  }
};
export const merge = function merge(_zod) {
  let closure_0 = _zod;
  let closure_1 = arg1;
  const obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const merged = Object.assign({}, _zod._zod.def.shape, closure_1._zod.def.shape);
      outer1_4(this, "shape", merged);
      return merged;
    },
    set: undefined
  });
  Object.defineProperty(obj, "catchall", { get: () => closure_1._zod.def.catchall, set: undefined });
  obj.checks = [];
  return clone(_zod, mergeDefs(_zod._zod.def, obj));
};
export const partial = function partial(arg0, _zod) {
  let closure_0 = arg0;
  let closure_1 = _zod;
  let closure_2 = arg2;
  const checks = _zod._zod.def.checks;
  if (checks) {
    if (checks.length > 0) {
      let _Error = Error;
      let error = new Error(".partial() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const shape = _zod._zod.def.shape;
      const merged = Object.assign({}, shape);
      if (table) {
        for (const key10026 in closure_2) {
          let tmp23 = key10026;
          if (key10026 in shape) {
            let tmp13 = table;
            if (!table[key10026]) {
              continue;
            } else {
              let tmp14 = ctor;
              if (ctor) {
                let tmp16 = ctor;
                let obj = { type: "optional", innerType: shape[key10026] };
                let prototype3 = ctor.prototype;
                let tmp17 = new.target;
                let tmp18 = new.target;
                let tmp19 = obj;
                let tmp15 = new ctor(obj);
              } else {
                tmp15 = shape[key10026];
              }
              merged[key10026] = tmp15;
              continue;
            }
            continue;
          } else {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str3 = "Unrecognized key: \"";
            let str4 = "\"";
            let tmp9 = new.target;
            let tmp10 = new.target;
            let error = new Error("Unrecognized key: \"" + key10026 + "\"");
            let tmp12 = error;
            throw error;
          }
        }
      } else {
        for (const key10013 in shape) {
          let tmp21 = key10013;
          let tmp22 = ctor;
          if (ctor) {
            let tmp4 = ctor;
            obj = { type: "optional", innerType: shape[key10013] };
            let prototype = ctor.prototype;
            let tmp5 = new.target;
            let tmp6 = new.target;
            let tmp7 = obj;
            let tmp3 = new ctor(obj);
          } else {
            tmp3 = shape[key10013];
          }
          merged[key10013] = tmp3;
          continue;
        }
      }
      outer1_4(this, "shape", merged);
      return merged;
    },
    set: undefined
  });
  obj.checks = [];
  return clone(_zod, mergeDefs(_zod._zod.def, obj));
};
export const required = function required(arg0, _zod) {
  let closure_0 = arg0;
  let closure_1 = _zod;
  let closure_2 = arg2;
  let obj = {};
  Object.defineProperty(obj, "shape", {
    get: function() {
      const shape = _zod._zod.def.shape;
      const merged = Object.assign({}, shape);
      if (table) {
        for (const key10017 in closure_2) {
          let tmp23 = key10017;
          if (key10017 in merged) {
            let tmp8 = table;
            if (!table[key10017]) {
              continue;
            } else {
              let tmp9 = ctor;
              let obj = { type: "nonoptional", innerType: shape[key10017] };
              let prototype2 = ctor.prototype;
              let tmp10 = new.target;
              let tmp11 = new.target;
              let tmp12 = obj;
              let tmp13 = new ctor(obj);
              let tmp14 = tmp13;
              merged[key10017] = tmp13;
              continue;
            }
            continue;
          } else {
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str3 = "Unrecognized key: \"";
            let str4 = "\"";
            let tmp4 = new.target;
            let tmp5 = new.target;
            let error = new Error("Unrecognized key: \"" + key10017 + "\"");
            let tmp7 = error;
            throw error;
          }
        }
      } else {
        for (const key10013 in shape) {
          let tmp16 = key10013;
          let tmp17 = ctor;
          obj = { type: "nonoptional", innerType: shape[key10013] };
          let prototype3 = ctor.prototype;
          let tmp18 = new.target;
          let tmp19 = new.target;
          let tmp20 = obj;
          let tmp21 = new ctor(obj);
          let tmp22 = tmp21;
          merged[key10013] = tmp21;
          continue;
        }
      }
      outer1_4(this, "shape", merged);
      return merged;
    },
    set: undefined
  });
  return clone(_zod, mergeDefs(_zod._zod.def, obj));
};
export const aborted = function aborted(length, length2) {
  let num = 0;
  if (arguments.length > 1) {
    num = 0;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  if (true === length.aborted) {
    return true;
  } else {
    if (num < length.issues.length) {
      while (true) {
        let tmp2 = length.issues[num];
        let _continue;
        if (null != tmp2) {
          _continue = tmp2.continue;
        }
        if (true !== _continue) {
          break;
        } else {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  }
};
export const prefixIssues = function prefixIssues(closure_0, issues) {
  return issues.map((path) => {
    if (null == path.path) {
      path.path = [];
    }
    path = path.path;
    path.unshift(closure_0);
    return path;
  });
};
export { unwrapMessage };
export const finalizeIssue = function finalizeIssue(path, merged, outer2_9) {
  const obj = {};
  path = path.path;
  if (null == path) {
    path = [];
  }
  obj.path = path;
  merged = Object.assign({}, path, obj);
  if (!path.message) {
    const inst = path.inst;
    let errorResult;
    if (null != inst) {
      const def = inst._zod.def;
      if (null != def) {
        if (null != def.error) {
          errorResult = def.error(path);
        }
      }
    }
    let tmp6Result = unwrapMessage(errorResult);
    if (null == tmp6Result) {
      let errorResult1;
      if (null != merged) {
        if (null != merged.error) {
          errorResult1 = merged.error(path);
        }
      }
      tmp6Result = unwrapMessage(errorResult1);
      const tmp6 = unwrapMessage;
    }
    if (null == tmp6Result) {
      let customErrorResult;
      if (null != outer2_9.customError) {
        customErrorResult = outer2_9.customError(path);
      }
      tmp6Result = unwrapMessage(customErrorResult);
      const tmp8 = unwrapMessage;
    }
    if (null == tmp6Result) {
      let localeErrorResult;
      if (null != outer2_9.localeError) {
        localeErrorResult = outer2_9.localeError(path);
      }
      tmp6Result = unwrapMessage(localeErrorResult);
      const tmp10 = unwrapMessage;
    }
    let str = "Invalid input";
    if (null != tmp6Result) {
      str = tmp6Result;
    }
    merged.message = str;
    const tmp3 = unwrapMessage;
  }
  delete tmp.inst;
  delete tmp.continue;
  if (!tmp12) {
    delete tmp.input;
  }
  return merged;
};
export const getSizableOrigin = function getSizableOrigin(value) {
  let str = "set";
  if (!(value instanceof Set)) {
    const _Map = Map;
    let str2 = "map";
    if (!(value instanceof Map)) {
      const _File = File;
      let str3 = "unknown";
      if (value instanceof File) {
        str3 = "file";
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
export const getLengthableOrigin = function getLengthableOrigin(value) {
  let str = "array";
  if (!Array.isArray(value)) {
    let str2 = "unknown";
    if ("string" === typeof value) {
      str2 = "string";
    }
    str = str2;
  }
  return str;
};
export const parsedType = function parsedType(input) {
  let str = "number";
  if ("number" === typeof input) {
    const _Number = Number;
    if (Number.isNaN(input)) {
      str = "nan";
    }
    return str;
  } else {
    if ("object" === tmp) {
      if (null === input) {
        return "null";
      } else {
        const _Array = Array;
        if (Array.isArray(input)) {
          return "array";
        } else if (input) {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.getPrototypeOf(input) !== Object.prototype) {
            if ("constructor" in input) {
              if (input.constructor) {
                return input.constructor.name;
              }
            }
          }
        }
      }
    }
    return tmp;
  }
};
export const issue = function issue(fatal, value, def) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  const first = array[0];
  if ("string" === typeof first) {
    const obj = { message: first, code: "custom", input: tmp3, inst: tmp4 };
    return obj;
  } else {
    const _Object = Object;
    return Object.assign({}, first);
  }
};
export const cleanEnum = function cleanEnum(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((arg0) => Number.isNaN(Number.parseInt(outer1_2(arg0, 2)[0], 10)));
  return found.map((arg0) => arg0[1]);
};
export { base64ToUint8Array };
export { uint8ArrayToBase64 };
export const base64urlToUint8Array = function base64urlToUint8Array(str) {
  const replaced = str.replace(/-/g, "+").replace(/_/g, "/");
  return base64ToUint8Array(replaced + "=".repeat((4 - replaced.length % 4) % 4));
};
export const uint8ArrayToBase64url = function uint8ArrayToBase64url(arg0) {
  const str = uint8ArrayToBase64(arg0);
  const str2 = uint8ArrayToBase64(arg0).replace(/\+/g, "-");
  return uint8ArrayToBase64(arg0).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
};
export const hexToUint8Array = function hexToUint8Array(str) {
  let length;
  let sum;
  const replaced = str.replace(/^0x/, "");
  if (replaced.length % 2 !== 0) {
    const _Error = Error;
    const error = new Error("Invalid hex string length");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(replaced.length / 2);
    let num2 = 0;
    if (0 < replaced.length) {
      do {
        let _Number = Number;
        sum = num2 + 2;
        uint8Array[num2 / 2] = Number.parseInt(replaced.slice(num2, sum), 16);
        num2 = sum;
        length = replaced.length;
      } while (sum < length);
    }
    return uint8Array;
  }
};
export const uint8ArrayToHex = function uint8ArrayToHex(arg0) {
  const mapped = Array.from(arg0).map((arg0) => arg0.toString(16).padStart(2, "0"));
  return mapped.join("");
};
export const captureStackTrace = fn;
export const allowsEval = cached(() => {
  if ("undefined" !== typeof navigator) {
    if (null != navigator) {
      if (null != userAgent) {
        if (userAgent.includes("Cloudflare")) {
          return false;
        }
      }
    }
  }
  const _function = new Function("");
  return true;
});
export const getParsedType = function getParsedType(self) {
  if ("undefined" === typeof self) {
    return "undefined";
  } else if ("string" === tmp) {
    return "string";
  } else {
    let str9 = "number";
    if ("number" === tmp) {
      const _Number = Number;
      if (Number.isNaN(self)) {
        str9 = "nan";
      }
      return str9;
    } else if ("boolean" === tmp) {
      return "boolean";
    } else if ("function" === tmp) {
      return "function";
    } else if ("bigint" === tmp) {
      return "bigint";
    } else if ("symbol" === tmp) {
      return "symbol";
    } else if ("object" === tmp) {
      const _Array = Array;
      let str2 = "array";
      if (!Array.isArray(self)) {
        let str3 = "null";
        if (null !== self) {
          if (self.then) {
            if ("function" === typeof self.then) {
              if (self.catch) {
                let str4 = "promise";
              }
              str3 = str4;
            }
          }
          const _Map = Map;
          if ("undefined" === typeof Map) {
            const _Set = Set;
            if ("undefined" === typeof Set) {
              const _Date = Date;
              if ("undefined" === typeof Date) {
                const _File = File;
                let str8 = "object";
                if ("undefined" !== typeof File) {
                  const _File2 = File;
                  str8 = "object";
                  if (self instanceof File) {
                    str8 = "file";
                  }
                }
                let str7 = str8;
              } else {
                const _Date2 = Date;
                str7 = "date";
              }
              let str6 = str7;
            } else {
              const _Set2 = Set;
              str6 = "set";
            }
            let str5 = str6;
          } else {
            const _Map2 = Map;
            str5 = "map";
          }
          str4 = str5;
        }
        str2 = str3;
      }
      return str2;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unknown data type: " + tmp);
      throw error;
    }
  }
};
export const propertyKeyTypes = new Set(["string", "number", "symbol"]);
export const primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
export const NUMBER_FORMAT_RANGES = { safeint: items, int32: items1, uint32: [0, 4294967295], float32: items2, float64: items3 };
export const BIGINT_FORMAT_RANGES = obj;
export const Class = _defineProperties(Class);
