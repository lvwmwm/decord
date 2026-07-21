// Module ID: 13101
// Function ID: 99451
// Name: getSupportedUnits
// Dependencies: []

// Module 13101 (getSupportedUnits)
arg5.getSupportedUnits = function getSupportedUnits(locale) {
  const arg1 = locale;
  const units = arg1(arg6[1]).units;
  return units.filter((unit) => {
    let str = unit;
    if (undefined === unit) {
      str = "en";
    }
    const memoizedNumberFormat = unit(closure_1[0]).createMemoizedNumberFormat(str, { style: "unit", unit });
    memoizedNumberFormat.resolvedOptions().unit === unit;
  });
};
