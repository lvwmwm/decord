// Module ID: 7425
// Function ID: 59665
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 3782, 1851, 6686, 7426, 7127, 566, 3712, 7128, 7374, 1881, 7427, 2]
// Exports: renewalInvoiceChurnDiscountInfo, useActiveDiscountInfo, useFetchChurnUserDiscountOffer, useIsInPremiumOfferExperience, useIsNUXEligible, useShouldFetchChurnOffer

// Module 7425 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
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
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_13, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_17 } = GuildFeatures);
function useHasDiscountApplied() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getPremiumTypeSubscription());
  let prop;
  if (null != stateFromStores) {
    const metadata = stateFromStores.metadata;
    if (null != metadata) {
      prop = metadata.active_discount_expires_at;
    }
  }
  let tmp3 = null != prop;
  if (tmp3) {
    const _Date = Date;
    const tmp6 = importDefault(3712);
    tmp3 = importDefault(3712)(Date.now()) <= importDefault(3712)(prop);
    const tmp6Result = importDefault(3712)(Date.now());
  }
  return tmp3;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const premiumTrialOffer = require(6686) /* useGetTrialOffer */.usePremiumTrialOffer();
  const obj = require(6686) /* useGetTrialOffer */;
  const hasActiveTrial = require(7426) /* useHasActiveTrial */.useHasActiveTrial();
  const obj2 = require(7426) /* useHasActiveTrial */;
  const premiumDiscountOffer = require(7127) /* useGetDiscountOffer */.usePremiumDiscountOffer();
  const obj3 = require(7127) /* useGetDiscountOffer */;
  const premiumGroupDiscountOffer = require(7127) /* useGetDiscountOffer */.usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  const obj4 = require(7127) /* useGetDiscountOffer */;
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
};
export { useHasDiscountApplied };
export const useActiveDiscountInfo = function useActiveDiscountInfo() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getPremiumTypeSubscription());
  let active_discount_id;
  if (null != stateFromStores) {
    const metadata = stateFromStores.metadata;
    if (null != metadata) {
      active_discount_id = metadata.active_discount_id;
    }
  }
  if (closure_10 !== active_discount_id) {
    if (closure_12 !== active_discount_id) {
      if (closure_11 !== active_discount_id) {
        if (closure_14 !== active_discount_id) {
          if (closure_15 !== active_discount_id) {
            if (closure_13 === active_discount_id) {
              obj = { duration: 1, percentage: 40, discountId: active_discount_id };
              return obj;
            } else if (closure_6 === active_discount_id) {
              obj = { duration: 1, percentage: 20, discountId: active_discount_id };
              return obj;
            } else if (closure_7 === active_discount_id) {
              const obj1 = { duration: 1, percentage: 25, discountId: active_discount_id };
              return obj1;
            } else if (closure_8 === active_discount_id) {
              const obj2 = { duration: 12, percentage: 20, discountId: active_discount_id };
              return obj2;
            } else if (closure_9 === active_discount_id) {
              const obj3 = { duration: 12, percentage: 30, discountId: active_discount_id };
              return obj3;
            } else if (closure_16 === active_discount_id) {
              const obj4 = { duration: 1, percentage: 40, discountId: active_discount_id };
              return obj4;
            } else if (closure_17 === active_discount_id) {
              const obj5 = { duration: 3, percentage: 30, discountId: active_discount_id };
              return obj5;
            }
          }
        }
      }
      const obj6 = { duration: 3, percentage: 30, discountId: active_discount_id };
      return obj6;
    }
  }
  const obj7 = { duration: 1, percentage: 30, discountId: active_discount_id };
  return obj7;
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let dependencyMap;
  let require;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  function onFetchComplete(result, arg1) {
    callback(true);
    tmp7(false);
  }
  const tmp = importDefault(7128)(closure_10);
  let tmp2 = importDefault(7128)(closure_11);
  [tmp4, require] = onFetchComplete(React.useState(false), 2);
  const tmp3 = onFetchComplete(React.useState(false), 2);
  [tmp6, tmp7] = onFetchComplete(React.useState(false), 2);
  importDefault = tmp7;
  const tmp5 = onFetchComplete(React.useState(false), 2);
  [tmp9, dependencyMap] = onFetchComplete(React.useState(null), 2);
  if (null != tmp) {
    tmp2 = tmp;
  }
  let tmp10 = null;
  if (null != tmp2) {
    tmp10 = tmp2;
  }
  if (null != tmp10) {
    let obj = { churnUserDiscountOffer: tmp10, isFetchingChurnDiscountOffer: false };
    return obj;
  } else if (arg0) {
    obj = { churnUserDiscountOffer: tmp9, isFetchingChurnDiscountOffer: tmp6 };
    return obj;
  } else {
    let tmp12 = tmp6;
    if (!tmp6) {
      tmp12 = tmp4;
    }
    if (!tmp12) {
      tmp7(true);
      obj = require(7374) /* _fetchUserOffer */;
      const churnDiscountOffer = obj.fetchChurnDiscountOffer();
      churnDiscountOffer.then((arg0) => {
        callback2(arg0);
        onFetchComplete();
      }).catch(() => {
        onFetchComplete();
      });
      const nextPromise = churnDiscountOffer.then((arg0) => {
        callback2(arg0);
        onFetchComplete();
      });
    }
    const obj1 = { churnUserDiscountOffer: tmp9, isFetchingChurnDiscountOffer: tmp6 };
    return obj1;
  }
  const tmp8 = onFetchComplete(React.useState(null), 2);
};
export const useShouldFetchChurnOffer = function useShouldFetchChurnOffer() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.getPremiumTypeSubscription());
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const obj = require(566) /* initialize */;
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = stateFromStores.hasPremiumNitroMonthly;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = !tmp2;
  }
  if (hasPremiumNitroMonthly) {
    hasPremiumNitroMonthly = tmp3;
  }
  return hasPremiumNitroMonthly;
};
export const renewalInvoiceChurnDiscountInfo = function renewalInvoiceChurnDiscountInfo(invoiceItems) {
  let found;
  const tmp = _createForOfIteratorHelperLoose(invoiceItems.invoiceItems);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let discounts = iter2.value.discounts;
      found = discounts.find((type) => type.type === outer1_0(outer1_2[11]).InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
      if (null != found) {
        let discount_id = found.discount_id;
        let tmp3 = closure_10;
        if (closure_10 === discount_id) {
          break;
        } else {
          let tmp4 = closure_11;
          if (closure_11 === discount_id) {
            let obj = {};
            let num = 3;
            obj.duration = 3;
            ({ percentage_amount: obj.percentage, discount_id: obj.discountId } = found);
            return obj;
          }
        }
      }
      let iter3 = tmp();
      iter2 = iter3;
    }
    obj = { duration: 1 };
    ({ percentage_amount: obj2.percentage, discount_id: obj2.discountId } = found);
    return obj;
  }
  return null;
};
export const useIsNUXEligible = function useIsNUXEligible() {
  return require(7427) /* useIsInReverseTrial */.useIsInReverseTrial();
};
