// Module ID: 13786
// Function ID: 13787
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13786

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
