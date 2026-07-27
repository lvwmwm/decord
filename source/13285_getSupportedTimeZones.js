// Module ID: 13285
// Function ID: 102095
// Name: getSupportedTimeZones
// Dependencies: [13198, 13286]

// Module 13285 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13286).timezones;
  return timezones.filter((timeZone) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
