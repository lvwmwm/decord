// Module ID: 15323
// Function ID: 15324
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15323

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
