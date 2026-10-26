// Module ID: 15526
// Function ID: 15527
// Dependencies: [15447, 15527]
// Exports: getSupportedCalendars

// Module 15526
const require = globalThis.__r;
let _require;


export const getSupportedCalendars = function getSupportedCalendars(locale) {
  _require = locale;
  const calendars = require("module_15527").calendars;
  return calendars.filter((item) => {
    function isSupportedCalendar(item, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const concat = "".concat;
        const createMemoizedDateTimeFormat = locale(closure_1_1[0]).createMemoizedDateTimeFormat;
        const combined = "".concat(str, "-u-ca-");
        const memoizedDateTimeFormat = createMemoizedDateTimeFormat(combined.concat(item));
        if ("gregory" === item) {
          if ("gregory" === memoizedDateTimeFormat.resolvedOptions().calendar) {
            return false;
          }
        }
        return true;
      } catch (err) {
      }
    }
    return isSupportedCalendar(item, locale);
  });
};
