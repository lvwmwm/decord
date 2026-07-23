// Module ID: 3820
// Function ID: 31737
// Name: makeIntlFormatter
// Dependencies: [1921, 3817, 1212, 2]
// Exports: makeFormatter

// Module 3820 (makeIntlFormatter)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function makeIntlFormatter(locale, arg1) {
  return Intl.DateTimeFormat(locale, arg1).format;
}
const result = require("getSystemLocale").fileFinishedImporting("lib/intlFormatDate.tsx");

export const makeFormatter = function makeFormatter(arg0) {
  locale = locale.locale;
  let tmp = (function tryMakeNativeFormatter(locale, arg1) {
    let closure_0 = locale;
    let closure_1 = arg1;
    if (null == outer1_0(outer1_1[1]).makeFormatter) {
      return null;
    } else {
      let tmp7 = tmp15;
      if (null != str) {
        let first;
        if (null != outer1_0(outer1_1[2]).systemLocale) {
          first = outer1_0(outer1_1[2]).systemLocale.split("-")[0];
          const str3 = outer1_0(outer1_1[2]).systemLocale;
        }
        tmp7 = str.split("-")[0] === first;
      }
      if (str !== outer1_0(outer1_1[2]).initialLocale) {
        const tmp12 = locale;
      }
      const formatter = outer1_0(outer1_1[1]).makeFormatter(tmp12, arg1);
      if (null == formatter) {
        return null;
      } else {
        let c3 = null;
        return (arg0) => formatter(arg0);
      }
      const obj = outer1_0(outer1_1[1]);
    }
  })(locale, arg0);
  if (null == tmp) {
    tmp = makeIntlFormatter(locale, arg0);
  }
  return tmp;
};
