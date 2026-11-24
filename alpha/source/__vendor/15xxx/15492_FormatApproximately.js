// Module ID: 15492
// Function ID: 15493
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15492 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
