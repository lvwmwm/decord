// Module ID: 4336
// Function ID: 4337
// Dependencies: [3883]
// Exports: default

// Module 4336
import module_3883_mod from "module_3883" /* 3883 */;

let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj = { default: module_3883 };
  let tmp3 = obj;
} else {
  tmp3 = module_3883;
}
function checkWeek(getTime, getTime2, arg2) {
  let str = "eeee p";
  if (!module_3883.default(getTime, getTime2, arg2)) {
    const time = getTime.getTime();
    let str2 = "'\u4E0A\u4E2A'eeee p";
    if (time > getTime2.getTime()) {
      str2 = "'\u4E0B\u4E2A'eeee p";
    }
    str = str2;
  }
  return str;
}
module_3883 = tmp3;
let closure_1 = { lastWeek: checkWeek, yesterday: "'\u6628\u5929' p", today: "'\u4ECA\u5929' p", tomorrow: "'\u660E\u5929' p", nextWeek: checkWeek, other: "PP p" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_1[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
