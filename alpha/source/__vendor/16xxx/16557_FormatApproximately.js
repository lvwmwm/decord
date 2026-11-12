// Module ID: 16557
// Function ID: 16558
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16557 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
