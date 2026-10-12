// Module ID: 14503
// Function ID: 14504
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 14503 (CanonicalizeUnicodeLocaleId)

export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
