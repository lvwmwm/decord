// Module ID: 13287
// Function ID: 102099
// Name: getSupportedUnits
// Dependencies: [13198, 13288]

// Module 13287 (getSupportedUnits)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const _require = locale;
  const units = _require(13288).units;
  return units.filter((unit) => {
    let str = locale;
    if (undefined === locale) {
      str = "en";
    }
    const memoizedNumberFormat = locale(outer1_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
