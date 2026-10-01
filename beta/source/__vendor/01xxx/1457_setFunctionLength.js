// Module ID: 1457
// Function ID: 1458
// Name: setFunctionLength
// Dependencies: [1458, 1281, 1282, 1283, 1459]

// Module 1457 (setFunctionLength)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod1283 from "module_1283" /* 1283 */;
import hasPropertyDescriptors from "hasPropertyDescriptors" /* 1458 */;
import defineDataProperty from "defineDataProperty" /* 1459 */;

let closure_2 = hasPropertyDescriptors();
let closure_3 = GetIntrinsic("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const self3 = this;
    const self4 = this;
    const tmp21 = new _mod1282("`fn` is not a function");
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
              if (_mod1283) {
                const tmp4 = tmp2(1283)(fn, "length");
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
    const tmp17 = new _mod1282("`length` must be a positive 32-bit integer");
    throw tmp17;
  }
};
