// Module ID: 172
// Function ID: 2524
// Name: noop
// Dependencies: []

// Module 172 (noop)
function noop() {

}
class Promise {
  constructor(arg0) {
    self = this;
    if ("object" !== typeof this) {
      tmp10 = globalThis;
      _TypeError2 = TypeError;
      prototype2 = TypeError.prototype;
      tmp11 = new.target;
      str3 = "Promises must be constructed via new";
      tmp12 = new.target;
      typeError = new TypeError("Promises must be constructed via new");
      tmp14 = typeError;
      throw typeError;
    } else {
      str = "function";
      if ("function" !== typeof global) {
        tmp5 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp6 = new.target;
        str2 = "Promise constructor's argument is not a function";
        tmp7 = new.target;
        typeError1 = new TypeError("Promise constructor's argument is not a function");
        tmp9 = typeError1;
        throw typeError1;
      } else {
        num = 0;
        self._x = 0;
        self._y = 0;
        tmp = null;
        self._z = null;
        self._A = null;
        tmp2 = noop;
        if (global !== noop) {
          tmp3 = doResolve;
          tmp4 = doResolve(global, self);
        }
        return;
      }
    }
  }
  then(arg0, arg1) {
    self = this;
    if (this.constructor !== Promise) {
      return (function safeThen(self, arg1, arg2) {
        let closure_0 = self;
        let closure_1 = arg1;
        let closure_2 = arg2;
        const constructor = new self.constructor((arg0, arg1) => {
          const promise = new outer2_3(outer2_2);
          promise.then(arg0, arg1);
          outer2_4(closure_0, new outer2_8(closure_1, closure_2, promise));
        });
        return constructor;
      })(self, global, require);
    } else {
      tmp = Promise;
      tmp2 = noop;
      prototype = Promise.prototype;
      tmp3 = new.target;
      tmp4 = new.target;
      tmp5 = new Promise(noop);
      tmp6 = tmp5;
      tmp7 = handle;
      tmp8 = Handler;
      prototype2 = Handler.prototype;
      tmp9 = new.target;
      tmp10 = new.target;
      tmp11 = global;
      tmp12 = require;
      tmp13 = tmp5;
      tmp14 = new Handler(global, require, tmp5);
      tmp15 = tmp14;
      tmp16 = handle(self, tmp14);
      return tmp5;
    }
  }
}
function handle(_y, _A) {
  let tmp = _y;
  let tmp2 = _y;
  if (3 === _y._y) {
    do {
      let _z = tmp._z;
      tmp = _z;
      tmp2 = _z;
      _y = _z._y;
    } while (3 === _y);
  }
  if (Promise._B) {
    Promise._B(tmp2);
  }
  if (0 === tmp2._y) {
    if (0 === tmp2._x) {
      tmp2._x = 1;
      tmp2._A = _A;
    } else if (1 === tmp2._x) {
      tmp2._x = 2;
      const items = [tmp2._A, _A];
      tmp2._A = items;
    } else {
      _A = tmp2._A;
      _A.push(_A);
    }
    return tmp7;
  } else {
    (function handleResolved(_y, _A) {
      let closure_0 = _y;
      let closure_1 = _A;
      setImmediate(() => {
        if (1 === _y._y) {
          let onRejected = _A.onFulfilled;
        } else {
          onRejected = _A.onRejected;
        }
        if (null !== onRejected) {
          const _z = _y._z;
          const onRejectedResult = onRejected(_z);
          while (true) {
            let tmp18 = outer2_1;
            if (onRejectedResult === outer2_1) {
              let tmp22 = outer2_6;
              let tmp23 = _A;
              let tmp24 = outer2_0;
              let tmp25 = outer2_6(_A.promise, outer2_0);
            } else {
              let tmp19 = outer2_5;
              let tmp20 = _A;
              let tmp21 = outer2_5(_A.promise, onRejectedResult);
            }
          }
        } else if (1 === _y._y) {
          outer2_5(_A.promise, _y._z);
        } else {
          outer2_6(_A.promise, _y._z);
        }
      });
    })(tmp2, _A);
  }
}
function resolve(arg0, _z) {
  if (_z === arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("A promise cannot be resolved with itself.");
    reject(arg0, typeError);
  } else {
    if (_z) {
      if ("object" === typeof _z) {
        const then = _z.then;
        while (true) {
          let tmp3 = closure_1;
          if (then === closure_1) {
            let tmp11 = reject;
            let tmp12 = c0;
            let tmp13 = reject(arg0, c0);
          } else {
            if (then === arg0.then) {
              let tmp4 = Promise;
              if (_z instanceof Promise) {
                let num2 = 3;
                arg0._y = 3;
                arg0._z = _z;
                let tmp9 = finale;
                let tmp10 = finale(arg0);
              }
            }
            let str3 = "function";
            if ("function" === typeof then) {
              let tmp7 = doResolve;
              let tmp8 = doResolve(then.bind(_z), arg0);
            }
          }
        }
      }
    }
    arg0._y = 1;
    arg0._z = _z;
    finale(arg0);
  }
}
function reject(arg0, _z) {
  arg0._y = 2;
  arg0._z = _z;
  if (Promise._C) {
    Promise._C(arg0, _z);
  }
  finale(arg0);
}
function finale(_x) {
  let length;
  if (1 === _x._x) {
    handle(_x, _x._A);
    _x._A = null;
  }
  if (2 === _x._x) {
    let num = 0;
    if (0 < _x._A.length) {
      do {
        let tmp4 = handle;
        let tmp5 = handle(_x, _x._A[num]);
        num = num + 1;
        length = _x._A.length;
      } while (num < length);
    }
    _x._A = null;
  }
}
function Handler(arg0, arg1, promise) {
  const self = this;
  let tmp = null;
  if ("function" === typeof arg0) {
    tmp = arg0;
  }
  self.onFulfilled = tmp;
  let tmp2 = null;
  if ("function" === typeof arg1) {
    tmp2 = arg1;
  }
  self.onRejected = tmp2;
  self.promise = promise;
}
function doResolve(arg0, arg1) {
  let closure_0 = arg1;
  let c1 = false;
  const fn = (arg0) => {
    if (!c1) {
      c1 = true;
      outer1_5(closure_0, arg0);
    }
  };
  const fn2 = (arg0) => {
    if (!c1) {
      c1 = true;
      outer1_6(closure_0, arg0);
    }
  };
  arg0(fn, fn2);
  while (true) {
    let tmp3 = c1;
    if (c1) {
      break;
    } else {
      let tmp4 = c1;
      tmp3 = tmp2 !== c1;
      break;
    }
    if (!tmp3) {
      let flag = true;
      c1 = true;
      let tmp5 = reject;
      let tmp6 = closure_0;
      let tmp7 = reject(arg1, closure_0);
    }
  }
}
let c0 = null;
let closure_1 = {};
Promise._B = null;
Promise._C = null;
Promise._D = noop;

export default Promise;
