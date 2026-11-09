// Module ID: 16374
// Function ID: 16375
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16374 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
