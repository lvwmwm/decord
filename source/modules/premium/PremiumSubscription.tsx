// Module ID: 3788
// Function ID: 29530
// Name: getNonePlanIdForIntervalType
// Dependencies: [1851, 2]
// Exports: getBasePlanIdForSubscriptionItems, getNonePlanIdForSubscription

// Module 3788 (getNonePlanIdForIntervalType)
import GuildFeatures from "GuildFeatures";

let closure_0;
let closure_1;
let closure_2;
function getNonePlanIdForIntervalType(interval, intervalCount) {
  let num = intervalCount;
  const constants = interval;
  if (intervalCount === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((arg0) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.skuId === outer1_2.NONE;
    }
    if (tmp2) {
      tmp2 = tmp.interval === closure_0;
    }
    if (tmp2) {
      tmp2 = tmp.intervalCount === num;
    }
    return tmp2;
  });
  if (null == NONE_MONTH) {
    NONE_MONTH = constants.NONE_MONTH;
  }
  return NONE_MONTH;
}
function getBaseSubscriptionItemForSubscriptionItems(arr) {
  return arr.find((arg0) => null != outer1_1[arg0.planId] && null != outer1_1[arg0.planId].premiumType);
}
({ SubscriptionPlans: closure_0, SubscriptionPlanInfo: closure_1, PremiumSubscriptionSKUs: closure_2 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/premium/PremiumSubscription.tsx");

export { getNonePlanIdForIntervalType };
export const getNonePlanIdForSubscription = function getNonePlanIdForSubscription(arg0) {
  return getNonePlanIdForIntervalType(dependencyMap[arg0.items[0].planId].interval, dependencyMap[arg0.items[0].planId].intervalCount);
};
export { getBaseSubscriptionItemForSubscriptionItems };
export const getBasePlanIdForSubscriptionItems = function getBasePlanIdForSubscriptionItems(items, interval, intervalCount) {
  const tmp = getBaseSubscriptionItemForSubscriptionItems(items);
  if (null == tmp) {
    if (items.length > 0) {
      ({ interval, intervalCount } = dependencyMap[items[0].planId]);
    }
    return getNonePlanIdForIntervalType(interval, intervalCount);
  } else {
    return tmp.planId;
  }
};
