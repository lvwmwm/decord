// Module ID: 13818
// Function ID: 13819
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13818 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
