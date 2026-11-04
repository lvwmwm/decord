// Module ID: 16325
// Function ID: 16326
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 16325 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
