// Module ID: 13904
// Function ID: 13905
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13904 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
