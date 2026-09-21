// Module ID: 1460
// Function ID: 1461
// Dependencies: [1461, 1285, 1286, 1287, 1462]

// Module 1460
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod1287 from "module_1287" /* 1287 */;
import _mod1461 from "module_1461" /* 1461 */;
import defineDataProperty from "defineDataProperty" /* 1462 */;

let closure_2 = _mod1461();
let closure_3 = _mod1285("%Math.floor%");

export default function setFunctionLength(fn, num) {
  if (typeof fn !== "function") {
    const tmp25 = new _mod1286("`fn` is not a function");
    throw tmp25;
  } else {
    if (typeof num === "number") {
      if (num >= 0) {
        if (num <= 4294967295) {
          if (closure_3(num) === num) {
            let flag = true;
            let flag2 = true;
            if ("length" in fn) {
              flag = true;
              flag2 = true;
              if (_mod1287) {
                const tmp4 = tmp2(1287)(fn, "length");
                let tmp5 = tmp4;
                if (tmp4) {
                  tmp5 = !tmp4.configurable;
                }
                let flag3 = true;
                if (tmp5) {
                  flag3 = false;
                }
                let tmp6 = tmp4;
                if (tmp4) {
                  tmp6 = !tmp4.writable;
                }
                flag = true;
                flag2 = flag3;
                if (tmp6) {
                  flag = false;
                  flag2 = flag3;
                }
              }
              tmp2 = require;
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
    const tmp19 = new _mod1286("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
};
