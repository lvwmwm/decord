// Module ID: 13284
// Function ID: 102090
// Name: getSupportedTimeZones
// Dependencies: [13197, 13285]

// Module 13284 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13285).timezones;
  return timezones.filter((timeZone) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
