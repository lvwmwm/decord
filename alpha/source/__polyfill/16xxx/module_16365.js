// Module ID: 16365
// Function ID: 16366
// Dependencies: [16276, 16366]
// Exports: getSupportedUnits

// Module 16365
const require = globalThis.__r;
let _require;


export function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_16366").units;
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
}
