// Module ID: 13522
// Function ID: 13523
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13522 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
