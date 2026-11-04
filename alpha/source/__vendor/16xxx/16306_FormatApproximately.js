// Module ID: 16306
// Function ID: 16307
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16306 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
