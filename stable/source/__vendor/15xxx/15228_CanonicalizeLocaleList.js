// Module ID: 15228
// Function ID: 15229
// Name: CanonicalizeLocaleList
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15228 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
