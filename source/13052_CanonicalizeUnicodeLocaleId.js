// Module ID: 13052
// Function ID: 99306
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13052 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
