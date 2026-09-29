// Module ID: 13910
// Function ID: 13911
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13910

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
