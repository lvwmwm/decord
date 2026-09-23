// Module ID: 14596
// Function ID: 14597
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14596 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
