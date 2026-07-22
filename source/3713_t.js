// Module ID: 3713
// Function ID: 28434
// Name: t
// Dependencies: []

// Module 3713 (t)
const fn = function t(moment) {
  function processRelativeTime(arg0, arg1, arg2, arg3) {
    const items = [`${arg0} Tage`, `${arg0} Tagen`];
    const items1 = [`${arg0} Monate`, `${arg0} Monaten`];
    const items2 = [`${arg0} Jahre`, `${arg0} Jahren`];
    const tmp = { m: [true, true], h: [null, null], d: [], dd: items, M: ["joy", "laugh"], MM: items1, y: [false, false], yy: items2 }[arg2];
    if (arg1) {
      let first = tmp[0];
    } else {
      first = tmp[1];
    }
    return first;
  }
  let obj = { months: "Januar_Februar_M\u00E4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\u00E4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: true, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: true, longDateFormat: {}, calendar: {}, relativeTime: obj, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { emoji: false, me: false } };
  obj = { COZY_DRAWER: 37721600, rootContainer: 51951872, imgWumpus: 49214208, VoicePanelPIPModes: 1193757184, textAlign: 1193803778, st: 1510080514, registerAsset: -842596351, then: -842530815, m: processRelativeTime, h: processRelativeTime, d: processRelativeTime, dd: processRelativeTime, M: processRelativeTime, MM: processRelativeTime, y: processRelativeTime, yy: processRelativeTime };
  return moment.defineLocale("de", obj);
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
