// Module ID: 14571
// Function ID: 14572
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14571

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
