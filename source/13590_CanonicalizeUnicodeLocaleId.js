// Module ID: 13590
// Function ID: 13591
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13590 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
