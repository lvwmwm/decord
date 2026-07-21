// Module ID: 8194
// Function ID: 64814
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: didBeginPurchaseFlowOnFractionalPremium, getOrFetchSubscriptionPlan, getSubscriptionPauseDurations, getSubscriptionSKUs, subscriptionCanDowngrade, useGetOrFetchSubscriptionPlan

// Module 8194 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
    const value = closure_5.get(planId.planId);
    callback(closure_2[5])(null != value, "Unable to fetch plan");
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
    const CheckoutError2 = newPlanId(dependencyMap[6]).CheckoutError;
    obj = { message: "Current subscription has no plan in group" };
    obj.extraSentryInformation = obj;
    const prototype2 = CheckoutError2.prototype;
    const checkoutError2 = new CheckoutError2(obj);
    throw checkoutError2;
  } else {
    if (currentSubscriptionPlanIdForGroup === closure_8.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === closure_8.PREMIUM_MONTH_TIER_2) {
        const CheckoutError = newPlanId(dependencyMap[6]).CheckoutError;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ SubscriptionStatusTypes: closure_6, SubscriptionTypes: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ SubscriptionPlans: closure_8, SubscriptionPlanInfo: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("utils/SubscriptionUtils.tsx");

export { getSubscriptionPlans };
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  return getSubscriptionPlans(items).map((skuId) => skuId.skuId);
};
export { subscriptionCanSwitchImmediately };
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  return !subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr);
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId) {
  const value = closure_5.get(subscriptionPlanId);
  if (null == value) {
    const _HermesInternal = HermesInternal;
    importDefault(dependencyMap[5])(null != closure_9[subscriptionPlanId], "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const tmp10 = importDefault(dependencyMap[5]);
    const tmp11 = null != closure_9[subscriptionPlanId];
    const result = arg1(dependencyMap[7]).castPremiumSubscriptionAsSkuId(tmp7.skuId);
    if (!closure_5.isFetchingForSKU(result)) {
      const subscriptionPlansForSKU = arg1(dependencyMap[8]).fetchSubscriptionPlansForSKU(result, arg1);
      const obj = arg1(dependencyMap[8]);
    }
    const obj2 = arg1(dependencyMap[7]);
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId) {
  const arg1 = subscriptionPlanId;
  const importDefault = arg1;
  const items = [closure_5];
  const tmp = callback(arg1(dependencyMap[9]).useStateFromStoresArray(items, () => {
    let value = null;
    if (null != arg0) {
      value = closure_5.get(arg0);
    }
    const items = [value, ];
    let isFetchingForSKUResult = null != value;
    if (isFetchingForSKUResult) {
      isFetchingForSKUResult = closure_5.isFetchingForSKU(value.skuId);
    }
    items[1] = isFetchingForSKUResult;
    return items;
  }), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp3;
  const items1 = [first, subscriptionPlanId, arg1, tmp[1]];
  const effect = React.useEffect(() => {
    if (null == first) {
      if (null != arg0) {
        if (!tmp3) {
          const _HermesInternal = HermesInternal;
          arg1(first[5])(null != closure_9[closure_0], "Missing hardcoded subscriptionPlan: " + arg0);
          const tmp6 = arg1(first[5]);
          const tmp7 = null != closure_9[closure_0];
          const obj = arg0(first[8]);
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(arg0(first[7]).castPremiumSubscriptionAsSkuId(tmp3.skuId), arg1);
          const obj2 = arg0(first[7]);
        }
      }
    }
  }, items1);
  return first;
};
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  let iter2;
  const keys = Object.keys(arg1(dependencyMap[10]).PauseDuration);
  const found = keys.filter((arg0) => isNaN(Number(arg0)));
  if (status.status !== constants.PAUSED) {
    let obj = { durations: found, currentDaysPaused: 0 };
    return obj;
  } else if (null != status.pauseEndsAt) {
    const tmp4 = importDefault(dependencyMap[11])(status.currentPeriodStart);
    const _Math = Math;
    const rounded = Math.round(importDefault(dependencyMap[11])(status.pauseEndsAt).diff(tmp4, "days", true));
    const items = [];
    const tmp7 = _createForOfIteratorHelperLoose(found);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp8 = closure_0;
        let tmp9 = closure_2;
        if (closure_0(closure_2[10]).PauseDuration[value] > rounded) {
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
    isMomentResult = importDefault(dependencyMap[11]).isMoment(isSameOrAfter);
    const obj = importDefault(dependencyMap[11]);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(importDefault(dependencyMap[11])());
  }
  return isMomentResult;
};
