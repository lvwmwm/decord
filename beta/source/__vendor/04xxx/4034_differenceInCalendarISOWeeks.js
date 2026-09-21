// Module ID: 4034
// Function ID: 4035
// Name: differenceInCalendarISOWeeks
// Dependencies: [4012, 4007, 3850]
// Exports: default

// Module 4034 (differenceInCalendarISOWeeks)
import module_4012_mod from "module_4012" /* 4012 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4007 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4012 = module_4012_mod;
if (!module_4012) {
  const obj = { default: module_4012 };
  let tmp3 = obj;
} else {
  tmp3 = module_4012;
}
module_4012 = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeek.default(arg0);
  const defaultResult2 = startOfISOWeek.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_4012.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4012.default(defaultResult2))) / c3);
};
export default exports.default;
