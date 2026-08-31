// Module ID: 13871
// Function ID: 13872
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []

// Module 13871 (CanonicalizeUnicodeLocaleId)
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
};
