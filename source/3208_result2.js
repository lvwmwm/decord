// Module ID: 3208
// Function ID: 25815
// Name: result2
// Dependencies: [3209, 3211]
// Exports: default

// Module 3208 (result2)
import _typeof from "_typeof";
import isSameUTCWeek from "isSameUTCWeek";

function thisWeek(arg0) {
  if (2 === arg0) {
    let text = `${"'\u0432\u044A\u0432 " + tmp} в' p`;
  } else {
    text = `${"'\u0432 " + tmp} в' p`;
  }
  return text;
}
let closure_2 = ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"];
let obj = {
  lastWeek: function lastWeekFormatToken(defaultResult1, defaultResult2, date) {
    const defaultResult = _typeof.default(defaultResult1);
    const uTCDay = defaultResult.getUTCDay();
    if (isSameUTCWeek.default(defaultResult, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            text = `${"'\u043C\u0438\u043D\u0430\u043B\u0438\u044F " + tmp3} в' p`;
          }
        }
      }
      text = `${"'\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 " + tmp3} в' p`;
    }
    return text;
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0434\u043D\u0435\u0441 \u0432' p",
  tomorrow: "'\u0443\u0442\u0440\u0435 \u0432' p",
  nextWeek: function nextWeekFormatToken(defaultResult1, defaultResult2, date) {
    const defaultResult = _typeof.default(defaultResult1);
    const uTCDay = defaultResult.getUTCDay();
    if (isSameUTCWeek.default(defaultResult, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            text = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F " + tmp3} в' p`;
          }
        }
      }
      text = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 " + tmp3} в' p`;
    }
    return text;
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
