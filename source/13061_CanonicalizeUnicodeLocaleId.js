// Module ID: 13061
// Function ID: 99351
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13061 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
