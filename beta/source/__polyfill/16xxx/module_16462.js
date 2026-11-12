// Module ID: 16462
// Function ID: 16463
// Dependencies: [16373, 16463]
// Exports: getSupportedUnits

// Module 16462
const require = globalThis.__r;
let _require;


export function getSupportedUnits(locale) {
  _require = locale;
  const units = require("module_16463").units;
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
