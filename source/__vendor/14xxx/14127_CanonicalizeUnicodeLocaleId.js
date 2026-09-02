// Module ID: 14127
// Function ID: 14128
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 14127 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
