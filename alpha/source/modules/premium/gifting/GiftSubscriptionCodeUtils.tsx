// Module ID: 11871
// Function ID: 11872
// Name: GiftSubscriptionCodeUtils
// Dependencies: [2]
// Exports: isPendingGiftSubscriptionCode

// Module 11871 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
