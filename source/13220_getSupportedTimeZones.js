// Module ID: 13220
// Function ID: 101636
// Name: getSupportedTimeZones
// Dependencies: [13133, 13221]

// Module 13220 (getSupportedTimeZones)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const _require = locale;
  const timezones = _require(13221).timezones;
  return timezones.filter((timeZone) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
