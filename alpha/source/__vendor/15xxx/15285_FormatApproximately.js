// Module ID: 15285
// Function ID: 15286
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15285 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
