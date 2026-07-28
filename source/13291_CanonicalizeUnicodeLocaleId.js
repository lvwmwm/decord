// Module ID: 13291
// Function ID: 102172
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13291 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
