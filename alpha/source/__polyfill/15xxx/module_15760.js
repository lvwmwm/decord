// Module ID: 15760
// Function ID: 15761
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15760

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
