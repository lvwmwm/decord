// Module ID: 14209
// Function ID: 109174
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 2]

// Module 14209 (_createForOfIteratorHelperLoose)
import asyncGeneratorStep from "asyncGeneratorStep";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function _createForOfIteratorHelperLoose(iterable) {
  let asyncGeneratorStep = iterable;
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
      asyncGeneratorStep = tmp;
    }
    let c1 = 0;
    return () => {
      if (_classCallCheck >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _classCallCheck = tmp3 + 1;
        obj.value = length[+_classCallCheck];
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
let obj = { Pending: 0, [0]: "Pending", Fetching: 1, [1]: "Fetching" };
let tmp2 = (() => {
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
  let obj = {
    key: "empty",
    value() {
      return 0 === this.pending.size && 0 === this.fetching.size;
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "status",
    value(arg0) {
      const pending = this.pending;
      if (pending.has(arg0)) {
        let Pending = outer1_3.Pending;
      } else {
        const fetching = this.fetching;
        Pending = null;
        if (fetching.has(arg0)) {
          Pending = outer1_3.Fetching;
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
      const tmp = outer1_4(arg0);
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
      const tmp = outer1_4(arg0);
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
      const tmp = outer1_4(arg0);
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
  callback = callback("try");
  obj6.value = function _try() {
    return callback(...arguments);
  };
  items[8] = obj6;
  return callback2(RemoteFetchData, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/message_previews/RemoteFetchData.tsx");

export const FetchStatus = obj;
export const RemoteFetchData = tmp2;
