// Module ID: 15276
// Function ID: 15277
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 15276 (CanonicalizeUnicodeLocaleId)

export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
