// Module ID: 16364
// Function ID: 16365
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16364 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
