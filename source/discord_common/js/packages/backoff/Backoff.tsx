// Module ID: 561
// Function ID: 6784
// Name: Backoff
// Dependencies: [513, 511, 513]

// Module 561 (Backoff)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("../discord_common/js/packages/backoff/Backoff.tsx");

export default () => {
  class Backoff {
    constructor() {
      num = arg0;
      result = arg1;
      flag = arg2;
      self = this;
      if (arg0 === undefined) {
        num = 500;
      }
      if (result === undefined) {
        result = null;
      }
      if (flag === undefined) {
        flag = true;
      }
      tmp2 = Backoff(self, Backoff);
      self._fails = 0;
      if (num <= 0) {
        tmp4 = globalThis;
        _Error = Error;
        str = "Backoff min value must be greater than zero or backoff will never back-off.";
        throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
      } else {
        self.min = num;
        tmp3 = null;
        if (null == result) {
          num2 = 10;
          result = 10 * num;
        }
        self.max = result;
        self.jitter = flag;
        self._current = num;
        return;
      }
    }
  }
  let closure_0 = Backoff;
  let obj = {
    key: "fails",
    get() {
      return this._fails;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "current",
    get() {
      return this._current;
    }
  };
  items[1] = obj;
  obj = {
    key: "pending",
    get() {
      return null != this._timeoutId;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "succeed",
    value() {
      this.cancel();
      this._fails = 0;
      this._current = this.min;
    }
  };
  items[4] = {
    key: "fail",
    value(_callback) {
      let _current = arg1;
      const self = this;
      const Backoff = this;
      this._fails = this._fails + 1;
      const result = 2 * this._current;
      let result1 = result;
      if (this.jitter) {
        const _Math = Math;
        result1 = result * Math.random();
      }
      self._current = Math.min(self._current + result1, self.max);
      if (null == _current) {
        _current = self._current;
      }
      if (null != _callback) {
        if (null != self._timeoutId) {
          if (self._callback !== _callback) {
            const _Error = Error;
            const error = new Error("callback already pending");
            throw error;
          } else {
            self.cancel();
          }
        }
        self._callback = _callback;
        const _setTimeout = setTimeout;
        self._timeoutId = setTimeout(() => {
          if (null != arg0) {
            arg0();
          }
          self.cancel();
        }, _current);
      }
      return _current;
    }
  };
  items[5] = {
    key: "cancel",
    value() {
      const self = this;
      this._callback = null;
      if (null != this._timeoutId) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._timeoutId);
        self._timeoutId = null;
      }
    }
  };
  return callback(Backoff, items);
}();
