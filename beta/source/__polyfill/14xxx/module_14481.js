// Module ID: 14481
// Function ID: 14482
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14481

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
