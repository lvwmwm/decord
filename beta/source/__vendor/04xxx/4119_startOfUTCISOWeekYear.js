// Module ID: 4119
// Function ID: 4120
// Name: startOfUTCISOWeekYear
// Dependencies: [4120, 4118, 3882]
// Exports: default

// Module 4119 (startOfUTCISOWeekYear)
import module_4120_mod from "module_4120" /* 4120 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4118 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let module_4120 = module_4120_mod;
if (!module_4120) {
  const obj = { default: module_4120 };
  let tmp3 = obj;
} else {
  tmp3 = module_4120;
}
module_4120 = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  const obj2 = { default: startOfUTCISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(module_4120.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
