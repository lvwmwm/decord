// Module ID: 13059
// Function ID: 99329
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13059 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
