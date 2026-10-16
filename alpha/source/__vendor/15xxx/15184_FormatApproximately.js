// Module ID: 15184
// Function ID: 15185
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15184 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
