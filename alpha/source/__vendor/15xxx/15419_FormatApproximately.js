// Module ID: 15419
// Function ID: 15420
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15419 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
