// Module ID: 14863
// Function ID: 14864
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14863

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
