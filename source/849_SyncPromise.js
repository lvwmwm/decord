// Module ID: 849
// Function ID: 9466
// Name: SyncPromise
// Dependencies: [6, 7, 804]
// Exports: rejectedSyncPromise, resolvedSyncPromise

// Module 849 (SyncPromise)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tmp2 = (() => {
  class SyncPromise {
    constructor(arg0) {
      tmp = outer1_2(this, SyncPromise);
      this._state = 0;
      this._handlers = [];
      _runExecutorResult = this._runExecutor(arg0);
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
  let items = [obj, , , , ];
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
    key: "_executeHandlers",
    value: function _executeHandlers() {
      let self = this;
      self = this;
      if (0 !== this._state) {
        const _handlers = self._handlers;
        const substr = _handlers.slice();
        self._handlers = [];
        const item = substr.forEach((arg0) => {
          if (!arg0[0]) {
            if (1 === self._state) {
              arg0[1](self._value);
            }
            if (2 === self._state) {
              arg0[2](self._value);
            }
            arg0[0] = true;
          }
        });
      }
    }
  };
  items[4] = {
    key: "_runExecutor",
    value: function _runExecutor(arg0) {
      const self = this;
      function setResult(_state, promise) {
        if (0 === self._state) {
          if (obj.isThenable(promise)) {
            promise.then(resolve, reject);
          } else {
            self._state = _state;
            self._value = promise;
            self._executeHandlers();
          }
          obj = SyncPromise(outer2_1[2]);
        }
      }
      function resolve(promise) {
        setResult(1, promise);
      }
      function reject(promise) {
        setResult(2, promise);
      }
      arg0(resolve, reject);
    }
  };
  return _defineProperties(SyncPromise, items);
})();
let closure_4 = tmp2;

export const SyncPromise = tmp2;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_4((arg0, arg1) => {
    arg1(closure_0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  let closure_0 = arg0;
  return new closure_4((arg0) => {
    arg0(closure_0);
  });
};
