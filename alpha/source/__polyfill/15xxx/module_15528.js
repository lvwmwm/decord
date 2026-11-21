// Module ID: 15528
// Function ID: 15529
// Dependencies: [15441, 15529]
// Exports: getSupportedTimeZones

// Module 15528
const require = globalThis.__r;
let _require;


export function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_15529").timezones;
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
