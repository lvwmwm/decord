// Module ID: 14825
// Function ID: 14826
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14825

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
