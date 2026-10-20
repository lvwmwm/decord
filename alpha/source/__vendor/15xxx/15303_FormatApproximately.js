// Module ID: 15303
// Function ID: 15304
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15303 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
