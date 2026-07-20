// Module ID: 997
// Function ID: 10694
// Name: valuePromise
// Dependencies: []

// Module 997 (valuePromise)
import module_0 from "module_0";

function valuePromise(_55) {
  let tmp = require(dependencyMap[0]);
  tmp = new tmp(require(dependencyMap[0])._61);
  tmp._65 = 1;
  tmp._55 = _55;
  return tmp;
}
let closure_2 = valuePromise(true);
let closure_3 = valuePromise(false);
let closure_4 = valuePromise(null);
let closure_5 = valuePromise(undefined);
let closure_7 = valuePromise("");
require(dependencyMap[0]).resolve = (iter) => {
  if (iter instanceof require(dependencyMap[0])) {
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
    return module_0;
  } else if ("" === promise) {
    return closure_7;
  } else {
    if ("object" === typeof promise) {
      const then = promise.then;
      if ("function" === typeof then) {
        let tmp8 = require(dependencyMap[0]);
        const prototype = tmp8.prototype;
        tmp8 = new tmp8(obj.bind(iter));
        return tmp8;
      }
      const obj = then;
    }
    return valuePromise(promise);
  }
};
require(dependencyMap[0]).all = (arg0) => {
  const callback = slice.call(arg0);
  let tmp = callback(dependencyMap[0]);
  tmp = new tmp((arg0, arg1) => {
    let closure_0 = arg0;
    function res(arg0, _65) {
      if (_65) {
        if ("object" === typeof _65) {
          if (_65 instanceof arg0(_65[0])) {
            if (_65.then === arg0(_65[0]).prototype.then) {
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
                  _65(promise2._55);
                }
                promise2.then((arg0) => {
                  callback(arg0, arg0);
                }, _65);
              }
              return tmp23;
            }
          }
          const then = _65.then;
          if ("function" === typeof then) {
            let tmp12 = arg0(_65[0]);
            const prototype = tmp12.prototype;
            tmp12 = new tmp12(then.bind(_65));
            tmp12.then((arg0) => {
              callback(arg0, arg0);
            }, _65);
          }
        }
      }
      arg0[arg0] = _65;
      const diff = diff - 1;
      if (0 == diff) {
        arg0(arg0);
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
require(dependencyMap[0]).reject = (arg0) => {
  const require = arg0;
  let tmp = require(dependencyMap[0]);
  tmp = new tmp((arg0, arg1) => {
    arg1(arg0);
  });
  return tmp;
};
require(dependencyMap[0]).race = (arg0) => {
  const require = arg0;
  let tmp = require(dependencyMap[0]);
  tmp = new tmp((arg0, arg1) => {
    const item = arg0.forEach((arg0) => {
      const obj = arg0(arg1[0]);
      arg0(arg1[0]).resolve(arg0).then(arg0, arg1);
    });
  });
  return tmp;
};
require(dependencyMap[0]).prototype.catch = function(arg0) {
  return this.then(null, arg0);
};

export default require(dependencyMap[0]);
