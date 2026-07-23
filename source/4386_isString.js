// Module ID: 4386
// Function ID: 38823
// Name: isString
// Dependencies: [551, 1369]

// Module 4386 (isString)
let closure_0 = require("callBoundIntrinsic")("String.prototype.valueOf");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

export default function isString(arg0) {
  let tmp2 = "string" === tmp;
  if (!tmp2) {
    let tmp3 = !arg0;
    if (!tmp3) {
      tmp3 = "object" !== tmp;
    }
    if (tmp3) {
      tmp2 = !tmp3;
    } else {
      if (!closure_2) {
        "[object String]" === callback2(arg0);
      }
      callback(arg0);
      let flag = true;
      while (true) {
        let tmp10 = __exception;
        flag = false;
        continue;
      }
    }
  }
  return tmp2;
};
