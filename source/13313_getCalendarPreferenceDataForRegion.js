// Module ID: 13313
// Function ID: 102235
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [13314, 13315, 1257, 13316, 13317]

// Module 13313 (getCalendarPreferenceDataForRegion)
const require = arg1;
const dependencyMap = arg6;
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  let v001 = require(13314).calendars[str];
  if (!v001) {
    v001 = require(13314).calendars["001"];
  }
  return v001.map((arg0) => {
    let str = "gregory";
    if ("gregorian" !== arg0) {
      let str2 = "islamicc";
      if ("islamic-civil" !== arg0) {
        str2 = arg0;
      }
      str = str2;
    }
    return str;
  });
};
arg5.getHourCyclesPreferenceDataForLocaleOrRegion = function getHourCyclesPreferenceDataForLocaleOrRegion(locale, region) {
  const formatted = locale.toLowerCase();
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  let v001 = require(13315).hourCycles[formatted];
  if (!v001) {
    v001 = require(13315).hourCycles[str];
  }
  if (!v001) {
    const concat = "".concat;
    v001 = require(13315).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = require(13315).hourCycles["001"];
  }
  return require(1257) /* createExporter */.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  if (require(13316).timezones[formatted]) {
    return require(1257) /* createExporter */.__spreadArray([], require(13316).timezones[formatted], true);
  } else {
    return [];
  }
};
arg5.getWeekDataForRegion = function getWeekDataForRegion(region) {
  let str = "";
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "001";
  }
  let v001 = require(13317).weekData[str];
  if (!v001) {
    v001 = require(13317).weekData["001"];
  }
  return v001;
};
