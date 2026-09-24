// Module ID: 14551
// Function ID: 14552
// Name: FormatApproximately
// Dependencies: []
// Exports: FormatApproximately

// Module 14551 (FormatApproximately)

export const FormatApproximately = function FormatApproximately(internalSlots, arr) {
  arr.push({ type: "approximatelySign", value: internalSlots.dataLocaleData.numbers.symbols[internalSlots.numberingSystem].approximatelySign });
  return arr;
};
