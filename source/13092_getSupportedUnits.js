// Module ID: 13092
// Function ID: 99406
// Name: getSupportedUnits
// Dependencies: [13104, 13100]

// Module 13092 (getSupportedUnits)
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
