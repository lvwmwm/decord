// Module ID: 3712
// Function ID: 28432
// Name: n
// Dependencies: []

// Module 3712 (n)
const fn = function n(moment) {
  return moment.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\u00F8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\u00F8rdag".split("_"), weekdaysShort: "s\u00F8n_man_tir_ons_tor_fre_l\u00F8r".split("_"), weekdaysMin: "s\u00F8_ma_ti_on_to_fr_l\u00F8".split("_"), longDateFormat: {}, calendar: { variant: null, r: null, now: null, Symbol: null, Symbol: null, enabled: null }, relativeTime: { COZY_DRAWER: true, rootContainer: true, imgWumpus: true, VoicePanelPIPModes: true, textAlign: true, st: "isArray", registerAsset: "size", then: "data", httpServerLocation: "a", application: "isArray", Reflect: "Button", keys: "uri", uri: "r", Set: "isArray" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { emoji: false, me: false } });
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
