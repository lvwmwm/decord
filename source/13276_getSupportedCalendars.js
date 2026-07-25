// Module ID: 13276
// Function ID: 102074
// Name: getSupportedCalendars
// Dependencies: [13197, 13277]

// Module 13276 (getSupportedCalendars)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCalendars = function getSupportedCalendars(locale) {
  const _require = locale;
  const calendars = _require(13277).calendars;
  return calendars.filter((arg0) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const combined = "".concat(str, "-u-ca-");
    const memoizedDateTimeFormat = locale(outer1_1[0]).createMemoizedDateTimeFormat(combined.concat(arg0));
  });
};
