// Module ID: 13888
// Function ID: 13889
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 13888

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
