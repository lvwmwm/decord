// Module ID: 14646
// Function ID: 14647
// Dependencies: [14647, 14648, 1161, 14649, 14650]
// Exports: getCalendarPreferenceDataForRegion, getHourCyclesPreferenceDataForLocaleOrRegion, getTimeZonePreferenceForRegion, getWeekDataForRegion

// Module 14646
import e from "e" /* 1161 */;
import calendars from "calendars" /* 14647 */;
import hourCycles from "hourCycles" /* 14648 */;
import timezones from "timezones" /* 14649 */;
import weekData from "weekData" /* 14650 */;

require = arg1;
const dependencyMap = arg6;

export const getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return calendars.calendars[str] || calendars.calendars["001"].map((item) => {
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
  let v001 = hourCycles.hourCycles[formatted] || tmp2(14648).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14648).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14648).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
export const getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (timezones.timezones[formatted]) {
    return tmp2(1161).__spreadArray(items, tmp2(14649).timezones[formatted], true);
  } else {
    return items;
  }
};
export const getWeekDataForRegion = function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  return weekData.weekData[str] || weekData.weekData["001"];
};
