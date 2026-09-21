// Module ID: 14484
// Function ID: 14485
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14484

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
