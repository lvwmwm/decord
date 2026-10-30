// Module ID: 16073
// Function ID: 16074
// Dependencies: [15986, 16074]
// Exports: getSupportedTimeZones

// Module 16073
const require = globalThis.__r;
let _require;


export function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_16074").timezones;
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
