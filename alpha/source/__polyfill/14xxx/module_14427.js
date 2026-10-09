// Module ID: 14427
// Function ID: 14428
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14427

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
