// Module ID: 14513
// Function ID: 14514
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14513 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
