// Module ID: 3718
// Function ID: 28458
// Name: n
// Dependencies: []

// Module 3718 (n)
const fn = function n(moment) {
  return moment.defineLocale("fr", {
    months: "janvier_f\u00E9vrier_mars_avril_mai_juin_juillet_ao\u00FBt_septembre_octobre_novembre_d\u00E9cembre".split("_"),
    monthsShort: "janv._f\u00E9vr._mars_avr._mai_juin_juil._ao\u00FBt_sept._oct._nov._d\u00E9c.".split("_"),
    monthsParseExact: true,
    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
    weekdaysParseExact: true,
    longDateFormat: { "Bool(true)": "<string:1359020034>", "Bool(true)": "<string:507576886>", "Bool(true)": "<string:16778363>", "Bool(true)": "<string:17584961>", "Bool(true)": "patach", "Bool(true)": "<string:3211264>" },
    calendar: { intl: -889192188, flex: 1090519403, getChannel: 155966, PX_8: 1232617745, textAlign: 1124139010, unicodeVersion: 134636 },
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal(arg0, arg1) {
      if ("D" === arg1) {
        let str9 = "";
        if (1 === arg0) {
          str9 = "er";
        }
        return arg0 + str9;
      } else {
        if ("M" !== arg1) {
          if ("Q" !== arg1) {
            if ("DDD" !== arg1) {
              if ("d" !== arg1) {
                let str7 = "e";
                if (1 === arg0) {
                  str7 = "re";
                }
                return arg0 + str7;
              }
            }
          }
        }
        let str8 = "e";
        if (1 === arg0) {
          str8 = "er";
        }
        return arg0 + str8;
      }
    },
    week: { "Bool(true)": null, "Bool(true)": null }
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
