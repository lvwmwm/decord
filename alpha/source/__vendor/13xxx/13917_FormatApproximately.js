// Module ID: 13917
// Function ID: 13918
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13917 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
