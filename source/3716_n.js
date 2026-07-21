// Module ID: 3716
// Function ID: 28447
// Name: n
// Dependencies: []

// Module 3716 (n)
const fn = function n(moment) {
  let closure_0 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_");
  let closure_1 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
  const items = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
  const tmp = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  let obj = {
    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
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
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: items,
    longMonthsParse: items,
    shortMonthsParse: items,
    weekdays: "domingo_lunes_martes_mi\u00E9rcoles_jueves_viernes_s\u00E1bado".split("_"),
    weekdaysShort: "dom._lun._mar._mi\u00E9._jue._vie._s\u00E1b.".split("_"),
    weekdaysMin: "do_lu_ma_mi_ju_vi_s\u00E1".split("_"),
    weekdaysParseExact: true,
    longDateFormat: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null },
    calendar: obj,
    relativeTime: {},
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: "%d\u00BA",
    week: { "Bool(true)": null, "Bool(true)": null }
  };
  obj = {
    sameDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[hoy a la" + str + "] LT";
    },
    nextDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[ma\u00F1ana a la" + str + "] LT";
    },
    nextWeek() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "dddd [a la" + str + "] LT";
    },
    lastDay() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[ayer a la" + str + "] LT";
    },
    lastWeek() {
      let str = "";
      if (1 !== this.hours()) {
        str = "s";
      }
      return "[el] dddd [pasado a la" + str + "] LT";
    },
    sameElse: "L"
  };
  return moment.defineLocale("es", obj);
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
