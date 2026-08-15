// Module ID: 3625
// Function ID: 3626
// Name: isSaturday
// Dependencies: [3472, 3473]
// Exports: default

// Module 3625 (isSaturday)
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

export default function isSaturday(arg0) {
  tmp5.default(1, arguments);
  return 6 === tmp3.default(arg0).getDay();
};
export default exports.default;
