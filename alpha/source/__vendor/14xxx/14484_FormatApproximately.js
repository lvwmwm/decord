// Module ID: 14484
// Function ID: 14485
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14484 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
