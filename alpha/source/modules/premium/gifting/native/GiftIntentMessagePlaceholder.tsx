// Module ID: 11500
// Function ID: 11501
// Name: GiftIntentMessagePlaceholder
// Dependencies: [1115, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11500 (GiftIntentMessagePlaceholder)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = util.intl;
  return intl.string(util.t.OrwKgi);
};
