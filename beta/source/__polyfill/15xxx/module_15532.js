// Module ID: 15532
// Function ID: 15533
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15532

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
