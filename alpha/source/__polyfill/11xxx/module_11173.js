// Module ID: 11173
// Function ID: 11174
// Dependencies: [11166, 11167, 11174, 11175, 11176]
// Exports: dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, objectify, urlEncode

// Module 11173
import _mod11166 from "module_11166" /* 11166 */;
import _mod11174 from "module_11174" /* 11174 */;
import _mod11176 from "module_11176" /* 11176 */;

let hasOwnProperty;

function addNonEnumerableProperty(arg0, arg1, value) {
  try {
    const _Object = Object;
    const obj = { value, writable: true, configurable: true };
    Object.defineProperty(arg0, arg1, obj);
  } catch (err) {
    const tmp4 = require;
    if (_mod11166.DEBUG_BUILD) {
      const logger = tmp4(11167).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Failed to add non-enumerable property \"" + arg1 + "\" to object", arg0);
    }
  }
}
function markFunctionWrapped(arg0, arg1) {
  try {
    const prototype = arg1.prototype || {};
    arg1.prototype = prototype;
    arg0.prototype = prototype;
    addNonEnumerableProperty(arg0, "__sentry_original__", arg1);
  } catch (err) {
  }
}
function convertToPlainObject(type) {
  const obj = _mod11174;
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
    const tmp2Result = _mod11174;
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
          const tmp2Result2 = _mod11174;
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
function serializeEventTarget(arg0) {
  try {
    let htmlTreeAsStringResult;
    const obj = _mod11174;
    const tmp2 = require;
    if (obj.isElement(arg0)) {
      const tmp2Result = tmp2(11175);
      htmlTreeAsStringResult = tmp2Result.htmlTreeAsString(arg0);
    } else {
      const _Object = Object;
      htmlTreeAsStringResult = toString.call(arg0);
    }
    return htmlTreeAsStringResult;
  } catch (err) {
    return "<unknown>";
  }
}
function _dropUndefinedKeys(arr, map) {
  function isPojo(arr) {
    const obj = map(items[2]);
    if (obj.isPlainObject(arr)) {
      try {
        const _Object = Object;
        const name = Object.getPrototypeOf(arr).constructor.name;
        return !name || "Object" === tmp2;
      } catch (err) {
        return true;
      }
    } else {
      return false;
    }
  }
  if (isPojo(arr)) {
    const value = map.get(arr);
    if (undefined !== value) {
      return value;
    } else {
      let obj = {};
      const result = map.set(arr, obj);
      let _Object = Object;
      const ownPropertyNames = Object.getOwnPropertyNames(arr);
      for (const item10030 of ownPropertyNames) {
        let tmp11 = item10030;
        if (undefined !== arr[item10030]) {
          obj[tmp11] = _dropUndefinedKeys(arr[tmp11], map);
        }
        continue;
      }
      return obj;
    }
  } else {
    const _Array = Array;
    if (Array.isArray(arr)) {
      const value2 = map.get(arr);
      if (undefined !== value2) {
        return value2;
      } else {
        const items = [];
        const result1 = map.set(arr, items);
        const item = arr.forEach((item) => {
          items.push(_dropUndefinedKeys(item, map));
        });
        return items;
      }
    } else {
      return arr;
    }
  }
}

export { addNonEnumerableProperty };
export { convertToPlainObject };
export const dropUndefinedKeys = function dropUndefinedKeys(arr) {
  map = new Map();
  return _dropUndefinedKeys(arr, map);
};
export const extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 40;
  }
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  const first = keys[0];
  if (first) {
    if (first.length >= num) {
      const obj3 = _mod11176;
      return obj3.truncate(first, num);
    } else {
      let length = keys.length;
      if (length > 0) {
        const substr = keys.slice(0, length);
        const joined = substr.join(", ");
        while (joined.length > num) {
          length = length - 1;
        }
        let truncateResult = joined;
        if (length !== keys.length) {
          const obj2 = _mod11176;
          truncateResult = obj2.truncate(joined, num);
        }
        return truncateResult;
      }
      return "";
    }
  } else {
    return "[object has no keys]";
  }
};
export const fill = function fill(arg0, arg1, fn) {
  if (arg1 in arg0) {
    const tmp3 = fn(arg0[arg1]);
    if (typeof tmp3 === "function") {
      markFunctionWrapped(tmp3, arg0[arg1]);
    }
    try {
      arg0[arg1] = tmp3;
    } catch (err) {
      const tmp4 = require;
      if (_mod11166.DEBUG_BUILD) {
        const logger = tmp4(11167).logger;
        const _HermesInternal = HermesInternal;
        logger.log("Failed to replace method \"" + arg1 + "\" in object", arg0);
      }
    }
  }
};
export const getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
export { markFunctionWrapped };
export const objectify = function objectify(arg0) {
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
      const obj = _mod11174;
      if (obj.isPrimitive(arg0) === true) {
        const self = this;
        const self2 = this;
        string = new arg0.constructor(arg0);
      }
    }
  }
  return string;
};
export const urlEncode = function urlEncode(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const encodeURIComponentResult = encodeURIComponent(tmp);
    return "" + encodeURIComponentResult + "=" + encodeURIComponent(tmp2);
  });
  return mapped.join("&");
};
