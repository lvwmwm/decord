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
let closure_1 = { 0: null, 0: null };
let closure_2 = { 0: 32, 0: "center" };
let closure_3 = {};
let closure_4 = { display: true, flexDirection: true, padding: true, marginVertical: true, marginHorizontal: true, hasSelectedAnswer: true, GuildSelectDefaultIcon: true };
obj = { areIntervalsOverlapping: "/assets/.cache/intl/aW50bA==", clamp: null, closestIndexTo: "b0aab43a708e01f81d83932d47cbb74d", closestTo: "bg.messages.b0aab43a708e01f81d83932d47cbb74d.compiled.messages", compareAsc: "jsona", compareDesc: "\u010Ce\u0161tina", lastWeek: dayAndTimeWithAdjective, nextWeek: dayAndTimeWithAdjective };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg0, arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
