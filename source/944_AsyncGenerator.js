// Module ID: 944
// Function ID: 10217
// Name: AsyncGenerator
// Dependencies: []

// Module 944 (AsyncGenerator)
class AsyncGenerator {
  constructor(arg0) {
    require = global;
    resume = function resume(arg0, arg1) {
      const iter = arg0[arg0](arg1);
      const value = iter.value;
      const tmp = value instanceof arg0(iter[0]);
      const resume = tmp;
      const resolved = Promise.resolve(tmp ? value.v : value);
      resolved.then((done) => {
        let value = done;
        if (tmp) {
          let str = "next";
          if ("return" === done) {
            str = "return";
          }
          if (value.k) {
            if (!done.done) {
              value = done[str](done).value;
            }
          }
          done(str, done);
        }
        let str3 = "normal";
        if (iter.done) {
          str3 = "return";
        }
        closure_4(str3, value);
      }, (arg0) => {

      });
    };
    settle = function settle(arg0, value) {
      if ("return" === arg0) {
        let obj = { value, done: true };
        next.resolve(obj);
      } else if ("throw" === arg0) {
        next.reject(value);
      } else {
        obj = { value, done: false };
        next.resolve(obj);
      }
      const next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        let closure_2 = null;
      }
    };
    this._invoke = (arg0, arg1) => new Promise((resolve, reject) => {
      const obj = { key: resolve, arg: reject, resolve, reject, next: null };
      if (obj) {
        obj.next = obj;
      } else {
        reject = obj;
        callback(resolve, reject);
      }
    });
    if ("function" !== typeof global.return) {
      tmp.return = undefined;
    }
    return;
  }
  next(arg0) {
    return this._invoke("next", global);
  }
  throw(arg0) {
    return this._invoke("throw", global);
  }
  return(arg0) {
    return this._invoke("return", global);
  }
}
let str = "function" === typeof Symbol;
if (str) {
  const _Symbol = Symbol;
  str = Symbol.asyncIterator;
}
if (!str) {
  str = "@@asyncIterator";
}
AsyncGenerator.prototype[str] = function() {
  return this;
};

export default function _wrapAsyncGenerator(arg0) {
  const require = arg0;
  return function() {
    return new closure_2(arg0(...arguments));
  };
};
