// Module ID: 13490
// Function ID: 13491
// Name: getSupportedTimeZones
// Dependencies: [13403, 13491]

// Module 13490 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13491).timezones;
  return timezones.filter((arg0) => (function isSupported(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { timeZone: null };
      obj[0] = arg0;
      const memoizedDateTimeFormat = callback(table[0]).createMemoizedDateTimeFormat(str, obj);
      return memoizedDateTimeFormat.resolvedOptions().timeZone === arg0;
    } catch (err) {
      return false;
    }
  })(arg0, closure_0));
};
