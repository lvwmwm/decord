// Module ID: 15110
// Function ID: 15111
// Name: CanonicalizeLocaleList
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15110 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
