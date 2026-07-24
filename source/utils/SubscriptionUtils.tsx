// Module ID: 8246
// Function ID: 65092
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 3781, 653, 1851, 44, 8247, 3776, 5638, 566, 8249, 3712, 2]
// Exports: didBeginPurchaseFlowOnFractionalPremium, getOrFetchSubscriptionPlan, getSubscriptionPauseDurations, getSubscriptionSKUs, subscriptionCanDowngrade, useGetOrFetchSubscriptionPlan

// Module 8246 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getSubscriptionPlans(items) {
  items = items.items;
  return items.map((planId) => {
    const value = outer1_5.get(planId.planId);
    outer1_1(outer1_2[5])(null != value, "Unable to fetch plan");
    return value;
  });
}
function subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type === constants2.PREMIUM) {
    if (null == currentSubscriptionPlanIdForGroup) {
      return true;
    }
  }
  let obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
  if (null == currentSubscriptionPlanIdForGroup) {
    const CheckoutError2 = require(8247) /* _isNativeReflectConstruct */.CheckoutError;
    obj = { message: "Current subscription has no plan in group" };
    obj.extraSentryInformation = obj;
    const prototype2 = CheckoutError2.prototype;
    const checkoutError2 = new CheckoutError2(obj);
    throw checkoutError2;
  } else {
    if (currentSubscriptionPlanIdForGroup === closure_8.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === closure_8.PREMIUM_MONTH_TIER_2) {
        const CheckoutError = require(8247) /* _isNativeReflectConstruct */.CheckoutError;
        obj = { message: "Unexpected plan switch" };
        obj.extraSentryInformation = obj;
        const prototype = CheckoutError.prototype;
        const checkoutError = new CheckoutError(obj);
        throw checkoutError;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
}
({ SubscriptionStatusTypes: closure_6, SubscriptionTypes: closure_7 } = ME);
({ SubscriptionPlans: closure_8, SubscriptionPlanInfo: closure_9 } = GuildFeatures);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/SubscriptionUtils.tsx");

export { getSubscriptionPlans };
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  return getSubscriptionPlans(items).map((skuId) => skuId.skuId);
};
export { subscriptionCanSwitchImmediately };
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  return !subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr);
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId, closure_1) {
  const value = _isNativeReflectConstruct.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    importDefault(44)(null != table[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const tmp10 = importDefault(44);
    const tmp11 = null != table[subscriptionPlanId];
    const result = require(3776) /* _createForOfIteratorHelperLoose */.castPremiumSubscriptionAsSkuId(tmp7.skuId);
    if (!_isNativeReflectConstruct.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = require(5638) /* fetchSubscriptionPlansForSKU */.fetchSubscriptionPlansForSKU(result, closure_1);
      const obj = require(5638) /* fetchSubscriptionPlansForSKU */;
    }
    const obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId) {
  const _require = subscriptionPlanId;
  let closure_1 = arg1;
  let items = [_isNativeReflectConstruct];
  const tmp = callback(_require(first[9]).useStateFromStoresArray(items, () => {
    let value = null;
    if (null != closure_0) {
      value = outer1_5.get(closure_0);
    }
    const items = [value, ];
    let isFetchingForSKUResult = null != value;
    if (isFetchingForSKUResult) {
      isFetchingForSKUResult = outer1_5.isFetchingForSKU(value.skuId);
    }
    items[1] = isFetchingForSKUResult;
    return items;
  }), 2);
  first = tmp[0];
  callback = tmp3;
  const items1 = [first, subscriptionPlanId, arg1, tmp[1]];
  const effect = React.useEffect(() => {
    if (null == first) {
      if (null != subscriptionPlanId) {
        if (!_slicedToArray) {
          const _HermesInternal = HermesInternal;
          callback(first[5])(null != outer1_9[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
          const tmp6 = callback(first[5]);
          const tmp7 = null != outer1_9[subscriptionPlanId];
          const obj = subscriptionPlanId(first[8]);
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(subscriptionPlanId(first[7]).castPremiumSubscriptionAsSkuId(tmp3.skuId), callback);
          const obj2 = subscriptionPlanId(first[7]);
        }
      }
    }
  }, items1);
  return first;
};
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  let iter2;
  const keys = Object.keys(require(8249) /* PauseDuration */.PauseDuration);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  if (status.status !== constants.PAUSED) {
    let obj = { durations: found, currentDaysPaused: 0 };
    return obj;
  } else if (null != status.pauseEndsAt) {
    const tmp4 = importDefault(3712)(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(importDefault(3712)(status.pauseEndsAt).diff(tmp4, "days", true));
    const items = [];
    const tmp7 = _createForOfIteratorHelperLoose(found);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp8 = require;
        let tmp9 = dependencyMap;
        if (require(8249) /* PauseDuration */.PauseDuration[value] > rounded) {
          let arr = items.push(value);
        }
        iter2 = tmp7();
        iter = iter2;
      } while (!iter2.done);
    }
    obj = { durations: items, currentDaysPaused: rounded };
    return obj;
  } else {
    obj = { durations: [], currentDaysPaused: 0 };
    return obj;
  }
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    isMomentResult = importDefault(3712).isMoment(isSameOrAfter);
    const obj = importDefault(3712);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(importDefault(3712)());
  }
  return isMomentResult;
};
