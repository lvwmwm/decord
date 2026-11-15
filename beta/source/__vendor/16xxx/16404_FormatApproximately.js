// Module ID: 16404
// Function ID: 16405
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16404 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
