// Module ID: 13275
// Function ID: 101967
// Name: getSupportedUnits
// Dependencies: [13186, 13276]

// Module 13275 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13276).units;
  return units.filter((unit) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
