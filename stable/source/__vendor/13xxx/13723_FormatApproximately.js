// Module ID: 13723
// Function ID: 13724
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 13723 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
