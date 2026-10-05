// Module ID: 14014
// Function ID: 14015
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14014

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
