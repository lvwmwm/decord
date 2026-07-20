// Module ID: 13090
// Function ID: 99402
// Name: getSupportedTimeZones
// Dependencies: [0, 0]

// Module 13090 (getSupportedTimeZones)
arg5.getSupportedTimeZones = function getSupportedTimeZones(locale) {
  const arg1 = locale;
  const timezones = arg1(arg6[1]).timezones;
  return timezones.filter((timeZone) => {
    let str = timeZone;
    if (undefined === timeZone) {
      str = "en";
    }
    const memoizedDateTimeFormat = timeZone(closure_1[0]).createMemoizedDateTimeFormat(str, { timeZone });
    memoizedDateTimeFormat.resolvedOptions().timeZone === timeZone;
  });
};
