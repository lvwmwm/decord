// Module ID: 16065
// Function ID: 16066
// Dependencies: [15986, 16066]
// Exports: getSupportedCalendars

// Module 16065
const require = globalThis.__r;
let _require;


export function getSupportedCalendars(locale) {
  _require = locale;
  const calendars = require("module_16066").calendars;
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
}
