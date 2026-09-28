// Module ID: 13741
// Function ID: 13742
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13741

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
