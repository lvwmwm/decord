// Module ID: 14012
// Function ID: 14013
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14012 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
