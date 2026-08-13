// Module ID: 13581
// Function ID: 13582
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13581 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
