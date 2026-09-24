// Module ID: 14606
// Function ID: 14607
// Dependencies: [14521, 14607]
// Exports: getSupportedNumberingSystems

// Module 14606
const require = globalThis.__r;

const require = arg1;
const dependencyMap = arg6;

export const getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  _require = locale;
  const numberingSystemNames = require("numberingSystemNames").numberingSystemNames;
  return numberingSystemNames.filter((item) => (function isSupportedNumberingSystem(item, arg1) {
    let str = arg1;
    if (undefined === arg1) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-nu-");
      const memoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat(combined.concat(item));
      if (memoizedNumberFormat.resolvedOptions().numberingSystem !== item) {
        if ("123" === memoizedNumberFormat.format(123)) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(item, closure_0));
};
