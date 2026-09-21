// Module ID: 1454
// Function ID: 1455
// Dependencies: [1319, 1449, 1455, 1287, 1291, 1457, 1459]

// Module 1454
import _mod1287 from "module_1287" /* 1287 */;
import _mod1291 from "module_1291" /* 1291 */;
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import _mod1449 from "module_1449" /* 1449 */;
import availableTypedArrays from "availableTypedArrays" /* 1455 */;
import _mod1457 from "module_1457" /* 1457 */;
import callBind from "callBind" /* 1459 */;

const require = globalThis.__r;

let closure_2 = callBoundIntrinsic("Object.prototype.toString");
let tmp = _mod1449();
let closure_3 = tmp;
if (typeof globalThis !== "undefined") {
  const global = globalThis;
}
const tmp2 = availableTypedArrays();
let closure_5 = tmp2;
let closure_6 = callBoundIntrinsic("String.prototype.slice");
let closure_7 = callBoundIntrinsic("Array.prototype.indexOf", true) || (function indexOf(arg0, arg1) {
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
  if (_mod1287) {
    if (_mod1291) {
      _mod1457(tmp2, (arg0) => {
        const tmp = new global[arg0]();
        if (Symbol.toStringTag in tmp) {
          if (_mod1291) {
            const tmp4 = tmp2(1291)(tmp);
            const _Symbol = Symbol;
            const tmp5 = tmp2(1287)(tmp4, Symbol.toStringTag);
            let tmp6 = tmp5;
            if (!tmp5) {
              tmp6 = tmp5;
              if (tmp4) {
                const _Symbol2 = Symbol;
                tmp6 = tmp2(1287)(tmp2(1291)(tmp4), Symbol.toStringTag);
                const tmp7 = tmp2(1291)(tmp4);
              }
            }
            const text = `$${arg0}`;
            closure_8[`$${arg0}`] = tmp2(1459)(tmp6.get);
          }
        }
      });
    }
    module.exports = function whichTypedArray(obj) {
      if (obj) {
        if (typeof obj === "object") {
          if (closure_3) {
            let tmp14 = null;
            if (require("module_1287")) {
              closure_129_0 = obj;
              closure_129_1 = false;
              require("module_1457")(closure_8, (fn, arg1) => {
                if (!closure_1) {
                  try {
                    if ("$" + fn(closure_0) === arg1) {
                      closure_1 = closure_6(arg1, 1);
                    }
                  } catch (err) {
                  }
                }
              });
              tmp14 = closure_129_1;
            }
            return tmp14;
          } else {
            const tmp3 = closure_6(closure_2(obj), 8, -1);
            let tmp6 = tmp3;
            if (closure_7(closure_5, tmp3) <= -1) {
              let tmp7 = "Object" === tmp3;
              if (tmp7) {
                _require = obj;
                dependencyMap = false;
                require("module_1457")(closure_8, (fn, arg1) => {
                  if (!closure_1) {
                    try {
                      fn(closure_0);
                      closure_1 = closure_6(arg1, 1);
                    } catch (err) {
                    }
                  }
                });
                tmp7 = dependencyMap;
              }
              tmp6 = tmp7;
            }
            return tmp6;
          }
        }
      }
      return false;
    };
  }
}
_mod1457(tmp2, (arg0) => {
  const arr = new global[arg0]();
  if (arr.slice || arr.set) {
    const text = `$${arg0}`;
    closure_8[`$${arg0}`] = callBind(tmp);
  }
});
