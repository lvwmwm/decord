// Module ID: 997
// Function ID: 10700
// Name: valuePromise
// Dependencies: [995]

// Module 997 (valuePromise)
import noop from "noop";

function valuePromise(_55) {
  let tmp = require(995) /* noop */;
  tmp = new tmp(require(995) /* noop */._61);
  tmp._65 = 1;
  tmp._55 = _55;
  return tmp;
}
let closure_2 = valuePromise(true);
let closure_3 = valuePromise(false);
let closure_4 = valuePromise(null);
let closure_5 = valuePromise(undefined);
let closure_7 = valuePromise("");
require("noop").resolve = (iter) => {
  if (iter instanceof require(995) /* noop */) {
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
        let tmp8 = require(995) /* noop */;
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj.bind(iter));
        return tmp8;
      }
      obj = then;
    }
    return valuePromise(promise);
  }
};
require("noop").all = (arg0) => {
  const _require = slice.call(arg0);
  let tmp = _require(995);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    function res(arg0, _65) {
      const callback = arg0;
      if (_65) {
        if ("object" === typeof _65) {
          if (_65 instanceof callback(outer2_1[0])) {
            if (_65.then === callback(outer2_1[0]).prototype.then) {
              let tmp18 = _65;
              let promise2 = _65;
              if (3 === _65._65) {
                do {
                  let _55 = tmp18._55;
                  tmp18 = _55;
                  promise2 = _55;
                  _65 = _55._65;
                } while (3 === _65);
              }
              if (1 === promise2._65) {
                const tmp23 = res(arg0, promise2._55);
              } else {
                if (2 === promise2._65) {
                  callback2(promise2._55);
                }
                promise2.then((arg0) => {
                  outer1_3(closure_0, arg0);
                }, callback2);
              }
              return tmp23;
            }
          }
          const then = _65.then;
          if ("function" === typeof then) {
            let tmp12 = callback(outer2_1[0]);
            const prototype = tmp12.prototype;
            tmp12 = new tmp12(then.bind(_65));
            tmp12.then((arg0) => {
              outer1_3(closure_0, arg0);
            }, callback2);
          }
        }
      }
      callback[arg0] = _65;
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
require("noop").reject = (arg0) => {
  const _require = arg0;
  let tmp = _require(995);
  tmp = new tmp((arg0, arg1) => {
    arg1(closure_0);
  });
  return tmp;
};
require("noop").race = (arg0) => {
  const _require = arg0;
  let tmp = _require(995);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const item = closure_0.forEach((arg0) => {
      const obj = callback(outer2_1[0]);
      callback(outer2_1[0]).resolve(arg0).then(callback, closure_1);
    });
  });
  return tmp;
};
require("noop").prototype.catch = function(arg0) {
  return this.then(null, arg0);
};

export { default } from "noop";
