// Module ID: 14522
// Function ID: 14523
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14522

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
