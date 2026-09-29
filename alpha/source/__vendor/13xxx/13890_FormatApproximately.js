// Module ID: 13890
// Function ID: 13891
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13890 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
