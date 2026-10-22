// Module ID: 15439
// Function ID: 15440
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15439

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
