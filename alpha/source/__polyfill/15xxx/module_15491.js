// Module ID: 15491
// Function ID: 15492
// Dependencies: [15402, 15492]
// Exports: getSupportedUnits

// Module 15491
const require = globalThis.__r;
let _require;


export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_15492").units;
  return units.filter((item) => {
    function isSupported(unit, arg1) {
      let str = arg1;
      if (undefined === arg1) {
        str = "en";
      }
      try {
        const obj = { style: "unit", unit };
        const memoizedNumberFormat = locale(closure_1_1[0]).createMemoizedNumberFormat(str, obj);
        return memoizedNumberFormat.resolvedOptions().unit === unit;
      } catch (err) {
        return false;
      }
    }
    return isSupported(item, locale);
  });
};
