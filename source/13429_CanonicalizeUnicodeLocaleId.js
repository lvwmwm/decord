// Module ID: 13429
// Function ID: 13430
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13429 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
