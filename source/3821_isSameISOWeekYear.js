// Module ID: 3821
// Function ID: 3822
// Name: isSameISOWeekYear
// Dependencies: [3633, 3473]
// Exports: default

// Module 3821 (isSameISOWeekYear)
import startOfISOWeekYear from "startOfISOWeekYear";
import requiredArgs from "requiredArgs";

if (!startOfISOWeekYear) {
  let obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
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

export default function isSameISOWeekYear(arg0, arg1) {
  tmp5.default(2, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const time = defaultResult1.getTime();
  return time === tmp3.default(arg1).getTime();
};
export default exports.default;
