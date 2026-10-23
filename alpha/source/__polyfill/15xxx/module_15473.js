// Module ID: 15473
// Function ID: 15474
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15473

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
