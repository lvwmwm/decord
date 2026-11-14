// Module ID: 12160
// Function ID: 12161
// Name: captureStackTrace
// Dependencies: [41, 42, 12159]
// Exports: aborted, assert, assertEqual, assertIs, assertNever, assertNotEqual, assignProp, attachSchema, base64ToUint8Array, base64urlToUint8Array, cached, cleanEnum, cleanRegex, cloneDef, codePointLength, constantCatch, createTransparentProxy, defineLazy, defineLazyInternal, derived, esc, escapeRegex, explicitlyAborted, extend, finalizeIssue, floatSafeRemainder, getElementAtPath, getEnumValues, getLengthableOrigin, getParsedType, getSizableOrigin, hexToUint8Array, hide, installLazyProp, isObject, issue, joinValues, jsonStringifyReplacer, members, merge, normalizeParams, nullish, numKeys, objectClone, omit, optionalKeys, own, parsedType, partial, pick, prefixIssues, promiseAllObject, randomString, rawShape, required, safeExtend, shallowClone, sizeCaps, slugify, stringifyPrimitive, toZod, uint8ArrayToBase64, uint8ArrayToBase64url, uint8ArrayToHex

// Module 12160 (captureStackTrace)
import NEVER2 from "NEVER" /* 12159 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let hasOwnProperty, map, path, size;

let fn;
let items1;
let items2;
let items3;
let items4;
const f58077 = function() {
  if (NEVER2.globalConfig.jitless) {
    return false;
  } else {
    const _navigator = navigator;
    if (typeof navigator !== "undefined") {
      let hasItem;
      if (navigator != null) {
        if (userAgent != null) {
          hasItem = userAgent.includes("Cloudflare");
        }
      }
      if (hasItem) {
        return false;
      }
    }
    try {
      const _Function = Function;
      const self = this;
      const _function = new Function("");
      return true;
    } catch (err) {
      return false;
    }
  }
};
function mirrorProps(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function _loop2(iter) {
    closure_0 = iter;
    iter = Object.getOwnPropertyDescriptor(closure_1, iter);
    if (iter.enumerable) {
      let tmp = closure_0;
      if (iter.get) {
        closure_0 = iter;
        const f142486 = () => closure_2_1[closure_0];
        const _Object2 = Object;
        const obj2 = {
          get() {
                const tmp = f142486();
                Object.defineProperty(this, closure_0, { value: tmp, writable: true, enumerable: true, configurable: true });
                return tmp;
              },
          enumerable: true,
          configurable: true
        };
        Object.defineProperty(tmp, iter, obj2);
      } else {
        const value = iter.value;
        if (iter in tmp) {
          const _Object = Object;
          const obj = { value, writable: true, enumerable: true, configurable: true };
          Object.defineProperty(tmp, iter, obj);
        } else {
          tmp[iter] = value;
        }
      }
    } else {
      return 1;
    }
  }
  const ownKeysResult = Reflect.ownKeys(arg1);
  let iter = ownKeysResult[Symbol.iterator]();
  while (iter !== undefined) {
    let _loop2Result = _loop2(iter.next());
    continue;
  }
}
function sourceShape(_zod) {
  let shape;
  const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
  let get;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    shape = iter.get.raw;
  } else if (iter != null) {
    shape = iter.value;
  }
  if (shape == null) {
    shape = _zod._zod.def.shape;
  }
  return shape;
}
function mirrorShape(arg0, _zod, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = _zod;
  let closure_2 = arg3;
  let closure_3 = sourceShape(_zod);
  function _loop(iter) {
    closure_0 = iter;
    iter = Object.getOwnPropertyDescriptor(closure_3, iter);
    if (iter.enumerable) {
      const tmp = closure_0;
      if (iter.get) {
        closure_0 = iter;
        const f131975 = () => {
          let tmp3Result = tmp2;
          if (closure_2_2) {
            tmp3Result = tmp3(tmp2, tmp);
          }
          return tmp3Result;
        };
        const _Object2 = Object;
        const obj2 = {
          get() {
                const tmp = f142486();
                Object.defineProperty(this, closure_0, { value: tmp, writable: true, enumerable: true, configurable: true });
                return tmp;
              },
          enumerable: true,
          configurable: true
        };
        Object.defineProperty(tmp, iter, obj2);
      } else {
        let tmp2Result;
        const value = iter.value;
        if (closure_2) {
          tmp2Result = tmp2(value, iter);
        } else {
          tmp2Result = value;
        }
        if (iter in tmp) {
          const _Object = Object;
          const obj = { value: tmp2Result, writable: true, enumerable: true, configurable: true };
          Object.defineProperty(tmp, iter, obj);
        } else {
          tmp[iter] = tmp2Result;
        }
      }
    } else {
      return 1;
    }
  }
  let iter = arg2[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
}
function mergeDefs() {
  const items = [...arguments];
  const obj = {};
  const tmp = items[Symbol.iterator]();
  while (tmp !== undefined) {
    let _Object = Object;
    let _Object2 = Object;
    let merged = Object.assign(obj, Object.getOwnPropertyDescriptors(tmp2));
    continue;
  }
  return Object.defineProperties({}, obj);
}
function isPlainObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  if (false === tmp) {
    return false;
  } else {
    const constructor = obj.constructor;
    if (undefined === constructor) {
      return true;
    } else if (typeof constructor !== "function") {
      return true;
    } else {
      const prototype = constructor.prototype;
      let tmp4 = typeof prototype === "object";
      if (typeof prototype === "object") {
        tmp4 = null !== prototype;
      }
      if (tmp4) {
        const _Array2 = Array;
        tmp4 = !Array.isArray(prototype);
      }
      let tmp5 = false !== tmp4;
      if (tmp5) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        tmp5 = false !== hasOwnProperty.call(prototype, "isPrototypeOf");
      }
      return tmp5;
    }
  }
}
function clone(_zod, arg1, parent) {
  let tmp = arg1;
  let def = arg1;
  const constr = _zod._zod.constr;
  if (arg1 == null) {
    def = _zod._zod.def;
  }
  const constr1 = new constr(def);
  if (tmp) {
    parent = undefined;
    if (parent != null) {
      parent = parent.parent;
    }
    tmp = !parent;
  }
  if (!tmp) {
    constr1._zod.parent = _zod;
  }
  return constr1;
}
function maskedKeys(_zod, arg1) {
  const items = [];
  const tmp = sourceShape(_zod);
  const ownKeysResult = Reflect.ownKeys(arg1);
  const iter = ownKeysResult[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let _Object = Object;
    let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(tmp, nextResult);
    let enumerable;
    if (ownPropertyDescriptor != null) {
      enumerable = ownPropertyDescriptor.enumerable;
    }
    if (enumerable) {
      if (arg1[tmp4]) {
        let arr = items.push(tmp4);
      }
      continue;
    } else {
      let _Error = Error;
      let _String = String;
      let _HermesInternal = HermesInternal;
      let str = "\"";
      let str2 = "Unrecognized key: \"";
      let self = this;
      let self2 = this;
      let error = new Error("Unrecognized key: \"" + String(tmp4) + "\"");
      throw error;
    }
  }
  return items;
}
function extended(_zod, arg1) {
  let shape;
  const _Reflect = Reflect;
  const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
  let get;
  const tmp = mirrorShape;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    shape = iter.get.raw;
  } else if (iter != null) {
    shape = iter.value;
  }
  if (shape == null) {
    shape = _zod._zod.def.shape;
  }
  const obj = {};
  tmp(obj, _zod, ownKeys(shape));
  mirrorProps(obj, arg1);
  return obj;
}
function unwrapMessage(message) {
  let tmp = message;
  if (typeof message !== "string") {
    message = undefined;
    if (message != null) {
      message = message.message;
    }
    tmp = message;
  }
  return tmp;
}
class Cached {
  constructor(_getter) {
    _classCallCheck(this, Cached);
    this._getter = _getter;
    this._value = undefined;
  }
}
let obj = {
  key: "value",
  get() {
    const self = this;
    const _getter = this._getter;
    if (undefined !== _getter) {
      self._value = _getter();
      self._getter = undefined;
    }
    return self._value;
  }
};
let items = [obj];
const _moduleResult = _createClass(Cached, items);
let closure_5 = Symbol("evaluating");
if ("captureStackTrace" in Error) {
  let _Error = Error;
  fn = Error.captureStackTrace;
} else {
  fn = () => {

  };
}
new _moduleResult(f58077);
let set = new Set(["string", "number", "symbol"]);
let obj2 = { safeint: items1, int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000], float64: items2 };
items1 = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
items2 = [-Number.MAX_VALUE, Number.MAX_VALUE];
const obj3 = { int64: items3, uint64: items4 };
items3 = [, ];
new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
items3[0] = BigInt("-9223372036854775808");
items3[1] = BigInt("9223372036854775807");
items4 = [BigInt(0), BigInt("18446744073709551615")];
const re14 = /[\uD800-\uDBFF]/;
class Class {
  constructor() {
    _classCallCheck(this, Class);
  }
}
let closure_16 = false;
let closure_17 = {
  configurable: true,
  get() {
    closure_16 = true;
  }
};
let tmp7 = (() => {
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
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
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
const Class_export = _createClass(Class);

export function assertEqual(arg0) {
  return arg0;
}
export function assertNotEqual(arg0) {
  return arg0;
}
export function toZod() {
  return (arg0) => arg0;
}
export function assertIs(arg0) {

}
export function assertNever(arg0) {
  const error = new Error("Unexpected value in exhaustive check");
  throw error;
}
export function assert(arg0) {

}
export function getEnumValues(entries) {
  const values = Object.values(entries);
  let closure_0 = values.filter((item) => typeof item === "number");
  entries = Object.entries(entries);
  const found = entries.filter((item) => {
    let tmp;
    [tmp, ] = item;
    return -1 === closure_0.indexOf(+tmp);
  });
  return found.map((item) => {
    let tmp;
    [, tmp] = item;
    return tmp;
  });
}
export function joinValues(arr) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "|";
  }
  const mapped = arr.map((item) => {
    let text;
    if (typeof item === "bigint") {
      text = `${item.toString()}n`;
    } else if (typeof item === "string") {
      const _HermesInternal = HermesInternal;
      text = "\"" + item + "\"";
    } else {
      const _HermesInternal2 = HermesInternal;
      text = "" + item;
    }
    return text;
  });
  return mapped.join(str);
}
export function jsonStringifyReplacer(arg0, arg1) {
  let str = arg1;
  if (typeof arg1 === "bigint") {
    str = arg1.toString();
  }
  return str;
}
export function cached(arg0) {
  const tmp = new _moduleResult(arg0);
  return tmp;
}
export function nullish(arg0) {
  return null == arg0;
}
export function cleanRegex(source) {
  let diff;
  let num = 0;
  if (source.startsWith("^")) {
    num = 1;
  }
  if (source.endsWith("$")) {
    diff = length - 1;
  } else {
    diff = length;
  }
  return source.slice(num, diff);
}
export function floatSafeRemainder(value, value2) {
  const result = value / value2;
  const rounded = Math.round(result);
  const result1 = 4 * Number.EPSILON;
  const result2 = result1 * Math.max(Math.abs(result), 1);
  let num = 0;
  if (Math.abs(result - rounded) >= result2) {
    num = result - rounded;
  }
  return num;
}
export function defineLazy(_zod, innerType, arg2) {
  let closure_0 = _zod;
  let closure_1 = innerType;
  let closure_2 = arg2;
  let obj = {
    get() {
      let tmp = closure_3;
      if (closure_3 !== closure_5) {
        if (undefined === tmp) {
          const tmp4 = closure_2();
          closure_3 = tmp4;
          tmp = tmp4;
        }
        return tmp;
      }
    },
    set(value) {
      const obj = { value };
      Object.defineProperty(_zod, innerType, obj);
    },
    configurable: true
  };
  Object.defineProperty(_zod, innerType, obj);
}
export function objectClone(_default) {
  const prototypeOf = Object.getPrototypeOf(_default);
  return create(prototypeOf, Object.getOwnPropertyDescriptors(_default));
}
export function assignProp(defs, first1, set) {
  const obj = { value: set, writable: true, enumerable: true, configurable: true };
  Object.defineProperty(defs, first1, obj);
}
export function rawShape(def) {
  let raw;
  const iter = Object.getOwnPropertyDescriptor(def, "shape");
  let get;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    raw = iter.get.raw;
  } else if (iter != null) {
    raw = iter.value;
  }
  return raw;
}
export { mergeDefs };
export function cloneDef(_zod) {
  return mergeDefs(_zod._zod.def);
}
export function getElementAtPath(arg0, arr) {
  let reduced = arg0;
  if (arr) {
    reduced = arr.reduce((acc, item) => {
      let tmp;
      if (acc != null) {
        tmp = acc[item];
      }
      return tmp;
    }, arg0);
  }
  return reduced;
}
export function promiseAllObject(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const allPromises = Promise.all(keys.map((item) => closure_0[item]));
  return allPromises.then((result) => {
    let length;
    const obj = {};
    let num = 0;
    if (0 < keys.length) {
      do {
        obj[keys[num]] = result[num];
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  });
}
export function randomString() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 10;
  }
  let num2 = 0;
  let str = "";
  let str2 = "";
  if (0 < num) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      str = `${"abcdefghijklmnopqrstuvwxyz"[floor(Math, 26 * Math.random(Math))]}`;
      num2 = num2 + 1;
      str2 = str;
    } while (num2 < num);
  }
  return str2;
}
export function esc(discriminator) {
  return JSON.stringify(discriminator);
}
export function slugify(str) {
  str = str.toLowerCase();
  const str2 = str.trim();
  const str3 = str2.replace(/[^\w\s-]/g, "");
  const str4 = str3.replace(/[\s_-]+/g, "-");
  return str4.replace(/^-+|-+$/g, "");
}
export function isObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  return tmp;
}
export { isPlainObject };
export function shallowClone(items) {
  if (isPlainObject(items)) {
    const obj = {};
    const merged = Object.assign(items);
    map = obj;
  } else {
    const _Array = Array;
    if (Array.isArray(items)) {
      items = [];
      HermesBuiltin.arraySpread(items, items, 0);
      map = items;
    } else {
      const _Map = Map;
      if (items instanceof Map) {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map = new Map(items);
      } else {
        const _Set = Set;
        map = items;
        if (items instanceof Set) {
          const _Set2 = Set;
          const self = this;
          const self2 = this;
          map = new Set(items);
        }
      }
    }
  }
  return map;
}
export function numKeys(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
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
}
export function escapeRegex(includes) {
  return includes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export { clone };
export function normalizeParams(zodLazy) {
  if (zodLazy) {
    if (typeof zodLazy === "string") {
      return {
        error() {
              return zodLazy;
            }
      };
    } else {
      let message;
      if (zodLazy != null) {
        message = zodLazy.message;
      }
      if (undefined !== message) {
        let error;
        if (zodLazy != null) {
          error = zodLazy.error;
        }
        if (undefined !== error) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Cannot specify both `message` and `error` params");
          throw error1;
        } else {
          zodLazy.error = zodLazy.message;
        }
      }
      delete tmp["message"];
      let tmp4 = zodLazy;
      if (typeof zodLazy.error === "string") {
        const obj2 = {
          error() {
                  return zodLazy.error;
                }
        };
        const merged = Object.assign(zodLazy);
        tmp4 = obj2;
      }
      return tmp4;
    }
  } else {
    return {};
  }
}
export function createTransparentProxy(arg0) {
  let closure_0 = arg0;
  const obj = {
    get(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.get(closure_1, arg1, arg2);
    },
    set(arg0, arg1, arg2, arg3) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.set(closure_1, arg1, arg2, arg3);
    },
    has(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.has(closure_1, arg1);
    },
    deleteProperty(arg0, first1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.deleteProperty(closure_1, first1);
    },
    ownKeys(arg0) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.ownKeys(closure_1);
    },
    getOwnPropertyDescriptor(arg0, arg1) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.getOwnPropertyDescriptor(closure_1, arg1);
    },
    defineProperty(arg0, arg1, arg2) {
      if (closure_1 == null) {
        closure_1 = closure_0();
      }
      return Reflect.defineProperty(closure_1, arg1, arg2);
    }
  };
  const proxy = new Proxy({}, obj);
  return proxy;
}
export function stringifyPrimitive(item) {
  let text;
  if (typeof item === "bigint") {
    text = `${item.toString()}n`;
  } else if (typeof item === "string") {
    const _HermesInternal = HermesInternal;
    text = "\"" + item + "\"";
  } else {
    const _HermesInternal2 = HermesInternal;
    text = "" + item;
  }
  return text;
}
export function optionalKeys(arg0) {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  return keys.filter((item) => undefined !== closure_0[item]._zod.optin && "optional" === closure_0[item]._zod.optout);
}
export function pick(_zod, arg1) {
  const def = _zod._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(".pick() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  const obj = {};
  mirrorShape(obj, _zod, maskedKeys(_zod, arg1));
  let flag = mergeDefs(def, { shape: obj, checks: [] });
  let def2 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr1 = new constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
}
export function omit(_zod, arg1) {
  let shape;
  const def = _zod._zod.def;
  const checks = def.checks;
  if (checks) {
    if (checks.length > 0) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(".omit() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  set = new Set(maskedKeys(_zod, arg1));
  const _Reflect = Reflect;
  const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
  let get;
  const tmp2 = mirrorShape;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    shape = iter.get.raw;
  } else if (iter != null) {
    shape = iter.value;
  }
  if (shape == null) {
    shape = _zod._zod.def.shape;
  }
  const obj = {};
  const ownKeysResult = ownKeys(shape);
  tmp2(obj, _zod, ownKeysResult.filter((item) => !set.has(item)));
  let flag = mergeDefs(def, { shape: obj, checks: [] });
  let def2 = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def2 = _zod._zod.def;
  }
  const constr1 = new constr(def2);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
}
export function extend(_zod, arg1) {
  if (isPlainObject(arg1)) {
    const checks = _zod._zod.def.checks;
    if (checks) {
      if (checks.length > 0) {
        const _Reflect = Reflect;
        const tmp6 = sourceShape(_zod);
        const ownKeysResult = Reflect.ownKeys(arg1);
        for (const item10026 of ownKeysResult) {
          let _Object = Object;
          if (undefined !== Object.getOwnPropertyDescriptor(tmp6, item10026)) {
            let _Error2 = Error;
            let self3 = this;
            let str2 = "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.";
            let self4 = this;
            let error = new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            throw error;
          }
        }
      }
    }
    const def = _zod._zod.def;
    const obj = { shape: extended(_zod, arg1) };
    return clone(_zod, mergeDefs(def, obj));
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("Invalid input to extend: expected a plain object");
    throw error1;
  }
}
export function safeExtend(_zod, arg1) {
  let obj2;
  if (isPlainObject(arg1)) {
    let shape;
    let _Object = Object;
    const def = _zod._zod.def;
    const _Reflect = Reflect;
    let iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
    let get;
    const tmp5 = mergeDefs;
    const tmp6 = mirrorShape;
    if (iter != null) {
      get = iter.get;
    }
    if (get) {
      shape = iter.get.raw;
    } else if (iter != null) {
      shape = iter.value;
    }
    if (shape == null) {
      shape = _zod._zod.def.shape;
    }
    let obj = { shape: obj2 };
    obj2 = {};
    tmp6(obj2, _zod, ownKeys(shape));
    mirrorProps(obj2, arg1);
    let flag = tmp5(def, obj);
    let def2 = flag;
    const constr = _zod._zod.constr;
    if (flag == null) {
      def2 = _zod._zod.def;
    }
    const self3 = this;
    const self4 = this;
    const constr1 = new constr(def2);
    if (flag) {
      flag = true;
    }
    if (!flag) {
      constr1._zod.parent = _zod;
    }
    return constr1;
  } else {
    let tmp = globalThis;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid input to safeExtend: expected a plain object");
    throw error;
  }
}
export function merge(_zod, _zod2) {
  let checks1;
  let closure_0 = _zod2;
  let def1;
  if (_zod2 != null) {
    _zod = _zod2._zod;
    if (_zod != null) {
      def1 = _zod.def;
    }
  }
  if (def1) {
    const checks = _zod._zod.def.checks;
    let length;
    if (checks != null) {
      length = checks.length;
    }
    if (length) {
      const _Error2 = Error;
      const self5 = this;
      const self6 = this;
      const error = new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
      throw error;
    } else {
      let shape;
      let shape2;
      const _Object = Object;
      const _Reflect = Reflect;
      const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
      let get;
      if (iter != null) {
        get = iter.get;
      }
      if (get) {
        shape = iter.get.raw;
      } else if (iter != null) {
        shape = iter.value;
      }
      if (shape == null) {
        shape = _zod._zod.def.shape;
      }
      const obj = {};
      mirrorShape(obj, _zod, ownKeys(shape));
      const _Object2 = Object;
      const _Reflect2 = Reflect;
      const ownKeys2 = Reflect.ownKeys;
      const iter2 = Object.getOwnPropertyDescriptor(_zod2._zod.def, "shape");
      let get1;
      if (iter2 != null) {
        get1 = iter2.get;
      }
      if (get1) {
        shape2 = iter2.get.raw;
      } else if (iter2 != null) {
        shape2 = iter2.value;
      }
      if (shape2 == null) {
        shape2 = _zod2._zod.def.shape;
      }
      mirrorShape(obj, _zod2, ownKeys2(shape2));
      const obj2 = { shape: obj, checks: checks1 };
      const def = _zod._zod.def;
      Object.defineProperty(obj2, "catchall", { get: () => _zod._zod.def.catchall, set: undefined });
      checks1 = _zod2._zod.def.checks;
      const tmp13 = mergeDefs;
      if (checks1 == null) {
        checks1 = [];
      }
      let flag = tmp13(def, obj2);
      let def2 = flag;
      const constr = _zod._zod.constr;
      if (flag == null) {
        def2 = _zod._zod.def;
      }
      const self3 = this;
      const self4 = this;
      const constr1 = new constr(def2);
      if (flag) {
        flag = true;
      }
      if (!flag) {
        constr1._zod.parent = _zod;
      }
      return constr1;
    }
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error1 = new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    throw error1;
  }
}
export function partial(arg0, _zod, arg2) {
  let shape;
  let fn = arg0;
  let closure_0 = arg0;
  let str = arg3;
  if (arg3 === undefined) {
    str = "partial";
  }
  set = undefined;
  const checks = _zod._zod.def.checks;
  if (checks) {
    if (checks.length > 0) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("." + str + "() cannot be used on object schemas containing refinements");
      throw error;
    }
  }
  set = undefined;
  if (arg2) {
    let tmp2 = globalThis;
    const _Set = Set;
    let self = this;
    let self2 = this;
    set = new Set(maskedKeys(_zod, arg2));
  }
  const _Reflect = Reflect;
  const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
  let get;
  const tmp4 = mirrorShape;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    shape = iter.get.raw;
  } else if (iter != null) {
    shape = iter.value;
  }
  if (shape == null) {
    shape = _zod._zod.def.shape;
  }
  const ownKeysResult = ownKeys(shape);
  if (fn) {
    fn = function(innerType, arg1) {
      let tmp2;
      if (!set) {
        const self = this;
        const self2 = this;
        const obj2 = { type: "optional", innerType };
        tmp2 = new closure_0(obj2);
      } else {
        tmp2 = innerType;
      }
      return tmp2;
    };
  }
  const obj = {};
  tmp4(obj, _zod, ownKeysResult, fn);
  let flag = mergeDefs(_zod._zod.def, { shape: obj, checks: [] });
  let def = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def = _zod._zod.def;
  }
  const constr1 = new constr(def);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
}
export function required(arg0, _zod, arg2) {
  let shape;
  let closure_0 = arg0;
  set = undefined;
  if (arg2) {
    let tmp2 = globalThis;
    const _Set = Set;
    let self = this;
    let self2 = this;
    set = new Set(maskedKeys(_zod, arg2));
  }
  const _Reflect = Reflect;
  const iter = Object.getOwnPropertyDescriptor(_zod._zod.def, "shape");
  let get;
  const tmp4 = mirrorShape;
  if (iter != null) {
    get = iter.get;
  }
  if (get) {
    shape = iter.get.raw;
  } else if (iter != null) {
    shape = iter.value;
  }
  if (shape == null) {
    shape = _zod._zod.def.shape;
  }
  const obj = {};
  tmp4(obj, _zod, ownKeys(shape), function(innerType, arg1) {
    let tmp2;
    if (!set) {
      const self = this;
      const self2 = this;
      const obj2 = { type: "nonoptional", innerType };
      tmp2 = new closure_0(obj2);
    } else {
      tmp2 = innerType;
    }
    return tmp2;
  });
  let flag = mergeDefs(_zod._zod.def, { shape: obj });
  let def = flag;
  const constr = _zod._zod.constr;
  if (flag == null) {
    def = _zod._zod.def;
  }
  const constr1 = new constr(def);
  if (flag) {
    flag = true;
  }
  if (!flag) {
    constr1._zod.parent = _zod;
  }
  return constr1;
}
export function aborted(nextPromise, length) {
  let num = length;
  if (length === undefined) {
    num = 0;
  }
  if (true === nextPromise.aborted) {
    return true;
  } else {
    if (num < nextPromise.issues.length) {
      while (true) {
        let tmp2 = nextPromise.issues[num];
        let _continue;
        if (tmp2 != null) {
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
}
export function explicitlyAborted(length) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  if (true === length.aborted) {
    return true;
  } else {
    if (num < length.issues.length) {
      while (true) {
        let tmp2 = length.issues[num];
        let _continue;
        if (tmp2 != null) {
          _continue = tmp2.continue;
        }
        if (false === _continue) {
          break;
        } else {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  }
}
export function prefixIssues(keys, issues) {
  let closure_0 = keys;
  return issues.map((path) => {
    if (path.path == null) {
      path.path = [];
    }
    path = path.path;
    path.unshift(keys);
    return path;
  });
}
export { unwrapMessage };
export function sizeCaps(checks) {
  let items1 = checks;
  const items = [];
  if (checks == null) {
    items1 = [];
  }
  const iter = items1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let def = nextResult._zod.def;
    let arr3 = def;
    let obj = /_(length|size)$|_equals$/;
    let tmp2 = nextResult;
    if (obj.test(def.check)) {
      size = arr3.maximum;
      if (size == null) {
        size = arr3.length;
      }
      if (size == null) {
        size = arr3.size;
      }
      if (size >= 0) {
        let items2 = [tmp7, ];
        items2[1] = tmp2;
        let arr = items.push(items2);
      }
      continue;
    } else {
      iter.return();
      break;
    }
    return items;
  }
}
export function attachSchema(issues, length, length2) {
  let sum = length;
  if (length < issues.length) {
    do {
      let tmp2 = issues[sum];
      if (tmp2.schema == null) {
        tmp2.schema = length2;
      }
      sum = sum + 1;
    } while (sum < issues.length);
  }
}
export function finalizeIssue(inst, value, NEVER) {
  let str3;
  inst = inst.inst;
  let traits;
  if (inst != null) {
    const _zod = inst._zod;
    if (_zod != null) {
      traits = _zod.traits;
    }
  }
  let hasItem;
  if (traits != null) {
    hasItem = traits.has("$ZodType");
  }
  if (hasItem) {
    if (traits.has("$ZodCheck")) {
      if (inst.schema == null) {
        inst.schema = inst.inst;
      }
    } else {
      inst.schema = inst.inst;
    }
  }
  if (inst.schema !== inst.inst) {
    const schema = inst.schema;
    let error1;
    if (schema != null) {
      const def = schema._zod.def;
      if (def != null) {
        error1 = def.error;
      }
    }
  }
  if (inst.message) {
    str3 = inst.message;
  } else {
    const inst2 = inst.inst;
    let errorResult;
    if (inst2 != null) {
      const def2 = inst2._zod.def;
      if (def2 != null) {
        const error = def2.error;
        if (error != null) {
          errorResult = error(inst);
        }
      }
    }
    str3 = tmp5(errorResult);
    if (str3 == null) {
      let tmp3Result;
      if (tmp3 != null) {
        tmp3Result = tmp3(inst);
      }
      str3 = tmp5(tmp3Result);
    }
    if (str3 == null) {
      let error2Result;
      if (value != null) {
        const error2 = value.error;
        if (error2 != null) {
          error2Result = error2(inst);
        }
      }
      str3 = tmp5(error2Result);
    }
    if (str3 == null) {
      const customError = NEVER.customError;
      let customErrorResult;
      if (customError != null) {
        customErrorResult = customError(inst);
      }
      str3 = tmp5(customErrorResult);
    }
    if (str3 == null) {
      const localeError = NEVER.localeError;
      let localeErrorResult;
      if (localeError != null) {
        localeErrorResult = localeError(inst);
      }
      str3 = tmp5(localeErrorResult);
    }
    if (str3 == null) {
      str3 = "Invalid input";
    }
  }
  const obj = { message: str3 };
  const keys = Object.keys(inst);
  const iter = keys[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp14 = nextResult;
    let tmp15 = "inst" !== nextResult;
    if (tmp15) {
      tmp15 = "schema" !== tmp14;
    }
    if (tmp15) {
      tmp15 = "continue" !== tmp14;
    }
    if (tmp15) {
      tmp15 = "input" !== tmp14;
    }
    if (tmp15) {
      tmp15 = "__proto__" !== tmp14;
    }
    if (tmp15) {
      obj[tmp14] = inst[tmp14];
    }
    continue;
  }
  if (obj.path == null) {
    obj.path = [];
  }
  let reportInput;
  if (value != null) {
    reportInput = value.reportInput;
  }
  if (reportInput) {
    obj.input = inst.input;
  }
  return obj;
}
export function getSizableOrigin(value) {
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
}
export function codePointLength(value) {
  if (re14.test(value)) {
    let tmp = length;
    let tmp2 = length;
    let num5 = 0;
    if (0 < value.length - 1) {
      do {
        let tmp3 = 64512 & value.charCodeAt(num5);
        let tmp4 = 55296 === tmp3;
        if (55296 === tmp3) {
          tmp4 = 56320 === (64512 & value.charCodeAt(num5 + 1));
        }
        let sum = num5;
        let diff = tmp;
        if (tmp4) {
          diff = tmp - 1;
          sum = num5 + 1;
        }
        num5 = sum + 1;
        tmp = diff;
        tmp2 = diff;
      } while (num5 < value.length - 1);
    }
    return tmp2;
  } else {
    return value.length;
  }
}
export function getLengthableOrigin(value) {
  let str = "array";
  if (!Array.isArray(value)) {
    let str2 = "unknown";
    if (typeof value === "string") {
      str2 = "string";
    }
    str = str2;
  }
  return str;
}
export function parsedType(input) {
  let str = "number";
  if ("number" === typeof input) {
    const _Number = Number;
    if (Number.isNaN(input)) {
      str = "nan";
    }
    return str;
  } else {
    if ("object" === typeof input) {
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
    return typeof input;
  }
}
export function issue() {
  const items = [...arguments];
  const first = items[0];
  if (typeof first === "string") {
    return { message: first, code: "custom", input: tmp2, inst: tmp3 };
  } else {
    const obj2 = {};
    const merged = Object.assign(first);
    return obj2;
  }
}
export function cleanEnum(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((item) => {
    let tmp;
    [tmp, ] = item;
    return Number.isNaN(Number.parseInt(tmp, 10));
  });
  return found.map((item) => item[1]);
}
export function base64ToUint8Array(base64) {
  let length;
  const atobResult = atob(base64);
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
export function uint8ArrayToBase64(arg0) {
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
export function base64urlToUint8Array(str) {
  let length;
  str = str.replace(/-/g, "+");
  const replaced = str.replace(/_/g, "/");
  const atobResult = atob(replaced + "=".repeat((4 - replaced.length % 4) % 4));
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
export function uint8ArrayToBase64url(arg0) {
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
  const str3 = btoa(str2);
  const str4 = str3.replace(/\+/g, "-");
  const str5 = str4.replace(/\//g, "_");
  return str5.replace(/=/g, "");
}
export function hexToUint8Array(str) {
  let length;
  let sum;
  const replaced = str.replace(/^0x/, "");
  if (replaced.length % 2 !== 0) {
    const _Error = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Invalid hex string length");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
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
}
export function uint8ArrayToHex(arg0) {
  const arr = Array.from(arg0);
  const mapped = arr.map((item) => {
    const str = item.toString(16);
    return str.padStart(2, "0");
  });
  return mapped.join("");
}
export function members(ignoredMembers, obj) {
  let key10006;
  let value;
  for (const key10006 in obj) {
    let _Object3 = Object;
    let iter = Object.getOwnPropertyDescriptor(obj, key10006);
    if (iter.get) {
      let _Object2 = Object;
      let obj2 = { enumerable: false };
      let merged = Object.assign(iter);
      let definePropertyResult = defineProperty(ignoredMembers, key10006, obj2);
      continue;
    } else {
      exports = iter.value;
      let _Object = Object;
      obj = {
        configurable: true,
        get() {
              let bindResult;
              const self = this;
              if (null == this) {
                bindResult = exports;
              } else {
                bindResult = exports.bind(self);
                const _Object = Object;
                const obj = { configurable: true, writable: true, enumerable: true, value: bindResult };
                Object.defineProperty(self, key10006, obj);
              }
              return bindResult;
            },
        set(value) {
              const obj = { configurable: true, writable: true, enumerable: true, value };
              Object.defineProperty(this, key10006, obj);
            }
      };
      let definePropertyResult1 = Object.defineProperty(ignoredMembers, key10006, obj);
      continue;
    }
    continue;
  }
}
export function own(arg0, spa, value) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  const obj = { configurable: true, writable: true, enumerable: flag, value };
  Object.defineProperty(arg0, spa, obj);
  return value;
}
export function hide(arg0, arg1, value) {
  const obj = { configurable: true, writable: true, enumerable: false, value };
  Object.defineProperty(arg0, arg1, obj);
  return value;
}
export function derived(obj, range) {
  let key10005;
  for (const key10005 in obj) {
    let tmp = key10005;
    let closure_1 = obj[key10005];
    let _Object = Object;
    obj = {
      configurable: true,
      enumerable: true,
      get() {
          const tmp = closure_1(this);
          Object.defineProperty(this, key10005, { configurable: true, writable: true, enumerable: true, value: tmp });
          return tmp;
        },
      set(value) {
          const obj = { configurable: true, writable: true, enumerable: true, value };
          Object.defineProperty(this, key10005, obj);
        }
    };
    let definePropertyResult = Object.defineProperty(range, key10005, obj);
    continue;
  }
  return range;
}
export function defineLazyInternal(_zod, values, arg2) {
  let closure_0 = values;
  let closure_1 = arg2;
  const prototypeOf = Object.getPrototypeOf(_zod._zod);
  if (values in prototypeOf) {
    if (_zod !== _zod._zod) {
      _zod = undefined;
    }
  }
  _zod = _zod._zod;
  let obj = {
    configurable: true,
    get() {
      const self = this;
      Object.defineProperty(this, values, closure_17);
      closure_16 = false;
      try {
        const tmp5 = closure_1(self);
        const tmp6 = closure_16;
        if (tmp6) {
          delete self[values];
        } else {
          const _Object = Object;
          const obj = { configurable: true, writable: true, value: tmp5 };
          Object.defineProperty(self, values, obj);
        }
        const tmp9 = closure_16 || tmp3;
        closure_16 = tmp9;
        return tmp5;
      } catch (tmp10) {
        delete self[values];
        const tmp11 = closure_16 || tmp3;
        closure_16 = tmp11;
        throw tmp10;
      }
    },
    set(value) {
      const obj = { configurable: true, writable: true, value };
      Object.defineProperty(this, values, obj);
    }
  };
  Object.defineProperty(prototypeOf, values, obj);
}
export function installLazyProp(_zod, shape, arg2, enumerable) {
  let closure_0 = shape;
  let closure_1 = arg2;
  const prototypeOf = Object.getPrototypeOf(_zod);
  let tmp2;
  if (!(shape in prototypeOf)) {
    tmp2 = prototypeOf;
  }
  if (tmp2) {
    const _Object = Object;
    let obj = {
      configurable: true,
      get() {
          const obj = { configurable: true, writable: true, enumerable, value: closure_1(this) };
          Object.defineProperty(this, shape, obj);
          Object.defineProperty(this, shape, obj);
          return obj.value;
        },
      set(value) {
          const obj = { configurable: true, writable: true, enumerable, value };
          Object.defineProperty(this, shape, obj);
        }
    };
    Object.defineProperty(tmp2, shape, obj);
  }
}
export function constantCatch(fn) {
  let closure_0 = fn;
  fn = function fn() {
    return closure_0;
  };
  fn[exports.CONSTANT_CATCH] = true;
  return fn;
}
export const captureStackTrace = fn;
export const allowsEval = new _moduleResult(f58077);
export const getParsedType = function(self) {
  if ("undefined" === typeof self) {
    return "undefined";
  } else if ("string" === typeof self) {
    return "string";
  } else {
    let str9 = "number";
    if ("number" === typeof self) {
      const _Number = Number;
      if (Number.isNaN(self)) {
        str9 = "nan";
      }
      return str9;
    } else if ("boolean" === typeof self) {
      return "boolean";
    } else if ("function" === typeof self) {
      return "function";
    } else if ("bigint" === typeof self) {
      return "bigint";
    } else if ("symbol" === typeof self) {
      return "symbol";
    } else if ("object" === typeof self) {
      const _Array = Array;
      let str2 = "array";
      if (!Array.isArray(self)) {
        let str3 = "null";
        if (null !== self) {
          let str8;
          if (self.then) {
            if (typeof self.then === "function") {
              let str4;
              if (self.catch) {
                str4 = "promise";
              }
              str3 = str4;
            }
          }
          const _Map = Map;
          if (typeof Map === "undefined") {
            let str7;
            const _Set = Set;
            if (typeof Set === "undefined") {
              let str6;
              const _Date = Date;
              if (typeof Date === "undefined") {
                const _File = File;
                let str5 = "object";
                if (typeof File !== "undefined") {
                  const _File2 = File;
                  str5 = "object";
                  if (self instanceof File) {
                    str5 = "file";
                  }
                }
                str6 = str5;
              } else {
                const _Date2 = Date;
                str6 = "date";
              }
              str7 = str6;
            } else {
              const _Set2 = Set;
              str7 = "set";
            }
            str8 = str7;
          } else {
            const _Map2 = Map;
            str8 = "map";
          }
          str4 = str8;
        }
        str2 = str3;
      }
      return str2;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      self = this;
      const self2 = this;
      const error = new Error("Unknown data type: " + tmp);
      throw error;
    }
  }
};
export const propertyKeyTypes = set;
export const primitiveTypes = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
export const NUMBER_FORMAT_RANGES = obj2;
export const BIGINT_FORMAT_RANGES = obj3;
export { Class_export as Class };
export const CONSTANT_CATCH = "~constantCatch";
