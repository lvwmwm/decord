// Module ID: 3727
// Function ID: 3728
// Name: isThursday
// Dependencies: [3363, 3364]
// Exports: default

// Module 3727 (isThursday)
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

export default function isThursday(arg0) {
  tmp5.default(1, arguments);
  return 4 === tmp3.default(arg0).getDay();
};
export default exports.default;
