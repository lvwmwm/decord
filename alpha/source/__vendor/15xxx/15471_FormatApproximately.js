// Module ID: 15471
// Function ID: 15472
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15471 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
