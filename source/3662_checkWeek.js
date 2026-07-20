// Module ID: 3662
// Function ID: 27972
// Name: checkWeek
// Dependencies: []
// Exports: default

// Module 3662 (checkWeek)
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
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_1 = { lastWeek: checkWeek, nextWeek: checkWeek };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_1[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
