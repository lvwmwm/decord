// Module ID: 3604
// Function ID: 3605
// Name: startOfDay
// Dependencies: [3440, 3441]
// Exports: default

// Module 3604 (startOfDay)
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

export default function startOfDay(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;
