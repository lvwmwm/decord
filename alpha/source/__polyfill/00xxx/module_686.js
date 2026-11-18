// Module ID: 686
// Function ID: 687
// Dependencies: [687, 688, 691, 692]
// Exports: dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, objectify

// Module 686
import DEBUG_BUILD from "DEBUG_BUILD" /* 687 */;
import _mod691 from "module_691" /* 691 */;

let hasOwnProperty, map;

function addNonEnumerableProperty(activeRootSpan, __sentry_may_have_lazy_routes__, host) {
  try {
    const _Object = Object;
    const obj = { value: host, writable: true, configurable: true };
    Object.defineProperty(activeRootSpan, __sentry_may_have_lazy_routes__, obj);
  } catch (err) {
    const tmp4 = require;
    if (DEBUG_BUILD.DEBUG_BUILD) {
      const debug = tmp4(688).debug;
      const _HermesInternal = HermesInternal;
      debug.log("Failed to add non-enumerable property \"" + __sentry_may_have_lazy_routes__ + "\" to object", activeRootSpan);
    }
  }
}
function markFunctionWrapped(sentryWrapped, __sentry_wrapped__) {
  try {
    const prototype = __sentry_wrapped__.prototype || {};
    __sentry_wrapped__.prototype = prototype;
    sentryWrapped.prototype = prototype;
    addNonEnumerableProperty(sentryWrapped, "__sentry_original__", __sentry_wrapped__);
  } catch (err) {
  }
}
function convertToPlainObject(type) {
  const obj = _mod691;
  if (obj.isError(type)) {
    const error = { message: null, name: null, stack: null };
    ({ message: obj6.message, name: obj6.name, stack: obj6.stack } = type);
    if (typeof type === "object") {
      let obj3;
      if (null !== type) {
        const obj2 = {};
        obj3 = obj2;
        const keys = Object.keys();
        if (keys !== undefined) {
          obj3 = obj2;
          while (keys[tmp] !== undefined) {
            let _Object2 = Object;
            let hasOwnProperty2 = Object.prototype.hasOwnProperty;
            if (!hasOwnProperty2.call(type, tmp17)) {
              continue;
            } else {
              obj2[tmp17] = type[tmp17];
              continue;
            }
            continue;
          }
        }
      }
      const merged = Object.assign(obj3);
      return error;
    }
    obj3 = {};
  } else {
    const tmp2Result = _mod691;
    if (tmp2Result.isEvent(type)) {
      const obj4 = { type: type.type, target: serializeEventTarget(type.target), currentTarget: serializeEventTarget(type.currentTarget) };
      if (typeof type === "object") {
        let obj7;
        if (null !== type) {
          const obj5 = {};
          obj7 = obj5;
          const keys1 = Object.keys();
          if (keys1 !== undefined) {
            obj7 = obj5;
            while (keys1[tmp] !== undefined) {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              if (!hasOwnProperty.call(type, tmp8)) {
                continue;
              } else {
                obj5[tmp8] = type[tmp8];
                continue;
              }
              continue;
            }
          }
        }
        const merged1 = Object.assign(obj7);
        let isInstanceOfResult = typeof globalThis.CustomEvent !== "undefined";
        if (typeof globalThis.CustomEvent !== "undefined") {
          const CustomEvent2 = globalThis.CustomEvent;
          const tmp2Result2 = _mod691;
          isInstanceOfResult = tmp2Result2.isInstanceOf(type, globalThis.CustomEvent);
        }
        if (isInstanceOfResult) {
          obj4.detail = type.detail;
        }
        return obj4;
      }
      obj7 = {};
    } else {
      return type;
    }
  }
}
function serializeEventTarget(currentTarget) {
  try {
    let htmlTreeAsStringResult;
    const obj = _mod691;
    const tmp2 = require;
    if (obj.isElement(currentTarget)) {
      const tmp2Result = tmp2(692);
      htmlTreeAsStringResult = tmp2Result.htmlTreeAsString(currentTarget);
    } else {
      const _Object = Object;
      htmlTreeAsStringResult = toString.call(currentTarget);
    }
    return htmlTreeAsStringResult;
  } catch (err) {
    return "<unknown>";
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { addNonEnumerableProperty };
export { convertToPlainObject };
export function dropUndefinedKeys(obj) {
  const f80070 = (item) => {
    obj = closure_1;
    let closure_0 = item;
    items = undefined;
    let obj2;
    let value = item;
    let tmp = items;
    let push = items.push;
    if (null !== item) {
      value = item;
      if (typeof item === "object") {
        value = obj.get(item);
        if (undefined === value) {
          let tmp9 = globalThis;
          let _Array = Array;
          if (Array.isArray(item)) {
            items = [];
            let result = obj.set(item, items);
            item = item.forEach(f80070);
            value = items;
          } else {
            let constructor = item.constructor;
            let _Object = Object;
            let tmp3 = constructor === Object || undefined === constructor;
            value = item;
            if (tmp3) {
              obj2 = {};
              let result1 = obj.set(item, obj2);
              let _Object2 = Object;
              let keys = Object.keys(item);
              let item1 = keys.forEach(f80071);
              value = obj2;
            }
          }
        }
      }
    }
    arr = push(value);
  };
  const f80071 = (item) => {
    let arr = closure_1_0[item];
    if (undefined !== arr) {
      let obj2 = closure_1_1;
      let closure_1 = closure_1_1;
      let tmp8 = null;
      let value = arr;
      let tmp7 = closure_1_3;
      if (null !== arr) {
        value = arr;
        if (typeof arr === "object") {
          value = obj2.get(arr);
          if (undefined === value) {
            let tmp9 = globalThis;
            let _Array = Array;
            if (Array.isArray(arr)) {
              let items = [];
              let result = obj2.set(arr, items);
              item = arr.forEach(f80070);
              value = items;
            } else {
              let constructor = arr.constructor;
              let _Object = Object;
              let tmp = constructor === Object || undefined === constructor;
              value = arr;
              if (tmp) {
                let obj = {};
                let result1 = obj2.set(arr, obj);
                let _Object2 = Object;
                let keys = Object.keys(arr);
                let item1 = keys.forEach(f80071);
                value = obj;
              }
            }
          }
        }
      }
      tmp7[item] = value;
    }
  };
  map = new Map();
  let closure_0 = obj;
  let items;
  obj = undefined;
  let value = obj;
  if (null !== obj) {
    value = obj;
    if (typeof obj === "object") {
      value = map.get(obj);
      if (undefined === value) {
        const _Array = Array;
        if (Array.isArray(obj)) {
          items = [];
          const result = map.set(obj, items);
          const item = obj.forEach(f80070);
          value = items;
        } else {
          const constructor = obj.constructor;
          const _Object = Object;
          value = obj;
          const tmp2 = constructor === Object || undefined === constructor;
          if (tmp2) {
            obj = {};
            const result1 = map.set(obj, obj);
            const _Object2 = Object;
            const keys = Object.keys(obj);
            const item1 = keys.forEach(f80071);
            value = obj;
          }
        }
      }
    }
  }
  return value;
}
export function extractExceptionKeysForMessage(error) {
  const keys = Object.keys(convertToPlainObject(error));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
}
export function fill(__sentry_wrapped__, arg1, fn) {
  if (arg1 in __sentry_wrapped__) {
    if (typeof __sentry_wrapped__[arg1] === "function") {
      const tmp7 = fn(__sentry_wrapped__[arg1]);
      if (typeof tmp7 === "function") {
        markFunctionWrapped(tmp7, __sentry_wrapped__[arg1]);
      }
      try {
        __sentry_wrapped__[arg1] = tmp7;
      } catch (err) {
        const tmp2 = require;
        if (DEBUG_BUILD.DEBUG_BUILD) {
          const debug = tmp2(688).debug;
          const _HermesInternal = HermesInternal;
          debug.log("Failed to replace method \"" + arg1 + "\" in object", __sentry_wrapped__);
        }
      }
    }
  }
}
export function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
}
export { markFunctionWrapped };
export function objectify(arg0) {
  let string;
  if (null == arg0 === true) {
    const _String = String;
    const self3 = this;
    const self4 = this;
    string = new String(arg0);
  } else {
    const tmp = typeof arg0 === "symbol" || typeof arg0 === "bigint";
    if (tmp === true) {
      const _Object = Object;
      string = Object(arg0);
    } else {
      string = arg0;
      const obj = _mod691;
      if (obj.isPrimitive(arg0) === true) {
        const self = this;
        const self2 = this;
        string = new arg0.constructor(arg0);
      }
    }
  }
  return string;
}
