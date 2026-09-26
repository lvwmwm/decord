// Module ID: 14541
// Function ID: 14542
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14541 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
