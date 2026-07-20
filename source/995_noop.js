// Module ID: 995
// Function ID: 10672
// Name: noop
// Dependencies: []

// Module 995 (noop)
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
        self._40 = 0;
        self._65 = 0;
        tmp = null;
        self._55 = null;
        self._72 = null;
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
      return function safeThen(self, arg1, arg2) {
        const constructor = new self.constructor((arg0, arg1) => {
          const promise = new closure_3(arg2);
          promise.then(arg0, arg1);
          callback(arg0, new closure_8(arg1, arg2, promise));
        });
        return constructor;
      }(self, global, require);
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
function handle(_65, _72) {
  let tmp = _65;
  let tmp2 = _65;
  if (3 === _65._65) {
    do {
      let _55 = tmp._55;
      tmp = _55;
      tmp2 = _55;
      _65 = _55._65;
    } while (3 === _65);
  }
  if (Promise._37) {
    Promise._37(tmp2);
  }
  if (0 === tmp2._65) {
    if (0 === tmp2._40) {
      tmp2._40 = 1;
      tmp2._72 = _72;
    } else if (1 === tmp2._40) {
      tmp2._40 = 2;
      const items = [tmp2._72, _72];
      tmp2._72 = items;
    } else {
      _72 = tmp2._72;
      _72.push(_72);
    }
    return tmp7;
  } else {
    function handleResolved(_65, _72) {
      setImmediate((self, self2) => {
        if (1 === self._65) {
          let onRejected = self2.onFulfilled;
        } else {
          onRejected = self2.onRejected;
        }
        if (null !== onRejected) {
          const _55 = self._55;
          const onRejectedResult = onRejected(_55);
          while (true) {
            let tmp18 = self2;
            if (onRejectedResult === self2) {
              let tmp22 = callback2;
              let tmp23 = self2;
              let tmp24 = self;
              let tmp25 = callback2(self2.promise, self);
            } else {
              let tmp19 = callback;
              let tmp20 = self2;
              let tmp21 = callback(self2.promise, onRejectedResult);
            }
          }
        } else if (1 === self._65) {
          callback(self2.promise, self._55);
        } else {
          callback2(self2.promise, self._55);
        }
      });
    }(tmp2, _72);
  }
}
function resolve(arg0, _55) {
  if (_55 === arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("A promise cannot be resolved with itself.");
    reject(arg0, typeError);
  } else {
    if (_55) {
      if ("object" === typeof _55) {
        const then = _55.then;
        while (true) {
          let tmp3 = closure_1;
          if (then === closure_1) {
            let tmp11 = reject;
            let tmp12 = closure_0;
            let tmp13 = reject(arg0, closure_0);
          } else {
            if (then === arg0.then) {
              let tmp4 = Promise;
              if (_55 instanceof Promise) {
                let num2 = 3;
                arg0._65 = 3;
                arg0._55 = _55;
                let tmp9 = finale;
                let tmp10 = finale(arg0);
              }
            }
            let str3 = "function";
            if ("function" === typeof then) {
              let tmp7 = doResolve;
              let tmp8 = doResolve(then.bind(_55), arg0);
            }
          }
        }
      }
    }
    arg0._65 = 1;
    arg0._55 = _55;
    finale(arg0);
  }
}
function reject(arg0, _55) {
  arg0._65 = 2;
  arg0._55 = _55;
  if (Promise._87) {
    Promise._87(arg0, _55);
  }
  finale(arg0);
}
function finale(_40) {
  let length;
  if (1 === _40._40) {
    handle(_40, _40._72);
    _40._72 = null;
  }
  if (2 === _40._40) {
    let num = 0;
    if (0 < _40._72.length) {
      do {
        let tmp4 = closure_4;
        let tmp5 = closure_4(_40, _40._72[num]);
        num = num + 1;
        length = _40._72.length;
      } while (num < length);
    }
    _40._72 = null;
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
  let closure_1 = false;
  const fn = (arg0) => {
    if (!closure_1) {
      closure_1 = true;
      callback(arg1, arg0);
    }
  };
  const fn2 = (arg0) => {
    if (!closure_1) {
      closure_1 = true;
      callback2(arg1, arg0);
    }
  };
  arg0(fn, fn2);
  while (true) {
    let tmp3 = closure_1;
    if (closure_1) {
      break;
    } else {
      let tmp4 = closure_1;
      tmp3 = tmp2 !== closure_1;
      // break
    }
    if (!tmp3) {
      let flag = true;
      closure_1 = true;
      let tmp5 = reject;
      let tmp6 = closure_0;
      let tmp7 = reject(arg1, closure_0);
    }
  }
}
let closure_0 = null;
let closure_1 = {};
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

export default Promise;
