// Module ID: 3707
// Function ID: 3708
// Name: lastDayOfISOWeek
// Dependencies: [3708, 3335]
// Exports: default

// Module 3707 (lastDayOfISOWeek)
import lastDayOfWeek from "lastDayOfWeek";
import requiredArgs from "requiredArgs";

if (!lastDayOfWeek) {
  let obj = { default: null };
  obj[0] = lastDayOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = lastDayOfWeek;
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

export default function lastDayOfISOWeek(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
