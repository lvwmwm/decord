// Module ID: 16403
// Function ID: 16404
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16403 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
