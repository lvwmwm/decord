// Module ID: 13321
// Function ID: 102252
// Name: getSupportedCalendars
// Dependencies: [13242, 13322]

// Module 13321 (getSupportedCalendars)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCalendars = function getSupportedCalendars(locale) {
  const _require = locale;
  const calendars = _require(13322).calendars;
  return calendars.filter((arg0) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const combined = "".concat(str, "-u-ca-");
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(combined.concat(arg0));
  });
};
