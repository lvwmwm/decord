// Module ID: 11817
// Function ID: 11818
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1114, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11817 (getGiftIntentCustomMessagePlaceholder)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.OrwKgi);
};
