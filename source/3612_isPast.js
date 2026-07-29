// Module ID: 3612
// Function ID: 3613
// Name: isPast
// Dependencies: [3268, 3269]
// Exports: default

// Module 3612 (isPast)
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

export default function isPast(arg0) {
  tmp5.default(1, arguments);
  const time = tmp3.default(arg0).getTime();
  return time < Date.now();
};
export default exports.default;
