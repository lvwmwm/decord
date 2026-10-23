// Module ID: 15559
// Function ID: 15560
// Name: isForced
// Dependencies: [15546, 15524]

// Module 15559 (isForced)
import _mod15546 from "module_15546" /* 15546 */;

const re2 = /#|\.prototype\./;
function isForced(arg0, arg1) {
  if (typeof fn === "function") {
    const _String = String;
    const str = String(arg0);
    const str3 = str.replace(re2, ".");
    const tmp5 = tmp[str3.toLowerCase(str3)];
    let tmp7 = tmp5 === closure_6;
    if (!tmp7) {
      let tmp9 = tmp5 !== closure_5;
      if (tmp9) {
        let tmp13;
        const tmp11 = require;
        if (_mod15546(arg1)) {
          tmp13 = tmp11(15524)(arg1);
        } else {
          tmp13 = arg1;
        }
        tmp9 = tmp13;
      }
      tmp7 = tmp9;
    }
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const normalize = (arg0) => {
  const str = String(arg0);
  const str2 = str.replace(re2, ".");
  return str2.toLowerCase();
};
isForced.normalize = normalize;
const data = {};
isForced.data = data;
isForced.NATIVE = "N";
let closure_5 = "N";
isForced.POLYFILL = "P";
let closure_6 = "P";

export default isForced;
