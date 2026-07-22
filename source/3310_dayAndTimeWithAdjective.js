// Module ID: 3310
// Function ID: 26082
// Name: dayAndTimeWithAdjective
// Dependencies: []
// Exports: default

// Module 3310 (dayAndTimeWithAdjective)
function dayAndTimeWithAdjective(arg0, defaultResult1, defaultResult2, date) {
  if (tmp3.default(defaultResult1, defaultResult2, date)) {
    let tmp = closure_2;
  } else if ("lastWeek" === arg0) {
    tmp = closure_1;
  } else if ("nextWeek" !== arg0) {
    const _Error = Error;
    const concat = "Cannot determine adjectives for token ".concat;
    const error = new Error("Cannot determine adjectives for token ".concat(arg0));
    throw error;
  } else {
    tmp = closure_3;
  }
  return "'".concat(tmp[closure_4[defaultResult1.getUTCDay(defaultResult1)]], "' eeee 'o' p");
}
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_1 = { "Bool(true)": "flex", "Bool(true)": "column" };
let closure_2 = {};
let closure_3 = { "Bool(true)": 745668610, "Bool(true)": -939524095 };
let closure_4 = {};
obj = { "Bool(false)": 287440737, "Bool(false)": -480181983, "Bool(false)": 17208897, "Bool(false)": -1841229568, "Bool(false)": 16777801, "Bool(false)": 20845379, lastWeek: dayAndTimeWithAdjective, nextWeek: dayAndTimeWithAdjective };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg0, arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
