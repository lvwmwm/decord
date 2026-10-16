// Module ID: 15194
// Function ID: 15195
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15194

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
