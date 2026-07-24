// Module ID: 6648
// Function ID: 51052
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1851, 5622, 3776, 2]
// Exports: getModifySubscriptionItemsForProduct, getPremiumBundlesWithPredicate, getProductIdFromSubscription, getProductIdsForBothIntervals, productsHaveSamePerks, shouldAlwaysExcludeFromPlanSelect

// Module 6648 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import GuildFeatures from "GuildFeatures";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let require = arg1;
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
function getPremiumBundleWithPredicate(arg0) {
  const values = Object.values(require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.find(arg0);
}
function getPremiumBundledItemsFromProductId(productId) {
  if (productId in require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems) {
    return require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems[productId];
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid bundled product ID " + productId);
    throw error;
  }
}
function getToggledIntervalProduct(productIdFromSubscription) {
  let tmp = getPremiumBundledItemsFromProductId(productIdFromSubscription);
  const require = tmp;
  let tmp2 = null;
  if (tmp.premiumTier !== TIER_1.TIER_1) {
    const tmp4 = getPremiumBundleWithPredicate((numPremiumGuild) => {
      tmp = numPremiumGuild.numPremiumGuild === tmp.numPremiumGuild;
      if (tmp) {
        tmp = numPremiumGuild.premiumTier === tmp.premiumTier;
      }
      if (tmp) {
        tmp = numPremiumGuild.interval !== tmp.interval;
      }
      if (tmp) {
        tmp = !numPremiumGuild.isDeprecated;
      }
      return tmp;
    });
    let productId;
    if (null != tmp4) {
      productId = tmp4.productId;
    }
    tmp2 = productId;
  }
  return tmp2;
}
function isValidBundleProductId(productIdFromSubscription) {
  let tmp = null != productIdFromSubscription;
  if (tmp) {
    tmp = productIdFromSubscription in require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems;
  }
  return tmp;
}
function getSubscriptionItemsForProduct(productId) {
  let done;
  if (isValidBundleProductId(productId)) {
    const tmp7 = getPremiumBundledItemsFromProductId(productId);
    const items = [];
    if (tmp7.basePlanId !== constants2.NONE_MONTH) {
      let obj = { planId: tmp7.basePlanId, quantity: 1 };
      items.push(obj);
    }
    const tmp11 = _createForOfIteratorHelperLoose(tmp7.additionalPlans);
    let iter = tmp11();
    if (!iter.done) {
      do {
        let value = iter.value;
        obj = { planId: value.planId, quantity: value.quantity };
        let arr = items.push(obj);
        let iter2 = tmp11();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return items;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid product " + productId);
    throw error;
  }
}
function makeExternalPaymentGatewayPlanIdOrThrow(productIdFromSubscription) {
  if (null == productIdFromSubscription) {
    const _Error2 = Error;
    const error = new Error("Invalid null plan ID");
    throw error;
  } else if (isValidBundleProductId(productIdFromSubscription)) {
    return productIdFromSubscription;
  } else {
    const text = `${productIdFromSubscription}.1`;
    if (isValidBundleProductId(`${productIdFromSubscription}.1`)) {
      return `${productIdFromSubscription}.1`;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("Invalid plan ID " + productIdFromSubscription);
      throw error1;
    }
  }
}
function aggregateQuantitiesByPlanId(subscriptionItemsForProduct) {
  let iter2;
  let planId;
  let quantity;
  const map = new Map();
  const tmp = _createForOfIteratorHelperLoose(subscriptionItemsForProduct);
  let iter = tmp();
  if (!iter.done) {
    do {
      ({ planId, quantity } = iter.value);
      let value = map.get(planId);
      let num = 0;
      if (null != value) {
        num = value;
      }
      let result = map.set(planId, num + quantity);
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return map;
}
function planQuantityMapsEqual(size, size2) {
  if (size.size !== size2.size) {
    return false;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(size);
    let iter = tmp2();
    if (!iter.done) {
      while (size2.get(tmp4[0]) === tmp5) {
        let iter2 = tmp2();
        iter = iter2;
      }
      return false;
    }
    return true;
  }
}
function getProductIdFromSubscriptionItems(subscriptionItemsForProduct) {
  const keys = Object.keys(require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems);
  let num = 0;
  if (0 < keys.length) {
    while (!planQuantityMapsEqual(tmp, aggregateQuantitiesByPlanId(getSubscriptionItemsForProduct(keys[num])))) {
      num = num + 1;
    }
    return keys[num];
  }
  const error = new Error("No App Store bundled product matches the subscription items");
  throw error;
}
({ PREMIUM_GUILD_SUBSCRIPTION_PLANS: closure_3, PremiumTypes: closure_4, SubscriptionIntervalTypes: closure_5, SubscriptionPlans: closure_6 } = GuildFeatures);
let result = require("SubscriptionPlans").fileFinishedImporting("modules/premium/native/PremiumBundledPlansUtils.tsx");

export const getPremiumBundlesWithPredicate = function getPremiumBundlesWithPredicate(predicate) {
  const values = Object.values(require(5622) /* SubscriptionPlans */.AppStorePremiumProductIdsToPremiumBundledItems);
  return values.filter(predicate);
};
export { getPremiumBundleWithPredicate };
export { getPremiumBundledItemsFromProductId };
export { getToggledIntervalProduct };
export const getProductIdsForBothIntervals = function getProductIdsForBothIntervals(productIdFromSubscription) {
  const tmp = getPremiumBundledItemsFromProductId(productIdFromSubscription);
  let tmp2 = getToggledIntervalProduct(productIdFromSubscription);
  if (null == tmp2) {
    let obj = { monthly: productIdFromSubscription, yearly: null };
  } else {
    obj = {};
    let tmp4 = tmp2;
    if (tmp.interval === constants.MONTH) {
      tmp4 = productIdFromSubscription;
    }
    obj.monthly = tmp4;
    if (tmp.interval === constants.YEAR) {
      tmp2 = productIdFromSubscription;
    }
    obj.yearly = tmp2;
  }
  return obj;
};
export const productsHaveSamePerks = function productsHaveSamePerks(productId, outer1_7) {
  if (isValidBundleProductId(productId)) {
    if (isValidBundleProductId(outer1_7)) {
      if (null != productId) {
        if (null != outer1_7) {
          if (productId === outer1_7) {
            return true;
          } else {
            const tmp4 = getPremiumBundledItemsFromProductId(productId);
            const tmp5 = getPremiumBundledItemsFromProductId(outer1_7);
            return tmp4.numPremiumGuild === tmp5.numPremiumGuild && tmp4.premiumTier === tmp5.premiumTier;
          }
        }
      }
      return productId === outer1_7;
    }
  }
  return productId === outer1_7;
};
export { isValidBundleProductId };
export const shouldAlwaysExcludeFromPlanSelect = function shouldAlwaysExcludeFromPlanSelect(isDeprecated) {
  isDeprecated = isDeprecated.isDeprecated;
  if (!isDeprecated) {
    isDeprecated = isDeprecated.interval === constants.YEAR;
  }
  return isDeprecated;
};
export { getSubscriptionItemsForProduct };
export const getModifySubscriptionItemsForProduct = function getModifySubscriptionItemsForProduct(productId, subscription) {
  let tmp = getPremiumBundledItemsFromProductId(productId);
  if (null != tmp.premiumTier) {
    if (obj.isBoostOnlySubscription(subscription)) {
      const itemsWithUpsertedPremiumPlanId = found(3776).getItemsWithUpsertedPremiumPlanId(subscription, tmp.basePlanId);
      const reversed = itemsWithUpsertedPremiumPlanId.reverse();
      const additionalPlans = tmp.additionalPlans;
      found = additionalPlans.find((planId) => outer1_3.has(planId.planId));
      let mapped = reversed;
      if (null != found) {
        mapped = reversed.map((planId) => {
          let tmp = planId;
          if (outer1_3.has(planId.planId)) {
            const obj = {};
            const merged = Object.assign(planId);
            obj["planId"] = found.planId;
            obj["quantity"] = found.quantity;
            tmp = obj;
          }
          return tmp;
        });
      }
      return mapped;
    }
    obj = found(3776);
  }
  return getSubscriptionItemsForProduct(productId);
};
export { makeExternalPaymentGatewayPlanIdOrThrow };
export { getProductIdFromSubscriptionItems };
export const getProductIdFromSubscription = function getProductIdFromSubscription(subscription, arg1) {
  if (subscription.isACOM) {
    let items1 = null;
    if (arg1) {
      const renewalMutations2 = subscription.renewalMutations;
      let items;
      if (null != renewalMutations2) {
        items = renewalMutations2.items;
      }
      items1 = items;
    }
    if (null == items1) {
      items1 = subscription.items;
    }
    return getProductIdFromSubscriptionItems(items1);
  } else {
    let paymentGatewayPlanId1 = null;
    if (arg1) {
      const renewalMutations = subscription.renewalMutations;
      let paymentGatewayPlanId;
      if (null != renewalMutations) {
        paymentGatewayPlanId = renewalMutations.paymentGatewayPlanId;
      }
      paymentGatewayPlanId1 = paymentGatewayPlanId;
    }
    if (null == paymentGatewayPlanId1) {
      paymentGatewayPlanId1 = subscription.paymentGatewayPlanId;
    }
    return makeExternalPaymentGatewayPlanIdOrThrow(paymentGatewayPlanId1);
  }
};
