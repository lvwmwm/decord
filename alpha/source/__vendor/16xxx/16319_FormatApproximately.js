// Module ID: 16319
// Function ID: 16320
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16319 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
