// Module ID: 1374
// Function ID: 16505
// Dependencies: [551, 1369, 1375, 519, 523, 1377, 1379]

// Module 1374
let closure_2 = require("callBoundIntrinsic")("Object.prototype.toString");
let tmp = require("hasToStringTagShams")();
let closure_3 = tmp;
if ("undefined" !== typeof globalThis) {
  const global = globalThis;
}
const tmp2 = require("availableTypedArrays")();
let closure_5 = tmp2;
let closure_6 = require("callBoundIntrinsic")("String.prototype.slice");
let closure_7 = require("callBoundIntrinsic")("Array.prototype.indexOf", true) || (function indexOf(arg0, arg1) {
  let num = 0;
  if (0 < arg0.length) {
    while (arg0[num] !== arg1) {
      num = num + 1;
    }
    return num;
  }
  return -1;
});
let closure_8 = Object.create(null);
if (tmp) {
  if (require("module_519")) {
    if (require("getProto")) {
      require("forEach")(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (require(523) /* getProto */) {
            const tmp6 = require(523) /* getProto */(tmp);
            const _Symbol = Symbol;
            const tmp7 = require(519)(tmp6, Symbol.toStringTag);
            let tmp8 = tmp7;
            if (!tmp7) {
              tmp8 = tmp7;
              if (tmp6) {
                const _Symbol2 = Symbol;
                tmp8 = require(519)(require(523) /* getProto */(tmp6), Symbol.toStringTag);
                const tmp11 = require(523) /* getProto */(tmp6);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = require(1379) /* callBind */(tmp8.get);
          }
        }
      });
    }
    module.exports = function whichTypedArray(arg0) {
      if (arg0) {
        if ("object" === typeof arg0) {
          if (closure_3) {
            let tmp10 = null;
            if (require(519)) {
              tmp10 = (function tryAllTypedArrays(arg0) {
                let closure_0 = arg0;
                let c1 = false;
                outer1_0(outer1_1[5])(outer1_8, (arg0, arg1) => {
                  if (!closure_1) {
                    if ("$" + arg0(closure_0) === arg1) {
                      closure_1 = outer2_6(arg1, 1);
                    }
                  }
                });
                return c1;
              })(arg0);
            }
            return tmp10;
          } else {
            const tmp3 = callback2(callback(arg0), 8, -1);
            let tmp6 = tmp3;
            if (tmp3(closure_5, tmp3) <= -1) {
              tmp6 = "Object" === tmp3 && (function tryAllSlices(arg0) {
                let closure_0 = arg0;
                let c1 = false;
                outer1_0(outer1_1[5])(outer1_8, (arg0, arg1) => {
                  if (!closure_1) {
                    arg0(closure_0);
                    closure_1 = outer2_6(arg1, 1);
                  }
                });
                return c1;
              })(arg0);
              const tmp7 = "Object" === tmp3 && (function tryAllSlices(arg0) {
                let closure_0 = arg0;
                let c1 = false;
                outer1_0(outer1_1[5])(outer1_8, (arg0, arg1) => {
                  if (!closure_1) {
                    arg0(closure_0);
                    closure_1 = outer2_6(arg1, 1);
                  }
                });
                return c1;
              })(arg0);
            }
            return tmp6;
          }
        }
      }
      return false;
    };
  }
}
require("forEach")(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = require(1379) /* callBind */(tmp);
  }
});
