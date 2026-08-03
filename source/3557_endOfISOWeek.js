// Module ID: 3557
// Function ID: 3558
// Name: endOfISOWeek
// Dependencies: [3558, 3335]
// Exports: default

// Module 3557 (endOfISOWeek)
import endOfWeek from "endOfWeek";
import requiredArgs from "requiredArgs";

if (!endOfWeek) {
  let obj = { default: null };
  obj[0] = endOfWeek;
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
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

export default function endOfISOWeek(arg0) {
  tmp5.default(1, arguments);
  return tmp3.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
