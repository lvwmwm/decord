// Module ID: 14461
// Function ID: 14462
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14461 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
