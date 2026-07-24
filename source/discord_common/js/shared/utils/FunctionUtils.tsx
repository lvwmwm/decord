// Module ID: 10880
// Function ID: 84435
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 6, 7, 99, 100, 2]
// Exports: cachedFunction, clearObject, isPlainObjectEmpty, promiseThrottle

// Module 10880 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import set from "set";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";

function _createForOfIteratorHelperLoose(iterable) {
  let _slicedToArray = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      _slicedToArray = tmp;
    }
    let c1 = 0;
    return () => {
      if (_classPrivateFieldKey >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _classPrivateFieldKey = tmp3 + 1;
        obj.value = length[+_classPrivateFieldKey];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function areArraysShallowlyEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (arg0.length === arg1.length) {
          let num = 0;
          if (0 < arg0.length) {
            while (arg0[num] === arg1[num]) {
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
let closure_5 = require("_classPrivateFieldKey")("promises");
let tmp2 = (() => {
  class PromiseDeduper {
    constructor() {
      tmp = outer1_2(this, PromiseDeduper);
      obj = { writable: true };
      map = new Map();
      obj.value = map;
      definePropertyResult = Object.defineProperty(this, outer1_5, obj);
      return;
    }
  }
  let obj = {
    key: "one",
    value(arg0, arg1) {
      let obj = arg2;
      let self = this;
      self = this;
      let _classPrivateFieldKey = arg0;
      if (arg2 === undefined) {
        obj = {};
      }
      let flag = obj.force;
      if (flag === undefined) {
        flag = false;
      }
      let cleanupPromise;
      const value = outer1_4(self, outer1_5)[outer1_5].get(arg0);
      if (!flag) {
        if (null != value) {
          return value;
        }
      }
      let obj2 = outer1_4(self, outer1_5)[outer1_5];
      cleanupPromise = arg1().finally(() => {
        if (obj.get(_classPrivateFieldKey) === cleanupPromise) {
          outer2_4(self, outer2_5)[outer2_5].delete(_classPrivateFieldKey);
          const obj2 = outer2_4(self, outer2_5)[outer2_5];
        }
      });
      const promise = arg1();
      const result = outer1_4(self, outer1_5)[outer1_5].set(arg0, cleanupPromise);
      return cleanupPromise;
    }
  };
  let items = [obj, ];
  obj = {
    key: "many",
    value(items) {
      let obj = arg2;
      const self = this;
      if (arg2 === undefined) {
        obj = {};
      }
      let flag = obj.force;
      if (flag === undefined) {
        flag = false;
      }
      let map;
      let set;
      items = [...new Set(items)];
      const items1 = [];
      map = new Map();
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let tmp2 = items[num];
          let tmp3 = outer1_4;
          let tmp4 = outer1_5;
          let obj3 = outer1_4(self, outer1_5)[outer1_5];
          let value = obj3.get(tmp2);
          if (!flag) {
            if (null != value) {
              let result = map.set(tmp2, value);
            }
            num = num + 1;
            if (num >= items.length) {
              break;
            }
          }
          let tmp7 = items1;
          let arr = items1.push(tmp2);
        }
      }
      if (items1.length > 0) {
        set = arg1(items1);
        while (true) {
          function _loop(arg0) {
            let _slicedToArray = arg0;
            const cleanupPromise = promise.then((has) => {
              if (has.has(_slicedToArray)) {
                return has.get(_slicedToArray);
              } else {
                const _Error = Error;
                const _String = String;
                const _HermesInternal = HermesInternal;
                const error = new Error("Promise deduper result missing key: " + String(_slicedToArray));
                throw error;
              }
            }).finally(() => {
              if (obj.get(_slicedToArray) === cleanupPromise) {
                outer3_4(_slicedToArray, outer3_5)[outer3_5].delete(_slicedToArray);
                const obj2 = outer3_4(_slicedToArray, outer3_5)[outer3_5];
              }
            });
            const nextPromise = promise.then((has) => {
              if (has.has(_slicedToArray)) {
                return has.get(_slicedToArray);
              } else {
                const _Error = Error;
                const _String = String;
                const _HermesInternal = HermesInternal;
                const error = new Error("Promise deduper result missing key: " + String(_slicedToArray));
                throw error;
              }
            });
            const result = outer2_4(_slicedToArray, outer2_5)[outer2_5].set(arg0, cleanupPromise);
            const result1 = cleanupPromise.set(arg0, cleanupPromise);
          }
          let tmp11 = outer1_6;
          let tmp12 = outer1_6(items1);
          let tmp13 = tmp12;
          let iter = tmp12();
          let iter2 = iter;
          if (iter.done) {
            break;
          } else {
            do {
              let tmp14 = _loop;
              let tmp15 = iter2;
              let _loopResult = _loop(iter2.value);
              let tmp17 = tmp12;
              let iter3 = tmp13();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          break;
        }
      }
      const set = new Set(items);
      return Promise.all(items.map((() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let _slicedToArray = outer2_1(tmp);
        return function(arg0) {
          return callback(...arguments);
        };
      })())).then((arg0) => {
        let done;
        const map = new Map();
        const tmp = outer2_6(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let tmp2 = PromiseDeduper;
            let tmp3 = PromiseDeduper(iter.value, 2);
            let result = map.set(tmp3[0], tmp3[1]);
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return map;
      });
    }
  };
  items[1] = obj;
  return callback(PromiseDeduper, items);
})();
let result = require("_classCallCheck").fileFinishedImporting("../discord_common/js/shared/utils/FunctionUtils.tsx");

export { areArraysShallowlyEqual };
export function cachedFunction(arg0) {
  let _slicedToArray = arg0;
  let c1 = null;
  let c2 = null;
  return (arg0) => {
    const items = [...arguments];
    if (!outer1_8(items, items)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let set = HermesBuiltin.apply(items1, undefined);
    }
    return set;
  };
}
export function promiseThrottle(arg0) {
  let num = arg1;
  let _slicedToArray = arg0;
  if (arg1 === undefined) {
    num = 5000;
  }
  let c2 = -1;
  let c3 = null;
  return () => {
    let tmp = null == _defineProperties;
    if (!tmp) {
      const _Date = Date;
      tmp = Date.now() >= set;
    }
    if (tmp) {
      const _Date2 = Date;
      set = Date.now() + num;
      _defineProperties = callback();
    }
    return _defineProperties;
  };
}
export const PromiseDeduper = tmp2;
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
    let tmp3 = key10003;
    if (!arg0.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
};
export function isPlainObjectEmpty(arg0) {
  const keys = Object.keys();
  if (keys !== undefined) {
    if (keys[tmp] !== undefined) {
      return false;
    }
  }
  return true;
}
