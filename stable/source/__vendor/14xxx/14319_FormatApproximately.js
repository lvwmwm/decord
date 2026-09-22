// Module ID: 14319
// Function ID: 14320
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14319 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
