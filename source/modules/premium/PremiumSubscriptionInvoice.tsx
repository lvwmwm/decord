// Module ID: 7414
// Function ID: 59594
// Name: createSubscriptionInvoicePreview
// Dependencies: [29, 57, 5, 31, 3785, 653, 3776, 507, 686, 4029, 44, 4369, 2]
// Exports: getItemUnitPriceWithDiscount, useFetchSubscriptionGiftInvoicePreview, useFetchSubscriptionInvoicePreview, useGetSubscriptionInvoice

// Module 7414 (createSubscriptionInvoicePreview)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import result from "result";
import _callSuper from "_callSuper";
import { Endpoints } from "ME";

let closure_10;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function createSubscriptionInvoicePreview() {
  return _createSubscriptionInvoicePreview(...arguments);
}
async function _createSubscriptionInvoicePreview(arg0, arg1) {
  let iter = (function*(arg0) {
    let applyEntitlements;
    let code;
    let currency;
    let items;
    let loadId;
    let metadata;
    let paymentSourceId;
    let renewal;
    let trialId;
    ({ items, paymentSourceId, applyEntitlements, trialId, code } = arg0);
    if (applyEntitlements === undefined) {
      applyEntitlements = false;
    }
    ({ currency, renewal, metadata, loadId } = arg0);
    yield undefined;
    let obj = {};
    const result = outer2_0(outer2_2[6]).coerceExistingItemsToNewItemInterval(items);
    obj.items = result.map((planId) => {
      let obj = Object.create(null);
      obj.planId = 0;
      obj = {};
      const merged = Object.assign(Object.assign(planId, obj));
      obj["plan_id"] = planId.planId;
      return obj;
    });
    obj.payment_source_id = paymentSourceId;
    obj.trial_id = trialId;
    obj.code = code;
    obj.apply_entitlements = applyEntitlements;
    obj.currency = currency;
    obj.renewal = renewal;
    obj.metadata = metadata;
    obj.load_id = loadId;
    const HTTP = outer2_0(outer2_2[7]).HTTP;
    obj = { url: outer2_12.BILLING_SUBSCRIPTIONS_PREVIEW, body: obj, oldFormErrors: true, rejectWithError: false };
    const invoiceFromServer = outer2_11.createInvoiceFromServer(yield HTTP.post(obj).body);
    const checkoutContext = invoiceFromServer.checkoutContext;
    let payment_sources;
    if (null != checkoutContext) {
      payment_sources = checkoutContext.payment_sources;
    }
    if (null != payment_sources) {
      obj = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: invoiceFromServer.checkoutContext, paymentSourceId };
      outer2_1(outer2_2[8]).dispatch(obj);
      const obj4 = outer2_1(outer2_2[8]);
    }
    return invoiceFromServer;
  })();
  iter.next();
  return iter;
}
function updateSubscriptionInvoicePreview() {
  return _updateSubscriptionInvoicePreview(...arguments);
}
async function _updateSubscriptionInvoicePreview(arg0, arg1) {
  let iter = (function*(arg0) {
    let analyticsLocation;
    let analyticsLocations;
    let applyEntitlements;
    let currency;
    let items;
    let paymentSourceId;
    let renewal;
    let subscriptionId;
    let userDiscountOfferId;
    ({ items, paymentSourceId, applyEntitlements, subscriptionId, renewal, currency } = arg0);
    if (applyEntitlements === undefined) {
      applyEntitlements = false;
    }
    ({ analyticsLocations, analyticsLocation, userDiscountOfferId } = arg0);
    yield undefined;
    let result = items;
    if (null != items) {
      let obj = outer2_0(outer2_2[6]);
      result = obj.coerceExistingItemsToNewItemInterval(items);
    }
    obj = {};
    let mapped;
    if (null != result) {
      mapped = result.map((planId) => {
        let obj = Object.create(null);
        obj.planId = 0;
        obj = {};
        const merged = Object.assign(Object.assign(planId, obj));
        obj["plan_id"] = planId.planId;
        return obj;
      });
    }
    obj.items = mapped;
    obj.payment_source_id = paymentSourceId;
    obj.renewal = renewal;
    obj.apply_entitlements = applyEntitlements;
    obj.currency = currency;
    obj.user_discount_offer_id = userDiscountOfferId;
    const HTTP = outer2_0(outer2_2[7]).HTTP;
    obj = { url: outer2_12.BILLING_SUBSCRIPTION_PREVIEW(subscriptionId), query: { location: analyticsLocation, location_stack: analyticsLocations }, body: obj, oldFormErrors: true, rejectWithError: false };
    const invoiceFromServer = outer2_11.createInvoiceFromServer(yield HTTP.patch(obj).body);
    let tmp7 = tmp6;
    if (null != paymentSourceId) {
      const checkoutContext = invoiceFromServer.checkoutContext;
      let payment_sources;
      if (null != checkoutContext) {
        payment_sources = checkoutContext.payment_sources;
      }
      tmp7 = null != payment_sources;
    }
    if (tmp7) {
      const obj1 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: invoiceFromServer.checkoutContext, paymentSourceId };
      outer2_1(outer2_2[8]).dispatch(obj1);
      const obj4 = outer2_1(outer2_2[8]);
    }
    return invoiceFromServer;
  })();
  iter.next();
  return iter;
}
function createOneTimePurchaseInvoicePreview() {
  return _createOneTimePurchaseInvoicePreview(...arguments);
}
async function _createOneTimePurchaseInvoicePreview(arg0, arg1) {
  let iter = (function*(arg0) {
    let currency;
    let loadId;
    let paymentSourceId;
    let quantity;
    let skuId;
    let subscriptionPlanId;
    ({ skuId, quantity } = arg0);
    ({ paymentSourceId, subscriptionPlanId, currency, loadId } = arg0);
    yield undefined;
    outer2_1(outer2_2[10])(skuId, "SKU ID is missing for one time purchase gift invoice preview");
    let obj = { gift: true, payment_source_id: paymentSourceId, sku_subscription_plan_id: subscriptionPlanId, currency, load_id: loadId };
    if (null != quantity) {
      tmp3.quantity = quantity;
    }
    obj = { url: outer2_12.STORE_SKU_PURCHASE(skuId), query: obj, oldFormErrors: true, rejectWithError: false };
    return outer2_11.createInvoiceFromServer(yield outer2_0(outer2_2[11]).httpGetWithCountryCodeQuery(obj).body);
  })();
  iter.next();
  return iter;
}
function getSubscriptionInvoice() {
  return _getSubscriptionInvoice(...arguments);
}
async function _getSubscriptionInvoice(arg0, arg1) {
  let iter = (function*(arg0) {
    let preventFetch;
    let subscriptionId;
    ({ subscriptionId, preventFetch } = arg0);
    yield undefined;
    if (preventFetch) {
      return null;
    } else {
      const HTTP = outer2_0(outer2_2[7]).HTTP;
      const obj = { url: outer2_12.BILLING_SUBSCRIPTION_INVOICE(subscriptionId), oldFormErrors: true, rejectWithError: false };
      return outer2_11.createInvoiceFromServer(yield HTTP.get(obj).body);
    }
  })();
  iter.next();
  return iter;
}
function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  let closure_1 = arg1;
  let closure_2;
  let closure_3;
  const tmp = callback(callback5(null), 2);
  closure_2 = tmp[1];
  const tmp2 = callback(callback5(null), 2);
  closure_3 = tmp2[1];
  const items = [flag, arg1, arg2];
  callback4(() => {
    async function _loadPreview() {
      outer3_3(null);
      if (!outer2_0) {
        outer3_2(tmp2);
      }
    }
    let c0 = false;
    if (!c0) {
      (function loadPreview() {
        return _loadPreview(...arguments);
      })();
    }
    return () => {
      let c0 = true;
    };
  }, items);
  const items1 = [tmp[0], tmp2[0]];
  return items1;
}
function getPaymentSourceIdFromInvoiceRecord(checkoutContext) {
  checkoutContext = checkoutContext.checkoutContext;
  let payment_sources;
  if (null != checkoutContext) {
    payment_sources = checkoutContext.payment_sources;
  }
  let tmp2 = null;
  if (null != payment_sources) {
    const found = payment_sources.find((enabled) => enabled.enabled);
    let id;
    if (null != found) {
      id = found.id;
    }
    let tmp5 = null;
    if (null != id) {
      tmp5 = id;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let closure_3 = ["subscriptionId"];
({ useCallback: closure_7, useEffect: closure_8, useState: closure_9, useRef: closure_10 } = result);
result = require("asyncGeneratorStep").fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export { useFetchGenericInvoicePreview };
export const useFetchSubscriptionGiftInvoicePreview = function useFetchSubscriptionGiftInvoicePreview(preventFetch) {
  let closure_0 = preventFetch;
  let closure_1 = callback6(preventFetch);
  let closure_2 = callback6(false);
  callback4(() => {
    closure_1.current = closure_0;
  });
  const items = [JSON.stringify(preventFetch)];
  return useFetchGenericInvoicePreview(preventFetch, callback3(() => {
    const current = ref.current;
    let tmp = current;
    if (!ref2.current) {
      const obj = {};
      const merged = Object.assign(current);
      obj["paymentSourceId"] = null;
      tmp = obj;
    }
    ref2.current = true;
    return outer1_17(tmp);
  }, items), arg1);
};
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId) {
  let closure_0 = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = shouldReturnInvoiceCache(subscriptionId, serverPricedPreviewRef);
      closure_0 = tmp5;
      tmp = tmp5;
    }
  }
  let closure_1 = callback6(tmp);
  let closure_2 = callback6(false);
  const tmp6 = (function useServerProvidedInvoiceCache(arg0) {
    let tmp = outer1_10(null);
    let closure_0 = tmp;
    const items = [arg0];
    outer1_8(() => {
      closure_0.current = null;
    }, items);
    const tmp3 = outer1_7((paymentSourceId) => {
      const current = tmp.current;
      tmp = null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
      if (tmp) {
        tmp = arg1 === current.dedupeKey;
      }
      return tmp;
    }, []);
    return {
      serverPricedPreviewRef: tmp,
      shouldReturnInvoiceCache: outer1_7((paymentSourceId) => {
        const current = tmp.current;
        tmp = null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
        if (tmp) {
          tmp = arg1 === current.dedupeKey;
        }
        return tmp;
      }, []),
      updateServerPricedPreviewRef: outer1_7((record, dedupeKey) => {
        let tmp2 = null;
        if (null == arg2) {
          const obj = { record, dedupeKey, serverSelectedPaymentSourceId: outer2_22(record) };
          tmp2 = obj;
        }
        closure_0.current = tmp2;
      }, [])
    };
  })(arg1);
  serverPricedPreviewRef = tmp6.serverPricedPreviewRef;
  shouldReturnInvoiceCache = tmp6.shouldReturnInvoiceCache;
  const updateServerPricedPreviewRef = tmp6.updateServerPricedPreviewRef;
  callback4(() => {
    closure_1.current = closure_0;
  });
  let items = [JSON.stringify(tmp), serverPricedPreviewRef, shouldReturnInvoiceCache, updateServerPricedPreviewRef];
  return useFetchGenericInvoicePreview(tmp, callback3(() => {
    const current = json.current;
    let tmp = current;
    if (!ref.current) {
      let obj = {};
      const merged = Object.assign(current);
      obj["paymentSourceId"] = null;
      tmp = obj;
    }
    let closure_0 = tmp;
    if ("subscriptionId" in tmp) {
      ref.current = true;
      return outer1_15(tmp);
    } else if ("items" in tmp) {
      ref.current = true;
      const _JSON = JSON;
      obj = {};
      const merged1 = Object.assign(tmp);
      obj["paymentSourceId"] = "exclude_from_dedupe";
      json = JSON.stringify(obj);
      const current2 = serverPricedPreviewRef.current;
      if (null != current2) {
        if (shouldReturnInvoiceCache(tmp, json)) {
          let resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      resolved = outer1_13(tmp).then((arg0) => arg0);
      const promise = outer1_13(tmp);
    } else {
      return null;
    }
  }, items), arg1);
};
export const useGetSubscriptionInvoice = function useGetSubscriptionInvoice(preventFetch) {
  let closure_0 = preventFetch;
  let closure_1 = callback6(preventFetch);
  callback4(() => {
    closure_1.current = closure_0;
  });
  const items = [JSON.stringify(preventFetch)];
  return useFetchGenericInvoicePreview(preventFetch, callback3(() => outer1_19(ref.current), items), arg1);
};
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  let discounts;
  let importDefault;
  let closure_0 = arg0;
  ({ subscriptionPlanPrice: importDefault, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return importDefault;
};
