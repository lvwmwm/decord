// Module ID: 14533
// Function ID: 14534
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14533

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
