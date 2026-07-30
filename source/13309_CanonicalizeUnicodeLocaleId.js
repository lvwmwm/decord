// Module ID: 13309
// Function ID: 13310
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13309 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
