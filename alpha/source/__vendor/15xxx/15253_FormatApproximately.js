// Module ID: 15253
// Function ID: 15254
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15253 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
