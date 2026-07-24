// Module ID: 13273
// Function ID: 101963
// Name: getSupportedTimeZones
// Dependencies: [13186, 13274]

// Module 13273 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13274).timezones;
  return timezones.filter((timeZone) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
