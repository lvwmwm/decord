// Module ID: 15416
// Function ID: 15417
// Dependencies: [15417, 15418, 1174, 15419, 15420]
// Exports: getCalendarPreferenceDataForRegion, getHourCyclesPreferenceDataForLocaleOrRegion, getTimeZonePreferenceForRegion, getWeekDataForRegion

// Module 15416
import _mod1174 from "module_1174" /* 1174 */;
import calendars2 from "calendars" /* 15417 */;
import hourCycles from "hourCycles" /* 15418 */;
import timezones from "timezones" /* 15419 */;
import weekData2 from "weekData" /* 15420 */;


export const getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
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
};
export const getHourCyclesPreferenceDataForLocaleOrRegion = function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = hourCycles.hourCycles[formatted] || tmp2(15418).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(15418).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(15418).hourCycles["001"];
  }
  const tmp2Result = _mod1174;
  return tmp2Result.__spreadArray([], v001, true);
};
export const getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    const tmp2Result = _mod1174;
    return tmp2Result.__spreadArray(items, timezones.timezones[formatted], true);
  } else {
    return items;
  }
};
export const getWeekDataForRegion = function getWeekDataForRegion(region) {
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
};
