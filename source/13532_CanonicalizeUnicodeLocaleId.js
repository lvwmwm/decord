// Module ID: 13532
// Function ID: 13533
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13532 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
