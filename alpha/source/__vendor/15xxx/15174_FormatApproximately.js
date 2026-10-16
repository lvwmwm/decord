// Module ID: 15174
// Function ID: 15175
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15174 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
};
