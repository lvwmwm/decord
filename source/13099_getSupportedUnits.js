// Module ID: 13099
// Function ID: 99429
// Name: getSupportedUnits
// Dependencies: [0, 4294967295]

// Module 13099 (getSupportedUnits)
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
