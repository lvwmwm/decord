// Module ID: 1374
// Function ID: 16503
// Dependencies: []

// Module 1374
let closure_2 = require(dependencyMap[0])("Object.prototype.toString");
const tmp = require(dependencyMap[1])();
if ("undefined" !== typeof globalThis) {
  const global = globalThis;
}
const tmp2 = require(dependencyMap[2])();
let closure_6 = require(dependencyMap[0])("String.prototype.slice");
const tmp3 = require(dependencyMap[0])("Array.prototype.indexOf", true) || function indexOf(arg0, arg1) {
  let num = 0;
  if (0 < arg0.length) {
    while (arg0[num] !== arg1) {
      num = num + 1;
    }
    return num;
  }
  return -1;
};
let closure_8 = Object.create(null);
if (tmp) {
  if (require(dependencyMap[3])) {
    if (require(dependencyMap[4])) {
      require(dependencyMap[5])(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (require(dependencyMap[4])) {
            const tmp6 = require(dependencyMap[4])(tmp);
            const _Symbol = Symbol;
            const tmp7 = require(dependencyMap[3])(tmp6, Symbol.toStringTag);
            let tmp8 = tmp7;
            if (!tmp7) {
              tmp8 = tmp7;
              if (tmp6) {
                const _Symbol2 = Symbol;
                tmp8 = require(dependencyMap[3])(require(dependencyMap[4])(tmp6), Symbol.toStringTag);
                const tmp11 = require(dependencyMap[4])(tmp6);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = require(dependencyMap[6])(tmp8.get);
          }
        }
      });
    }
    module.exports = function whichTypedArray(arg0) {
      if (arg0) {
        if ("object" === typeof arg0) {
          if (tmp) {
            let tmp10 = null;
            if (require(dependencyMap[3])) {
              tmp10 = function tryAllTypedArrays(arg0) {
                let closure_1 = false;
                arg0(closure_1[5])(closure_8, (arg0, arg1) => {
                  if (!closure_1) {
                    if ("$" + arg0(arg0) === arg1) {
                      closure_1 = callback(arg1, 1);
                    }
                  }
                });
                return closure_1;
              }(arg0);
            }
            return tmp10;
          } else {
            const tmp3 = callback2(callback(arg0), 8, -1);
            let tmp6 = tmp3;
            if (tmp3(callback, tmp3) <= -1) {
              tmp6 = "Object" === tmp3 && function tryAllSlices(arg0) {
                let closure_1 = false;
                arg0(closure_1[5])(closure_8, (arg0, arg1) => {
                  if (!closure_1) {
                    arg0(arg0);
                    closure_1 = callback(arg1, 1);
                  }
                });
                return closure_1;
              }(arg0);
              const tmp7 = "Object" === tmp3 && function tryAllSlices(arg0) {
                let closure_1 = false;
                arg0(closure_1[5])(closure_8, (arg0, arg1) => {
                  if (!closure_1) {
                    arg0(arg0);
                    closure_1 = callback(arg1, 1);
                  }
                });
                return closure_1;
              }(arg0);
            }
            return tmp6;
          }
        }
      }
      return false;
    };
  }
}
require(dependencyMap[5])(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = require(dependencyMap[6])(tmp);
  }
});
