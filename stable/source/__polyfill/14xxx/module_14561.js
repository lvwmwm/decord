// Module ID: 14561
// Function ID: 14562
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14561

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
