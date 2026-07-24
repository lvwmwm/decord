// Module ID: 3723
// Function ID: 28480
// Name: o
// Dependencies: [3712]

// Module 3723 (o)
const fn = function o(moment) {
  obj = { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_luned\u00EC_marted\u00EC_mercoled\u00EC_gioved\u00EC_venerd\u00EC_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: obj, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%d\u00BA", week: { dow: 1, doy: 4 } };
  obj = {
    sameDay: "[Oggi alle] LT",
    nextDay: "[Domani alle] LT",
    nextWeek: "dddd [alle] LT",
    lastDay: "[Ieri alle] LT",
    lastWeek() {
      let str = "[lo scorso] dddd [alle] LT";
      if (0 === this.day()) {
        str = "[la scorsa] dddd [alle] LT";
      }
      return str;
    },
    sameElse: "L"
  };
  obj = {
    future(arg0) {
      let str = "in";
      if (obj.test(arg0)) {
        str = "tra";
      }
      return str + " " + arg0;
    },
    past: "%s fa",
    s: "alcuni secondi",
    ss: "%d secondi",
    m: "un minuto",
    mm: "%d minuti",
    h: "un'ora",
    hh: "%d ore",
    d: "un giorno",
    dd: "%d giorni",
    M: "un mese",
    MM: "%d mesi",
    y: "un anno",
    yy: "%d anni"
  };
  return moment.defineLocale("it", obj);
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
