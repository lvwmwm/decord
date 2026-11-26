// Module ID: 12384
// Function ID: 12385
// Name: GiftSubscriptionCodeUtils
// Dependencies: [2]
// Exports: isPendingGiftSubscriptionCode

// Module 12384 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
