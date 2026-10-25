// Module ID: 15498
// Function ID: 15499
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15498

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
