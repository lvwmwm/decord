// Module ID: 15348
// Function ID: 15349
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15348 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
