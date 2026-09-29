// Module ID: 14512
// Function ID: 14513
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14512

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
