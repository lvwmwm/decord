// Module ID: 4827
// Function ID: 4828
// Name: isDateObject
// Dependencies: [1316, 1444]

// Module 4827 (isDateObject)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1444 */;

let closure_0 = callBoundIntrinsic("Date.prototype.getDay");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = hasToStringTagShams();

export default function isDateObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    return tmp;
  } else if (closure_2) {
    let tmp4 = (function tryDateGetDayCall(arg0) {
      try {
        callback(arg0);
        return true;
      } catch (err) {
        return false;
      }
    })(obj);
  } else {
    tmp4 = "[object Date]" === callback(obj);
  }
};
