// Module ID: 15512
// Function ID: 15513
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15512 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
