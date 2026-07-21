// Module ID: 12458
// Function ID: 95166
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12458 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class ActionBatcher {
    constructor(arg0, arg1, arg2) {
      ActionBatcher = this;
      arg1 = arg1;
      tmp = closure_2(this, ActionBatcher);
      this.socket = arg0;
      this.action = null;
      this.shouldFlush = arg2;
      this.add = (arg0) => {
        self.action = arg1(self.action, arg0);
      };
      batchers = ActionBatcher.batchers;
      arr = batchers.push(this);
      return;
    }
  }
  const importDefault = ActionBatcher;
  let obj = {
    key: "flush",
    value() {
      const ActionBatcher = this;
      const action = this.action;
      this.action = null;
      if (null != action) {
        const obj = ActionBatcher(action[2]);
        ActionBatcher(action[2]).dispatch(action).catch((error) => {
          const socket = self.socket;
          return socket.resetSocketAndClearCacheOnError({ error, action: action.type });
        });
        const dispatchResult = ActionBatcher(action[2]).dispatch(action);
      }
    }
  };
  const items = [obj];
  obj = {
    key: "flush",
    value(arg0, arg1) {
      let iter2;
      const tmp = callback2(ActionBatcher.batchers);
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
}();
tmp2.batchers = [];
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/gateway/ActionBatcher.tsx");

export default tmp2;
