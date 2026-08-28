// Module ID: 11323
// Function ID: 11324
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1236, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11323 (getGiftIntentCustomMessagePlaceholder)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.OrwKgi);
};
