// Module ID: 15647
// Function ID: 120598
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 2]

// Module 15647 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function _createForOfIteratorHelperLoose(iterable) {
  let _classCallCheck = iterable;
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
      _classCallCheck = tmp;
    }
    let c1 = 0;
    return () => {
      if (_defineProperties >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _defineProperties = tmp3 + 1;
        obj.value = length[+_defineProperties];
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
let tmp2 = (() => {
  class ModalRegistry {
    constructor(arg0) {
      tmp = ModalRegistry(this, ModalRegistry);
      this.modals = arg0;
      set = new Set();
      tmp2 = outer1_2(arg0);
      iter = tmp2();
      if (!iter.done) {
        do {
          tmp3 = outer1_2;
          tmp4 = outer1_2(iter.value.stores);
          iter2 = tmp4();
          if (!iter2.done) {
            do {
              addResult = set.add(iter2.value);
              iter3 = tmp4();
              iter2 = iter3;
              done = iter3.done;
            } while (!done);
          }
          iter4 = tmp2();
          iter = iter4;
        } while (!iter4.done);
      }
      this.stores = Array.from(set);
      return;
    }
  }
  let obj = {
    key: "getStores",
    value() {
      return this.stores;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getOpenModal",
    value() {
      const modals = this.modals;
      const findIndexResult = modals.findIndex((isOpen) => isOpen.isOpen());
      if (-1 === findIndexResult) {
        return null;
      } else {
        let props;
        if (null != this.modals[findIndexResult].getProps) {
          props = obj3.getProps();
        }
        if (null == props) {
          props = {};
        }
        const obj = { key: findIndexResult, component: this.modals[findIndexResult].getComponent(), props, closable: null == this.modals[findIndexResult].closable || this.modals[findIndexResult].closable, backdropInstant: null != this.modals[findIndexResult].backdropInstant && this.modals[findIndexResult].backdropInstant, backdropStyle: this.modals[findIndexResult].backdropStyle, disableAnimation: null != this.modals[findIndexResult].disableAnimation && this.modals[findIndexResult].disableAnimation };
        return obj;
      }
    }
  };
  items[1] = obj;
  return callback(ModalRegistry, items);
})();
const result = require("set").fileFinishedImporting("lib/ModalRegistry.tsx");

export default tmp2;
