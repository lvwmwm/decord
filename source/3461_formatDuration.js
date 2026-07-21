// Module ID: 3461
// Function ID: 26807
// Name: formatDuration
// Dependencies: [3396, 3493]
// Exports: default

// Module 3461 (formatDuration)
import differenceInCalendarWeeks from "differenceInCalendarWeeks";

if (!differenceInCalendarWeeks) {
  const obj = { default: differenceInCalendarWeeks };
  let tmp3 = obj;
} else {
  tmp3 = differenceInCalendarWeeks;
}
let closure_3 = [];

export default function formatDuration(arg0, locale) {
  const require = arg0;
  if (arguments.length < 1) {
    const _TypeError = TypeError;
    const concat = "1 argument required, but only ".concat;
    const typeError = new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    throw typeError;
  } else {
    locale = undefined;
    const defaultOptions = require(dependencyMap[1]).getDefaultOptions();
    if (null != locale) {
      locale = locale.locale;
    }
    if (null === locale) {
      locale = defaultOptions.locale;
    }
    if (null === locale) {
      locale = tmp3.default;
    }
    const dependencyMap = locale;
    let format;
    if (null != locale) {
      format = locale.format;
    }
    if (null === format) {
      format = closure_3;
    }
    let zero;
    if (null != locale) {
      zero = locale.zero;
    }
    let delimiter;
    if (null != locale) {
      delimiter = locale.delimiter;
    }
    let str2 = " ";
    if (null !== delimiter) {
      str2 = " ";
      if (undefined !== delimiter) {
        str2 = delimiter;
      }
    }
    if (locale.formatDistance) {
      const reduced = format.reduce((arr) => {
        let combined = arr;
        if ("number" === typeof arr[arg1]) {
          if (closure_2) {
            combined = arr.concat(locale.formatDistance(tmp, tmp2));
          } else {
            combined = arr;
          }
        }
        return combined;
      }, []);
      return reduced.join(str2);
    } else {
      return "";
    }
  }
};
export default exports.default;
