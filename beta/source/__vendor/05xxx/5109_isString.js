// Module ID: 5109
// Function ID: 5110
// Name: isString
// Dependencies: [1315, 1446]

// Module 5109 (isString)
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1446 */;

let closure_0 = callBoundIntrinsic("String.prototype.valueOf");
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
let closure_2 = hasToStringTagShams();

export default function isString(str) {
  function tryStringObject(arg0) {
    try {
      closure_1_0(arg0);
      return true;
    } catch (err) {
      return false;
    }
  }
  let tmp = typeof str === "string";
  if (!tmp) {
    let tmp2 = !str;
    if (str) {
      tmp2 = typeof str !== "object";
    }
    let tmp3 = !tmp2;
    if (tmp3) {
      let tmp6;
      const tmp4 = closure_2;
      if (tmp4) {
        tmp6 = tryStringObject(str);
      } else {
        tmp6 = "[object String]" === closure_1(str);
      }
      tmp3 = tmp6;
    }
    tmp = tmp3;
  }
  return tmp;
};
