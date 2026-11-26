// Module ID: 15542
// Function ID: 15543
// Dependencies: [15453, 15543]
// Exports: getSupportedUnits

// Module 15542
const require = globalThis.__r;
let _require;


export function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_15543").units;
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
