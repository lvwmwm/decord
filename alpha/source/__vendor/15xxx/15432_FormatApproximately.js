// Module ID: 15432
// Function ID: 15433
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15432 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
