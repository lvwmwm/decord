// Module ID: 3715
// Function ID: 28439
// Name: t
// Dependencies: [3712]

// Module 3715 (t)
const fn = function t(moment) {
  function processRelativeTime(arg0, arg1, arg2, arg3) {
    const items = [`${arg0} Tage`, `${arg0} Tagen`];
    const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
    const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
    const tmp = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: items, M: ["ein Monat", "einem Monat"], MM: items1, y: ["ein Jahr", "einem Jahr"], yy: items2 }[arg2];
    if (arg1) {
      let first = tmp[0];
    } else {
      first = tmp[1];
    }
    return first;
  }
  obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } };
  obj = { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: processRelativeTime, mm: "%d Minuten", h: processRelativeTime, hh: "%d Stunden", d: processRelativeTime, dd: processRelativeTime, M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime };
  return moment.defineLocale("de", obj);
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
