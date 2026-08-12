// Module ID: 13589
// Function ID: 13590
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13589 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
