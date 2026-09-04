// Module ID: 14197
// Function ID: 14198
// Name: getCalendarPreferenceDataForRegion
// Dependencies: [14198, 14199, 1280, 14200, 14201]

// Module 14197 (getCalendarPreferenceDataForRegion)
import e from "e" /* 1280 */;
import _mod14198 from "module_14198" /* 14198 */;
import _mod14199 from "module_14199" /* 14199 */;
import _mod14200 from "module_14200" /* 14200 */;
import _mod14201 from "module_14201" /* 14201 */;

require = arg1;
const dependencyMap = arg6;
arg5.getCalendarPreferenceDataForRegion = function getCalendarPreferenceDataForRegion(region) {
  let str = null;
  if (region) {
    str = region.toUpperCase();
  }
  if (!str) {
    str = "";
  }
  return _mod14198.calendars[str] || _mod14198.calendars["001"].map((arg0) => {
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
  let v001 = _mod14199.hourCycles[formatted] || tmp2(14199).hourCycles[str];
  if (!v001) {
    const concat = "".concat;
    v001 = tmp2(14199).hourCycles["".concat("", formatted, "-001")];
  }
  if (!v001) {
    v001 = tmp2(14199).hourCycles["001"];
  }
  return e.__spreadArray([], v001, true);
};
arg5.getTimeZonePreferenceForRegion = function getTimeZonePreferenceForRegion(region) {
  const formatted = region.toLowerCase();
  const items = [];
  if (_mod14200.timezones[formatted]) {
    return tmp2(1280).__spreadArray(items, tmp2(14200).timezones[formatted], true);
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
  return _mod14201.weekData[str] || _mod14201.weekData["001"];
};
