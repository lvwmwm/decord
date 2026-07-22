// Module ID: 13049
// Function ID: 99322
// Name: FormatApproximately
// Dependencies: []

// Module 13049 (FormatApproximately)
arg5.FormatApproximately = function FormatApproximately(internalSlots, result) {
  result.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return result;
};
