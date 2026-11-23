// Module ID: 15512
// Function ID: 15513
// Dependencies: [15513, 15514, 1158, 15515, 15516]
// Exports: getCalendarPreferenceDataForRegion, getHourCyclesPreferenceDataForLocaleOrRegion, getTimeZonePreferenceForRegion, getWeekDataForRegion

// Module 15512
import _mod1158 from "module_1158" /* 1158 */;
import calendars2 from "calendars" /* 15513 */;
import hourCycles from "hourCycles" /* 15514 */;
import timezones from "timezones" /* 15515 */;
import weekData2 from "weekData" /* 15516 */;


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
  let v001 = hourCycles.hourCycles[formatted] || tmp2(15514).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(15514).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(15514).hourCycles["001"];
  }
  const tmp2Result = _mod1158;
  return tmp2Result.__spreadArray([], v001, true);
}
export function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    const tmp2Result = _mod1158;
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
