// Module ID: 14011
// Function ID: 14012
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 14011 (CanonicalizeUnicodeLocaleId)

export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
