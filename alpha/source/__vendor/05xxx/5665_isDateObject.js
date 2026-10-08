// Module ID: 5665
// Function ID: 5666
// Name: isDateObject
// Dependencies: [1338, 1463]

// Module 5665 (isDateObject)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1463 */;

let closure_0 = callBoundIntrinsic("Date.prototype.getDay");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = hasToStringTagShams();

export default function isDateObject(obj) {
  function tryDateGetDayCall(arg0) {
    try {
      closure_1_0(arg0);
      return true;
    } catch (err) {
      return false;
    }
  }
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    let tmp4;
    const tmp2 = closure_2;
    if (tmp2) {
      tmp4 = tryDateGetDayCall(obj);
    } else {
      tmp4 = "[object Date]" === closure_1(obj);
    }
    tmp = tmp4;
  }
  return tmp;
};
