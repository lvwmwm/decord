// Module ID: 16680
// Function ID: 16681
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16680 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
