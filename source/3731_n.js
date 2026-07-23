// Module ID: 3731
// Function ID: 28519
// Name: n
// Dependencies: [3712]

// Module 3731 (n)
const fn = function n(moment) {
  function relativeTimeWithPlural(arg0, arg1, arg2) {
    let tmp = arg0 % 100 >= 20;
    if (!tmp) {
      let tmp2 = arg0 >= 100;
      if (tmp2) {
        tmp2 = arg0 % 100 === 0;
      }
      tmp = tmp2;
    }
    let str = " ";
    if (tmp) {
      str = " de ";
    }
    return arg0 + str + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[arg2];
  }
  obj = { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: true, weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\u00E2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: obj, week: { dow: 1, doy: 7 } };
  obj = { future: "peste %s", past: "%s \u00EEn urm\u0103", s: "c\u00E2teva secunde", ss: relativeTimeWithPlural, m: "un minut", mm: relativeTimeWithPlural, h: "o or\u0103", hh: relativeTimeWithPlural, d: "o zi", dd: relativeTimeWithPlural, M: "o lun\u0103", MM: relativeTimeWithPlural, y: "un an", yy: relativeTimeWithPlural };
  return moment.defineLocale("ro", obj);
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
