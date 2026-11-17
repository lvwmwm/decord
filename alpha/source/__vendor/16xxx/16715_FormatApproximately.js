// Module ID: 16715
// Function ID: 16716
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16715 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
