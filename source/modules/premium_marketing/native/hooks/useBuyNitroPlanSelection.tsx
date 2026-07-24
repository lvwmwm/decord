// Module ID: 7431
// Function ID: 59745
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1851, 6648, 6685, 7194, 477, 7126, 7128, 7185, 7432, 2]
// Exports: useBuyNitroPlanSelection

// Module 7431 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import GuildFeatures from "GuildFeatures";

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
let PremiumTypes = GuildFeatures.PremiumTypes;
let SubscriptionIntervalTypes = GuildFeatures.SubscriptionIntervalTypes;
let items = [, ];
({ TIER_2: arr[0], TIER_0: arr[1] } = PremiumTypes);
let result = require("GuildFeatures").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroPlanSelection.tsx");

export const NITRO_PLAN_TIERS = items;
export const useBuyNitroPlanSelection = function useBuyNitroPlanSelection(tier) {
  let discountedPriceString;
  let discountedProduct;
  let obj = _require(memo[4]);
  const premiumTrialOfferPremiumType = obj.usePremiumTrialOfferPremiumType();
  const NitroACOMSubscriptionExperiment = _require(memo[5]).NitroACOMSubscriptionExperiment;
  let obj1 = _require(memo[6]);
  tier = undefined;
  if (null != tier) {
    tier = tier.tier;
  }
  let tmp7 = null;
  if (null != tier) {
    tmp7 = tier;
  }
  const tmp8 = found(found1.useState(tmp7), 2);
  const first = tmp8[0];
  _require = tmp8[1];
  let TIER_2 = tmp2;
  if (null != first) {
    TIER_2 = first;
  }
  if (null == TIER_2) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [TIER_2];
  memo = found1.useMemo(() => (function getBasePlansForTier(TIER_2) {
    const callback = TIER_2;
    const premiumBundlesWithPredicate = callback(memo[3]).getPremiumBundlesWithPredicate((additionalPlans) => {
      let tmp = 0 === additionalPlans.additionalPlans.length;
      if (tmp) {
        tmp = true !== additionalPlans.isDeprecated;
      }
      if (tmp) {
        tmp = 0 === additionalPlans.numPremiumGuild;
      }
      if (tmp) {
        tmp = additionalPlans.premiumTier === closure_0;
      }
      return tmp;
    });
    return premiumBundlesWithPredicate.sort((interval, interval2) => interval2.interval - interval.interval);
  })(TIER_2), items);
  const premiumDiscountOffer = _require(memo[7]).usePremiumDiscountOffer();
  const obj3 = _require(memo[7]);
  const isEligibleForBogoOffer = _require(memo[8]).useIsEligibleForBogoOffer();
  const obj4 = _require(memo[8]);
  const discountedPremiumProductInfo = _require(memo[9]).useDiscountedPremiumProductInfo(premiumDiscountOffer, memo);
  ({ discountedProduct, discountedPriceString } = discountedPremiumProductInfo);
  if (null != premiumDiscountOffer) {
    const _parseFloat = parseFloat;
    let _NaN = parseFloat(premiumDiscountOffer.discount.amount);
  } else {
    _NaN = NaN;
  }
  obj = {};
  let identifier;
  if (null != discountedProduct) {
    identifier = discountedProduct.identifier;
  }
  obj.id = identifier;
  obj.priceString = discountedPriceString;
  let userUsageLimit;
  if (null != premiumDiscountOffer) {
    const discount = premiumDiscountOffer.discount;
    if (null != discount) {
      userUsageLimit = discount.userUsageLimit;
    }
  }
  let num = 1;
  if (null != userUsageLimit) {
    num = userUsageLimit;
  }
  obj.numMonths = num;
  let tmp18 = null;
  if (!Number.isNaN(_NaN)) {
    tmp18 = _NaN;
  }
  obj.percentOff = tmp18;
  found = memo.find((interval) => interval.interval === tmp30.MONTH);
  found1 = memo.find((interval) => interval.interval === tmp30.YEAR);
  let basePlanId;
  const obj5 = _require(memo[9]);
  if (null != found) {
    basePlanId = found.basePlanId;
  }
  const tmp21Result = TIER_2(memo[10])(basePlanId);
  let priceString;
  if (null != tmp21Result) {
    priceString = tmp21Result.priceString;
  }
  let tmp25 = null;
  if (null != priceString) {
    tmp25 = priceString;
  }
  PremiumTypes = tmp25;
  let basePlanId1;
  const tmp21 = TIER_2(memo[10]);
  if (null != found1) {
    basePlanId1 = found1.basePlanId;
  }
  const tmp26Result = TIER_2(memo[10])(basePlanId1);
  let priceString1;
  if (null != tmp26Result) {
    priceString1 = tmp26Result.priceString;
  }
  let tmp30 = null;
  if (null != priceString1) {
    tmp30 = priceString1;
  }
  const SubscriptionIntervalTypes = tmp30;
  const tmp31 = found(found1.useState(() => new Map()), 2);
  const first1 = tmp31[0];
  let closure_8 = tmp31[1];
  const items1 = [found, found1, tmp25, tmp30, first1];
  let callback = found1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback2((get) => {
      if (get.get(closure_0) === closure_1) {
        return get;
      } else {
        const _Map = Map;
        const map = new Map(get);
        const result = map.set(closure_0, closure_1);
        return map;
      }
    });
  }, []);
  const memo1 = found1.useMemo(() => {
    let iter2;
    let tmp14;
    let tmp15;
    const map = new Map();
    let tmp = null != found;
    if (tmp) {
      tmp = null != closure_5;
    }
    if (tmp) {
      const result = map.set(found.productId, closure_5);
    }
    let tmp6 = null != found1;
    if (tmp6) {
      tmp6 = null != closure_6;
    }
    if (tmp6) {
      const result1 = map.set(found1.productId, closure_6);
    }
    const tmp11 = callback2(first1);
    let iter = tmp11();
    if (!iter.done) {
      do {
        let tmp12 = found;
        let tmp13 = found(iter.value, 2);
        [tmp14, tmp15] = tmp13;
        if (map.has(tmp14)) {
          let result2 = map.set(tmp14, tmp15);
        }
        iter2 = tmp11();
        iter = iter2;
      } while (!iter2.done);
    }
    return map;
  }, items1);
  const items2 = [memo, memo1];
  const memo2 = found1.useMemo(() => {
    let iter2;
    const set = new Set();
    if (memo1.size > 0) {
      const tmp3 = callback2(memo);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp4 = memo1;
          if (!memo1.has(value.productId)) {
            let addResult = set.add(value.productId);
          }
          iter2 = tmp3();
          iter = iter2;
        } while (!iter2.done);
      }
    }
    return set;
  }, items2);
  let productId;
  if (null != tier) {
    productId = tier.productId;
  }
  let tmp38 = null;
  if (null != productId) {
    tmp38 = productId;
  }
  const tmp39 = found(found1.useState(tmp38), 2);
  const first2 = tmp39[0];
  let closure_11 = tmp39[1];
  const items3 = [TIER_2];
  [][0] = TIER_2;
  const callback1 = found1.useCallback((arg0) => {
    if (arg0 !== TIER_2) {
      callback(arg0);
      callback3(null);
    }
  }, items3);
  if (null != first2) {
    if (memo.some((productId) => productId.productId === first2)) {
      let tmp43 = first2;
    }
    let closure_12 = tmp43;
    const found2 = memo.find((productId) => productId.productId === closure_12);
    let tmp48 = null != tmp2;
    if (tmp48) {
      let premiumTier;
      if (null != found2) {
        premiumTier = found2.premiumTier;
      }
      tmp48 = premiumTier === tmp2;
    }
    obj = {};
    obj1 = { tier: TIER_2, setTier: callback1, productId: tmp43, setProductId: tmp42, item: found2 };
    let tmp50 = null;
    if (null != found2) {
      if (!tmp47) {
        let value = memo1.get(found2.productId);
        let tmp52 = null;
        if (null != value) {
          tmp52 = value;
        }
        discountedPriceString = tmp52;
      }
      tmp50 = discountedPriceString;
    }
    obj1.priceString = tmp50;
    obj1.isDiscounted = null != found2 && found2.productId === obj.id && null != discountedPriceString;
    obj1.isTrial = tmp48;
    obj.selection = obj1;
    obj.items = memo;
    obj.priceStringByProductId = memo1;
    obj.unavailableProductIds = memo2;
    obj.bogoEligible = isEligibleForBogoOffer;
    obj.hasDiscountOffer = null != premiumDiscountOffer;
    obj.trialTier = tmp2;
    obj.discounted = obj;
    obj.applyOrderPriceOverride = callback;
    return obj;
  }
  const tmp44 = (function getDefaultItem(memo, memo2, arg2) {
    let arr = memo;
    let closure_0 = memo2;
    let closure_1 = arg2;
    const found = memo.filter((productId) => !memo2.has(productId.productId));
    if (found.length > 0) {
      arr = found;
    }
    let found1 = arr.find((interval) => interval.interval === closure_1);
    if (null == found1) {
      found1 = arr[0];
    }
    return found1;
  })(memo, memo2, isEligibleForBogoOffer ? SubscriptionIntervalTypes.MONTH : SubscriptionIntervalTypes.YEAR);
  let productId1;
  if (null != tmp44) {
    productId1 = tmp44.productId;
  }
  tmp43 = productId1;
};
