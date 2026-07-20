// Module ID: 3328
// Function ID: 26125
// Name: thisWeek
// Dependencies: []
// Exports: default

// Module 3328 (thisWeek)
function thisWeek(arg0) {
  if (2 === arg0) {
    let text = `${"'\u0432\u043E " + tmp} в' p`;
  } else {
    text = `${"'\u0432 " + tmp} в' p`;
  }
  return text;
}
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}
let closure_1 = [true, true, true, true, true, true, true];
let closure_2 = {
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
