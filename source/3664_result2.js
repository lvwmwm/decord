// Module ID: 3664
// Function ID: 27983
// Name: result2
// Dependencies: [3211]
// Exports: default

// Module 3664 (result2)
import isSameUTCWeek from "isSameUTCWeek";

function checkWeek(getTime, getTime2, date) {
  let str = "eeee p";
  if (!tmp3.default(getTime, getTime2, date)) {
    const time = getTime.getTime();
    let str2 = "'\u4E0A\u4E2A'eeee p";
    if (time > getTime2.getTime()) {
      str2 = "'\u4E0B\u4E2A'eeee p";
    }
    str = str2;
  }
  return str;
}
if (!isSameUTCWeek) {
  let obj = { default: isSameUTCWeek };
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let closure_0 = tmp3;
obj = { lastWeek: checkWeek, yesterday: "'\u6628\u5929' p", today: "'\u4ECA\u5929' p", tomorrow: "'\u660E\u5929' p", nextWeek: checkWeek, other: "PP p" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
