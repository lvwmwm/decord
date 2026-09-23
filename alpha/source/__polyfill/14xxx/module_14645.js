// Module ID: 14645
// Function ID: 14646
// Dependencies: [14566, 14646]
// Exports: getSupportedCalendars

// Module 14645
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const getSupportedCalendars = function getSupportedCalendars(locale) {
  _require = locale;
  const calendars = require("module_14646").calendars;
  return calendars.filter((item) => (function isSupportedCalendar(item, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-ca-");
      const memoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat(combined.concat(item));
      if ("gregory" === item) {
        if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(item, closure_0));
};
