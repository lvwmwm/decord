// Module ID: 13945
// Function ID: 13946
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13945

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
