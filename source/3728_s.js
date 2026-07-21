// Module ID: 3728
// Function ID: 28511
// Name: s
// Dependencies: []

// Module 3728 (s)
const fn = function s(moment) {
  let obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split("_"), weekdaysMin: "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { "Bool(true)": "Array", "Bool(true)": "isArray", "Bool(true)": "color", "Bool(true)": "ix", "Bool(true)": "Array", "Bool(true)": "isArray" }, calendar: obj, relativeTime: {}, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA" };
  obj = {
    intl: null,
    flex: null,
    getChannel: null,
    PX_8: null,
    textAlign: null,
    unicodeVersion: null,
    lastWeek() {
      const self = this;
      if (0 === this.day()) {
        let str = "[\u00DAltimo] dddd [\u00E0s] LT";
      } else {
        str = "[\u00DAltima] dddd [\u00E0s] LT";
      }
      return str;
    }
  };
  return moment.defineLocale("pt-br", obj);
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
