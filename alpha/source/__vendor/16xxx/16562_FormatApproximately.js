// Module ID: 16562
// Function ID: 16563
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16562 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
