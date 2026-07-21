// Module ID: 3735
// Function ID: 28540
// Name: n
// Dependencies: []

// Module 3735 (n)
const fn = function n(moment) {
  let split;
  let split2;
  ({ split, split: split2 } = "CN_T2_T3_T4_T5_T6_T7");
  return moment.defineLocale("vi", {
    months: "th\u00E1ng 1_th\u00E1ng 2_th\u00E1ng 3_th\u00E1ng 4_th\u00E1ng 5_th\u00E1ng 6_th\u00E1ng 7_th\u00E1ng 8_th\u00E1ng 9_th\u00E1ng 10_th\u00E1ng 11_th\u00E1ng 12".split("_"),
    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
    monthsParseExact: true,
    weekdays: "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\u00E1u_th\u1EE9 b\u1EA3y".split("_"),
    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysParseExact: true,
    meridiemParse: /sa|ch/i,
    isPM(arg0) {
      return /^ch$/i.test(arg0);
    },
    meridiem(arg0, arg1, arg2) {
      if (arg0 < 12) {
        let str2 = "SA";
        if (arg2) {
          str2 = "sa";
        }
        let str = str2;
      } else {
        str = "CH";
        if (arg2) {
          str = "ch";
        }
      }
      return str;
    },
    longDateFormat: {},
    calendar: { status: "limit", padding: "Array", opacity: "isArray", PX_8: "Array", Symbol: "toString", r: "Array" },
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal(arg0) {
      return arg0;
    },
    week: { <string:1431496722>: false, <string:1627556098>: false }
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
    globalThis.define(["HH:mm:ss"], fn);
  }
}
fn(this.moment);
