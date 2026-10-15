// Module ID: 15158
// Function ID: 15159
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 15158 (CanonicalizeUnicodeLocaleId)

export const CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
