// Module ID: 15614
// Function ID: 15615
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15614 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
