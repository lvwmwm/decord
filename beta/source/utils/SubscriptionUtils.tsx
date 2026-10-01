// Module ID: 10985
// Function ID: 10986
// Name: SubscriptionUtils
// Dependencies: [32, 19, 4493, 1074, 1374, 38, 10986, 4488, 6675, 504, 10988, 4421, 2]
// Exports: didBeginPurchaseFlowOnFractionalPremium, getOrFetchSubscriptionPlan, getSubscriptionPauseDurations, getSubscriptionPlans, getSubscriptionSKUs, subscriptionCanDowngrade, subscriptionCanSwitchImmediately, useGetOrFetchSubscriptionPlan

// Module 10985 (SubscriptionUtils)
import _modDef38 from "module_38" /* 38 */;
import _modDef4421 from "module_4421" /* 4421 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6675 */;
import CheckoutError from "CheckoutError" /* 10986 */;
import PauseDuration from "PauseDuration" /* 10988 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f92475 = (planId) => {
  const value = SubscriptionPlanStore.get(planId.planId);
  _modDef38(null != value, "Unable to fetch plan");
  return value;
};
let _slicedToArray = _slicedToArray_mod;
({ SubscriptionStatusTypes: metroRequire, SubscriptionTypes: metroImportDefault } = Constants);
({ SubscriptionPlans: metroImportAll, SubscriptionPlanInfo: c9 } = PremiumConstants);
let result = size.fileFinishedImporting("utils/SubscriptionUtils.tsx");

export const getSubscriptionPlans = function getSubscriptionPlans(items) {
  items = items.items;
  return items.map(f92475);
};
export const getSubscriptionSKUs = function getSubscriptionSKUs(items) {
  items = items.items;
  const mapped = items.map(f92475);
  return mapped.map((skuId) => skuId.skuId);
};
export const subscriptionCanSwitchImmediately = function subscriptionCanSwitchImmediately(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type === metroImportDefault.PREMIUM) {
    if (null == currentSubscriptionPlanIdForGroup) {
      return true;
    }
  }
  const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
  if (null == currentSubscriptionPlanIdForGroup) {
    const self3 = this;
    const self4 = this;
    const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
    const checkoutError = new CheckoutError.CheckoutError(obj2);
    throw checkoutError;
  } else {
    if (currentSubscriptionPlanIdForGroup === metroImportAll.PREMIUM_YEAR_TIER_1) {
      if (newPlanId === metroImportAll.PREMIUM_MONTH_TIER_2) {
        const self = this;
        const self2 = this;
        const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
        const checkoutError1 = new CheckoutError.CheckoutError(obj3);
        throw checkoutError1;
      }
    }
    const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
    return index < arr.indexOf(newPlanId);
  }
};
export const subscriptionCanDowngrade = function subscriptionCanDowngrade(getCurrentSubscriptionPlanIdForGroup, newPlanId, arr) {
  let flag;
  const currentSubscriptionPlanIdForGroup = getCurrentSubscriptionPlanIdForGroup.getCurrentSubscriptionPlanIdForGroup(arr);
  if (getCurrentSubscriptionPlanIdForGroup.type !== metroImportDefault.PREMIUM) {
    const obj = { oldPlanId: currentSubscriptionPlanIdForGroup, newPlanId };
    if (null == currentSubscriptionPlanIdForGroup) {
      const self3 = this;
      const self4 = this;
      const obj2 = { message: "Current subscription has no plan in group", extraSentryInformation: obj };
      const checkoutError = new CheckoutError.CheckoutError(obj2);
      throw checkoutError;
    } else {
      if (currentSubscriptionPlanIdForGroup === metroImportAll.PREMIUM_YEAR_TIER_1) {
        if (newPlanId === metroImportAll.PREMIUM_MONTH_TIER_2) {
          const self = this;
          const self2 = this;
          const obj3 = { message: "Unexpected plan switch", extraSentryInformation: obj };
          const checkoutError1 = new CheckoutError.CheckoutError(obj3);
          throw checkoutError1;
        }
      }
      const index = arr.indexOf(currentSubscriptionPlanIdForGroup);
      flag = index < arr.indexOf(newPlanId);
    }
  } else {
    flag = true;
  }
  return !flag;
};
export const getOrFetchSubscriptionPlan = function getOrFetchSubscriptionPlan(subscriptionPlanId, arg1) {
  const value = SubscriptionPlanStore.get(subscriptionPlanId);
  const obj = SubscriptionPlanStore;
  if (null == value) {
    const _HermesInternal = HermesInternal;
    const tmp8 = _modDef38;
    const tmp9 = null != React4[subscriptionPlanId];
    tmp8(tmp9, "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
    const obj3 = PremiumUtils;
    const result = obj3.castPremiumSubscriptionAsSkuId(tmp5.skuId);
    const tmp12 = require;
    if (!obj.isFetchingForSKU(result)) {
      const tmp12Result = tmp12(6675);
      const subscriptionPlansForSKU = tmp12Result.fetchSubscriptionPlansForSKU(result, arg1);
    }
  }
  return value;
};
export const useGetOrFetchSubscriptionPlan = function useGetOrFetchSubscriptionPlan(subscriptionPlanId, arg1) {
  let closure_3;
  let first;
  let tmp3;
  _require = subscriptionPlanId;
  let closure_1 = arg1;
  let obj = require("get initialized");
  let items = [SubscriptionPlanStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    let value = null;
    if (null != subscriptionPlanId) {
      value = SubscriptionPlanStore.get(tmp);
    }
    const items = [value, ];
    items[1] = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
    const isFetchingForSKUResult = null != value && SubscriptionPlanStore.isFetchingForSKU(value.skuId);
    return items;
  });
  _slicedToArray = tmp3;
  const items1 = [first, subscriptionPlanId, arg1, tmp3];
  const effect = react.useEffect(() => {
    if (null == first) {
      if (null != subscriptionPlanId) {
        const tmp14 = closure_3;
        if (!tmp14) {
          const _HermesInternal = HermesInternal;
          const tmp5 = _modDef38;
          const tmp6 = null != React4[subscriptionPlanId];
          tmp5(tmp6, "Missing hardcoded subscriptionPlan: " + subscriptionPlanId);
          const fetchSubscriptionPlansForSKU = SubscriptionPlanActionCreators.fetchSubscriptionPlansForSKU;
          SubscriptionPlanActionCreators;
          const obj = PremiumUtils;
          const subscriptionPlansForSKU = fetchSubscriptionPlansForSKU(obj.castPremiumSubscriptionAsSkuId(tmp2.skuId), closure_1);
        }
      }
    }
  }, items1);
  return first;
};
export const getSubscriptionPauseDurations = function getSubscriptionPauseDurations(status) {
  const keys = Object.keys(PauseDuration.PauseDuration);
  const found = keys.filter((item) => isNaN(Number(item)));
  if (status.status !== metroRequire.PAUSED) {
    return { durations: found, currentDaysPaused: 0 };
  } else if (null != status.pauseEndsAt) {
    const _Math = Math;
    const tmp6 = _modDef4421(status.currentPeriodStart);
    const obj2 = _modDef4421(status.pauseEndsAt);
    const rounded = Math.round(obj2.diff(tmp6, "days", true));
    const items = [];
    for (const item10042 of found) {
      let tmp10 = item10042;
      if (PauseDuration.PauseDuration[item10042] > rounded) {
        let arr = items.push(tmp10);
      }
      continue;
    }
    return { durations: items, currentDaysPaused: rounded };
  } else {
    return { durations: [], currentDaysPaused: 0 };
  }
};
export const didBeginPurchaseFlowOnFractionalPremium = function didBeginPurchaseFlowOnFractionalPremium(isSameOrAfter) {
  let isMomentResult = null != isSameOrAfter;
  if (isMomentResult) {
    const obj = _modDef4421;
    isMomentResult = obj.isMoment(isSameOrAfter);
  }
  if (isMomentResult) {
    isMomentResult = isSameOrAfter.isSameOrAfter(_modDef4421());
  }
  return isMomentResult;
};
