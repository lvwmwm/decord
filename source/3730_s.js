// Module ID: 3730
// Function ID: 28516
// Name: s
// Dependencies: [3712]

// Module 3730 (s)
const fn = function s(moment) {
  obj = { months: "janeiro_fevereiro_mar\u00E7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\u00E7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\u00E1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\u00E1b".split("_"), weekdaysMin: "Do_2\u00AA_3\u00AA_4\u00AA_5\u00AA_6\u00AA_S\u00E1".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\u00E0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\u00E0s] HH:mm" }, calendar: obj, relativeTime: { future: "em %s", past: "h\u00E1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\u00EAs", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA" };
  obj = {
    sameDay: "[Hoje \u00E0s] LT",
    nextDay: "[Amanh\u00E3 \u00E0s] LT",
    nextWeek: "dddd [\u00E0s] LT",
    lastDay: "[Ontem \u00E0s] LT",
    lastWeek() {
      const self = this;
      if (0 === this.day()) {
        let str = "[\u00DAltimo] dddd [\u00E0s] LT";
      } else {
        str = "[\u00DAltima] dddd [\u00E0s] LT";
      }
      return str;
    },
    sameElse: "L"
  };
  return moment.defineLocale("pt-br", obj);
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require("t"));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(["../moment"], fn);
  }
}
fn(this.moment);
