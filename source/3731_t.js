// Module ID: 3731
// Function ID: 28520
// Name: t
// Dependencies: []

// Module 3731 (t)
const fn = function t(moment) {
  return moment.defineLocale("sv", {
    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
    weekdays: "s\u00F6ndag_m\u00E5ndag_tisdag_onsdag_torsdag_fredag_l\u00F6rdag".split("_"),
    weekdaysShort: "s\u00F6n_m\u00E5n_tis_ons_tor_fre_l\u00F6r".split("_"),
    weekdaysMin: "s\u00F6_m\u00E5_ti_on_to_fr_l\u00F6".split("_"),
    longDateFormat: {},
    calendar: {},
    relativeTime: { "Bool(false)": "absolute", "Bool(false)": 28, "Bool(false)": 28, "Bool(false)": 2, "Bool(false)": null, "Bool(false)": 2, "Bool(false)": 14, "Bool(false)": null, "Bool(false)": "center", "Bool(false)": "center", "Bool(false)": "<string:3674211080>", "Bool(false)": "<string:2063598324>", "Bool(false)": "<string:1174405755>", "Bool(false)": "<string:1207960328>" },
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
