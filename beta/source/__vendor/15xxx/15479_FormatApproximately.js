// Module ID: 15479
// Function ID: 15480
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15479 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
