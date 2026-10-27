// Module ID: 15514
// Function ID: 15515
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15514 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
