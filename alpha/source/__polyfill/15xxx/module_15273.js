// Module ID: 15273
// Function ID: 15274
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15273

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
