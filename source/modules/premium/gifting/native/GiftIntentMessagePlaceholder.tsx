// Module ID: 10962
// Function ID: 85229
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1212, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 10962 (getGiftIntentCustomMessagePlaceholder)
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.OrwKgi);
};
