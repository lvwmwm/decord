// Module ID: 13438
// Function ID: 13439
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13438 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
