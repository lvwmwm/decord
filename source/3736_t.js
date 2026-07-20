// Module ID: 3736
// Function ID: 28545
// Name: t
// Dependencies: []

// Module 3736 (t)
const fn = function t(moment) {
  return moment.defineLocale("zh-cn", {
    months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
    weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
    weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
    longDateFormat: {},
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour(arg0, arg1) {
      let num = arg0;
      if (12 === arg0) {
        num = 0;
      }
      let tmp = num;
      if ("\u51CC\u6668" !== arg1) {
        tmp = num;
        if ("\u65E9\u4E0A" !== arg1) {
          tmp = num;
          if ("\u4E0A\u5348" !== arg1) {
            if ("\u4E0B\u5348" !== arg1) {
              if ("\u665A\u4E0A" !== arg1) {
                let sum = num;
                if (num < 11) {
                  sum = num + 12;
                }
              }
            }
            sum = num + 12;
          }
        }
      }
      return tmp;
    },
    meridiem(arg0, arg1, arg2) {
      const sum = 100 * arg0 + arg1;
      let str = "\u51CC\u6668";
      if (sum >= 600) {
        let str2 = "\u65E9\u4E0A";
        if (sum >= 900) {
          let str3 = "\u4E0A\u5348";
          if (sum >= 1130) {
            let str4 = "\u4E2D\u5348";
            if (sum >= 1230) {
              let str5 = "\u665A\u4E0A";
              if (sum < 1800) {
                str5 = "\u4E0B\u5348";
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        str = str2;
      }
      return str;
    },
    calendar: { alignItems: true, position: true, <string:1373947542>: true, <string:2681378794>: true, <string:1413374383>: true, <string:1720105976>: true },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal(arg0, arg1) {
      if ("d" !== arg1) {
        if ("D" !== arg1) {
          if ("DDD" !== arg1) {
            if ("M" === arg1) {
              return arg0 + "\u6708";
            } else {
              if ("w" !== arg1) {
                if ("W" !== arg1) {
                  return arg0;
                }
              }
              return arg0 + "\u5468";
            }
          }
        }
      }
      return arg0 + "\u65E5";
    },
    relativeTime: {},
    week: { "Bool(true)": false, "Bool(true)": false }
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
