// Module ID: 13718
// Function ID: 13719
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13718 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
