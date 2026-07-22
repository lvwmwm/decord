// Module ID: 13108
// Function ID: 99484
// Name: getSupportedUnits
// Dependencies: [0, 4294967295]

// Module 13108 (getSupportedUnits)
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
