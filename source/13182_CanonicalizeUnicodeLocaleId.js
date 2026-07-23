// Module ID: 13182
// Function ID: 101540
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13182 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
