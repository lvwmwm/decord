// Module ID: 15493
// Function ID: 15494
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15493

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
