// Module ID: 15277
// Function ID: 15278
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15277

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
