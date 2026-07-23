// Module ID: 5665
// Function ID: 48663
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 1362, 2]

// Module 5665 (_createForOfIteratorHelperLoose)
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
  class GuildThreadSubscriptions {
    constructor(arg0) {
      tmp = outer1_2(this, GuildThreadSubscriptions);
      this._subscriptions = {};
      this._onChange = arg0;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._subscriptions = {};
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return this._get(arg0).keys();
    }
  };
  items[1] = obj;
  obj = {
    key: "getSubscribedThreadIds",
    value() {
      const set = new Set();
      for (const key10011 in this._subscriptions) {
        let tmp2 = key10011;
        let tmp3 = outer1_4;
        let obj2 = this._subscriptions[key10011];
        let tmp4 = outer1_4(obj2.keys());
        let iter2 = tmp4();
        if (iter2.done) {
          continue;
        } else {
          let addResult = set.add(iter2.value);
          let iter = tmp4();
          iter2 = iter;
        }
        continue;
      }
      return set;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_get",
    value(arg0) {
      let tmp = this._subscriptions[arg0];
      if (null == tmp) {
        const tmp4 = GuildThreadSubscriptions(outer1_1[2]);
        const prototype = tmp4.prototype;
        tmp = new tmp4({ max: 3, updateAgeOnGet: true });
      }
      return tmp;
    }
  };
  items[4] = {
    key: "clear",
    value(_pending) {
      const self = this;
      if (_pending in this._subscriptions) {
        const _subscriptions = self._subscriptions;
        delete tmp[tmp2];
        self._onChange(_pending, []);
      }
    }
  };
  items[5] = {
    key: "subscribe",
    value(_pending) {
      const self = this;
      const _getResult = this._get(_pending);
      if (_getResult.has(arg1)) {
        const _Date3 = Date;
        const result = _getResult.set(arg1, Date.now());
        let flag = false;
      } else {
        if (tmp2) {
          const _Date = Date;
          const result1 = _getResult.set(arg2, Date.now());
        }
        const _Date2 = Date;
        const result2 = _getResult.set(arg1, Date.now());
        self._subscriptions[_pending] = _getResult;
        self._onChange(_pending, _getResult.keys());
        flag = true;
        tmp2 = null != arg2 && _getResult.has(arg2);
      }
      return flag;
    }
  };
  items[6] = {
    key: "unsubscribe",
    value(_pending) {
      const self = this;
      if (_pending in this._subscriptions) {
        const tmp = !self._subscriptions[_pending].has(arg1);
        let flag2 = !tmp;
        if (!tmp) {
          obj.del(arg1);
          self._onChange(_pending, obj.keys());
          flag2 = true;
        }
        return flag2;
      } else {
        return false;
      }
    }
  };
  return callback(GuildThreadSubscriptions, items);
})();
let result = require("priv").fileFinishedImporting("lib/guild/GuildThreadSubscriptions.tsx");

export default tmp2;
