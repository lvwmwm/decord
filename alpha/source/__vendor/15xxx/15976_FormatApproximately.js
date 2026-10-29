// Module ID: 15976
// Function ID: 15977
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15976 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
