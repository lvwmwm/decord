// Module ID: 14510
// Function ID: 14511
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14510 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
