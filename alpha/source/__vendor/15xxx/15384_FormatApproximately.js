// Module ID: 15384
// Function ID: 15385
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15384 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
