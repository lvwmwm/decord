// Module ID: 3749
// Function ID: 28597
// Name: isSubscriptionRole
// Dependencies: [2]
// Exports: isSubscriptionRole, isSubscriptionRoleAvailableForPurchase

// Module 3749 (isSubscriptionRole)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/PremiumRoleUtils.tsx");

export const isSubscriptionRole = function isSubscriptionRole(role) {
  let prop;
  if (null != role) {
    const tags = role.tags;
    if (null != tags) {
      prop = tags.subscription_listing_id;
    }
  }
  return null != prop;
};
export const isSubscriptionRoleAvailableForPurchase = function isSubscriptionRoleAvailableForPurchase(value) {
  let prop;
  if (null != value) {
    const tags = value.tags;
    if (null != tags) {
      prop = tags.available_for_purchase;
    }
  }
  return undefined !== prop;
};
