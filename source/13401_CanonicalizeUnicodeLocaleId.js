// Module ID: 13401
// Function ID: 13402
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13401 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
