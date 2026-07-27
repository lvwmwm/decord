// Module ID: 13247
// Function ID: 101999
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13247 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
