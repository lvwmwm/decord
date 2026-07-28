// Module ID: 13378
// Function ID: 102364
// Name: isForced
// Dependencies: [13365, 13343]

// Module 13378 (isForced)
const re2 = /#|\.prototype\./;
function isForced(prototype) {
  const tmp = obj[fn(undefined, prototype)];
  let tmp2 = tmp === P;
  if (!tmp2) {
    if (tmp === N) {
      tmp2 = tmp4;
    } else if (require(13365) /* all */(arg1)) {
      let tmp7 = require(13343)(arg1);
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
const N = "N";
isForced.POLYFILL = "P";
const P = "P";

export default isForced;
