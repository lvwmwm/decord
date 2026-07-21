// Module ID: 13097
// Function ID: 99425
// Name: getSupportedTimeZones
// Dependencies: [4294967295, 0]

// Module 13097 (getSupportedTimeZones)
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
