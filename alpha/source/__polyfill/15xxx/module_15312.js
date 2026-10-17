// Module ID: 15312
// Function ID: 15313
// Dependencies: [15223, 15313]
// Exports: getSupportedUnits

// Module 15312
const require = globalThis.__r;
let _require;


export const getSupportedUnits = function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_15313").units;
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
