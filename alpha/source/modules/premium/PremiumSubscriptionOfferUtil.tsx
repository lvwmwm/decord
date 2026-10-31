// Module ID: 8526
// Function ID: 8527
// Name: PremiumSubscriptionOfferUtil
// Dependencies: [32, 19, 2052, 1385, 7627, 8527, 8528, 504, 2042, 8529, 8530, 1992, 8533, 2]
// Exports: renewalInvoiceChurnDiscountInfo, useActiveDiscountInfo, useFetchChurnUserDiscountOffer, useIsInPremiumOfferExperience, useIsNUXEligible, useShouldFetchChurnOffer

// Module 8526 (PremiumSubscriptionOfferUtil)
import get_initialized from "get initialized" /* 504 */;
import Server from "Server" /* 1992 */;
import _modDef2042 from "module_2042" /* 2042 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7627 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 8527 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8528 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 8529 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8530 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 8533 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
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
const f92869 = () => SubscriptionStore.getPremiumTypeSubscription();
function getDiscountInfo(active_discount_id) {
  if (authStore !== active_discount_id) {
    if (authStore2 !== active_discount_id) {
      if (authStore5 === active_discount_id) {
        return { duration: 1, percentage: 10, discountId: active_discount_id };
      } else if (closure_19 === active_discount_id) {
        return { duration: 1, percentage: 50, discountId: active_discount_id };
      } else {
        if (unpackModuleId !== active_discount_id) {
          if (authStore3 !== active_discount_id) {
            if (closure_15 !== active_discount_id) {
              if (map1 !== active_discount_id) {
                if (closure_20 !== active_discount_id) {
                  if (metroRequire === active_discount_id) {
                    return { duration: 1, percentage: 20, discountId: active_discount_id };
                  } else if (metroImportDefault === active_discount_id) {
                    return { duration: 1, percentage: 25, discountId: active_discount_id };
                  } else if (metroImportAll === active_discount_id) {
                    return { duration: 12, percentage: 20, discountId: active_discount_id };
                  } else if (React4 === active_discount_id) {
                    return { duration: 12, percentage: 30, discountId: active_discount_id };
                  } else if (authStore4 === active_discount_id) {
                    return { duration: 1, percentage: 40, discountId: active_discount_id };
                  } else if (closure_17 === active_discount_id) {
                    return { duration: 1, percentage: 30, discountId: active_discount_id };
                  }
                }
              }
              return { duration: 1, percentage: 40, discountId: active_discount_id };
            }
          }
        }
        return { duration: 3, percentage: 30, discountId: active_discount_id };
      }
    }
  }
  return { duration: 1, percentage: 30, discountId: active_discount_id };
}
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: metroImportDefault, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: metroImportAll, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: c9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: unpackModuleId, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_TIER_2_CHURN_1_MONTH_10_PERCENT_DISCOUNT_ID: closure_18, PREMIUM_TIER_2_CHURN_1_MONTH_50_PERCENT_DISCOUNT_ID: closure_19, PREMIUM_GROUP_TIER_2_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_20, CHURN_DISCOUNT_IDS: closure_21 } = PremiumConstants);
function useHasDiscountApplied() {
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f92869);
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
    const tmp6 = _modDef2042;
    const tmp6Result = tmp6(Date.now());
    tmp4 = tmp6Result <= _modDef2042(prop);
  }
  return tmp4;
}
const result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export function useIsInPremiumOfferExperience() {
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = PremiumSubscriptionTrialUtil;
  const hasActiveTrial = obj2.useHasActiveTrial();
  usePremiumDiscountOffer;
  if (typeof useHasDiscountApplied === "function") {
    const items = [SubscriptionStore];
    const tmpResult = get_initialized;
    const stateFromStores = tmpResult.useStateFromStores(items, f92869);
    let prop;
    if (stateFromStores != null) {
      const metadata = stateFromStores.metadata;
      if (metadata != null) {
        prop = metadata.active_discount_expires_at;
      }
    }
    let tmp11 = null != prop;
    if (tmp11) {
      const _Date = Date;
      const tmp13 = _modDef2042;
      const tmp13Result = tmp13(Date.now());
      tmp11 = tmp13Result <= _modDef2042(prop);
    }
    return null != premiumTrialOffer || hasActiveTrial || null != tmp6 || tmp11;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export { useHasDiscountApplied };
export { getDiscountInfo };
export function useActiveDiscountInfo() {
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
}
export function useFetchChurnUserDiscountOffer(arg0) {
  let closure_129_0;
  let closure_129_2;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp8;
  let tmp2 = useDiscountOfferDefault(authStore);
  const tmp3 = useDiscountOfferDefault(authStore5);
  const tmp4 = useDiscountOfferDefault(closure_19);
  const tmp5 = useDiscountOfferDefault(unpackModuleId);
  const tmp6 = useDiscountOfferDefault(closure_20);
  [tmp8, closure_129_0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp10, tmp11] = react.useState(false);
  let closure_1 = tmp11;
  _slicedToArray(react.useState(false), 2);
  [tmp13, closure_129_2] = react.useState(null);
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
    tmp2 = tmp6;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    return { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
  } else {
    const tmp18 = arg0;
    if (tmp18) {
      return { churnUserDiscountOffer: tmp13, isFetchingChurnDiscountOffer: tmp10 };
    } else {
      const tmp14 = tmp10 || tmp8;
      if (!tmp14) {
        tmp11(true);
        const obj = UserOfferActionCreators;
        const churnDiscountOffer = obj.fetchChurnDiscountOffer();
        const nextPromise = churnDiscountOffer.then((result) => {
          closure_1_2(result);
          closure_1_0(true);
          tmp11(false);
        });
        nextPromise.catch(() => {
          closure_1_0(true);
          tmp11(false);
        });
      }
      return { churnUserDiscountOffer: tmp13, isFetchingChurnDiscountOffer: tmp10 };
    }
  }
}
export function useShouldFetchChurnOffer() {
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const tmp3 = SubscriptionStore;
  if (typeof useHasDiscountApplied === "function") {
    const items1 = [tmp3];
    const tmpResult = get_initialized;
    const stateFromStores1 = tmpResult.useStateFromStores(items1, f92869);
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
      const tmp10 = _modDef2042;
      const tmp10Result = tmp10(Date.now());
      tmp8 = tmp10Result <= _modDef2042(prop);
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
}
export function renewalInvoiceChurnDiscountInfo(arg0) {
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
}
export function useIsNUXEligible() {
  const obj = ReverseTrialUtils;
  return obj.useIsInReverseTrial();
}
