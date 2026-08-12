// Module ID: 3708
// Function ID: 3709
// Name: getDecade
// Dependencies: [3440, 3441]
// Exports: default

// Module 3708 (getDecade)
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
