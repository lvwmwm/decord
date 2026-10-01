// Module ID: 13925
// Function ID: 13926
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13925 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
