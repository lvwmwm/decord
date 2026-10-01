// Module ID: 13896
// Function ID: 13897
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13896

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
