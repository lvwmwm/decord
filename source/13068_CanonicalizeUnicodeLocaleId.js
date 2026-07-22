// Module ID: 13068
// Function ID: 99384
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13068 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
