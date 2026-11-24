// Module ID: 11786
// Function ID: 11787
// Name: GiftSubscriptionCodeUtils
// Dependencies: [2]
// Exports: isPendingGiftSubscriptionCode, needsGiftSubscriptionAgreement

// Module 11786 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
export function needsGiftSubscriptionAgreement(isSubscription) {
  return null != isSubscription && isSubscription.isSubscription && undefined === isSubscription.giftSubscriptionAgreement;
}
