// Module ID: 13040
// Function ID: 99267
// Name: FormatApproximately
// Dependencies: []

// Module 13040 (FormatApproximately)
arg5.FormatApproximately = function FormatApproximately(internalSlots, result) {
  result.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return result;
};
