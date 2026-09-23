// Module ID: 14616
// Function ID: 14617
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14616

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
