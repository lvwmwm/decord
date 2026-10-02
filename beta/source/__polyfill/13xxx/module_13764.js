// Module ID: 13764
// Function ID: 13765
// Dependencies: [13765, 13766, 1173, 13767, 13768]
// Exports: getCalendarPreferenceDataForRegion, getHourCyclesPreferenceDataForLocaleOrRegion, getTimeZonePreferenceForRegion, getWeekDataForRegion

// Module 13764
import _mod1173 from "module_1173" /* 1173 */;
import calendars2 from "calendars" /* 13765 */;
import hourCycles from "hourCycles" /* 13766 */;
import timezones from "timezones" /* 13767 */;
import weekData2 from "weekData" /* 13768 */;


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
  let v001 = hourCycles.hourCycles[formatted] || tmp2(13766).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13766).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13766).hourCycles["001"];
  }
  const tmp2Result = _mod1173;
  return tmp2Result.__spreadArray([], v001, true);
};
export const getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    const tmp2Result = _mod1173;
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
