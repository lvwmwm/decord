// Module ID: 13329
// Function ID: 102268
// Name: getSupportedTimeZones
// Dependencies: [13242, 13330]

// Module 13329 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13330).timezones;
  return timezones.filter((timeZone) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
