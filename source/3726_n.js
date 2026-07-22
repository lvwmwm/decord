// Module ID: 3726
// Function ID: 28502
// Name: n
// Dependencies: []

// Module 3726 (n)
const fn = function n(moment) {
  return moment.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: true, weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), weekdaysParseExact: true, longDateFormat: {}, calendar: {}, relativeTime: {}, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { emoji: false, me: false } });
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
