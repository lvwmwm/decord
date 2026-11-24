// Module ID: 15469
// Function ID: 15470
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15469 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
