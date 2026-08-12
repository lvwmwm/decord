// Module ID: 3786
// Function ID: 3787
// Name: startOfHour
// Dependencies: [3440, 3441]
// Exports: default

// Module 3786 (startOfHour)
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

export default function startOfHour(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  defaultResult1.setMinutes(0, 0, 0);
  return defaultResult1;
};
export default exports.default;
