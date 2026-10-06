// Module ID: 13743
// Function ID: 13744
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13743

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
