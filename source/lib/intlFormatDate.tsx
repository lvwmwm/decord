// Module ID: 3818
// Function ID: 31725
// Name: makeIntlFormatter
// Dependencies: []
// Exports: makeFormatter

// Module 3818 (makeIntlFormatter)
function makeIntlFormatter(locale, arg1) {
  return Intl.DateTimeFormat(locale, arg1).format;
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/intlFormatDate.tsx");

export const makeFormatter = function makeFormatter(arg0) {
  const locale = locale.locale;
  let tmp = function tryMakeNativeFormatter(locale, arg1) {
    if (null == locale(arg1[1]).makeFormatter) {
      return null;
    } else {
      let tmp7 = tmp15;
      if (null != str) {
        let first;
        if (null != locale(arg1[2]).systemLocale) {
          first = locale(arg1[2]).systemLocale.split("-")[0];
          const str3 = locale(arg1[2]).systemLocale;
        }
        tmp7 = str.split("-")[0] === first;
      }
      if (str !== locale(arg1[2]).initialLocale) {
        const tmp12 = locale;
      }
      const formatter = locale(arg1[1]).makeFormatter(tmp12, arg1);
      if (null == formatter) {
        return null;
      } else {
        let closure_3 = null;
        return (arg0) => formatter(arg0);
      }
      const obj = locale(arg1[1]);
    }
  }(locale, arg0);
  if (null == tmp) {
    tmp = makeIntlFormatter(locale, arg0);
  }
  return tmp;
};
