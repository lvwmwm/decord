// Module ID: 3903
// Function ID: 3904
// Name: isSubscriptionRole
// Dependencies: [2]
// Exports: isSubscriptionRole, isSubscriptionRoleAvailableForPurchase

// Module 3903 (isSubscriptionRole)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/PremiumRoleUtils.tsx");

export const isSubscriptionRole = function isSubscriptionRole(role) {
  let prop;
  if (role != null) {
    const tags = role.tags;
    if (tags != null) {
      prop = tags.subscription_listing_id;
    }
  }
  return null != prop;
};
export const isSubscriptionRoleAvailableForPurchase = function isSubscriptionRoleAvailableForPurchase(tags) {
  let prop;
  if (tags != null) {
    tags = tags.tags;
    if (tags != null) {
      prop = tags.available_for_purchase;
    }
  }
  return undefined !== prop;
};
