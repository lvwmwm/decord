// Module ID: 13246
// Function ID: 101994
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13246 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
