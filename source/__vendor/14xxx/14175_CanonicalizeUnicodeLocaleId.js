// Module ID: 14175
// Function ID: 14176
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 14175 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
