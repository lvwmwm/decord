// Module ID: 3755
// Function ID: 3756
// Name: isThisHour
// Dependencies: [3744, 3400]
// Exports: default

// Module 3755 (isThisHour)
import isSameHour from "isSameHour";
import requiredArgs from "requiredArgs";

if (!isSameHour) {
  let obj = { default: null };
  obj[0] = isSameHour;
  let tmp3 = obj;
} else {
  tmp3 = isSameHour;
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

export default function isThisHour(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(Date.now(), arg0);
};
export default exports.default;
