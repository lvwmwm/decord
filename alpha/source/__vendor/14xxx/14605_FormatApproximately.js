// Module ID: 14605
// Function ID: 14606
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14605 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
