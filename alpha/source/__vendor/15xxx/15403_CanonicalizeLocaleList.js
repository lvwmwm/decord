// Module ID: 15403
// Function ID: 15404
// Name: CanonicalizeLocaleList
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15403 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
