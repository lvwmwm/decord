// Module ID: 14843
// Function ID: 14844
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14843 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
