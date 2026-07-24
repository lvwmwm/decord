// Module ID: 4394
// Function ID: 38841
// Name: isDateObject
// Dependencies: [551, 1369]

// Module 4394 (isDateObject)
let closure_0 = require("callBoundIntrinsic")("Date.prototype.getDay");
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
let closure_2 = require("hasToStringTagShams")();

export default function isDateObject(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  if (!tmp) {
    return tmp;
  } else {
    if (!closure_2) {
      "[object Date]" === callback2(arg0);
    }
    callback(arg0);
    let flag = true;
    while (true) {
      let tmp9 = __exception;
      flag = false;
      continue;
    }
  }
};
