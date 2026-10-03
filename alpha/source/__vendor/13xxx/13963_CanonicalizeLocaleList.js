// Module ID: 13963
// Function ID: 13964
// Name: CanonicalizeLocaleList
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13963 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
