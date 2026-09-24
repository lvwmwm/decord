// Module ID: 14576
// Function ID: 14577
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14576

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
