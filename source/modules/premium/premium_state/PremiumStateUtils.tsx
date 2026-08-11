// Module ID: 1937
// Function ID: 1938
// Name: parseServerPremiumState
// Dependencies: [2]
// Exports: parseServerPremiumState

// Module 1937 (parseServerPremiumState)
const result = require("set").fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export const parseServerPremiumState = function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = { premiumSubscriptionType: null, premiumSource: null, premiumSubscriptionGroupRole: null };
    ({ premium_subscription_type: obj[0], premium_source: obj[1], premium_subscription_group_role: obj[2] } = premium_state);
    tmp = obj;
  }
  return tmp;
};
