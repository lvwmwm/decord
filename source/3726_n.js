// Module ID: 3726
// Function ID: 28497
// Name: n
// Dependencies: []

// Module 3726 (n)
const fn = function n(moment) {
  return moment.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: true, weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8._ma._ti._on._to._fr._l\u00F8.".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), weekdaysParseExact: true, longDateFormat: { <string:1122280543>: null, <string:3251850218>: 1, <string:306010250>: "column", <string:37429971>: "stretch", <string:1812403200>: "center", <string:3855182856>: "<string:2046820987>" }, calendar: { status: null, padding: null, opacity: null, PX_8: null, Symbol: null, r: null }, relativeTime: {}, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { <string:1431496722>: false, <string:1627556098>: false } });
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
