// Module ID: 15453
// Function ID: 15454
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15453 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
