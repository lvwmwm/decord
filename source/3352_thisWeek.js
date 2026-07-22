// Module ID: 3352
// Function ID: 26193
// Name: thisWeek
// Dependencies: []
// Exports: default

// Module 3352 (thisWeek)
function thisWeek(arg0) {
  return "'\u0443 " + closure_3[arg0] + " \u043E' p";
}
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_3 = [];
let closure_4 = {
  lastWeek: function lastWeekFormat(arg0, defaultResult2, date) {
    const toDateResult = require(dependencyMap[1]).toDate(arg0);
    const uTCDay = toDateResult.getUTCDay();
    if (tmp3.default(toDateResult, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (5 !== uTCDay) {
            if (6 !== uTCDay) {
              text = `${"'\u0443 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 " + tmp3} о' p`;
            }
          }
        }
      }
      text = `${"'\u0443 \u043C\u0438\u043D\u0443\u043B\u0443 " + tmp3} о' p`;
    }
    return text;
  },
  nextWeek: function nextWeekFormat(arg0, defaultResult2, date) {
    const toDateResult = require(dependencyMap[1]).toDate(arg0);
    const uTCDay = toDateResult.getUTCDay();
    if (tmp3.default(toDateResult, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (5 !== uTCDay) {
            if (6 !== uTCDay) {
              text = `${"'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 " + tmp3} о' p`;
            }
          }
        }
      }
      text = `${"'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 " + tmp3} о' p`;
    }
    return text;
  }
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_4[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
