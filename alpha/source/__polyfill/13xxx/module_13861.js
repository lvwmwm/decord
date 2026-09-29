// Module ID: 13861
// Function ID: 13862
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13861

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
