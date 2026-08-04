// Module ID: 13430
// Function ID: 13431
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13430 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
