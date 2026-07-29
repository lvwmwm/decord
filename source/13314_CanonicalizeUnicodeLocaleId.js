// Module ID: 13314
// Function ID: 13315
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13314 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
