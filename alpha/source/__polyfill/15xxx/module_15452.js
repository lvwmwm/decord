// Module ID: 15452
// Function ID: 15453
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15452

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
