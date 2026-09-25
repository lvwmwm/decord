// Module ID: 13766
// Function ID: 13767
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13766 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
