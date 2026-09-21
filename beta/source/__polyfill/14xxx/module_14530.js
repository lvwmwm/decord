// Module ID: 14530
// Function ID: 14531
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14530

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
