// Module ID: 3310
// Function ID: 26077
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
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_1 = { "Null": null, "Null": null };
let closure_2 = { "Null": null, "Null": null };
let closure_3 = { "Null": "<string:4018601986>", "Null": "<string:4017094658>" };
let closure_4 = {};
let closure_5 = { lastWeek: dayAndTimeWithAdjective, nextWeek: dayAndTimeWithAdjective };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_5[arg0]) {
    tmpResult = tmp(arg0, arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
