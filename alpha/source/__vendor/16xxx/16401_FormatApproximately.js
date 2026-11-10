// Module ID: 16401
// Function ID: 16402
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16401 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
