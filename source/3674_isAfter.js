// Module ID: 3674
// Function ID: 3675
// Name: isAfter
// Dependencies: [3380, 3381]
// Exports: default

// Module 3674 (isAfter)
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

export default function isAfter(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  return time > tmp3.default(arg1).getTime();
};
export default exports.default;
