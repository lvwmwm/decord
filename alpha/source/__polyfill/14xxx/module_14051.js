// Module ID: 14051
// Function ID: 14052
// Dependencies: [13962, 14052]
// Exports: getSupportedUnits

// Module 14051
const require = globalThis.__r;
let _require;


export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_14052").units;
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
