// Module ID: 3726
// Function ID: 28497
// Name: n
// Dependencies: []

// Module 3726 (n)
const fn = function n(moment) {
  return moment.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: true, weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), weekdaysParseExact: true, longDateFormat: { "Bool(false)": -805306074, "Bool(false)": 721421093, "Bool(false)": 1174405695, "Bool(false)": 603980182, "Bool(false)": 1174405706, "Bool(false)": 78790 }, calendar: { alignItems: "Array", position: "MAX_ACCOUNTS", <string:1373947542>: "Array", <string:2681378794>: "billingAddress", <string:1413374383>: "Atomics", <string:1720105976>: "_isDebug" }, relativeTime: {}, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { "Bool(true)": false, "Bool(true)": false } });
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
