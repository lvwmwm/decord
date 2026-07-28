// Module ID: 13331
// Function ID: 102272
// Name: getSupportedUnits
// Dependencies: [13242, 13332]

// Module 13331 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13332).units;
  return units.filter((unit) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
