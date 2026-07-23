// Module ID: 3312
// Function ID: 26087
// Name: result2
// Dependencies: [3211]
// Exports: default

// Module 3312 (result2)
import isSameUTCWeek from "isSameUTCWeek";

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
  return "'".concat(tmp[table[defaultResult1.getUTCDay(defaultResult1)]], "' eeee 'o' p");
}
if (!isSameUTCWeek) {
  let obj = { default: isSameUTCWeek };
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let closure_0 = tmp3;
let closure_1 = { masculine: "ostatni", feminine: "ostatnia" };
let closure_2 = { masculine: "ten", feminine: "ta" };
let closure_3 = { masculine: "nast\u0119pny", feminine: "nast\u0119pna" };
let closure_4 = { 0: "feminine", 1: "masculine", 2: "masculine", 3: "feminine", 4: "masculine", 5: "masculine", 6: "feminine" };
obj = { lastWeek: dayAndTimeWithAdjective, yesterday: "'wczoraj o' p", today: "'dzisiaj o' p", tomorrow: "'jutro o' p", nextWeek: dayAndTimeWithAdjective, other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg0, arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
