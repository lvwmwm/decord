// Module ID: 11849
// Function ID: 11850
// Name: GiftSubscriptionCodeUtils
// Dependencies: [2]
// Exports: isPendingGiftSubscriptionCode

// Module 11849 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
