// Module ID: 944
// Function ID: 10223
// Name: AsyncGenerator
// Dependencies: [943]

// Module 944 (AsyncGenerator)
class AsyncGenerator {
  constructor(arg0) {
    closure_0 = global;
    resume = function resume(arg0, arg1) {
      const dependencyMap = arg0;
      const iter = dependencyMap[arg0](arg1);
      let value = iter.value;
      let closure_2 = value;
      const tmp = value instanceof dependencyMap(outer1_1[0]);
      const resume = tmp;
      const resolved = Promise.resolve(tmp ? value.v : value);
      resolved.then((done) => {
        let value = done;
        if (tmp) {
          let str = "next";
          if ("return" === dependencyMap) {
            str = "return";
          }
          if (value.k) {
            if (!done.done) {
              value = dependencyMap[str](done).value;
            }
          }
          dependencyMap(str, done);
        }
        let str3 = "normal";
        if (iter.done) {
          str3 = "return";
        }
        outer1_4(str3, value);
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
      next = next.next;
      if (next) {
        resume(next.key, next.arg);
      } else {
        let c2 = null;
      }
    };
    this._invoke = (arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      return new Promise((resolve, reject) => {
        const obj = { key: closure_0, arg: closure_1, resolve, reject, next: null };
        if (outer1_2) {
          outer1_2.next = obj;
          outer1_2 = obj;
        } else {
          outer1_2 = obj;
          closure_1 = obj;
          outer1_3(closure_0, closure_1);
        }
      });
    };
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
  let closure_0 = arg0;
  return function() {
    return new outer1_2(callback(...arguments));
  };
};
