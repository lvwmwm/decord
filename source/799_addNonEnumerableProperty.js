// Module ID: 799
// Function ID: 8983
// Name: addNonEnumerableProperty
// Dependencies: []

// Module 799 (addNonEnumerableProperty)
function addNonEnumerableProperty(arg0, arg1, value) {
  const obj = { EntryPointCommandButtonActions: null, NATIVE_SECTION: null, 1476351743: null, value };
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
  let obj = arg1(arg6[2]);
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
        isInstanceOfResult = arg1(arg6[2]).isInstanceOf(type, globalThis.CustomEvent);
        const obj4 = arg1(arg6[2]);
      }
      if (isInstanceOfResult) {
        merged.detail = type.detail;
      }
      return merged;
    } else {
      return type;
    }
    const obj2 = arg1(arg6[2]);
  }
}
function serializeEventTarget(arg0) {
  if (obj.isElement(arg0)) {
    let htmlTreeAsStringResult = arg1(arg6[3]).htmlTreeAsString(arg0);
    const obj2 = arg1(arg6[3]);
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
          // continue
        }
        continue;
      }
      return obj;
    }
  }
  return {};
}
function _dropUndefinedKeys(arr, get) {
  get = arr;
  const arg6 = get;
  if (null !== arr) {
    if ("object" === typeof arr) {
      const value = get.get(arr);
      if (undefined !== value) {
        return value;
      } else {
        const _Array = Array;
        if (Array.isArray(arr)) {
          const items = [];
          const addNonEnumerableProperty = items;
          const result = get.set(arr, items);
          const item = arr.forEach((arg0) => {
            items.push(callback(arg0, arg1));
          });
          return items;
        } else {
          const constructor = arr.constructor;
          const _Object = Object;
          if (tmp) {
            const obj = {};
            const markFunctionWrapped = obj;
            const result1 = get.set(arr, obj);
            const _Object2 = Object;
            const keys = Object.keys(arr);
            const item1 = keys.forEach((arg0) => {
              if (undefined !== arg0[arg0]) {
                obj[arg0] = callback(tmp, arg1);
              }
            });
            return obj;
          } else {
            return arr;
          }
          const tmp = constructor === Object || undefined === constructor;
        }
      }
    }
  }
  return arr;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addNonEnumerableProperty = addNonEnumerableProperty;
arg5.convertToPlainObject = convertToPlainObject;
arg5.dropUndefinedKeys = function dropUndefinedKeys(arg0) {
  return _dropUndefinedKeys(arg0, new Map());
};
arg5.extractExceptionKeysForMessage = function extractExceptionKeysForMessage(arg0) {
  const keys = Object.keys(convertToPlainObject(arg0));
  const sorted = keys.sort();
  let str = "[object has no keys]";
  if (keys[0]) {
    str = keys.join(", ");
  }
  return str;
};
arg5.fill = function fill(arg0, arg1, arg2) {
  if (arg1 in arg0) {
    if ("function" === typeof tmp[tmp2]) {
      const tmp12 = arg2(tmp5);
      if ("function" === typeof tmp12) {
        markFunctionWrapped(tmp13, tmp5);
      }
      tmp[tmp2] = tmp12;
    }
  }
};
arg5.getOriginalFunction = function getOriginalFunction(__sentry_original__) {
  return __sentry_original__.__sentry_original__;
};
arg5.markFunctionWrapped = markFunctionWrapped;
arg5.objectify = function objectify(arg0) {
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
      const obj = arg1(arg6[2]);
    }
  }
  return string;
};
