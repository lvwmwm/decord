// Module ID: 4039
// Function ID: 4040
// Name: differenceInCalendarDays
// Dependencies: [4040, 4041, 3878]
// Exports: default

// Module 4039 (differenceInCalendarDays)
import module_4040_mod from "module_4040" /* 4040 */;
import startOfDay_mod from "startOfDay" /* 4041 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let module_4040 = module_4040_mod;
if (!module_4040) {
  const obj = { default: module_4040 };
  let tmp3 = obj;
} else {
  tmp3 = module_4040;
}
module_4040 = tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj2 = { default: startOfDay };
  let tmp5 = obj2;
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_4040.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4040.default(defaultResult2))) / c3);
};
export default exports.default;
