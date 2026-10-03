// Module ID: 1462
// Function ID: 1463
// Name: setFunctionLength
// Dependencies: [1463, 1292, 1293, 1294, 1464]

// Module 1462 (setFunctionLength)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1463 */;
import defineDataProperty from "defineDataProperty" /* 1464 */;

let closure_2 = hasPropertyDescriptors();
let closure_3 = GetIntrinsic("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const self3 = this;
    const self4 = this;
    const tmp21 = new _mod1293("`fn` is not a function");
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
              if (_mod1294) {
                const tmp4 = tmp2(1294)(fn, "length");
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
    const tmp17 = new _mod1293("`length` must be a positive 32-bit integer");
    throw tmp17;
  }
};
