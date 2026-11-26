// Module ID: 16682
// Function ID: 16683
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16682 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
