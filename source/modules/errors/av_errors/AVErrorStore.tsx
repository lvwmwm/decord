// Module ID: 10555
// Function ID: 82441
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 10555 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isAVErrorContextOfType(type) {
  return type.type === arg1;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const map = new Map();
const map1 = new Map();
let tmp4 = (Store) => {
  class AVErrorStore {
    constructor() {
      self = this;
      tmp = closure_3(this, AVErrorStore);
      obj = closure_6(AVErrorStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AVErrorStore;
  callback2(AVErrorStore, Store);
  let obj = {
    key: "hasActiveErrorOfType",
    value(arg0) {
      let items = store.get(arg0);
      if (null == items) {
        items = [];
      }
      return items.length > 0;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getActiveErrors",
    value() {
      if (!(map instanceof Map)) {
        const _Map = Map;
        const map = new Map();
      }
      return map;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveErrorsOfType",
    value(arg0) {
      let iter2;
      const items = [];
      let value = store.get(arg0);
      if (null == value) {
        return items;
      } else {
        const tmp3 = callback3(value);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = closure_8;
            value = closure_8.get(iter.value);
            let tmp6 = null != value;
            if (tmp6) {
              let tmp7 = closure_13;
              tmp6 = closure_13(value, arg0);
            }
            if (tmp6) {
              let arr = items.push(value);
            }
            iter2 = tmp3();
            iter = iter2;
          } while (!iter2.done);
        }
        return items;
      }
    }
  };
  items[2] = obj;
  return callback(AVErrorStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "AVErrorStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  ACTIVE_AV_ERRORS_CHANGED: function handleActiveErrorsChanged(activeErrors) {
    let iter2;
    activeErrors = activeErrors.activeErrors;
    if (activeErrors instanceof Map) {
      const _Map = Map;
      if (!(map instanceof Map)) {
        const _Map2 = Map;
        let map = new Map();
      }
      const _Set = Set;
      const set = new Set(activeErrors.keys());
      const _Set2 = Set;
      const set1 = new Set(map.keys());
      if (obj.areSetsEqual(set, set1)) {
        return false;
      } else {
        map = activeErrors;
        const _Map3 = Map;
        const map1 = new Map();
        const tmp23 = _createForOfIteratorHelperLoose(map.entries());
        let iter = tmp23();
        if (!iter.done) {
          do {
            let tmp25 = closure_2;
            let tmp26 = closure_2(iter.value, 2);
            let tmp27 = tmp26[1];
            let tmp28 = closure_9;
            let items = closure_9.get(tmp27.type);
            if (null == items) {
              items = [];
            }
            let arr = items.push(tmp26[0]);
            let tmp30 = closure_9;
            let result = closure_9.set(tmp27.type, items);
            iter2 = tmp23();
            iter = iter2;
          } while (!iter2.done);
        }
      }
      const obj = arg1(dependencyMap[7]);
    } else {
      return false;
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/errors/av_errors/AVErrorStore.tsx");

export default tmp4;
