// Module ID: 3725
// Function ID: 28493
// Name: t
// Dependencies: []

// Module 3725 (t)
const fn = function t(moment) {
  let closure_0 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
  let closure_1 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
  const items = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
  const tmp = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
  return moment.defineLocale("nl", {
    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort(arg0, arg1) {
      if (arg0) {
        if (obj.test(arg1)) {
          let tmp3 = closure_1[arg0.month(arg0)];
        } else {
          tmp3 = closure_0[arg0.month(arg0)];
        }
        const obj = /-MMM-/;
      } else {
        return closure_0;
      }
    },
    monthsRegex: tmp,
    monthsShortRegex: tmp,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
    weekdaysParseExact: true,
    longDateFormat: { <string:1122280543>: 1, <string:3251850218>: "za %s", <string:306010250>: "%s temu", <string:37429971>: "kilka sekund", <string:1812403200>: "HH:mm", <string:3855182856>: "HH:mm:ss" },
    calendar: {},
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal(arg0) {
      if (1 !== arg0) {
        if (8 !== arg0) {
          let str = "de";
        }
        return arg0 + str;
      }
      str = "ste";
    },
    week: { <string:1431496722>: false, <string:1627556098>: false }
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
    globalThis.define(["HH:mm:ss"], fn);
  }
}
fn(this.moment);
