// Module ID: 7502
// Function ID: 7503
// Name: PremiumSubscriptionOfferUtil
// Dependencies: [32, 19, 4494, 1374, 6867, 7503, 7504, 504, 4421, 7505, 7506, 1979, 7509, 2]
// Exports: renewalInvoiceChurnDiscountInfo, useActiveDiscountInfo, useFetchChurnUserDiscountOffer, useIsInPremiumOfferExperience, useIsNUXEligible, useShouldFetchChurnOffer

// Module 7502 (PremiumSubscriptionOfferUtil)
import get_initialized from "get initialized" /* 504 */;
import Server from "Server" /* 1979 */;
import _modDef4421 from "module_4421" /* 4421 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6867 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 7503 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7504 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 7505 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7506 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 7509 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const f84579 = () => SubscriptionStore.getPremiumTypeSubscription();
function getDiscountInfo(active_discount_id) {
  if (authStore !== active_discount_id) {
    if (closure_12 !== active_discount_id) {
      if (closure_19 === active_discount_id) {
        return { duration: 1, percentage: 10, discountId: active_discount_id };
      } else if (closure_20 === active_discount_id) {
        return { duration: 1, percentage: 50, discountId: active_discount_id };
      } else {
        if (unpackModuleId !== active_discount_id) {
          if (authStore2 !== active_discount_id) {
            if (closure_15 !== active_discount_id) {
              if (map1 === active_discount_id) {
                return { duration: 1, percentage: 40, discountId: active_discount_id };
              } else if (metroRequire === active_discount_id) {
                return { duration: 1, percentage: 20, discountId: active_discount_id };
              } else if (metroImportDefault === active_discount_id) {
                return { duration: 1, percentage: 25, discountId: active_discount_id };
              } else if (metroImportAll === active_discount_id) {
                return { duration: 12, percentage: 20, discountId: active_discount_id };
              } else if (React4 === active_discount_id) {
                return { duration: 12, percentage: 30, discountId: active_discount_id };
              } else if (authStore3 === active_discount_id) {
                return { duration: 1, percentage: 40, discountId: active_discount_id };
              } else if (authStore4 === active_discount_id) {
                return { duration: 3, percentage: 30, discountId: active_discount_id };
              } else if (closure_17 === active_discount_id) {
                return { duration: 1, percentage: 30, discountId: active_discount_id };
              }
            }
          }
        }
        return { duration: 3, percentage: 30, discountId: active_discount_id };
      }
    }
  }
  return { duration: 1, percentage: 30, discountId: active_discount_id };
}
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: metroImportDefault, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: metroImportAll, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: c9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18, PREMIUM_TIER_2_CHURN_1_MONTH_10_PERCENT_DISCOUNT_ID: closure_19, PREMIUM_TIER_2_CHURN_1_MONTH_50_PERCENT_DISCOUNT_ID: closure_20, CHURN_DISCOUNT_IDS: closure_21 } = PremiumConstants);
function useHasDiscountApplied() {
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f84579);
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp4 = null != prop;
  if (tmp4) {
    const _Date = Date;
    const tmp6 = _modDef4421;
    const tmp6Result = tmp6(Date.now());
    tmp4 = tmp6Result <= _modDef4421(prop);
  }
  return tmp4;
}
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = PremiumSubscriptionTrialUtil;
  const hasActiveTrial = obj2.useHasActiveTrial();
  const obj3 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  usePremiumDiscountOffer;
  if (typeof useHasDiscountApplied === "function") {
    const items = [SubscriptionStore];
    const tmpResult = get_initialized;
    const stateFromStores = tmpResult.useStateFromStores(items, f84579);
    let prop;
    if (stateFromStores != null) {
      const metadata = stateFromStores.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp12 = null != prop;
    if (tmp12) {
      const _Date = Date;
      const tmp14 = _modDef4421;
      const tmp14Result = tmp14(Date.now());
      tmp12 = tmp14Result <= _modDef4421(prop);
    }
    return null != premiumTrialOffer || hasActiveTrial || null != premiumDiscountOffer || null != tmp7 || tmp12;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useHasDiscountApplied };
export { getDiscountInfo };
export const useActiveDiscountInfo = function useActiveDiscountInfo() {
  let premiumTypeSubscription;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let active_discount_id;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  return getDiscountInfo(active_discount_id);
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let closure_129_0;
  let closure_129_2;
  let tmp10;
  let tmp12;
  let tmp7;
  let tmp9;
  let tmp2 = useDiscountOfferDefault(authStore);
  const tmp3 = useDiscountOfferDefault(closure_19);
  const tmp4 = useDiscountOfferDefault(closure_20);
  const tmp5 = useDiscountOfferDefault(unpackModuleId);
  [tmp7, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp9, tmp10] = react.useState(false);
  let closure_1 = tmp10;
  _slicedToArray(react.useState(false), 2);
  [tmp12, closure_129_2] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (tmp2 == null) {
    tmp2 = tmp3;
  }
  if (tmp2 == null) {
    tmp2 = tmp4;
  }
  if (tmp2 == null) {
    tmp2 = tmp5;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    return { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
  } else {
    const tmp17 = arg0;
    if (tmp17) {
      return { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    } else {
      const tmp13 = tmp9 || tmp7;
      if (!tmp13) {
        tmp10(true);
        const obj = UserOfferActionCreators;
        const churnDiscountOffer = obj.fetchChurnDiscountOffer();
        const nextPromise = churnDiscountOffer.then((result) => {
          closure_1_2(result);
          closure_1_0(true);
          tmp10(false);
        });
        nextPromise.catch(() => {
          closure_1_0(true);
          tmp10(false);
        });
      }
      return { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    }
  }
};
export const useShouldFetchChurnOffer = function useShouldFetchChurnOffer() {
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const tmp3 = SubscriptionStore;
  if (typeof useHasDiscountApplied === "function") {
    const items1 = [tmp3];
    const tmpResult = get_initialized;
    const stateFromStores1 = tmpResult.useStateFromStores(items1, f84579);
    let prop;
    if (stateFromStores1 != null) {
      const metadata = stateFromStores1.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp8 = null != prop;
    if (tmp8) {
      const _Date = Date;
      const tmp10 = _modDef4421;
      const tmp10Result = tmp10(Date.now());
      tmp8 = tmp10Result <= _modDef4421(prop);
    }
    let tmp13 = null !== stateFromStores && stateFromStores.hasPremiumNitroMonthly && !tmp8;
    if (tmp13) {
      let hasActiveTrial;
      if (stateFromStores != null) {
        hasActiveTrial = stateFromStores.hasActiveTrial;
      }
      tmp13 = !hasActiveTrial;
    }
    return tmp13;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(arg0) {
  const iter = arg0.invoiceItems[Symbol.iterator]();
  while (iter !== undefined) {
    let discounts = iter.next().discounts;
    let found = discounts.find((type) => type.type === Server.InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
    let tmp2 = found;
    let discount_id;
    if (found != null) {
      discount_id = found.discount_id;
    }
    if (null != discount_id) {
      if (closure_21.includes(tmp2.discount_id)) {
        let tmp8 = getDiscountInfo(tmp2.discount_id);
        let duration;
        if (tmp8 != null) {
          duration = tmp8.duration;
        }
        let obj = { duration, percentage: null, discountId: null };
        ({ percentage_amount: obj.percentage, discount_id: obj.discountId } = found);
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return null;
};
export const useIsNUXEligible = function useIsNUXEligible() {
  const obj = ReverseTrialUtils;
  return obj.useIsInReverseTrial();
};
