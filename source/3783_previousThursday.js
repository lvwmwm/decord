// Module ID: 3783
// Function ID: 3784
// Name: previousThursday
// Dependencies: [3381, 3778]
// Exports: default

// Module 3783 (previousThursday)
import requiredArgs from "requiredArgs";
import previousDay from "previousDay";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let c0 = tmp3;
if (!previousDay) {
  obj = { default: null };
  obj[0] = previousDay;
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
let closure_1 = tmp5;

export default function previousThursday(arg0) {
  tmp3.default(1, arguments);
  return tmp5.default(arg0, 4);
};
export default exports.default;
