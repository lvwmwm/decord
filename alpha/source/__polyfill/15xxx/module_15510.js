// Module ID: 15510
// Function ID: 15511
// Dependencies: [15423, 15511]
// Exports: getSupportedTimeZones

// Module 15510
const require = globalThis.__r;
let _require;


export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_15511").timezones;
  return timezones.filter((item) => {
    function isSupported(timeZone, arg1) {
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
    }
    return isSupported(item, locale);
  });
};
