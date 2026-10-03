// Module ID: 14012
// Function ID: 14013
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14012

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
