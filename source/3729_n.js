// Module ID: 3729
// Function ID: 28514
// Name: n
// Dependencies: []

// Module 3729 (n)
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
    return arg0 + str + {}[arg2];
  }
  let obj = { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: true, weekdays: "duminic\u0103_luni_mar\u021Bi_miercuri_joi_vineri_s\u00E2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\u00E2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\u00E2".split("_"), longDateFormat: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null }, calendar: { variant: "stretch", r: "bottom", now: "100%", Symbol: 1, Symbol: "flex", enabled: 2 }, relativeTime: obj, week: { emoji: "staff", me: "message" } };
  obj = { COZY_DRAWER: "isArray", rootContainer: "title", imgWumpus: "useMemo", VoicePanelPIPModes: "r", textAlign: "isArray", st: "cursor", registerAsset: "uri", then: "r", httpServerLocation: "isArray", ss: relativeTimeWithPlural, mm: relativeTimeWithPlural, hh: relativeTimeWithPlural, dd: relativeTimeWithPlural, M: "o lun\u0103", MM: relativeTimeWithPlural, y: "un an", yy: relativeTimeWithPlural };
  return moment.defineLocale("ro", obj);
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
