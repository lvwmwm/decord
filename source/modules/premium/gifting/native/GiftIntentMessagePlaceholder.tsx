// Module ID: 11390
// Function ID: 11391
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1236, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11390 (getGiftIntentCustomMessagePlaceholder)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.OrwKgi);
};
