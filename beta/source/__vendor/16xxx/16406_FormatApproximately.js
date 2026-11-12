// Module ID: 16406
// Function ID: 16407
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16406 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
