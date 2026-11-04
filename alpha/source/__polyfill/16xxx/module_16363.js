// Module ID: 16363
// Function ID: 16364
// Dependencies: [16276, 16364]
// Exports: getSupportedTimeZones

// Module 16363
const require = globalThis.__r;
let _require;


export function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_16364").timezones;
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
}
