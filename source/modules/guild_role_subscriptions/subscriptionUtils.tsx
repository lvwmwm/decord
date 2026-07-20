// Module ID: 13972
// Function ID: 106258
// Name: getRoleSubscriptionPlanId
// Dependencies: []
// Exports: getRoleSubscriptionMutationPlanId, getRoleSubscriptionPlanId

// Module 13972 (getRoleSubscriptionPlanId)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/subscriptionUtils.tsx");

export const getRoleSubscriptionPlanId = function getRoleSubscriptionPlanId(items) {
  items = items.items;
  importDefault(dependencyMap[0])(1 === items.length, "more than 1 subscription item for role subscription");
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
    importDefault(dependencyMap[0])(items.length <= 1, "more than 1 renewal mutation for role subscription");
    let planId;
    if (null != items) {
      planId = items[0].planId;
    }
    return planId;
  }
};
