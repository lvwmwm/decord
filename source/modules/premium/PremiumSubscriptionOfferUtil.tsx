// Module ID: 7419
// Function ID: 59608
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: renewalInvoiceChurnDiscountInfo, useActiveDiscountInfo, useFetchChurnUserDiscountOffer, useIsInPremiumOfferExperience, useIsNUXEligible, useShouldFetchChurnOffer

// Module 7419 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID: closure_6, PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID: closure_7, PREMIUM_TIER_2_ANNUAL_V2_20_PERCENT_DISCOUNT_ID: closure_8, PREMIUM_TIER_2_ANNUAL_V2_30_PERCENT_DISCOUNT_ID: closure_9, PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID: closure_10, PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID: closure_11, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_30_PERCENT_DISCOUNT_ID: closure_12, PREMIUM_TIER_2_LIKELIHOOD_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_13, PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID: closure_14, PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID: closure_15, PREMIUM_TIER_2_REENGAGEMENT_1_MONTH_40_PERCENT_DISCOUNT_ID: closure_16, PREMIUM_GROUP_30_PERCENT_3_MONTH_DISCOUNT_ID: closure_17 } = arg1(dependencyMap[3]));
function useHasDiscountApplied() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
    const tmp6 = importDefault(dependencyMap[8]);
    tmp3 = importDefault(dependencyMap[8])(Date.now()) <= importDefault(dependencyMap[8])(prop);
    const tmp6Result = importDefault(dependencyMap[8])(Date.now());
  }
  return tmp3;
}
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/PremiumSubscriptionOfferUtil.tsx");

export const useIsInPremiumOfferExperience = function useIsInPremiumOfferExperience() {
  const premiumTrialOffer = arg1(dependencyMap[4]).usePremiumTrialOffer();
  const obj = arg1(dependencyMap[4]);
  const hasActiveTrial = arg1(dependencyMap[5]).useHasActiveTrial();
  const obj2 = arg1(dependencyMap[5]);
  const premiumDiscountOffer = arg1(dependencyMap[6]).usePremiumDiscountOffer();
  const obj3 = arg1(dependencyMap[6]);
  const premiumGroupDiscountOffer = arg1(dependencyMap[6]).usePremiumGroupDiscountOffer();
  let tmp6 = null != premiumTrialOffer;
  const obj4 = arg1(dependencyMap[6]);
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
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
              obj = { "Bool(true)": "absolute", "Bool(true)": -4, discountId: active_discount_id };
              return obj;
            } else if (closure_6 === active_discount_id) {
              obj = { discountId: active_discount_id };
              return obj;
            } else if (closure_7 === active_discount_id) {
              const obj1 = { "Bool(true)": "r", "Bool(true)": 300.5, discountId: active_discount_id };
              return obj1;
            } else if (closure_8 === active_discount_id) {
              const obj2 = { "Bool(true)": null, "Bool(true)": "\u{1F595}", discountId: active_discount_id };
              return obj2;
            } else if (closure_9 === active_discount_id) {
              const obj3 = { "Bool(true)": "<string:11497792>", "Bool(true)": "<string:1107361792>", discountId: active_discount_id };
              return obj3;
            } else if (closure_16 === active_discount_id) {
              const obj4 = { "Bool(true)": "absolute", "Bool(true)": -4, discountId: active_discount_id };
              return obj4;
            } else if (closure_17 === active_discount_id) {
              const obj5 = { discountId: active_discount_id };
              return obj5;
            }
          }
        }
      }
      const obj6 = { discountId: active_discount_id };
      return obj6;
    }
  }
  const obj7 = { discountId: active_discount_id };
  return obj7;
};
export const useFetchChurnUserDiscountOffer = function useFetchChurnUserDiscountOffer(arg0) {
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  function onFetchComplete(closure_4, arg1) {
    callback(true);
    tmp7(false);
  }
  const tmp = importDefault(dependencyMap[9])(closure_10);
  let tmp2 = importDefault(dependencyMap[9])(closure_11);
  [tmp4, closure_0] = onFetchComplete(React.useState(false), 2);
  const tmp3 = onFetchComplete(React.useState(false), 2);
  [tmp6, tmp7] = onFetchComplete(React.useState(false), 2);
  const importDefault = tmp7;
  const tmp5 = onFetchComplete(React.useState(false), 2);
  [tmp9, closure_2] = onFetchComplete(React.useState(null), 2);
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
      obj = arg1(dependencyMap[10]);
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
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let hasPremiumNitroMonthly = null !== stateFromStores;
  const obj = arg1(dependencyMap[7]);
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
      found = discounts.find((type) => type.type === callback(closure_2[11]).InvoiceDiscountTypes.SUBSCRIPTION_PLAN);
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
  return arg1(dependencyMap[12]).useIsInReverseTrial();
};
