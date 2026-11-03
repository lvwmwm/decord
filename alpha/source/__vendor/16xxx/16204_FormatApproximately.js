// Module ID: 16204
// Function ID: 16205
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16204 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
