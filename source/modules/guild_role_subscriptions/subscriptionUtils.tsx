// Module ID: 14153
// Function ID: 108832
// Name: getRoleSubscriptionPlanId
// Dependencies: [44, 2]
// Exports: getRoleSubscriptionMutationPlanId, getRoleSubscriptionPlanId

// Module 14153 (getRoleSubscriptionPlanId)
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/subscriptionUtils.tsx");

export const getRoleSubscriptionPlanId = function getRoleSubscriptionPlanId(items) {
  items = items.items;
  importDefault(44)(1 === items.length, "more than 1 subscription item for role subscription");
  return items[0].planId;
};
export const getRoleSubscriptionMutationPlanId = function getRoleSubscriptionMutationPlanId(renewalMutations) {
  let items;
  if (null != renewalMutations) {
    renewalMutations = renewalMutations.renewalMutations;
    if (null != renewalMutations) {
      items = renewalMutations.items;
    }
  }
  if (null != items) {
    importDefault(44)(items.length <= 1, "more than 1 renewal mutation for role subscription");
    let planId;
    if (null != items) {
      planId = items[0].planId;
    }
    return planId;
  }
};
