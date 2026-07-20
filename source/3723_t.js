// Module ID: 3723
// Function ID: 28480
// Name: t
// Dependencies: []

// Module 3723 (t)
const fn = function t(moment) {
  let split;
  let split2;
  ({ split, split: split2 } = "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0");
  return moment.defineLocale("ko", {
    months: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    monthsShort: "1\uC6D4_2\uC6D4_3\uC6D4_4\uC6D4_5\uC6D4_6\uC6D4_7\uC6D4_8\uC6D4_9\uC6D4_10\uC6D4_11\uC6D4_12\uC6D4".split("_"),
    weekdays: "\uC77C\uC694\uC77C_\uC6D4\uC694\uC77C_\uD654\uC694\uC77C_\uC218\uC694\uC77C_\uBAA9\uC694\uC77C_\uAE08\uC694\uC77C_\uD1A0\uC694\uC77C".split("_"),
    weekdaysShort: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    weekdaysMin: "\uC77C_\uC6D4_\uD654_\uC218_\uBAA9_\uAE08_\uD1A0".split("_"),
    longDateFormat: {},
    calendar: {},
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal(arg0, arg1) {
      if ("d" !== arg1) {
        if ("D" !== arg1) {
          if ("DDD" !== arg1) {
            if ("M" === arg1) {
              return arg0 + "\uC6D4";
            } else {
              if ("w" !== arg1) {
                if ("W" !== arg1) {
                  return arg0;
                }
              }
              return arg0 + "\uC8FC";
            }
          }
        }
      }
      return arg0 + "\uC77C";
    },
    meridiemParse: /오전|오후/,
    isPM(arg0) {
      return "\uC624\uD6C4" === arg0;
    },
    meridiem(arg0, arg1, arg2) {
      let str = "\uC624\uD6C4";
      if (arg0 < 12) {
        str = "\uC624\uC804";
      }
      return str;
    }
  });
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
    globalThis.define([1782644737], fn);
  }
}
fn(this.moment);
