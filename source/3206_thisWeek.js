// Module ID: 3206
// Function ID: 25804
// Name: thisWeek
// Dependencies: []
// Exports: default

// Module 3206 (thisWeek)
function thisWeek(arg0) {
  if (2 === arg0) {
    let text = `${"'\u0432\u044A\u0432 " + tmp} в' p`;
  } else {
    text = `${"'\u0432 " + tmp} в' p`;
  }
  return text;
}
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = ["<string:80413184>", "<string:80412160>", "<string:80411392>", "<string:59666432>", "<string:80413184>", "<string:80411392>", "<string:1965115136>"];
let closure_3 = {
  lastWeek: function lastWeekFormatToken(defaultResult1, defaultResult2, date) {
    const defaultResult = closure_0.default(defaultResult1);
    const uTCDay = defaultResult.getUTCDay();
    if (closure_1.default(defaultResult, defaultResult2, date)) {
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
  nextWeek: function nextWeekFormatToken(defaultResult1, defaultResult2, date) {
    const defaultResult = closure_0.default(defaultResult1);
    const uTCDay = defaultResult.getUTCDay();
    if (closure_1.default(defaultResult, defaultResult2, date)) {
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
  }
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if ("function" === typeof closure_3[arg0]) {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;
