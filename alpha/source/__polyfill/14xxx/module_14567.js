// Module ID: 14567
// Function ID: 14568
// Dependencies: [14480, 14568]
// Exports: getSupportedTimeZones

// Module 14567
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_14568").timezones;
  return timezones.filter((item) => (function isSupported(timeZone, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const obj = { timeZone };
      const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};
