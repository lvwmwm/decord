// Module ID: 4013
// Function ID: 33334
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: timeoutPromise

// Module 4013 (_createForOfIteratorHelperLoose)
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
const tmp2 = () => {
  class Timeout {
    constructor() {
      tmp = closure_1(this, Timeout);
      return;
    }
  }
  let closure_0 = Timeout;
  let obj = {
    key: "start",
    value(arg0, arg1) {
      let flag = arg2;
      const self = this;
      const Timeout = this;
      if (arg2 === undefined) {
        flag = true;
      }
      if (!tmp) {
        self.stop();
        const _window = window;
        self._ref = window.setTimeout(() => {
          self._ref = null;
          arg1();
        }, arg0);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "stop",
    value() {
      const self = this;
      if (null != this._ref) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._ref);
        self._ref = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isStarted",
    value() {
      return null != this._ref;
    }
  };
  items[2] = obj;
  return callback2(Timeout, items);
}();
const tmp3 = () => {
  class DelayedCall {
    constructor(arg0, arg1) {
      tmp = closure_1(this, DelayedCall);
      this._delay = arg0;
      this._handler = arg1;
      tmp2 = new closure_3();
      this._timeout = tmp2;
      return;
    }
  }
  let closure_0 = DelayedCall;
  let obj = {
    key: "set",
    value(_delay) {
      this._delay = _delay;
      return this;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "delay",
    value() {
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = true;
      }
      const _timeout = self._timeout;
      _timeout.start(self._delay, self._handler, flag);
    }
  };
  items[1] = obj;
  obj = {
    key: "cancel",
    value() {
      const _timeout = this._timeout;
      _timeout.stop();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isDelayed",
    value() {
      const _timeout = this._timeout;
      return _timeout.isStarted();
    }
  };
  return callback2(DelayedCall, items);
}();
const tmp4 = () => {
  class Interval {
    constructor() {
      tmp = closure_1(this, Interval);
      return;
    }
  }
  let closure_0 = Interval;
  let obj = {
    key: "start",
    value(arg0, arg1) {
      this.stop();
      this._ref = window.setInterval(arg1, arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "stop",
    value() {
      const self = this;
      if (null != this._ref) {
        const _clearInterval = clearInterval;
        clearInterval(self._ref);
        self._ref = null;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isStarted",
    value() {
      return null != this._ref;
    }
  };
  items[2] = obj;
  return callback2(Interval, items);
}();
const tmp5 = () => {
  class BatchInvocationManager {
    constructor(arg0) {
      fn = arg1;
      num = arg2;
      self = this;
      f33363 = this;
      if (arg1 === undefined) {
        fn = function r() {
          return true;
        };
      }
      if (num === undefined) {
        num = 32;
      }
      tmp = BatchInvocationManager(self, BatchInvocationManager);
      self.invoke = arg0;
      self.predicate = fn;
      self.delay = num;
      set = new Set();
      self._promises = set;
      set1 = new Set();
      self._pending = set1;
      tmp4 = new closure_4(self.delay, () => self._flush());
      self._flushHandler = tmp4;
      return;
    }
  }
  let closure_1 = BatchInvocationManager;
  let obj = {
    key: "queue",
    value(arg0) {
      let iter2;
      const self = this;
      let closure_0 = this;
      let tmp2 = arg0;
      if (!Array.isArray(arg0)) {
        const items = [arg0];
        tmp2 = items;
      }
      const tmpResult = closure_5(tmp2);
      let iter = tmpResult();
      if (!iter.done) {
        do {
          let value = iter.value;
          if (self.predicate(value)) {
            let _pending = self._pending;
            let addResult = _pending.add(value);
          }
          iter2 = tmpResult();
          iter = iter2;
        } while (!iter2.done);
      }
      if (0 === self._pending.size) {
        let resolved = Promise.resolve();
      } else {
        resolved = new Promise((resolve, reject) => {
          const _promises = self._promises;
          _promises.add({ resolve, reject });
          self._flushHandler.delay(false);
        });
      }
      return resolved;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "reset",
    value() {
      const error = new Error("BatchInvocationManager was reset");
      let closure_0 = error;
      let _promises = this._promises;
      const item = _promises.forEach((reject) => reject.reject(error));
      const _pending = this._pending;
      _pending.clear();
      _promises = this._promises;
      _promises.clear();
      this._flushHandler.cancel();
    }
  };
  items[1] = obj;
  obj = { key: "_flush" };
  const callback = callback(async function() {
    const self = this;
    const items = [...self._pending];
    const _pending = self._pending;
    _pending.clear();
    const items1 = [...self._promises];
    const _promises = self._promises;
    _promises.clear();
    if (0 !== items.length) {
      yield self.invoke(items);
      const item = arr3.forEach((resolve) => resolve.resolve());
    } else {
      const item1 = arr3.forEach((resolve) => resolve.resolve());
    }
  });
  obj.value = function _flush() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(BatchInvocationManager, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/timers/Timers.tsx");

export const Timeout = tmp2;
export const DelayedCall = tmp3;
export const Interval = tmp4;
export const timeoutPromise = function timeoutPromise(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    const timerId = setTimeout(() => arg0(), arg0);
  });
};
export const BatchInvocationManager = tmp5;
