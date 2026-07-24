// Module ID: 3276
// Function ID: 25995
// Name: result2
// Dependencies: [3211]
// Exports: default

// Module 3276 (result2)
import isSameUTCWeek from "isSameUTCWeek";

function thisWeek(arg0) {
  return "'" + dependencyMap[arg0] + " alle' p";
}
if (!isSameUTCWeek) {
  let obj = { default: isSameUTCWeek };
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let closure_0 = tmp3;
let closure_1 = ["domenica", "luned\u00EC", "marted\u00EC", "mercoled\u00EC", "gioved\u00EC", "venerd\u00EC", "sabato"];
obj = {
  lastWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let str = thisWeek(uTCDay);
      tmp3 = thisWeek;
    } else {
      str = "'domenica scorsa alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} scorso alle' p`;
      }
    }
    return str;
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let str = thisWeek(uTCDay);
      tmp3 = thisWeek;
    } else {
      str = "'domenica prossima alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} prossimo alle' p`;
      }
    }
    return str;
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
