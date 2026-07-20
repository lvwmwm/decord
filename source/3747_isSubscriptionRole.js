// Module ID: 3747
// Function ID: 28586
// Name: isSubscriptionRole
// Dependencies: []
// Exports: isSubscriptionRole, isSubscriptionRoleAvailableForPurchase

// Module 3747 (isSubscriptionRole)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/PremiumRoleUtils.tsx");

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
