// Module ID: 14282
// Function ID: 14283
// Name: CanonicalizeLocaleList
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14282 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
