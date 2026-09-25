// Module ID: 13737
// Function ID: 13738
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13737

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
