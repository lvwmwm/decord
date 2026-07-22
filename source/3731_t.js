// Module ID: 3731
// Function ID: 28525
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
    calendar: { -739180540: "minuta", -425263100: "minut\u0119", -425459708: "minut\u0119", -759758844: null, -421789692: "oko\u0142o {{count}} godziny", -425328636: "oko\u0142o {{count}} godzin" },
    relativeTime: { COZY_DRAWER: "<string:147783682>", rootContainer: "<string:147914755>", imgWumpus: "<string:1045495811>", VoicePanelPIPModes: "modules/guild_sidebar/native/MentionsBadge.tsx", textAlign: "<string:393216>", st: "<string:393216>", registerAsset: "<string:1196294144>", then: "<string:1275068918>", httpServerLocation: "<string:3992978156>", application: "<string:3003122478>", Reflect: "<string:3992977780>", keys: "<string:889192871>", uri: "<string:3489661220>", Set: "<string:2348810835>" },
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
    week: { emoji: false, me: false }
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
    globalThis.define(["HHmmss.SSSS"], fn);
  }
}
fn(this.moment);
