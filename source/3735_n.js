// Module ID: 3735
// Function ID: 28538
// Name: n
// Dependencies: [3712]

// Module 3735 (n)
const fn = function n(moment) {
  let closure_0 = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\u00FCnc\u00FC", 4: "'\u00FCnc\u00FC", 100: "'\u00FCnc\u00FC", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };
  return moment.defineLocale("tr", {
    months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\u00FCl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
    monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
    weekdays: "Pazar_Pazartesi_Sal\u0131_\u00C7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
    weekdaysShort: "Paz_Pts_Sal_\u00C7ar_Per_Cum_Cts".split("_"),
    weekdaysMin: "Pz_Pt_Sa_\u00C7a_Pe_Cu_Ct".split("_"),
    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
    calendar: { sameDay: "[bug\u00FCn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\u00FCn] LT", lastWeek: "[ge\u00E7en] dddd [saat] LT", sameElse: "L" },
    relativeTime: { future: "%s sonra", past: "%s \u00F6nce", s: "birka\u00E7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\u00FCn", dd: "%d g\u00FCn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
    ordinal(arg0, arg1) {
      if ("d" !== arg1) {
        if ("D" !== arg1) {
          if ("Do" !== arg1) {
            if ("DD" !== arg1) {
              if (0 === arg0) {
                return arg0 + "'\u0131nc\u0131";
              } else {
                const result = arg0 % 10;
                let tmp3 = dependencyMap[result];
                if (!tmp3) {
                  tmp3 = dependencyMap[arg0 % 100 - result];
                }
                if (!tmp3) {
                  let num5 = null;
                  if (arg0 >= 100) {
                    num5 = 100;
                  }
                  tmp3 = dependencyMap[num5];
                  const tmp5 = dependencyMap;
                }
                return arg0 + tmp3;
              }
            }
          }
        }
      }
      return arg0;
    },
    week: { dow: 1, doy: 7 }
  });
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require("t"));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
