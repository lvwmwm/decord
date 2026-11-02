// Module ID: 16061
// Function ID: 16062
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16061 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
