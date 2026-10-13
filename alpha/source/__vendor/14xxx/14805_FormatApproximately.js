// Module ID: 14805
// Function ID: 14806
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14805 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
