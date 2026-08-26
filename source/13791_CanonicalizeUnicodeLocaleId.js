// Module ID: 13791
// Function ID: 13792
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13791 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
