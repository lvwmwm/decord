// Module ID: 11982
// Function ID: 11983
// Name: GiftIntentMessagePlaceholder
// Dependencies: [1119, 2]
// Exports: getGiftIntentCustomMessagePlaceholder

// Module 11982 (GiftIntentMessagePlaceholder)
import util from "util" /* 1119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/GiftIntentMessagePlaceholder.tsx");

export const getGiftIntentCustomMessagePlaceholder = function getGiftIntentCustomMessagePlaceholder() {
  const intl = util.intl;
  return intl.string(util.t.OrwKgi);
};
