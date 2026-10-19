// Module ID: 15257
// Function ID: 15258
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15257 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
