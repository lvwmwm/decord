// Module ID: 14898
// Function ID: 14899
// Dependencies: [14813, 14899]
// Exports: getSupportedNumberingSystems

// Module 14898
const require = globalThis.__r;
let _require;


export const getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  _require = locale;
  const numberingSystemNames = require("numberingSystemNames").numberingSystemNames;
  return numberingSystemNames.filter((item) => {
    function isSupportedNumberingSystem(item, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const concat = "".concat;
        const createMemoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat;
        const combined = "".concat(str, "-u-nu-");
        const memoizedNumberFormat = createMemoizedNumberFormat(combined.concat(item));
        const obj3 = memoizedNumberFormat;
        if (memoizedNumberFormat.resolvedOptions().numberingSystem !== item) {
          if ("123" === obj3.format(123)) {
            return false;
          }
        }
        return true;
      } catch (err) {
      }
    }
    return isSupportedNumberingSystem(item, locale);
  });
};
