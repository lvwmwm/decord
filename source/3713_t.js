// Module ID: 3713
// Function ID: 28429
// Name: t
// Dependencies: []

// Module 3713 (t)
const fn = function t(moment) {
  function processRelativeTime(arg0, arg1, arg2, arg3) {
    const items = [`${arg0} Tage`, `${arg0} Tagen`];
    const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
    const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
    const tmp = { m: ["satisfied", "face_holding_back_tears"], h: ["SOFORT", "usePendingRequestResolution"], d: [], dd: items, M: [], MM: items1, y: ["<string:3087008246>", "<string:1358954863>"], yy: items2 }[arg2];
    if (arg1) {
      let first = tmp[0];
    } else {
      first = tmp[1];
    }
    return first;
  }
  return moment.defineLocale("de", { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: {}, calendar: {}, relativeTime: { m: processRelativeTime, h: processRelativeTime, d: processRelativeTime, dd: processRelativeTime, M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { "Bool(true)": false, "Bool(true)": false } });
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
