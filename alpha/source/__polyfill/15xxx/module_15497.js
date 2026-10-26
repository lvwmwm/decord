// Module ID: 15497
// Function ID: 15498
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15497

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
