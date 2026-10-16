// Module ID: 14489
// Function ID: 14490
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14489 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
