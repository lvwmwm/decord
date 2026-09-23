// Module ID: 14567
// Function ID: 14568
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14567

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
