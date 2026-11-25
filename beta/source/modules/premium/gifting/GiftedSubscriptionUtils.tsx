// Module ID: 14168
// Function ID: 14169
// Name: GiftedSubscriptionUtils
// Dependencies: [1388, 14169, 1071, 11, 2]
// Exports: getGiftSubscriptionInterval, getGiftedSubscriptionRowState, getGiftedSubscriptions, getPendingGiftSubscriptionGrants

// Module 14168 (GiftedSubscriptionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GiftSubscriptionConstants from "GiftSubscriptionConstants" /* 14169 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let hasOwnProperty;
let metroRequire;
function isGiftedSubscription(type) {
  return type.type === metroRequire.GIFT && null != type.giftSubscription && type.status !== hasOwnProperty.ENDED;
}
({ GiftSubscriptionPlans: c2, SubscriptionIntervalTypes: c3 } = PremiumConstants);
const constants2 = GiftSubscriptionConstants.GiftSubscriptionAgreementStatus;
({ SubscriptionStatusTypes: hasOwnProperty, SubscriptionTypes: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftedSubscriptionUtils.tsx");

export { isGiftedSubscription };
export function getGiftedSubscriptions(arg0) {
  const arr = Array.from(arg0);
  const found = arr.filter(isGiftedSubscription);
  return found.sort((id, id2) => {
    const obj = SnowflakeUtilsDefault;
    return obj.compare(id2.id, id.id);
  });
}
export function getGiftedSubscriptionRowState(subscription) {
  let canceledAt;
  let giftSubscription;
  let obj;
  let status;
  ({ giftSubscription, status, canceledAt } = subscription);
  const recipientUserId = giftSubscription.recipientUserId;
  if (giftSubscription.status === constants2.PENDING) {
    obj = { kind: "pending", expiresAt: giftSubscription.acceptanceExpiresAt, isCanceled: null != canceledAt };
    const obj2 = { kind: "pending", expiresAt: giftSubscription.acceptanceExpiresAt, isCanceled: null != canceledAt };
  } else {
    if (status !== hasOwnProperty.PAST_DUE) {
      if (status !== hasOwnProperty.BILLING_RETRY) {
        if (null == canceledAt) {
          if (giftSubscription.status !== constants2.ENDED) {
            obj = { kind: "active", renewsAt: tmp, recipientUserId };
          }
        }
        obj = { kind: "canceled", recipientUserId, canResubscribe: giftSubscription.status === constants2.ACTIVE };
        const obj3 = { kind: "canceled", recipientUserId, canResubscribe: giftSubscription.status === constants2.ACTIVE };
      }
    }
    obj = { kind: "payment_failed", recipientUserId };
    const obj4 = { kind: "payment_failed", recipientUserId };
  }
  return obj;
}
export function getGiftSubscriptionInterval(planId) {
  if (React2.PREMIUM_GIFT_MONTH_TIER_2 === planId) {
    return { interval: constants.MONTH, intervalCount: 1 };
  } else if (tmp.PREMIUM_GIFT_YEAR_TIER_2 === planId) {
    return { interval: constants.YEAR, intervalCount: 1 };
  } else {
    return null;
  }
}
export function getPendingGiftSubscriptionGrants(stateFromStoresArray1) {
  const giftCodes = new Set();
  const entitlementIds = new Set();
  const iter = stateFromStoresArray1[Symbol.iterator]();
  while (iter !== undefined) {
    let giftSubscription = iter.next().giftSubscription;
    let tmp = giftSubscription;
    if (giftSubscription.status === constants2.PENDING) {
      if (null != tmp.initialGiftCode) {
        let addResult = giftCodes.add(tmp.initialGiftCode);
      }
      if (null != tmp.initialEntitlementId) {
        let addResult1 = entitlementIds.add(tmp.initialEntitlementId);
      }
    }
    continue;
  }
  return { giftCodes, entitlementIds };
}
