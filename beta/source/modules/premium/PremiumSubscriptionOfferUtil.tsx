// Module ID: 8322
// Function ID: 8323
// Name: PremiumSubscriptionOfferUtil
// Dependencies: [32, 19, 4424, 1378, 558, 7694, 8323, 8324, 568, 504, 4352, 8325, 8326, 1982, 8329, 2]
// Exports: renewalInvoiceChurnDiscountInfo, useIsNUXEligible

// Module 8322 (PremiumSubscriptionOfferUtil)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import Server from "Server" /* 1982 */;
import _modDef4352 from "module_4352" /* 4352 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7694 */;
import PremiumSubscriptionTrialUtil from "PremiumSubscriptionTrialUtil" /* 8323 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8324 */;
import useDiscountOfferDefault from "useDiscountOffer" /* 8325 */;
import ReverseTrialUtils from "ReverseTrialUtils" /* 8329 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4424 */;

const UserOfferActionCreators = tmp(8326);
require = fn;
const PremiumConstants = fn(1378);
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: metroRequire, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: c10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: map1, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_17, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_18 } = PremiumConstants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      prop = metadata.active_discount_expires_at;
    }
  }
  if (cResult[2] !== prop) {
    let tmp10 = null != prop;
    if (tmp10) {
      const _Date = Date;
      tmp10 = _modDef4352(Date.now()) <= _modDef4352(prop);
      const tmp12Result = _modDef4352(Date.now());
    }
    cResult[2] = prop;
    cResult[3] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
    tmp4 = _modDef4352(Date.now()) <= _modDef4352(prop);
    const tmp6Result = _modDef4352(Date.now());
  }
  return tmp4;
});
let closure_19 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const premiumGroupDiscountOffer = usePremiumDiscountOffer.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  if (!tmp6) {
    tmp6 = hasActiveTrial;
  }
  if (!tmp6) {
    tmp6 = null != premiumDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = null != premiumGroupDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
}) : (() => {
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const hasActiveTrial = PremiumSubscriptionTrialUtil.useHasActiveTrial();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const premiumGroupDiscountOffer = usePremiumDiscountOffer.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  if (!tmp6) {
    tmp6 = hasActiveTrial;
  }
  if (!tmp6) {
    tmp6 = null != premiumDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = null != premiumGroupDiscountOffer;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(22);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let active_discount_id;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  if (v65535 !== active_discount_id) {
    if (__initData !== active_discount_id) {
      if (closure_1_11 !== active_discount_id) {
        if (state !== active_discount_id) {
          if (closure_1_15 !== active_discount_id) {
            if (__initData2 === active_discount_id) {
              if (cResult[6] !== active_discount_id) {
                const obj2 = { duration: 1, percentage: 40, discountId: active_discount_id };
                cResult[6] = active_discount_id;
                cResult[7] = obj2;
                let tmp18 = obj2;
              } else {
                tmp18 = cResult[7];
              }
              return tmp18;
            } else if (timestampProducer === active_discount_id) {
              if (cResult[8] !== active_discount_id) {
                const obj3 = { duration: 1, percentage: 20, discountId: active_discount_id };
                cResult[8] = active_discount_id;
                cResult[9] = obj3;
                let tmp17 = obj3;
              } else {
                tmp17 = cResult[9];
              }
              return tmp17;
            } else if (React5 === active_discount_id) {
              if (cResult[10] !== active_discount_id) {
                const obj4 = { duration: 1, percentage: 25, discountId: active_discount_id };
                cResult[10] = active_discount_id;
                cResult[11] = obj4;
                let tmp16 = obj4;
              } else {
                tmp16 = cResult[11];
              }
              return tmp16;
            } else if (closure_1_8 === active_discount_id) {
              if (cResult[12] !== active_discount_id) {
                const obj5 = { duration: 12, percentage: 20, discountId: active_discount_id };
                cResult[12] = active_discount_id;
                cResult[13] = obj5;
                let tmp15 = obj5;
              } else {
                tmp15 = cResult[13];
              }
              return tmp15;
            } else if (options === active_discount_id) {
              if (cResult[14] !== active_discount_id) {
                const obj6 = { duration: 12, percentage: 30, discountId: active_discount_id };
                cResult[14] = active_discount_id;
                cResult[15] = obj6;
                let tmp14 = obj6;
              } else {
                tmp14 = cResult[15];
              }
              return tmp14;
            } else if (value2 === active_discount_id) {
              if (cResult[16] !== active_discount_id) {
                const obj7 = { duration: 1, percentage: 40, discountId: active_discount_id };
                cResult[16] = active_discount_id;
                cResult[17] = obj7;
                let tmp13 = obj7;
              } else {
                tmp13 = cResult[17];
              }
              return tmp13;
            } else if (collapsedCategories === active_discount_id) {
              if (cResult[18] !== active_discount_id) {
                const obj8 = { duration: 3, percentage: 30, discountId: active_discount_id };
                cResult[18] = active_discount_id;
                cResult[19] = obj8;
                let tmp12 = obj8;
              } else {
                tmp12 = cResult[19];
              }
              return tmp12;
            } else if (constants === active_discount_id) {
              if (cResult[20] !== active_discount_id) {
                const obj9 = { duration: 1, percentage: 30, discountId: active_discount_id };
                cResult[20] = active_discount_id;
                cResult[21] = obj9;
                let tmp11 = obj9;
              } else {
                tmp11 = cResult[21];
              }
              return tmp11;
            }
          }
        }
      }
      if (cResult[4] !== active_discount_id) {
        const obj10 = { duration: 3, percentage: 30, discountId: active_discount_id };
        cResult[4] = active_discount_id;
        cResult[5] = obj10;
        let tmp19 = obj10;
      } else {
        tmp19 = cResult[5];
      }
      return tmp19;
    }
  }
  if (cResult[2] !== active_discount_id) {
    const obj11 = { duration: 1, percentage: 30, discountId: active_discount_id };
    cResult[2] = active_discount_id;
    cResult[3] = obj11;
    let tmp20 = obj11;
  } else {
    tmp20 = cResult[3];
  }
  return tmp20;
}) : (() => {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let discountId;
  if (stateFromStores != null) {
    const metadata = stateFromStores.metadata;
    if (metadata != null) {
      discountId = metadata.active_discount_id;
    }
  }
  if (v65535 !== discountId) {
    if (__initData !== discountId) {
      if (closure_1_11 !== discountId) {
        if (state !== discountId) {
          if (closure_1_15 !== discountId) {
            if (__initData2 === discountId) {
              const obj2 = { duration: 1, percentage: 40, discountId };
              return obj2;
            } else if (timestampProducer === discountId) {
              const obj3 = { duration: 1, percentage: 20, discountId };
              return obj3;
            } else if (React5 === discountId) {
              const obj4 = { duration: 1, percentage: 25, discountId };
              return obj4;
            } else if (closure_1_8 === discountId) {
              const obj5 = { duration: 12, percentage: 20, discountId };
              return obj5;
            } else if (options === discountId) {
              const obj6 = { duration: 12, percentage: 30, discountId };
              return obj6;
            } else if (value2 === discountId) {
              const obj7 = { duration: 1, percentage: 40, discountId };
              return obj7;
            } else if (collapsedCategories === discountId) {
              const obj8 = { duration: 3, percentage: 30, discountId };
              return obj8;
            } else if (constants === discountId) {
              const obj9 = { duration: 1, percentage: 30, discountId };
              return obj9;
            }
          }
        }
      }
      const obj10 = { duration: 3, percentage: 30, discountId };
      return obj10;
    }
  }
  return { duration: 1, percentage: 30, discountId };
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  let tmp4 = useDiscountOfferDefault(v65535);
  const tmp5 = useDiscountOfferDefault(closure_1_11);
  [tmp7, require] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp9, tmp10] = noop.useState(false);
  importDefault = tmp10;
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  [tmp12, dependencyMap] = noop.useState(null);
  if (tmp4 == null) {
    tmp4 = tmp5;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  if (null != tmp4) {
    if (cResult[0] !== tmp4) {
      const obj2 = { churnUserDiscountOffer: tmp4, isFetchingChurnDiscountOffer: false };
      cResult[0] = tmp4;
      cResult[1] = obj2;
      let tmp18 = obj2;
    } else {
      tmp18 = cResult[1];
    }
    return tmp18;
  } else if (arg0) {
    if (cResult[2] === tmp12) {
      if (cResult[3] === tmp9) {
        let tmp17 = cResult[4];
      }
      return tmp17;
    }
    const obj3 = { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    cResult[2] = tmp12;
    cResult[3] = tmp9;
    cResult[4] = obj3;
    tmp17 = obj3;
  } else {
    function onFetchComplete() {

    }
    let tmp13 = tmp9;
    if (!tmp9) {
      tmp13 = tmp7;
    }
    if (!tmp13) {
      tmp10(true);
      const churnDiscountOffer = UserOfferActionCreators.fetchChurnDiscountOffer();
      const tmpResult = UserOfferActionCreators;
      churnDiscountOffer.then((result) => {
        dependencyMap(result);
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp10(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }).catch(() => {
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp10(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
      const nextPromise = churnDiscountOffer.then((result) => {
        dependencyMap(result);
        if (typeof onFetchComplete === "function") {
          require(true);
          tmp10(false);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    }
    if (cResult[5] === tmp12) {
      if (cResult[6] === tmp9) {
        let tmp16 = cResult[7];
      }
      return tmp16;
    }
    const obj4 = { churnUserDiscountOffer: tmp12, isFetchingChurnDiscountOffer: tmp9 };
    cResult[5] = tmp12;
    cResult[6] = tmp9;
    cResult[7] = obj4;
    tmp16 = obj4;
  }
}) : ((arg0) => {
  let tmp2 = useDiscountOfferDefault(v65535);
  const tmp3 = useDiscountOfferDefault(closure_1_11);
  [tmp5, require] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp7, tmp8] = noop.useState(false);
  importDefault = tmp8;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  [tmp10, dependencyMap] = noop.useState(null);
  if (tmp2 == null) {
    tmp2 = tmp3;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  if (null != tmp2) {
    const obj2 = { churnUserDiscountOffer: tmp2, isFetchingChurnDiscountOffer: false };
    return obj2;
  } else if (arg0) {
    const obj3 = { churnUserDiscountOffer: tmp10, isFetchingChurnDiscountOffer: tmp7 };
    return obj3;
  } else {
    let tmp11 = tmp7;
    if (!tmp7) {
      tmp11 = tmp5;
    }
    if (!tmp11) {
      tmp8(true);
      const churnDiscountOffer = UserOfferActionCreators.fetchChurnDiscountOffer();
      churnDiscountOffer.then((result) => {
        dependencyMap(result);
        require(true);
        tmp8(false);
      }).catch(() => {
        require(true);
        tmp8(false);
      });
      const nextPromise = churnDiscountOffer.then((result) => {
        dependencyMap(result);
        require(true);
        tmp8(false);
      });
    }
    const obj4 = { churnUserDiscountOffer: tmp10, isFetchingChurnDiscountOffer: tmp7 };
    return obj4;
  }
  const tmp9 = _slicedToArray(noop.useState(null), 2);
});
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = tmp3;
export const useHasDiscountApplied = tmp4;
export const useActiveDiscountInfo = tmp5;
export const useFetchChurnUserDiscountOffer = tmp6;
export const useShouldFetchChurnOffer = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const tmpResult = initialize;
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = stateFromStores.hasPremiumNitroMonthly;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = !tmp8;
  }
  if (hasPremiumNitroMonthly) {
    let hasActiveTrial;
    if (stateFromStores != null) {
      hasActiveTrial = stateFromStores.hasActiveTrial;
    }
    hasPremiumNitroMonthly = !hasActiveTrial;
  }
  return hasPremiumNitroMonthly;
}) : (() => {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasPremiumNitroMonthly = null !== stateFromStores;
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = stateFromStores.hasPremiumNitroMonthly;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = !tmp2;
  }
  if (hasPremiumNitroMonthly) {
    let hasActiveTrial;
    if (stateFromStores != null) {
      hasActiveTrial = stateFromStores.hasActiveTrial;
    }
    hasPremiumNitroMonthly = !hasActiveTrial;
  }
  return hasPremiumNitroMonthly;
});
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(arg0) {
  const iter = arg0.invoiceItems[Symbol.iterator]();
  while (iter !== undefined) {
    let discounts = iter.next().discounts;
    let found = discounts.find((type) => type.type === Server.InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
    let tmp2 = found;
    if (null != found) {
      let discount_id = tmp2.discount_id;
      if (v65535 === discount_id) {
        let obj3 = { duration: 1, percentage: null, discountId: null };
        ({ percentage_amount: obj2.percentage, discount_id: obj2.discountId } = found);
        iter.return();
        return obj3;
      } else if (closure_1_11 === discount_id) {
        let obj = { duration: 3, percentage: null, discountId: null };
        ({ percentage_amount: obj.percentage, discount_id: obj.discountId } = tmp2);
        iter.return();
        return obj;
      }
    }
    continue;
  }
  return null;
};
export const useIsNUXEligible = () => ReverseTrialUtils.useIsInReverseTrial();
