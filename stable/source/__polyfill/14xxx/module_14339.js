// Module ID: 14339
// Function ID: 14340
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14339

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
