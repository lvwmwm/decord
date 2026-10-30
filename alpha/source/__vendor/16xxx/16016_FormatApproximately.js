// Module ID: 16016
// Function ID: 16017
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16016 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
