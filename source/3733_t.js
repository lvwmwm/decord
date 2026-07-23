// Module ID: 3733
// Function ID: 28530
// Name: t
// Dependencies: [3712]

// Module 3733 (t)
const fn = function t(moment) {
  return moment.defineLocale("sv", {
    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
    weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
    weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
    longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" },
    calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\u00E5r] LT", nextWeek: "[P\u00E5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" },
    relativeTime: { future: "om %s", past: "f\u00F6r %s sedan", s: "n\u00E5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\u00E5nad", MM: "%d m\u00E5nader", y: "ett \u00E5r", yy: "%d \u00E5r" },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal(arg0) {
      const result = arg0 % 10;
      let str = "e";
      let str2 = "e";
      if (1 !== ~~arg0 % 100 / 10) {
        if (1 === result) {
          str = "a";
        }
        str2 = str;
      }
      return arg0 + str2;
    },
    week: { dow: 1, doy: 4 }
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
