// Module ID: 14864
// Function ID: 14865
// Dependencies: [14775, 14865]
// Exports: getSupportedUnits

// Module 14864
const require = globalThis.__r;
let _require;


export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_14865").units;
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
