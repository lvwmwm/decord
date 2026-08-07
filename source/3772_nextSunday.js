// Module ID: 3772
// Function ID: 3773
// Name: nextSunday
// Dependencies: [3768, 3381]
// Exports: default

// Module 3772 (nextSunday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";

if (!nextDay) {
  let obj = { default: null };
  obj[0] = nextDay;
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
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

export default function nextSunday(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, 0);
};
export default exports.default;
