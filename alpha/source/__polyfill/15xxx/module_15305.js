// Module ID: 15305
// Function ID: 15306
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15305

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
