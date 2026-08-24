// Module ID: 13683
// Function ID: 13684
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13683 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
