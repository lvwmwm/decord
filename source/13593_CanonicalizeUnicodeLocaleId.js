// Module ID: 13593
// Function ID: 13594
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13593 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
