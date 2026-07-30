// Module ID: 11003
// Function ID: 11004
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1236, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11003 (getGiftIntentCustomMessagePlaceholder)
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t.OrwKgi);
};
