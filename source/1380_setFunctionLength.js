// Module ID: 1380
// Function ID: 16529
// Name: setFunctionLength
// Dependencies: [1381, 517, 518, 519, 1382]

// Module 1380 (setFunctionLength)
let closure_2 = require("hasPropertyDescriptors")();
let closure_3 = require("getEvalledConstructor")("%Math.floor%");

export default function setFunctionLength(arg0, arg1) {
  if ("function" !== typeof arg0) {
    let tmp26 = require(518);
    const prototype2 = tmp26.prototype;
    tmp26 = new tmp26("`fn` is not a function");
    throw tmp26;
  } else {
    if ("number" === typeof arg1) {
      if (arg1 >= 0) {
        if (arg1 <= 4294967295) {
          if (callback(arg1) === arg1) {
            let flag = true;
            let flag2 = true;
            if ("length" in arg0) {
              flag = true;
              flag2 = true;
              if (require(519)) {
                const tmp6 = require(519)(arg0, "length");
                let tmp7 = tmp6;
                if (tmp6) {
                  tmp7 = !tmp6.configurable;
                }
                let flag3 = true;
                if (tmp7) {
                  flag3 = false;
                }
                let tmp8 = tmp6;
                if (tmp6) {
                  tmp8 = !tmp6.writable;
                }
                flag = flag3;
                flag2 = true;
                if (tmp8) {
                  flag2 = false;
                  flag = flag3;
                }
              }
            }
            if (!flag) {
              flag = flag2;
            }
            if (!flag) {
              flag = !tmp;
            }
            if (flag) {
              const tmp12 = require(1382) /* defineDataProperty */;
              if (closure_2) {
                tmp12(arg0, "length", arg1, true, true);
              } else {
                tmp12(arg0, "length", arg1);
              }
            }
            return arg0;
          }
        }
      }
    }
    let tmp19 = require(518);
    const prototype = tmp19.prototype;
    tmp19 = new tmp19("`length` must be a positive 32-bit integer");
    throw tmp19;
  }
};
