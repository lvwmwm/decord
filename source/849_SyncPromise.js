// Module ID: 849
// Function ID: 9464
// Name: SyncPromise
// Dependencies: []
// Exports: rejectedSyncPromise, resolvedSyncPromise

// Module 849 (SyncPromise)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tmp2 = () => {
  class SyncPromise {
    constructor(arg0) {
      tmp = closure_2(this, SyncPromise);
      this._state = 0;
      this._handlers = [];
      _runExecutorResult = this._runExecutor(arg0);
      return;
    }
  }
  const require = SyncPromise;
  let obj = {
    key: "then",
    value: function then(arg0, arg1) {
      const self = this;
      return new arg0((arg0, arg1) => {
        const _handlers = self._handlers;
        const items = [
          false,
          (arg0) => {
            if (arg0) {
              arg0(arg0(arg0));
            } else {
              arg0(arg0);
            }
          },
          (arg0) => {
            if (arg1) {
              arg0(arg1(arg0));
            } else {
              arg1(arg0);
            }
          }
        ];
        _handlers.push(items);
        self._executeHandlers();
      });
    }
  };
  const items = [obj, , , , ];
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
      const self = this;
      return new arg0((arg0, arg1) => {
        const self = arg1;
        return self.then((arg0) => {
          let closure_3 = false;
          if (arg0) {
            arg0();
          }
        }, (arg0) => {
          let closure_3 = true;
          if (arg0) {
            arg0();
          }
        }).then(() => {
          if (closure_3) {
            arg1(closure_2);
          } else {
            arg0(closure_2);
          }
        });
      });
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_executeHandlers",
    value: function _executeHandlers() {
      const self = this;
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
      function setResult(_state, promise) {
        if (0 === self._state) {
          if (obj.isThenable(promise)) {
            promise.then(resolve, reject);
          } else {
            self._state = _state;
            self._value = promise;
            self._executeHandlers();
          }
          const obj = self(setResult[2]);
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
  return callback(SyncPromise, items);
}();

export const SyncPromise = tmp2;
export const rejectedSyncPromise = function rejectedSyncPromise(arg0) {
  const require = arg0;
  return new tmp2((arg0, arg1) => {
    arg1(arg0);
  });
};
export const resolvedSyncPromise = function resolvedSyncPromise(arg0) {
  const require = arg0;
  return new tmp2((arg0) => {
    arg0(arg0);
  });
};
