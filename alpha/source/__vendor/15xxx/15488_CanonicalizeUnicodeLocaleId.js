// Module ID: 15488
// Function ID: 15489
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 15488 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
