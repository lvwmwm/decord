// Module ID: 14504
// Function ID: 14505
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14504

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
