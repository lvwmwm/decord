// Module ID: 7242
// Function ID: 58338
// Name: addNonEnumerableProperty
// Dependencies: [57, 7235, 7236, 7243, 7244, 7245]
// Exports: dropUndefinedKeys, extractExceptionKeysForMessage, fill, getOriginalFunction, objectify, urlEncode

// Module 7242 (addNonEnumerableProperty)
import _slicedToArray from "_slicedToArray";

function addNonEnumerableProperty(arg0, arg1, value) {
  const obj = { value, writable: true, configurable: true };
  Object.defineProperty(arg0, arg1, obj);
}
function markFunctionWrapped(arg0, arg1) {
  const prototype = arg1.prototype;
  let obj = prototype;
  if (!prototype) {
    obj = {};
  }
  arg1.prototype = obj;
  arg0.prototype = obj;
  addNonEnumerableProperty(arg0, "__sentry_original__", arg1);
}
function convertToPlainObject(type) {
  let obj = require(7243) /* isBuiltin */;
  if (obj.isError(type)) {
    const _Object2 = Object;
    obj = {};
    ({ message: obj5.message, name: obj5.name, stack: obj5.stack } = type);
    return Object.assign(obj, getOwnProperties(type));
  } else {
    if (obj2.isEvent(type)) {
      const _Object = Object;
      obj = { type: type.type, target: serializeEventTarget(type.target), currentTarget: serializeEventTarget(type.currentTarget) };
      const merged = Object.assign(obj, getOwnProperties(type));
      let isInstanceOfResult = "undefined" !== typeof globalThis.CustomEvent;
      if (isInstanceOfResult) {
        isInstanceOfResult = require(7243) /* isBuiltin */.isInstanceOf(type, globalThis.CustomEvent);
        const obj4 = require(7243) /* isBuiltin */;
      }
      if (isInstanceOfResult) {
        merged.detail = type.detail;
      }
      return merged;
    } else {
      return type;
    }
    obj2 = require(7243) /* isBuiltin */;
  }
}
function serializeEventTarget(arg0) {
  if (obj.isElement(arg0)) {
    let htmlTreeAsStringResult = require(7244) /* _htmlElementAsString */.htmlTreeAsString(arg0);
    const obj2 = require(7244) /* _htmlElementAsString */;
  } else {
    const _Object = Object;
    htmlTreeAsStringResult = toString.call(arg0);
  }
  return htmlTreeAsStringResult;
}
function getOwnProperties(obj) {
  if ("object" === typeof obj) {
    if (null !== obj) {
      obj = {};
      for (const key10009 in arg0) {
        let tmp4 = key10009;
        let _Object = Object;
        if (!hasOwnProperty.call(arg0, key10009)) {
          continue;
        } else {
          obj[key10009] = arg0[key10009];
          continue;
        }
        continue;
      }
      return obj;
    }
  }
  return {};
}
function _dropUndefinedKeys(arr) {
  let obj = arg1;
  const _require = arg1;
  let flag = false;
  if (obj2.isPlainObject(arr)) {
    const _Object = Object;
    const name = Object.getPrototypeOf(arr).constructor.name;
    let tmp4 = tmp3;
    if (!!name) {
      tmp4 = "Object" === tmp2;
    }
    flag = tmp4;
  }
  while (true) {
    if (flag) {
      let tmp16 = arg1;
      let tmp17 = arr;
      let value = obj.get(arr);
      if (undefined !== value) {
        return value;
      } else {
        obj = {};
        let tmp20 = arg1;
        let tmp21 = arr;
        let tmp19 = obj;
        let result = obj.set(arr, obj);
        let tmp23 = globalThis;
        let _Object2 = Object;
        let ownPropertyNames = Object.getOwnPropertyNames(arr);
        let tmp25 = ownPropertyNames;
        for (const item10063 of ownPropertyNames) {
          let tmp26 = item10063;
          let tmp27 = arg0;
          if (undefined !== arr[item10063]) {
            let tmp28 = obj;
            let tmp29 = item10063;
            let tmp30 = _dropUndefinedKeys;
            let tmp31 = arg0;
            let tmp32 = arg1;
            tmp19[tmp26] = _dropUndefinedKeys(arr[tmp26], obj);
          }
          continue;
        }
        return obj;
      }
    } else {
      let tmp6 = globalThis;
      let _Array = Array;
      let tmp7 = arr;
      if (Array.isArray(arr)) {
        let tmp9 = arg1;
        let tmp10 = arr;
        value = obj.get(arr);
        if (undefined !== value) {
          return value;
        } else {
          let items = [];
          let tmp12 = arg1;
          let tmp13 = arr;
          let result1 = obj.set(arr, items);
          let item = arr.forEach((arg0) => {
            items.push(outer1_8(arg0, closure_0));
          });
          return items;
        }
      } else {
        let tmp8 = arr;
        return arr;
      }
    }
  }
}

export { addNonEnumerableProperty };
export { convertToPlainObject };
export const dropUndefinedKeys = function dropUndefinedKeys(arg0) {
  return _dropUndefinedKeys(arg0, new Map());
};
export const extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  let num = 40;
  if (arguments.length > 1) {
    num = 40;
    if (undefined !== arguments[1]) {
      num = arguments[1];
    }
  }
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  const first = keys[0];
  if (first) {
    if (first.length >= num) {
      return require(7245) /* isMatchingPattern */.truncate(first, num);
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
          truncateResult = require(7245) /* isMatchingPattern */.truncate(joined, num);
          const obj2 = require(7245) /* isMatchingPattern */;
        }
        return truncateResult;
      }
      return "";
    }
  } else {
    return "[object has no keys]";
  }
};
export const fill = function fill(arg0, arg1, arg2) {
  if (arg1 in arg0) {
    const tmp7 = arg2(tmp[tmp2]);
    if ("function" === typeof tmp7) {
      markFunctionWrapped(tmp8, tmp5);
    }
    tmp[tmp2] = tmp7;
  }
};
export const getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
export { markFunctionWrapped };
export const objectify = function objectify(arg0) {
  if (null == arg0 === true) {
    const _String = String;
    let string = new String(arg0);
  } else {
    let tmp2 = "symbol" === tmp;
    if (!tmp2) {
      tmp2 = "bigint" === tmp;
    }
    if (tmp2 === true) {
      const _Object = Object;
      string = Object(arg0);
    } else {
      string = arg0;
      if (obj.isPrimitive(arg0) === true) {
        const constructor = arg0.constructor;
        const prototype = constructor.prototype;
        string = new constructor(arg0);
      }
      obj = require(7243) /* isBuiltin */;
    }
  }
  return string;
};
export const urlEncode = function urlEncode(arg0) {
  const entries = Object.entries(arg0);
  const mapped = entries.map((arg0) => {
    const tmp = outer1_2(arg0, 2);
    return "" + encodeURIComponent(tmp[0]) + "=" + encodeURIComponent(tmp[1]);
  });
  return mapped.join("&");
};
