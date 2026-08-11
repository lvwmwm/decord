// Module ID: 13554
// Function ID: 13555
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [13555, 13556, 1281, 13557, 13558]

// Module 13554 (getCalendarPreferenceDataForRegion)
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
  return require(13555).calendars[str] || require(13555).calendars["001"].map((arg0) => {
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
  let v001 = require(13556).hourCycles[formatted] || tmp2(13556).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13556).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13556).hourCycles["001"];
  }
  return require(1281) /* e */.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (require(13557).timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13557).timezones[formatted], true);
  } else {
    return items;
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
  return require(13558).weekData[str] || require(13558).weekData["001"];
};
