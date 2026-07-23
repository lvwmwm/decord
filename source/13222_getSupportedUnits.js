// Module ID: 13222
// Function ID: 101640
// Name: getSupportedUnits
// Dependencies: [13133, 13223]

// Module 13222 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13223).units;
  return units.filter((unit) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
