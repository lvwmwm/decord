// Module ID: 14368
// Function ID: 14369
// Dependencies: [14281, 14369]
// Exports: getSupportedTimeZones

// Module 14368
const require = globalThis.__r;
let _require;


export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_14369").timezones;
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
