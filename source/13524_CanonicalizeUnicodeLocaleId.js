// Module ID: 13524
// Function ID: 13525
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13524 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
