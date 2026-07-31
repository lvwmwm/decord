// Module ID: 13333
// Function ID: 13334
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13333 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
