// Module ID: 3786
// Function ID: 29524
// Name: getNonePlanIdForIntervalType
// Dependencies: [1889, 2]
// Exports: getBasePlanIdForSubscriptionItems, getNonePlanIdForSubscription

// Module 3786 (getNonePlanIdForIntervalType)
import TableId from "TableId";
import result2 from "result2";

function getNonePlanIdForIntervalType(interval, intervalCount) {
  let num = intervalCount;
  if (intervalCount === undefined) {
    num = 1;
  }
  const keys = Object.keys(num);
  let NONE_MONTH = keys.find((arg0) => {
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = tmp.skuId === constants.NONE;
    }
    if (tmp2) {
      tmp2 = tmp.interval === arg0;
    }
    if (tmp2) {
      tmp2 = tmp.intervalCount === num;
    }
    return tmp2;
  });
  if (null == NONE_MONTH) {
    NONE_MONTH = interval.NONE_MONTH;
  }
  return NONE_MONTH;
}
function getBaseSubscriptionItemForSubscriptionItems(arr) {
  return arr.find((arg0) => null != closure_1[arg0.planId] && null != closure_1[arg0.planId].premiumType);
}
({ SubscriptionPlans: closure_0, SubscriptionPlanInfo: closure_1, PremiumSubscriptionSKUs: closure_2 } = TableId);
const result = result2.fileFinishedImporting("modules/premium/PremiumSubscription.tsx");

export { getNonePlanIdForIntervalType };
export const getNonePlanIdForSubscription = function getNonePlanIdForSubscription(arg0) {
  return getNonePlanIdForIntervalType(closure_1[arg0.items[0].planId].interval, closure_1[arg0.items[0].planId].intervalCount);
};
export { getBaseSubscriptionItemForSubscriptionItems };
export const getBasePlanIdForSubscriptionItems = function getBasePlanIdForSubscriptionItems(items, interval, intervalCount) {
  const tmp = getBaseSubscriptionItemForSubscriptionItems(items);
  if (null == tmp) {
    if (items.length > 0) {
      ({ interval, intervalCount } = closure_1[items[0].planId]);
    }
    return getNonePlanIdForIntervalType(interval, intervalCount);
  } else {
    return tmp.planId;
  }
};
