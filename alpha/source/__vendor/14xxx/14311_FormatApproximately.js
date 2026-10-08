// Module ID: 14311
// Function ID: 14312
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14311 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
