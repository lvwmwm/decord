// Module ID: 13042
// Function ID: 99289
// Name: FormatApproximately
// Dependencies: []

// Module 13042 (FormatApproximately)
arg5.FormatApproximately = function FormatApproximately(internalSlots, result) {
  result.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return result;
};
