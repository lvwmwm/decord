// Module ID: 13268
// Function ID: 102057
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [13269, 13270, 1257, 13271, 13272]

// Module 13268 (getCalendarPreferenceDataForRegion)
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
  let v001 = require(13269).calendars[str];
  if (!v001) {
    v001 = require(13269).calendars["001"];
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
  let v001 = require(13270).hourCycles[formatted];
  if (!v001) {
    v001 = require(13270).hourCycles[str];
  }
  if (!v001) {
    const concat = "".concat;
    v001 = require(13270).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = require(13270).hourCycles["001"];
  }
  return require(1257) /* createExporter */.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  if (require(13271).timezones[formatted]) {
    return require(1257) /* createExporter */.__spreadArray([], require(13271).timezones[formatted], true);
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
  let v001 = require(13272).weekData[str];
  if (!v001) {
    v001 = require(13272).weekData["001"];
  }
  return v001;
};
