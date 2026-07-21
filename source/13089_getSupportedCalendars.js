// Module ID: 13089
// Function ID: 99409
// Name: getSupportedCalendars
// Dependencies: []

// Module 13089 (getSupportedCalendars)
arg5.getSupportedCalendars = function getSupportedCalendars(locale) {
  const arg1 = locale;
  const calendars = arg1(arg6[1]).calendars;
  return calendars.filter((arg0) => {
    let str = arg0;
    if (undefined === arg0) {
      str = "en";
    }
    const combined = "".concat(str, "-u-ca-");
    const memoizedDateTimeFormat = arg0(closure_1[0]).createMemoizedDateTimeFormat(combined.concat(arg0));
  });
};
