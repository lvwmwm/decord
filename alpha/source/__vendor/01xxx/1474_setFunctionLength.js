// Module ID: 1474
// Function ID: 1475
// Name: setFunctionLength
// Dependencies: [1475, 1295, 1296, 1297, 1476]

// Module 1474 (setFunctionLength)
import GetIntrinsic from "GetIntrinsic" /* 1295 */;
import _mod1296 from "module_1296" /* 1296 */;
import _mod1297 from "module_1297" /* 1297 */;
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1475 */;
import defineDataProperty from "defineDataProperty" /* 1476 */;

let closure_2 = hasPropertyDescriptors();
let closure_3 = GetIntrinsic("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const self3 = this;
    const self4 = this;
    const tmp21 = new _mod1296("`fn` is not a function");
    throw tmp21;
  } else {
    if (typeof num === "number") {
      if (num >= 0) {
        if (num <= 4294967295) {
          if (closure_3(num) === num) {
            let flag = true;
            let flag2 = true;
            const tmp = arguments.length > 2 && arguments[2];
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              const tmp2 = require;
              if (_mod1297) {
                const tmp4 = tmp2(1297)(fn, "length");
                let flag3 = true;
                const tmp5 = tmp4 && !tmp4.configurable;
                if (tmp5) {
                  flag3 = false;
                }
                flag = true;
                flag2 = flag3;
                const tmp6 = tmp4 && !tmp4.writable;
                if (tmp6) {
                  flag = false;
                  flag2 = flag3;
                }
              }
            }
            if (!flag2) {
              flag2 = flag;
            }
            if (!flag2) {
              flag2 = !tmp;
            }
            if (flag2) {
              const tmp10 = defineDataProperty;
              if (closure_2) {
                tmp10(fn, "length", num, true, true);
              } else {
                tmp10(fn, "length", num);
              }
            }
            return fn;
          }
        }
      }
    }
    const self = this;
    const self2 = this;
    const tmp17 = new _mod1296("`length` must be a positive 32-bit integer");
    throw tmp17;
  }
};
