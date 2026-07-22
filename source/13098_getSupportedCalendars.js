// Module ID: 13098
// Function ID: 99464
// Name: getSupportedCalendars
// Dependencies: [4294967295, 0]

// Module 13098 (getSupportedCalendars)
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
