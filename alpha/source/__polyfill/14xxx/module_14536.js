// Module ID: 14536
// Function ID: 14537
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14536

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
