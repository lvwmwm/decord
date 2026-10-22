// Module ID: 15525
// Function ID: 15526
// Name: isForced
// Dependencies: [15512, 15490]

// Module 15525 (isForced)
import _mod15512 from "module_15512" /* 15512 */;

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
        if (_mod15512(arg1)) {
          tmp13 = tmp11(15490)(arg1);
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
