// Module ID: 3662
// Function ID: 27977
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
  let obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
obj = { "Bool(false)": -117439546, "Bool(false)": 1107297141, "Bool(false)": 247419, "Bool(false)": 226810, "Bool(false)": 49121602, "Bool(false)": 58063872, lastWeek: checkWeek, nextWeek: checkWeek };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
