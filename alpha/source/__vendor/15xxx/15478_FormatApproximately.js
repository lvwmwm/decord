// Module ID: 15478
// Function ID: 15479
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15478 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
