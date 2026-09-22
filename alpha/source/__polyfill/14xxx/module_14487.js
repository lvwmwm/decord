// Module ID: 14487
// Function ID: 14488
// Dependencies: []
// Exports: CanonicalizeLocaleList

// Module 14487

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
