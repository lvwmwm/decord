// Module ID: 3709
// Function ID: 28111
// Name: t
// Dependencies: []

// Module 3709 (t)
const fn = function t(moment) {
  let obj = {
    months: "\u044F\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split("_"),
    monthsShort: "\u044F\u043D\u0440_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0439_\u044E\u043D\u0438_\u044E\u043B\u0438_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split("_"),
    weekdays: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u044F\u0434\u0430_\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A_\u043F\u0435\u0442\u044A\u043A_\u0441\u044A\u0431\u043E\u0442\u0430".split("_"),
    weekdaysShort: "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u044F_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u044A\u0431".split("_"),
    weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
    longDateFormat: { "Bool(true)": 7471105, "Bool(true)": 100663296, "Bool(true)": 16777216, "Bool(true)": 82236737, "Bool(true)": 422400, "Bool(true)": 7995392 },
    calendar: obj,
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal(arg0) {
      const result = arg0 % 10;
      const result1 = arg0 % 100;
      if (0 === arg0) {
        let text = `${arg0}-ев`;
      } else if (0 === result1) {
        text = `${arg0}-ен`;
      } else {
        if (result1 > 10) {
          if (result1 < 20) {
            text = `${arg0}-ти`;
          }
        }
        if (1 === result) {
          text = `${arg0}-ви`;
        } else if (2 === result) {
          text = `${arg0}-ри`;
        } else {
          if (7 !== result) {
            if (8 !== result) {
              text = `${arg0}-ти`;
            }
          }
          text = `${arg0}-ми`;
        }
      }
      return text;
    },
    week: { emoji: "staff", me: "message" }
  };
  obj = {
    variant: true,
    r: true,
    now: true,
    Symbol: true,
    Symbol: true,
    enabled: true,
    lastWeek() {
      const dayResult = this.day();
      if (0 !== dayResult) {
        if (3 !== dayResult) {
          if (6 !== dayResult) {
            return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0438\u044F] dddd [\u0432] LT";
          }
        }
      }
      return "[\u0412 \u0438\u0437\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430] dddd [\u0432] LT";
    }
  };
  return moment.defineLocale("bg", obj);
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require(dependencyMap[0]));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["HHmmss.SSSS"], fn);
  }
}
fn(this.moment);
