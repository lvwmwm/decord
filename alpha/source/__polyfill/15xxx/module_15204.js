// Module ID: 15204
// Function ID: 15205
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15204

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
