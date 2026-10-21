// Module ID: 15395
// Function ID: 15396
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15395

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
