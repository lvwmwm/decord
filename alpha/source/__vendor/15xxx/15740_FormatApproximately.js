// Module ID: 15740
// Function ID: 15741
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15740 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
