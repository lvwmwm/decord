// Module ID: 12579
// Function ID: 97372
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 686, 2]

// Module 12579 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

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
let tmp2 = (() => {
  class ActionBatcher {
    constructor(arg0, arg1, arg2) {
      self = this;
      closure_1 = arg1;
      tmp = outer1_2(this, self);
      this.socket = arg0;
      this.action = null;
      this.shouldFlush = arg2;
      this.add = (arg0) => {
        self.action = callback(self.action, arg0);
      };
      batchers = self.batchers;
      arr = batchers.push(this);
      return;
    }
  }
  let obj = {
    key: "flush",
    value() {
      const self = this;
      const action = this.action;
      this.action = null;
      if (null != action) {
        const obj = ActionBatcher(outer1_1[2]);
        ActionBatcher(outer1_1[2]).dispatch(action).catch((error) => {
          const socket = self.socket;
          return socket.resetSocketAndClearCacheOnError({ error, action: action.type });
        });
        const dispatchResult = ActionBatcher(outer1_1[2]).dispatch(action);
      }
    }
  };
  const items = [obj];
  obj = {
    key: "flush",
    value(arg0, arg1) {
      let iter2;
      const tmp = outer1_4(ActionBatcher.batchers);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp2 = null != value.action;
          if (tmp2) {
            let tmp3 = null == arg0 || value.shouldFlush(arg0, arg1);
            tmp2 = tmp3;
          }
          if (tmp2) {
            let flushResult = value.flush();
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  const items1 = [obj];
  return callback(ActionBatcher, items, items1);
})();
tmp2.batchers = [];
const result = require("dispatcher").fileFinishedImporting("modules/gateway/ActionBatcher.tsx");

export default tmp2;
