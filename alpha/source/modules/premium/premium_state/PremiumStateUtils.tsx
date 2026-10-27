// Module ID: 1411
// Function ID: 1412
// Name: PremiumStateUtils
// Dependencies: [2]
// Exports: parseServerPremiumState

// Module 1411 (PremiumStateUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/premium_state/PremiumStateUtils.tsx");

export const parseServerPremiumState = function parseServerPremiumState(premium_state) {
  let tmp = null;
  if (null != premium_state) {
    const obj = { premiumSubscriptionType: null, premiumSource: null, premiumSubscriptionGroupRole: null };
    ({ premium_subscription_type: obj.premiumSubscriptionType, premium_source: obj.premiumSource, premium_subscription_group_role: obj.premiumSubscriptionGroupRole } = premium_state);
    tmp = obj;
  }
  return tmp;
};
