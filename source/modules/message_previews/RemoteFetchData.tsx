// Module ID: 14085
// Function ID: 106946
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14085 (_createForOfIteratorHelperLoose)
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
const obj = { Pending: 0, [0]: "Pending", Fetching: 1, [1]: "Fetching" };
const tmp2 = () => {
  class RemoteFetchData {
    constructor() {
      tmp = RemoteFetchData(this, RemoteFetchData);
      set = new Set();
      this.pending = set;
      set1 = new Set();
      this.fetching = set1;
      return;
    }
  }
  let closure_1 = RemoteFetchData;
  let obj = {
    key: "empty",
    value() {
      return 0 === this.pending.size && 0 === this.fetching.size;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "status",
    value(arg0) {
      const pending = this.pending;
      if (pending.has(arg0)) {
        let Pending = closure_3.Pending;
      } else {
        const fetching = this.fetching;
        Pending = null;
        if (fetching.has(arg0)) {
          Pending = closure_3.Fetching;
        }
      }
      return Pending;
    }
  };
  items[1] = obj;
  obj = {
    key: "addWant",
    value(arg0) {
      const fetching = this.fetching;
      if (!fetching.has(arg0)) {
        const pending = this.pending;
        pending.add(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "removeWant",
    value(arg0) {
      const pending = this.pending;
      pending.delete(arg0);
      const fetching = this.fetching;
      fetching.delete(arg0);
    }
  };
  items[4] = {
    key: "nextWants",
    value(arg0) {
      const items = [...this.pending];
      items.length = Math.min(arg0, items.length);
      return items;
    }
  };
  items[5] = {
    key: "markFetching",
    value(arg0) {
      let done;
      const self = this;
      const tmp = callback2(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let pending = self.pending;
          let deleteResult = pending.delete(value);
          let fetching = self.fetching;
          let addResult = fetching.add(value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[6] = {
    key: "markCompleted",
    value(arg0) {
      let done;
      const self = this;
      const tmp = callback2(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let pending = self.pending;
          let deleteResult = pending.delete(value);
          let fetching = self.fetching;
          let deleteResult1 = fetching.delete(value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[7] = {
    key: "markFailed",
    value(arg0) {
      let done;
      const self = this;
      const tmp = callback2(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let pending = self.pending;
          let addResult = pending.add(value);
          let fetching = self.fetching;
          let deleteResult = fetching.delete(value);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  const obj6 = { key: "try" };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = callback("try");
  obj6.value = function _try() {
    return callback(...arguments);
  };
  items[8] = obj6;
  return callback2(RemoteFetchData, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/message_previews/RemoteFetchData.tsx");

export const FetchStatus = obj;
export const RemoteFetchData = tmp2;
