// Module ID: 13721
// Function ID: 13722
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13721 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
