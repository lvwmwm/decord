// Module ID: 3721
// Function ID: 28469
// Name: o
// Dependencies: []

// Module 3721 (o)
const fn = function o(moment) {
  let obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: {}, calendar: obj, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { "Bool(true)": false, "Bool(true)": false } };
  obj = {
    alignItems: 24,
    position: 24,
    <string:1373947542>: 49239630,
    <string:2681378794>: 49141504,
    <string:1413374383>: 58642176,
    <string:1720105976>: 49084160,
    lastWeek() {
      let str = "[lo scorso] dddd [alle] LT";
      if (0 === this.day()) {
        str = "[la scorsa] dddd [alle] LT";
      }
      return str;
    }
  };
  obj = {
    future(arg0) {
      let str = "in";
      if (obj.test(arg0)) {
        str = "tra";
      }
      return str + " " + arg0;
    }
  };
  return moment.defineLocale("it", obj);
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
