// Module ID: 3330
// Function ID: 26135
// Name: result2
// Dependencies: [3211]
// Exports: default

// Module 3330 (result2)
import isSameUTCWeek from "isSameUTCWeek";

function thisWeek(arg0) {
  if (2 === arg0) {
    let text = `${"'\u0432\u043E " + tmp} в' p`;
  } else {
    text = `${"'\u0432 " + tmp} в' p`;
  }
  return text;
}
if (!isSameUTCWeek) {
  let obj = { default: isSameUTCWeek };
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let closure_0 = tmp3;
let closure_1 = ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0443", "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"];
obj = {
  lastWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else if (0 === uTCDay) {
      text = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + tmp3} в' p`;
    } else {
      if (1 !== uTCDay) {
        if (2 !== uTCDay) {
          if (4 !== uTCDay) {
            text = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + tmp3} в' p`;
          }
        }
      }
      text = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + tmp3} в' p`;
    }
    return text;
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
  tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
  nextWeek(getUTCDay, defaultResult2, date) {
    const uTCDay = getUTCDay.getUTCDay();
    if (tmp3.default(getUTCDay, defaultResult2, date)) {
      let text = thisWeek(uTCDay);
    } else if (0 === uTCDay) {
      text = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + tmp3} в' p`;
    } else {
      if (1 !== uTCDay) {
        if (2 !== uTCDay) {
          if (4 !== uTCDay) {
            text = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + tmp3} в' p`;
          }
        }
      }
      text = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + tmp3} в' p`;
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
