// Module ID: 15159
// Function ID: 15160
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 15159

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
