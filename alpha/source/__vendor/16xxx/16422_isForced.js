// Module ID: 16422
// Function ID: 16423
// Name: isForced
// Dependencies: [16409, 16387]

// Module 16422 (isForced)
import _mod16409 from "module_16409" /* 16409 */;

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
        if (_mod16409(arg1)) {
          tmp13 = tmp11(16387)(arg1);
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
