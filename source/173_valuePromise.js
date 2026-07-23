// Module ID: 173
// Function ID: 2540
// Name: valuePromise
// Dependencies: [172]

// Module 173 (valuePromise)
import noop from "noop";

function valuePromise(_z) {
  let tmp = require(172) /* noop */;
  tmp = new tmp(require(172) /* noop */._D);
  tmp._y = 1;
  tmp._z = _z;
  return tmp;
}
function onSettledFulfill(value) {
  return { status: "fulfilled", value };
}
function onSettledReject(reason) {
  return { status: "rejected", reason };
}
function mapAllSettled(promise) {
  if (promise) {
    if ("object" === typeof promise) {
      if (promise instanceof require(172) /* noop */) {
        if (promise.then === require(172) /* noop */.prototype.then) {
          return promise.then(onSettledFulfill, onSettledReject);
        }
      }
      const then = promise.then;
      if ("function" === typeof then) {
        let tmp8 = require(172) /* noop */;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(then.bind(promise));
        return tmp8.then(onSettledFulfill, onSettledReject);
      }
    }
  }
  return onSettledFulfill(promise);
}
function getAggregateError(errors) {
  if ("function" === typeof globalThis.AggregateError) {
    const prototype2 = globalThis.AggregateError.prototype;
    const aggregateError = new globalThis.AggregateError(errors, "All promises were rejected");
    return aggregateError;
  } else {
    const _Error = Error;
    const error = new Error("All promises were rejected");
    error.name = "AggregateError";
    error.errors = errors;
    return error;
  }
}
let closure_2 = valuePromise(true);
let closure_3 = valuePromise(false);
let closure_4 = valuePromise(null);
let closure_5 = valuePromise(undefined);
let closure_7 = valuePromise("");
require("noop").resolve = (iter) => {
  if (iter instanceof require(172) /* noop */) {
    return promise;
  } else if (null === promise) {
    return closure_4;
  } else if (undefined === promise) {
    return closure_5;
  } else if (true === promise) {
    return closure_2;
  } else if (false === promise) {
    return closure_3;
  } else if (0 === promise) {
    return noop;
  } else if ("" === promise) {
    return closure_7;
  } else {
    if ("object" === typeof promise) {
      const then = promise.then;
      if ("function" === typeof then) {
        let tmp8 = require(172) /* noop */;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj.bind(iter));
        return tmp8;
      }
      obj = then;
    }
    return valuePromise(promise);
  }
};
function iterableToArray(arg0) {
  if ("function" === typeof Array.from) {
    const _Array2 = Array;
    let iterableToArray = Array.from;
    const _Array3 = Array;
    let callResult = Array.from(arg0);
  } else {
    iterableToArray = function iterableToArray(arg0) {
      return slice.call(arg0);
    };
    const _Array = Array;
    callResult = slice.call(arg0);
  }
  return callResult;
}
require("noop").all = (arg0) => {
  const _require = iterableToArray(arg0);
  let tmp = _require(172);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function res(arg0, _y) {
      const callback = arg0;
      if (_y) {
        if ("object" === typeof _y) {
          if (_y instanceof callback(outer2_1[0])) {
            if (_y.then === callback(outer2_1[0]).prototype.then) {
              let tmp18 = _y;
              let promise2 = _y;
              if (3 === _y._y) {
                do {
                  let _z = tmp18._z;
                  tmp18 = _z;
                  promise2 = _z;
                  _y = _z._y;
                } while (3 === _y);
              }
              if (1 === promise2._y) {
                const tmp23 = res(arg0, promise2._z);
              } else {
                if (2 === promise2._y) {
                  callback2(promise2._z);
                }
                promise2.then((arg0) => {
                  outer1_3(closure_0, arg0);
                }, callback2);
              }
              return tmp23;
            }
          }
          const then = _y.then;
          if ("function" === typeof then) {
            let tmp12 = callback(outer2_1[0]);
            const prototype = tmp12.prototype;
            tmp12 = new tmp12(then.bind(_y));
            tmp12.then((arg0) => {
              outer1_3(closure_0, arg0);
            }, callback2);
          }
        }
      }
      callback[arg0] = _y;
      diff = diff - 1;
      if (0 == diff) {
        callback(callback);
      }
    }
    if (0 === closure_0.length) {
      return arg0([]);
    } else {
      let length = closure_0.length;
      let num = 0;
      if (0 < closure_0.length) {
        do {
          let tmp2 = closure_0;
          let resResult = res(num, closure_0[num]);
          num = num + 1;
          length = closure_0.length;
        } while (num < length);
      }
    }
  });
  return tmp;
};
require("noop").allSettled = (arg0) => {
  const obj = require(172) /* noop */;
  return obj.all(iterableToArray(arg0).map(mapAllSettled));
};
require("noop").reject = (arg0) => {
  const _require = arg0;
  let tmp = _require(172);
  tmp = new tmp((arg0, arg1) => {
    arg1(closure_0);
  });
  return tmp;
};
require("noop").race = (arg0) => {
  const _require = arg0;
  let tmp = _require(172);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const item = outer1_8(closure_0).forEach((arg0) => {
      const obj = callback(outer2_1[0]);
      callback(outer2_1[0]).resolve(arg0).then(callback, closure_1);
    });
  });
  return tmp;
};
require("noop").prototype.catch = function(arg0) {
  return this.then(null, arg0);
};
require("noop").any = function promiseAny(arg0) {
  const _require = arg0;
  let tmp = _require(172);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function resolveOnce(arg0) {
      if (!c3) {
        c3 = true;
        callback(arg0);
      }
    }
    function rejectionCheck(arg0) {
      if (items.length === arr.length) {
        callback2(outer2_13(items));
      }
    }
    const arr = outer1_8(closure_0);
    let c3 = false;
    const items = [];
    if (0 === arr.length) {
      arg1(outer1_13(items));
    } else {
      const item = arr.forEach((arg0) => {
        const obj = callback(outer2_1[0]);
        callback(outer2_1[0]).resolve(arg0).then(resolveOnce, rejectionCheck);
      });
    }
  });
  return tmp;
};

export { default } from "noop";
