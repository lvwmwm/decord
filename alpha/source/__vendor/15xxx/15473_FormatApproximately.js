// Module ID: 15473
// Function ID: 15474
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15473 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
