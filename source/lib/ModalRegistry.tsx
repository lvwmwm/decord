// Module ID: 15483
// Function ID: 118102
// Name: _createForOfIteratorHelperLoose
// Dependencies: [513, 511, 513]

// Module 15483 (_createForOfIteratorHelperLoose)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

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
    let module_511 = 0;
    return () => {
      if (module_511 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        module_511 = tmp3 + 1;
        obj.value = tmp[+module_511];
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
const result = items.fileFinishedImporting("lib/ModalRegistry.tsx");

export default () => {
  class ModalRegistry {
    constructor(arg0) {
      tmp = ModalRegistry(this, ModalRegistry);
      this.modals = arg0;
      set = new Set();
      tmp2 = closure_2(arg0);
      iter = tmp2();
      if (!iter.done) {
        do {
          tmp3 = closure_2;
          tmp4 = closure_2(iter.value.stores);
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
  let closure_0 = ModalRegistry;
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
        const obj3 = this.modals[findIndexResult];
        let props;
        if (null != obj3.getProps) {
          props = obj3.getProps();
        }
        if (null == props) {
          props = {};
        }
        const obj = { key: findIndexResult, component: obj3.getComponent(), props, closable: null == obj3.closable || obj3.closable, backdropInstant: null != obj3.backdropInstant && obj3.backdropInstant, backdropStyle: obj3.backdropStyle, disableAnimation: null != obj3.disableAnimation && obj3.disableAnimation };
        return obj;
      }
    }
  };
  items[1] = obj;
  return callback(ModalRegistry, items);
}();
