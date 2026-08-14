// Module ID: 13615
// Function ID: 13616
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [13616, 13617, 1281, 13618, 13619]

// Module 13615 (getCalendarPreferenceDataForRegion)
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
  return require(13616).calendars[str] || require(13616).calendars["001"].map((arg0) => {
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
  let v001 = require(13617).hourCycles[formatted] || tmp2(13617).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(13617).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(13617).hourCycles["001"];
  }
  return require(1281) /* e */.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (require(13618).timezones[formatted]) {
    return tmp2(1281).__spreadArray(items, tmp2(13618).timezones[formatted], true);
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
  return require(13619).weekData[str] || require(13619).weekData["001"];
};
