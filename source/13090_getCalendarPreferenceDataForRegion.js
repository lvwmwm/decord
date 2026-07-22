// Module ID: 13090
// Function ID: 99447
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [0, 0, 0]

// Module 13090 (getCalendarPreferenceDataForRegion)
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  let v001 = arg1(arg6[0]).calendars[str];
  if (!v001) {
    v001 = arg1(arg6[0]).calendars[001];
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
  let v001 = region(arg6[1]).hourCycles[formatted];
  if (!v001) {
    v001 = region(arg6[1]).hourCycles[str];
  }
  if (!v001) {
    const concat = "".concat;
    v001 = region(arg6[1]).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = region(arg6[1]).hourCycles[001];
  }
  return region(arg6[2]).__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  if (arg1(arg6[3]).timezones[formatted]) {
    return arg1(arg6[2]).__spreadArray([], arg1(arg6[3]).timezones[formatted], true);
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
  let v001 = arg1(arg6[4]).weekData[str];
  if (!v001) {
    v001 = arg1(arg6[4]).weekData[001];
  }
  return v001;
};
