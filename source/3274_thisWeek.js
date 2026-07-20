// Module ID: 3274
// Function ID: 25984
// Name: thisWeek
// Dependencies: []
// Exports: default

// Module 3274 (thisWeek)
function thisWeek(arg0) {
  return "'" + closure_1[arg0] + " alle' p";
}
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_1 = ["<string:3137339940>", true, true, true, true, true, true];
let closure_2 = {
  lastWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let str = thisWeek(uTCDay);
      const tmp3 = thisWeek;
    } else {
      str = "'domenica scorsa alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} scorso alle' p`;
      }
    }
    return str;
  },
  nextWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let str = thisWeek(uTCDay);
      const tmp3 = thisWeek;
    } else {
      str = "'domenica prossima alle' p";
      if (0 !== uTCDay) {
        str = `${"'" + closure_1[tmp]} prossimo alle' p`;
      }
    }
    return str;
  }
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_2[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
