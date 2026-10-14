// Module ID: 13994
// Function ID: 13995
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13994 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
