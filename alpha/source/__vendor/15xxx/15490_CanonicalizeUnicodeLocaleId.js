// Module ID: 15490
// Function ID: 15491
// Name: CanonicalizeUnicodeLocaleId
// Dependencies: []
// Exports: CanonicalizeUnicodeLocaleId

// Module 15490 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
