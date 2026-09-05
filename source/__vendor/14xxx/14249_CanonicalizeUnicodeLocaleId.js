// Module ID: 14249
// Function ID: 14250
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 14249 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
