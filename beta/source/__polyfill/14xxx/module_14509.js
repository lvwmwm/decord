// Module ID: 14509
// Function ID: 14510
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14509

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
