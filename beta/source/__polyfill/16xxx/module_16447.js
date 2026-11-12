// Module ID: 16447
// Function ID: 16448
// Dependencies: [16448, 16449, 1159, 16450, 16451]
// Exports: getCalendarPreferenceDataForRegion, getHourCyclesPreferenceDataForLocaleOrRegion, getTimeZonePreferenceForRegion, getWeekDataForRegion

// Module 16447
import _mod1159 from "module_1159" /* 1159 */;
import calendars2 from "calendars" /* 16448 */;
import hourCycles from "hourCycles" /* 16449 */;
import timezones from "timezones" /* 16450 */;
import weekData2 from "weekData" /* 16451 */;


export function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  const calendars = calendars2.calendars;
  if (!str) {
    str = "";
  }
  const arr = calendars[str] || calendars2.calendars["001"];
  return arr.map((item) => {
    let str = "gregory";
    if ("gregorian" !== item) {
      let str2 = "islamicc";
      if ("islamic-civil" !== item) {
        str2 = item;
      }
      str = str2;
    }
    return str;
  });
}
export function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = hourCycles.hourCycles[formatted] || tmp2(16449).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(16449).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(16449).hourCycles["001"];
  }
  const tmp2Result = _mod1159;
  return tmp2Result.__spreadArray([], v001, true);
}
export function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    const tmp2Result = _mod1159;
    return tmp2Result.__spreadArray(items, timezones.timezones[formatted], true);
  } else {
    return items;
  }
}
export function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  const weekData = weekData2.weekData;
  if (!str) {
    str = "001";
  }
  const tmp3 = weekData[str] || weekData2.weekData["001"];
  return tmp3;
}
