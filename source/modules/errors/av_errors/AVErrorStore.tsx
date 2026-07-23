// Module ID: 10566
// Function ID: 82515
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 566, 1390, 686, 2]

// Module 10566 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
let map = new Map();
let map1 = new Map();
let tmp4 = ((Store) => {
  class AVErrorStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, AVErrorStore);
      obj = outer1_6(AVErrorStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback3(AVErrorStore, Store);
  let obj = {
    key: "hasActiveErrorOfType",
    value(arg0) {
      let items = outer1_9.get(arg0);
      if (null == items) {
        items = [];
      }
      return items.length > 0;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getActiveErrors",
    value() {
      if (!(outer1_8 instanceof Map)) {
        const _Map = Map;
        const map = new Map();
        outer1_8 = map;
      }
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveErrorsOfType",
    value(arg0) {
      let iter2;
      const items = [];
      let value = outer1_9.get(arg0);
      if (null == value) {
        return items;
      } else {
        const tmp3 = outer1_10(value);
        let iter = tmp3();
        if (!iter.done) {
          do {
            let tmp4 = outer1_8;
            value = outer1_8.get(iter.value);
            let tmp6 = null != value;
            if (tmp6) {
              let tmp7 = outer1_13;
              tmp6 = outer1_13(value, arg0);
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
  return callback2(AVErrorStore, items);
})(require("initialize").Store);
tmp4.displayName = "AVErrorStore";
tmp4 = new tmp4(require("dispatcher"), {
  ACTIVE_AV_ERRORS_CHANGED: function handleActiveErrorsChanged(activeErrors) {
    let iter2;
    activeErrors = activeErrors.activeErrors;
    if (activeErrors instanceof Map) {
      const _Map = Map;
      if (!(activeErrors instanceof Map)) {
        const _Map2 = Map;
        const map = new Map();
        activeErrors = map;
      }
      const _Set = Set;
      const set = new Set(activeErrors.keys());
      const _Set2 = Set;
      const set1 = new Set(activeErrors.keys());
      if (obj.areSetsEqual(set, set1)) {
        return false;
      } else {
        const _Map3 = Map;
        const map1 = new Map();
        const tmp23 = _createForOfIteratorHelperLoose(activeErrors.entries());
        let iter = tmp23();
        if (!iter.done) {
          do {
            let tmp25 = callback;
            let tmp26 = callback(iter.value, 2);
            let tmp27 = tmp26[1];
            let tmp28 = map1;
            let items = map1.get(tmp27.type);
            if (null == items) {
              items = [];
            }
            let arr = items.push(tmp26[0]);
            let tmp30 = map1;
            let result = map1.set(tmp27.type, items);
            iter2 = tmp23();
            iter = iter2;
          } while (!iter2.done);
        }
      }
      obj = require(1390) /* _createForOfIteratorHelperLoose */;
    } else {
      return false;
    }
  }
});
let result = require("_defineProperties").fileFinishedImporting("modules/errors/av_errors/AVErrorStore.tsx");

export default tmp4;
