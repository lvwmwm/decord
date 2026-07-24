// Module ID: 13235
// Function ID: 101867
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13235 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
