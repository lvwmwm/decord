// Module ID: 13692
// Function ID: 13693
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13692

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
