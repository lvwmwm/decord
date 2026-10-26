// Module ID: 15477
// Function ID: 15478
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15477 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
