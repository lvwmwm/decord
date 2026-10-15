// Module ID: 15139
// Function ID: 15140
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15139 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
