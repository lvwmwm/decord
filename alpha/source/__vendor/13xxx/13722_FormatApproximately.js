// Module ID: 13722
// Function ID: 13723
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13722 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
