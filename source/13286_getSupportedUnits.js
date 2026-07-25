// Module ID: 13286
// Function ID: 102094
// Name: getSupportedUnits
// Dependencies: [13197, 13287]

// Module 13286 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13287).units;
  return units.filter((unit) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
