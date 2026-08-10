// Module ID: 13564
// Function ID: 13565
// Name: getSupportedUnits
// Dependencies: [13475, 13565]

// Module 13564 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13565).units;
  return units.filter((arg0) => (function isSupported(arg0, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const obj = { style: "unit", unit: null };
      obj[1] = arg0;
      const memoizedNumberFormat = callback(table[0]).createMemoizedNumberFormat(str, obj);
      return memoizedNumberFormat.resolvedOptions().unit === arg0;
    } catch (err) {
      return false;
    }
  })(arg0, closure_0));
};
