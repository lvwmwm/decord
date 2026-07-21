// Module ID: 7255
// Function ID: 58437
// Name: SyncPromise
// Dependencies: []
// Exports: rejectedSyncPromise, resolvedSyncPromise

// Module 7255 (SyncPromise)
let closure_3 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[1]);
const obj = { PENDING: 0 };
obj[0] = "PENDING";
obj.RESOLVED = 1;
obj[1] = "RESOLVED";
obj.REJECTED = 2;
obj[2] = "REJECTED";
const tmp2 = () => {
  class SyncPromise {
    constructor(arg0) {
      tmp = closure_3(this, SyncPromise);
      __init = SyncPromise.prototype.__init;
      callResult = __init.call(this);
      __init2 = SyncPromise.prototype.__init2;
      callResult1 = __init2.call(this);
      __init3 = SyncPromise.prototype.__init3;
      callResult2 = __init3.call(this);
      __init4 = SyncPromise.prototype.__init4;
      callResult3 = __init4.call(this);
      this._state = closure_2.PENDING;
      this._handlers = [];
      tmp6 = arg0(this._resolve, this._reject);
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
  const items = [obj, , , , , , ];
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
    key: "__init",
    value: function __init() {
      this._resolve = (arg0) => {
        self._setResult(constants.RESOLVED, arg0);
      };
    }
  };
  items[4] = {
    key: "__init2",
    value: function __init2() {
      this._reject = (arg0) => {
        self._setResult(constants.REJECTED, arg0);
      };
    }
  };
  items[5] = {
    key: "__init3",
    value: function __init3() {
      this._setResult = (_state, promise) => {
        if (self._state === constants.PENDING) {
          if (obj.isThenable(promise)) {
            promise.then(self._resolve, self._reject);
          } else {
            self._state = _state;
            self._value = promise;
            self._executeHandlers();
          }
          const obj = self(closure_1[2]);
        }
      };
    }
  };
  items[6] = {
    key: "__init4",
    value: function __init4() {
      this._executeHandlers = () => {
        if (self._state !== constants.PENDING) {
          const _handlers = self._handlers;
          const substr = _handlers.slice();
          self._handlers = [];
          const item = substr.forEach((arg0) => {
            if (!arg0[0]) {
              if (closure_0._state === constants.RESOLVED) {
                arg0[1](closure_0._value);
              }
              if (closure_0._state === constants.REJECTED) {
                arg0[2](closure_0._value);
              }
              arg0[0] = true;
            }
          });
        }
      };
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
