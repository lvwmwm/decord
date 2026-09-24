// Module ID: 14625
// Function ID: 14626
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14625

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
