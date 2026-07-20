// Module ID: 13033
// Function ID: 99244
// Name: FormatApproximately
// Dependencies: []

// Module 13033 (FormatApproximately)
arg5.FormatApproximately = function FormatApproximately(internalSlots, result) {
  result.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return result;
};
