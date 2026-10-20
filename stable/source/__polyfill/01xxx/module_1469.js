// Module ID: 1469
// Function ID: 1470
// Dependencies: [1339, 1464, 1470, 1307, 1311, 1472, 1474]

// Module 1469
import _mod1307 from "module_1307" /* 1307 */;
import _mod1311 from "module_1311" /* 1311 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1339 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1464 */;
import availableTypedArrays from "availableTypedArrays" /* 1470 */;
import forEach from "forEach" /* 1472 */;
import callBind from "callBind" /* 1474 */;

const require = globalThis.__r;
let _require, closure_1, dependencyMap;

let closure_2 = callBoundIntrinsic("Object.prototype.toString");
let tmp = hasToStringTagShams();
let closure_3 = tmp;
if (typeof globalThis !== "undefined") {
  global = globalThis;
}
const tmp2 = availableTypedArrays();
let closure_5 = tmp2;
let closure_6 = callBoundIntrinsic("String.prototype.slice");
const tmp3 = callBoundIntrinsic("Array.prototype.indexOf", true) || (function indexOf(arg0, arg1) {
  let num = 0;
  if (0 < arg0.length) {
    while (arg0[num] !== arg1) {
      num = num + 1;
    }
    return num;
  }
  return -1;
});
let closure_7 = tmp3;
let closure_8 = Object.create(null);
if (tmp) {
  if (_mod1307) {
    if (_mod1311) {
      let tmp5 = forEach(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (_mod1311) {
            const tmp4 = _mod1311(tmp);
            const _Symbol = Symbol;
            const tmp5 = _mod1307(tmp4, Symbol.toStringTag);
            let tmp6 = tmp5;
            if (!tmp6) {
              tmp6 = tmp5;
              if (tmp4) {
                const _Symbol2 = Symbol;
                const tmp7 = _mod1311(tmp4);
                tmp6 = tmp2(1307)(tmp7, Symbol.toStringTag);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = callBind(tmp6.get);
          }
        }
      });
    }
    let tmp6 = module;
    module.exports = function whichTypedArray(obj) {
      let tmp = obj;
      if (tmp) {
        if (typeof obj === "object") {
          const tmp18 = closure_3;
          if (tmp18) {
            let tmp15 = null;
            const tmp13 = _require;
            if (require("module_1307")) {
              _require = obj;
              dependencyMap = false;
              tmp13(1472)(closure_8, (fn, arg1) => {
                const tmp = closure_1;
                if (!tmp) {
                  try {
                    if ("$" + fn(closure_0) === arg1) {
                      closure_1 = closure_2_6(arg1, 1);
                    }
                  } catch (err) {
                  }
                }
              });
              tmp15 = dependencyMap;
            }
            return tmp15;
          } else {
            const tmp4 = closure_6(closure_2(obj), 8, -1);
            let tmp7 = tmp4;
            if (closure_7(closure_5, tmp4) <= -1) {
              let tmp8 = "Object" === tmp4;
              if (tmp8) {
                _require = obj;
                dependencyMap = false;
                require("forEach")(closure_8, (fn, arg1) => {
                  const tmp = closure_1;
                  if (!tmp) {
                    try {
                      fn(obj);
                      closure_1 = closure_6(arg1, 1);
                    } catch (err) {
                    }
                  }
                });
                tmp8 = dependencyMap;
              }
              tmp7 = tmp8;
            }
            return tmp7;
          }
        }
      }
      return false;
    };
  }
}
let tmp4 = forEach(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = callBind(arr.slice || arr.set);
  }
});
