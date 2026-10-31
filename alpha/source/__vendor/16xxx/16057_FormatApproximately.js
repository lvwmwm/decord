// Module ID: 16057
// Function ID: 16058
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16057 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
