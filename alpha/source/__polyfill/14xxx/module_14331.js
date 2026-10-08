// Module ID: 14331
// Function ID: 14332
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14331

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
