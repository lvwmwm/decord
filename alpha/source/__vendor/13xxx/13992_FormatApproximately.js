// Module ID: 13992
// Function ID: 13993
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13992 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
