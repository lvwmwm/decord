// Module ID: 14032
// Function ID: 14033
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14032

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
