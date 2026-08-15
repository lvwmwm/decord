// Module ID: 13625
// Function ID: 13626
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13625 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
