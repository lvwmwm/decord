// Module ID: 13452
// Function ID: 13453
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13452 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
