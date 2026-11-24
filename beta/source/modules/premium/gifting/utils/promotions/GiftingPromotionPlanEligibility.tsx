// Module ID: 9476
// Function ID: 9477
// Name: GiftingPromotionPlanEligibility
// Dependencies: [1388, 2]
// Exports: isPlanEligibleForGiftingPromotion

// Module 9476 (GiftingPromotionPlanEligibility)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import size from "module_2" /* 2 */;

const SubscriptionPlans = PremiumConstants.SubscriptionPlans;
const result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/GiftingPromotionPlanEligibility.tsx");

export function isPlanEligibleForGiftingPromotion(id) {
  const items = [, , ];
  ({ PREMIUM_YEAR_TIER_2: arr[0], PREMIUM_MONTH_TIER_2: arr[1], PREMIUM_3_MONTH_TIER_2: arr[2] } = SubscriptionPlans);
  return items.includes(id);
}
