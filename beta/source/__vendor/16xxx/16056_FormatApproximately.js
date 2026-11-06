// Module ID: 16056
// Function ID: 16057
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16056 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
