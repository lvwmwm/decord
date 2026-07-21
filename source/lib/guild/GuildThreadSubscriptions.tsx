// Module ID: 5661
// Function ID: 48628
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 5661 (_createForOfIteratorHelperLoose)
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
  class GuildThreadSubscriptions {
    constructor(arg0) {
      tmp = closure_2(this, GuildThreadSubscriptions);
      this._subscriptions = {};
      this._onChange = arg0;
      return;
    }
  }
  const importDefault = GuildThreadSubscriptions;
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
        let tmp3 = closure_4;
        let obj2 = this._subscriptions[key10011];
        let tmp4 = closure_4(obj2.keys());
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
        const tmp4 = GuildThreadSubscriptions(closure_1[2]);
        const prototype = tmp4.prototype;
        tmp = new tmp4({});
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
        delete r0[r3];
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
        const tmp2 = null != arg2 && _getResult.has(arg2);
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
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/guild/GuildThreadSubscriptions.tsx");

export default tmp2;
