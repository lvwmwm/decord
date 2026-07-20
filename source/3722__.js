// Module ID: 3722
// Function ID: 28473
// Name: _
// Dependencies: []

// Module 3722 (_)
const fn = function _(moment) {
  let split;
  let split2;
  let obj = {
    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u65E5\u66DC\u65E5_\u6708\u66DC\u65E5_\u706B\u66DC\u65E5_\u6C34\u66DC\u65E5_\u6728\u66DC\u65E5_\u91D1\u66DC\u65E5_\u571F\u66DC\u65E5".split("_"),
    weekdaysShort: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    weekdaysMin: "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F".split("_"),
    longDateFormat: {},
    meridiemParse: /午前|午後/i,
    isPM(arg0) {
      return "\u5348\u5F8C" === arg0;
    },
    meridiem(arg0, arg1, arg2) {
      let str = "\u5348\u5F8C";
      if (arg0 < 12) {
        str = "\u5348\u524D";
      }
      return str;
    },
    calendar: obj,
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal(arg0, arg1) {
      if ("d" !== arg1) {
        if ("D" !== arg1) {
          if ("DDD" !== arg1) {
            return arg0;
          }
        }
      }
      return arg0 + "\u65E5";
    },
    relativeTime: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null }
  };
  ({ split, split: split2 } = "\u65E5_\u6708_\u706B_\u6C34_\u6728_\u91D1_\u571F");
  obj = {
    nextWeek(week) {
      let str = "dddd LT";
      if (weekResult < this.week()) {
        str = "[\u6765\u9031]dddd LT";
      }
      return str;
    },
    lastWeek(week) {
      let str = "dddd LT";
      if (weekResult < week.week()) {
        str = "[\u5148\u9031]dddd LT";
      }
      return str;
    }
  };
  return moment.defineLocale("ja", obj);
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
