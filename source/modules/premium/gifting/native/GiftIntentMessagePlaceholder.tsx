// Module ID: 10944
// Function ID: 85034
// Name: getGiftIntentCustomMessagePlaceholder
// Dependencies: [1212, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 10944 (getGiftIntentCustomMessagePlaceholder)
const result = require("set").fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.string(require(1212) /* getSystemLocale */.t.OrwKgi);
};
