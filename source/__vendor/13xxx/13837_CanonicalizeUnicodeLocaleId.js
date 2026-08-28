// Module ID: 13837
// Function ID: 13838
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13837 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
