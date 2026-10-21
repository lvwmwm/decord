// Module ID: 15375
// Function ID: 15376
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15375 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
