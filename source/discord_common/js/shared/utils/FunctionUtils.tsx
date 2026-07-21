// Module ID: 10842
// Function ID: 84173
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: cachedFunction, clearObject, isPlainObjectEmpty, promiseThrottle

// Module 10842 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      closure_0 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5])("promises");
const tmp2 = () => {
  class PromiseDeduper {
    constructor() {
      tmp = closure_2(this, PromiseDeduper);
      obj = { writable: true };
      map = new Map();
      obj.value = map;
      definePropertyResult = Object.defineProperty(this, closure_5, obj);
      return;
    }
  }
  let closure_0 = PromiseDeduper;
  let obj = {
    key: "one",
    value(arg0, arg1) {
      let obj = arg2;
      const self = this;
      if (arg2 === undefined) {
        obj = {};
      }
      let flag = obj.force;
      if (flag === undefined) {
        flag = false;
      }
      let cleanupPromise;
      const value = callback2(self, closure_5)[closure_5].get(arg0);
      if (!flag) {
        if (null != value) {
          return value;
        }
      }
      const obj2 = callback2(self, closure_5)[closure_5];
      cleanupPromise = arg1().finally(() => {
        if (obj.get(arg0) === cleanupPromise) {
          callback(self, closure_5)[closure_5].delete(arg0);
          const obj2 = callback(self, closure_5)[closure_5];
        }
      });
      const promise = arg1();
      const result = callback2(self, closure_5)[closure_5].set(arg0, cleanupPromise);
      return cleanupPromise;
    }
  };
  const items = [obj, ];
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
      let closure_2;
      items = [...new Set(items)];
      const items1 = [];
      map = new Map();
      let num = 0;
      if (0 < items.length) {
        while (true) {
          let tmp2 = items[num];
          let tmp3 = callback2;
          let tmp4 = closure_5;
          let obj3 = callback2(self, closure_5)[closure_5];
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
        closure_2 = arg1(items1);
        while (true) {
          function _loop(arg0) {
            const self = arg0;
            const cleanupPromise = promise.then((has) => {
              if (has.has(has)) {
                return has.get(has);
              } else {
                const _Error = Error;
                const _String = String;
                const _HermesInternal = HermesInternal;
                const error = new Error("Promise deduper result missing key: " + String(has));
                throw error;
              }
            }).finally(() => {
              if (obj.get(arg0) === cleanupPromise) {
                callback(arg0, closure_5)[closure_5].delete(arg0);
                const obj2 = callback(arg0, closure_5)[closure_5];
              }
            });
            const map = cleanupPromise;
            const nextPromise = promise.then((has) => {
              if (has.has(has)) {
                return has.get(has);
              } else {
                const _Error = Error;
                const _String = String;
                const _HermesInternal = HermesInternal;
                const error = new Error("Promise deduper result missing key: " + String(has));
                throw error;
              }
            });
            const result = callback(self, closure_5)[closure_5].set(arg0, cleanupPromise);
            const result1 = map.set(arg0, cleanupPromise);
          }
          let tmp11 = callback3;
          let tmp12 = callback3(items1);
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
              let done = iter3.done;
            } while (!done);
          }
          break;
        }
      }
      const set = new Set(items);
      return Promise.all(items.map(() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = map(tmp);
        return function(arg0) {
          return callback(...arguments);
        };
      }())).then((arg0) => {
        let done;
        const map = new Map();
        const tmp = callback2(arg0);
        let iter = tmp();
        if (!iter.done) {
          do {
            let tmp2 = closure_0;
            let tmp3 = closure_0(iter.value, 2);
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
}();
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/shared/utils/FunctionUtils.tsx");

export { areArraysShallowlyEqual };
export function cachedFunction(arg0) {
  let closure_0 = arg0;
  let closure_1 = null;
  let closure_2 = null;
  return (arg0) => {
    const items = [...arguments];
    if (!callback(closure_1, items)) {
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      let closure_2 = HermesBuiltin.apply(items1, undefined);
    }
    closure_1 = items;
    return closure_2;
  };
}
export function promiseThrottle(arg0) {
  let num = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    num = 5000;
  }
  let closure_1 = num;
  let closure_2 = -1;
  let closure_3 = null;
  return () => {
    let tmp = null == closure_3;
    if (!tmp) {
      const _Date = Date;
      tmp = Date.now() >= closure_2;
    }
    if (tmp) {
      const _Date2 = Date;
      closure_2 = Date.now() + num;
      closure_3 = arg0();
    }
    return closure_3;
  };
}
export const PromiseDeduper = tmp2;
export const clearObject = function clearObject(obj) {
  for (const key10003 in arg0) {
    let tmp = key10003;
    if (!arg0.hasOwnProperty(key10003)) {
      continue;
    } else {
      delete r5[r6];
      // continue
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
