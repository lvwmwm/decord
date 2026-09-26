// Module ID: 13693
// Function ID: 13694
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13693

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
