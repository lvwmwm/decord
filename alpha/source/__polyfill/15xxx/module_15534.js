// Module ID: 15534
// Function ID: 15535
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15534

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
