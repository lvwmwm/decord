// Module ID: 11791
// Function ID: 11792
// Name: GiftSubscriptionCodeUtils
// Dependencies: [2]
// Exports: isPendingGiftSubscriptionCode, needsGiftSubscriptionAgreement

// Module 11791 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
export function needsGiftSubscriptionAgreement(isSubscription) {
  return null != isSubscription && isSubscription.isSubscription && undefined === isSubscription.giftSubscriptionAgreement;
}
