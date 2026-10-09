// Module ID: 14407
// Function ID: 14408
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14407 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
