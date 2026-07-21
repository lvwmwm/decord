// Module ID: 13146
// Function ID: 99521
// Name: isForced
// Dependencies: [0, 4294967295]

// Module 13146 (isForced)
let closure_2 = /#|\.prototype\./;
function isForced(arg0, arg1) {
  let tmp2 = tmp === closure_6;
  if (!tmp2) {
    if (tmp === closure_5) {
      tmp2 = tmp4;
    } else if (require(dependencyMap[0])(arg1)) {
      let tmp7 = require(dependencyMap[1])(arg1);
    } else {
      tmp7 = arg1;
    }
  }
  return tmp2;
}
const fn = (arg0) => {
  const str = String(arg0);
  return String(arg0).replace(closure_2, ".").toLowerCase();
};
isForced.normalize = fn;
const obj = {};
isForced.data = obj;
isForced.NATIVE = "N";
let closure_5 = "N";
isForced.POLYFILL = "P";
let closure_6 = "P";

export default isForced;
