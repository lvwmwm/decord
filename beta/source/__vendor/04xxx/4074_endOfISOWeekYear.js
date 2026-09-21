// Module ID: 4074
// Function ID: 4075
// Name: endOfISOWeekYear
// Dependencies: [4006, 4007, 3850]
// Exports: default

// Module 4074 (endOfISOWeekYear)
import module_4006_mod from "module_4006" /* 4006 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4007 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let module_4006 = module_4006_mod;
if (!module_4006) {
  const obj = { default: module_4006 };
  let tmp3 = obj;
} else {
  tmp3 = module_4006;
}
module_4006 = tmp3;
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

export default function endOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_4006.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;
