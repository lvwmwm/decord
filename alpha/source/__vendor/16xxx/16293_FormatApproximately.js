// Module ID: 16293
// Function ID: 16294
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 16293 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
