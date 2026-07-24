// Module ID: 4015
// Function ID: 33342
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 15, 17, 18, 162, 6, 7, 2]
// Exports: timeoutPromise

// Module 4015 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _defineProperties from "_defineProperties";
import set from "set";
import importDefaultResult from "_wrapNativeSuper";

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
      if (_possibleConstructorReturn >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        _possibleConstructorReturn = tmp3 + 1;
        obj.value = length[+_possibleConstructorReturn];
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
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}
let tmp3 = (() => {
  class Timeout {
    constructor() {
      tmp = outer1_4(this, Timeout);
      return;
    }
  }
  let obj = {
    key: "start",
    value(arg0, arg1) {
      let flag = arg2;
      let self = this;
      self = this;
      let _possibleConstructorReturn = arg1;
      if (arg2 === undefined) {
        flag = true;
      }
      if (!tmp) {
        self.stop();
        const _window = window;
        self._ref = window.setTimeout(() => {
          self._ref = null;
          callback();
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
  return callback3(Timeout, items);
})();
let closure_6 = tmp3;
let tmp4 = (() => {
  class DelayedCall {
    constructor(arg0, arg1) {
      tmp = outer1_4(this, DelayedCall);
      this._delay = arg0;
      this._handler = arg1;
      tmp2 = new outer1_6();
      this._timeout = tmp2;
      return;
    }
  }
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
  return callback3(DelayedCall, items);
})();
let closure_7 = tmp4;
const tmp6 = ((arg0) => {
  class BatchInvocationManagerResetError {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, BatchInvocationManagerResetError);
      items1 = [...items];
      obj = outer1_2(BatchInvocationManagerResetError);
      tmp2 = outer1_1;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_2;
        constructResult = Reflect.construct(obj, items1, outer1_2(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "BatchInvocationManagerResetError";
      return tmp2Result;
    }
  }
  callback2(BatchInvocationManagerResetError, arg0);
  return callback3(BatchInvocationManagerResetError);
})(importDefaultResult(Error));
let closure_8 = tmp6;
const tmp5 = (() => {
  class Interval {
    constructor() {
      tmp = outer1_4(this, Interval);
      return;
    }
  }
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
  return callback3(Interval, items);
})();
const tmp7 = (() => {
  class BatchInvocationManager {
    constructor(arg0) {
      obj = arg1;
      self = this;
      self = this;
      if (arg1 === undefined) {
        obj = {};
      }
      tmp = outer1_4(self, BatchInvocationManager);
      self.invoke = arg0;
      self.options = obj;
      set = new Set();
      self._promises = set;
      set1 = new Set();
      self._pending = set1;
      tmp4 = outer1_7;
      delay = self.options.delay;
      num = 32;
      if (null != delay) {
        num = delay;
      }
      tmp4 = new tmp4(num, () => self._flush());
      self._flushHandler = tmp4;
      return;
    }
  }
  let obj = {
    key: "queue",
    value(arg0) {
      let iter2;
      let self = this;
      self = this;
      const items = [];
      let tmp2 = arg0;
      if (!Array.isArray(arg0)) {
        const items1 = [arg0];
        tmp2 = items1;
      }
      const tmpResult = outer1_9(tmp2);
      let iter = tmpResult();
      if (!iter.done) {
        do {
          let value = iter.value;
          let options = self.options;
          let predicate = options.predicate;
          let callResult;
          if (null != predicate) {
            callResult = predicate.call(options, value);
          }
          let hasItem = null != callResult && !callResult;
          if (!hasItem) {
            let _pending = self._pending;
            hasItem = _pending.has(value);
          }
          if (!hasItem) {
            let _pending2 = self._pending;
            let addResult = _pending2.add(value);
            let arr = items.push(value);
          }
          iter2 = tmpResult();
          iter = iter2;
        } while (!iter2.done);
      }
      if (items.length > 0) {
        const options2 = self.options;
        const onQueued = options2.onQueued;
        if (null != onQueued) {
          onQueued.call(options2, items);
        }
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
  let items = [obj, , ];
  obj = {
    key: "reset",
    value() {
      const items = [...this._pending];
      const items1 = [...this._promises];
      let _classCallCheck = new outer1_8("BatchInvocationManager was reset");
      const _pending = this._pending;
      _pending.clear();
      const _promises = this._promises;
      _promises.clear();
      this._flushHandler.cancel();
      if (items.length > 0) {
        const options = this.options;
        const onCancelled = options.onCancelled;
        if (null != onCancelled) {
          onCancelled.call(options, items);
        }
      }
      const item = items1.forEach((reject) => reject.reject(_classCallCheck));
    }
  };
  items[1] = obj;
  obj = { key: "_flush" };
  callback = callback(async function() {
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
  return callback3(BatchInvocationManager, items);
})();
let result = require("_getPrototypeOf").fileFinishedImporting("../discord_common/js/packages/timers/Timers.tsx");

export const Timeout = tmp3;
export const DelayedCall = tmp4;
export const Interval = tmp5;
export const timeoutPromise = function timeoutPromise(arg0) {
  let _classCallCheck = arg0;
  return new Promise((arg0) => {
    let _classCallCheck = arg0;
    const timerId = setTimeout(() => callback(), _classCallCheck);
  });
};
export const DEFAULT_BATCH_INVOCATION_DELAY_MS = 32;
export const BatchInvocationManagerResetError = tmp6;
export const BatchInvocationManager = tmp7;
