// Module ID: 4038
// Function ID: 4039
// Name: startOfISOWeekYear
// Dependencies: [4034, 4035, 3878]
// Exports: default

// Module 4038 (startOfISOWeekYear)
import module_4034_mod from "module_4034" /* 4034 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4035 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4034 = module_4034_mod;
if (!module_4034) {
  const obj = { default: module_4034 };
  let tmp3 = obj;
} else {
  tmp3 = module_4034;
}
module_4034 = tmp3;
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

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_4034.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;
