// Module ID: 14143
// Function ID: 14144
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 14143 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
