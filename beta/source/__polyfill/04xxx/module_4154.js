// Module ID: 4154
// Function ID: 4155
// Dependencies: [4042, 4049, 3882]
// Exports: default

// Module 4154
import startOfISOWeekYear_mod from "startOfISOWeekYear" /* 4042 */;
import module_4049_mod from "module_4049" /* 4049 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let startOfISOWeekYear = startOfISOWeekYear_mod;
if (!startOfISOWeekYear) {
  const obj = { default: startOfISOWeekYear };
  let tmp3 = obj;
} else {
  tmp3 = startOfISOWeekYear;
}
startOfISOWeekYear = tmp3;
let module_4049 = module_4049_mod;
if (!module_4049) {
  const obj2 = { default: module_4049 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4049;
}
module_4049 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function getISOWeeksInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = startOfISOWeekYear.default(arg0);
  const defaultResult2 = startOfISOWeekYear.default(module_4049.default(defaultResult1, 60));
  return Math.round((startOfISOWeekYear.default(module_4049.default(defaultResult1, 60)).valueOf() - defaultResult1.valueOf()) / c3);
};
export default exports.default;
