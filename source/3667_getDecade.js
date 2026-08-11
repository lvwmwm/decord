// Module ID: 3667
// Function ID: 3668
// Name: getDecade
// Dependencies: [3399, 3400]
// Exports: default

// Module 3667 (getDecade)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;

export default function getDecade(arg0) {
  tmp5.default(1, arguments);
  return 10 * Math.floor(tmp3.default(arg0).getFullYear() / 10);
};
export default exports.default;
