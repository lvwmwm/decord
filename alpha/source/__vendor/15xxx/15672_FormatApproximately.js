// Module ID: 15672
// Function ID: 15673
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15672 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
