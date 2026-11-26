// Module ID: 15665
// Function ID: 15666
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15665 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
