// Module ID: 16316
// Function ID: 16317
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16316 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
