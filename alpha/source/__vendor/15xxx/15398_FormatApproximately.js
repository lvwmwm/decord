// Module ID: 15398
// Function ID: 15399
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 15398 (FormatApproximately)

export function FormatApproximately(internalSlots, arr) {
  const obj = { type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign };
  arr.push(obj);
  return arr;
}
