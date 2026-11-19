// Module ID: 4714
// Function ID: 4715
// Name: PremiumRoleUtils
// Dependencies: [2]
// Exports: isSubscriptionRole, isSubscriptionRoleAvailableForPurchase

// Module 4714 (PremiumRoleUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/PremiumRoleUtils.tsx");

export function isSubscriptionRole(role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.subscription_listing_id;
    }
  }
  return null != prop;
}
export function isSubscriptionRoleAvailableForPurchase(role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.available_for_purchase;
    }
  }
  return undefined !== prop;
}
