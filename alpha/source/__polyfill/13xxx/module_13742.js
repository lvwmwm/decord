// Module ID: 13742
// Function ID: 13743
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13742

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
