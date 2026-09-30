// Module ID: 13937
// Function ID: 13938
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13937

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
