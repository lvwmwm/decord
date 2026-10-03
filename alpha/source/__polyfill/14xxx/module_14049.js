// Module ID: 14049
// Function ID: 14050
// Dependencies: [13962, 14050]
// Exports: getSupportedTimeZones

// Module 14049
const require = globalThis.__r;
let _require;


export const getSupportedTimeZones = function getSupportedTimeZones(locale) {
  _require = locale;
  const timezones = require("module_14050").timezones;
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
