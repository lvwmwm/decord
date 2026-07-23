// Module ID: 7260
// Function ID: 58482
// Name: SyncPromise
// Dependencies: [6, 7, 7243]
// Exports: rejectedSyncPromise, resolvedSyncPromise

// Module 7260 (SyncPromise)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let obj = { PENDING: 0 };
obj[0] = "PENDING";
obj.RESOLVED = 1;
obj[1] = "RESOLVED";
obj.REJECTED = 2;
obj[2] = "REJECTED";
const tmp2 = (() => {
  class SyncPromise {
    constructor(arg0) {
      tmp = outer1_3(this, SyncPromise);
      __init = SyncPromise.prototype.__init;
      callResult = __init.call(this);
      __init2 = SyncPromise.prototype.__init2;
      callResult1 = __init2.call(this);
      __init3 = SyncPromise.prototype.__init3;
      callResult2 = __init3.call(this);
      __init4 = SyncPromise.prototype.__init4;
      callResult3 = __init4.call(this);
      this._state = outer1_2.PENDING;
      this._handlers = [];
      tmp6 = arg0(this._resolve, this._reject);
      return;
    }
  }
  let obj = {
    key: "then",
    value: function then(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const self = this;
      return new closure_0((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const _handlers = self._handlers;
        const items = [
          false,
          (arg0) => {
            if (callback) {
              callback(callback(arg0));
            } else {
              callback(arg0);
            }
          },
          (arg0) => {
            if (callback2) {
              callback(callback2(arg0));
            } else {
              callback2(arg0);
            }
          }
        ];
        _handlers.push(items);
        self._executeHandlers();
      });
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "catch",
    value: function _catch(arg0) {
      return this.then((arg0) => arg0, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "finally",
    value: function _finally(arg0) {
      let closure_0 = arg0;
      const self = this;
      return new closure_0((arg0, arg1) => {
        let closure_0 = arg0;
        const _self = arg1;
        return _self.then((arg0) => {
          let c3 = false;
          let closure_2 = arg0;
          if (callback) {
            callback();
          }
        }, (arg0) => {
          let c3 = true;
          let closure_2 = arg0;
          if (callback) {
            callback();
          }
        }).then(() => {
          if (closure_3) {
            callback2(closure_2);
          } else {
            callback(closure_2);
          }
        });
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__init",
    value: function __init() {
      const self = this;
      this._resolve = (arg0) => {
        self._setResult(outer2_2.RESOLVED, arg0);
      };
    }
  };
  items[4] = {
    key: "__init2",
    value: function __init2() {
      const self = this;
      this._reject = (arg0) => {
        self._setResult(outer2_2.REJECTED, arg0);
      };
    }
  };
  items[5] = {
    key: "__init3",
    value: function __init3() {
      const self = this;
      this._setResult = (_state, promise) => {
        if (self._state === outer2_2.PENDING) {
          if (obj.isThenable(promise)) {
            promise.then(self._resolve, self._reject);
          } else {
            self._state = _state;
            self._value = promise;
            self._executeHandlers();
          }
          obj = SyncPromise(outer2_1[2]);
        }
      };
    }
  };
  items[6] = {
    key: "__init4",
    value: function __init4() {
      const self = this;
      this._executeHandlers = () => {
        if (self._state !== outer2_2.PENDING) {
          const _handlers = self._handlers;
          const substr = _handlers.slice();
          self._handlers = [];
          const item = substr.forEach((arg0) => {
            if (!arg0[0]) {
              if (outer1_0._state === outer3_2.RESOLVED) {
                arg0[1](outer1_0._value);
              }
              if (outer1_0._state === outer3_2.REJECTED) {
                arg0[2](outer1_0._value);
              }
              arg0[0] = true;
            }
          });
        }
      };
    }
  };
  return _defineProperties(SyncPromise, items);
})();
let closure_5 = tmp2;

export const SyncPromise = tmp2;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_5((arg0, arg1) => {
    arg1(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_5((arg0) => {
    arg0(closure_0);
  });
};
