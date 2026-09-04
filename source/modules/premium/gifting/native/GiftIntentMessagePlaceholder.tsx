// Module ID: 11749
// Function ID: 11750
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1233, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11749 (getGiftIntentCustomMessagePlaceholder)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.OrwKgi);
};
