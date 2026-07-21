// Module ID: 1864
// Function ID: 20533
// Name: parseServerPremiumState
// Dependencies: []
// Exports: parseServerPremiumState

// Module 1864 (parseServerPremiumState)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export const parseServerPremiumState = function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = {};
    ({ premium_subscription_type: obj.premiumSubscriptionType, premium_source: obj.premiumSource, premium_subscription_group_role: obj.premiumSubscriptionGroupRole } = premium_state);
    tmp = obj;
  }
  return tmp;
};
