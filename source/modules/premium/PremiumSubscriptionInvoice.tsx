// Module ID: 7407
// Function ID: 59514
// Name: createSubscriptionInvoicePreview
// Dependencies: []
// Exports: getItemUnitPriceWithDiscount, useFetchSubscriptionGiftInvoicePreview, useFetchSubscriptionInvoicePreview, useGetSubscriptionInvoice

// Module 7407 (createSubscriptionInvoicePreview)
function createSubscriptionInvoicePreview() {
  return _createSubscriptionInvoicePreview(...arguments);
}
async function _createSubscriptionInvoicePreview(arg0, arg1) {
  const fn = function*(arg0) {
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
    const result = callback(closure_2[6]).coerceExistingItemsToNewItemInterval(items);
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
    const HTTP = callback(closure_2[7]).HTTP;
    obj = { url: constants.BILLING_SUBSCRIPTIONS_PREVIEW, body: obj, oldFormErrors: true, rejectWithError: false };
    const invoiceFromServer = closure_11.createInvoiceFromServer(yield HTTP.post(obj).body);
    const checkoutContext = invoiceFromServer.checkoutContext;
    let payment_sources;
    if (null != checkoutContext) {
      payment_sources = checkoutContext.payment_sources;
    }
    if (null != payment_sources) {
      obj = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: invoiceFromServer.checkoutContext, paymentSourceId };
      callback2(closure_2[8]).dispatch(obj);
      const obj4 = callback2(closure_2[8]);
    }
    return invoiceFromServer;
  };
  fn.next();
  return fn;
}
function updateSubscriptionInvoicePreview() {
  return _updateSubscriptionInvoicePreview(...arguments);
}
async function _updateSubscriptionInvoicePreview(arg0, arg1) {
  const fn = function*(arg0) {
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
      let obj = callback(closure_2[6]);
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
    const HTTP = callback(closure_2[7]).HTTP;
    obj = { url: closure_12.BILLING_SUBSCRIPTION_PREVIEW(subscriptionId), query: { location: analyticsLocation, location_stack: analyticsLocations }, body: obj, oldFormErrors: true, rejectWithError: false };
    const invoiceFromServer = closure_11.createInvoiceFromServer(yield HTTP.patch(obj).body);
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
      callback2(closure_2[8]).dispatch(obj1);
      const obj4 = callback2(closure_2[8]);
    }
    return invoiceFromServer;
  };
  fn.next();
  return fn;
}
function createOneTimePurchaseInvoicePreview() {
  return _createOneTimePurchaseInvoicePreview(...arguments);
}
async function _createOneTimePurchaseInvoicePreview(arg0, arg1) {
  const fn = function*(arg0) {
    let currency;
    let loadId;
    let paymentSourceId;
    let quantity;
    let skuId;
    let subscriptionPlanId;
    ({ skuId, quantity } = arg0);
    ({ paymentSourceId, subscriptionPlanId, currency, loadId } = arg0);
    yield undefined;
    callback2(closure_2[10])(skuId, "SKU ID is missing for one time purchase gift invoice preview");
    let obj = { gift: true, payment_source_id: paymentSourceId, sku_subscription_plan_id: subscriptionPlanId, currency, load_id: loadId };
    if (null != quantity) {
      tmp3.quantity = quantity;
    }
    obj = { url: closure_12.STORE_SKU_PURCHASE(skuId), query: obj, oldFormErrors: true, rejectWithError: false };
    return closure_11.createInvoiceFromServer(yield callback(closure_2[11]).httpGetWithCountryCodeQuery(obj).body);
  };
  fn.next();
  return fn;
}
function getSubscriptionInvoice() {
  return _getSubscriptionInvoice(...arguments);
}
async function _getSubscriptionInvoice(arg0, arg1) {
  const fn = function*(arg0) {
    let preventFetch;
    let subscriptionId;
    ({ subscriptionId, preventFetch } = arg0);
    yield undefined;
    if (preventFetch) {
      return null;
    } else {
      const HTTP = callback(closure_2[7]).HTTP;
      const obj = { disabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, accessibilityHint: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, legacyCompat_selected: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, url: closure_12.BILLING_SUBSCRIPTION_INVOICE(subscriptionId) };
      return closure_11.createInvoiceFromServer(yield HTTP.get(obj).body);
    }
  };
  fn.next();
  return fn;
}
function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  arg1 = flag;
  const importDefault = arg1;
  let closure_2;
  let closure_3;
  const tmp = callback2(callback6(null), 2);
  closure_2 = tmp[1];
  const tmp2 = callback2(callback6(null), 2);
  closure_3 = tmp2[1];
  const items = [flag, arg1, arg2];
  callback5(() => {
    async function _loadPreview() {
      callback2(null);
      if (!closure_0) {
        callback(tmp2);
      }
    }
    let closure_0 = false;
    if (!closure_0) {
      function loadPreview() {
        return _loadPreview(...arguments);
      }();
    }
    return () => {
      let closure_0 = true;
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
let closure_3 = [false];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ useCallback: closure_7, useEffect: closure_8, useState: closure_9, useRef: closure_10 } = arg1(dependencyMap[3]));
let closure_11 = importDefault(dependencyMap[4]);
const Endpoints = arg1(dependencyMap[5]).Endpoints;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export { useFetchGenericInvoicePreview };
export const useFetchSubscriptionGiftInvoicePreview = function useFetchSubscriptionGiftInvoicePreview(preventFetch) {
  const arg1 = preventFetch;
  let closure_1 = callback7(preventFetch);
  let closure_2 = callback7(false);
  callback5(() => {
    closure_1.current = arg0;
  });
  const items = [JSON.stringify(preventFetch)];
  return useFetchGenericInvoicePreview(preventFetch, callback4(() => {
    const current = ref.current;
    let tmp = current;
    if (!ref2.current) {
      const obj = {};
      const merged = Object.assign(current);
      obj["paymentSourceId"] = null;
      tmp = obj;
    }
    ref2.current = true;
    return callback(tmp);
  }, items), arg1);
};
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId) {
  let arg1 = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = callback(subscriptionId, closure_3);
      arg1 = tmp5;
      tmp = tmp5;
    }
  }
  let closure_1 = callback7(tmp);
  let closure_2 = callback7(false);
  const tmp6 = function useServerProvidedInvoiceCache(arg0) {
    const tmp = callback3(null);
    const items = [arg0];
    callback2(() => {
      tmp.current = null;
    }, items);
    const tmp3 = callback((paymentSourceId) => {
      const current = tmp.current;
      let tmp = null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
      if (tmp) {
        tmp = arg1 === current.dedupeKey;
      }
      return tmp;
    }, []);
    return {
      serverPricedPreviewRef: tmp,
      shouldReturnInvoiceCache: callback((paymentSourceId) => {
        const current = tmp.current;
        let tmp = null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
        if (tmp) {
          tmp = arg1 === current.dedupeKey;
        }
        return tmp;
      }, []),
      updateServerPricedPreviewRef: callback((record, dedupeKey) => {
        let tmp2 = null;
        if (null == arg2) {
          const obj = { record, dedupeKey, serverSelectedPaymentSourceId: callback(record) };
          tmp2 = obj;
        }
        tmp.current = tmp2;
      }, [])
    };
  }(arg1);
  const serverPricedPreviewRef = tmp6.serverPricedPreviewRef;
  closure_3 = serverPricedPreviewRef;
  const callback = shouldReturnInvoiceCache;
  const updateServerPricedPreviewRef = tmp6.updateServerPricedPreviewRef;
  let closure_5 = updateServerPricedPreviewRef;
  callback5(() => {
    closure_1.current = tmp5;
  });
  const items = [JSON.stringify(tmp), serverPricedPreviewRef, tmp6.shouldReturnInvoiceCache, updateServerPricedPreviewRef];
  return useFetchGenericInvoicePreview(tmp, callback4(() => {
    const current = ref.current;
    let tmp = current;
    if (!ref2.current) {
      let obj = {};
      const merged = Object.assign(current);
      obj["paymentSourceId"] = null;
      tmp = obj;
    }
    if ("subscriptionId" in tmp) {
      ref2.current = true;
      return callback5(tmp);
    } else if ("items" in tmp) {
      ref2.current = true;
      const _JSON = JSON;
      obj = {};
      const merged1 = Object.assign(tmp);
      obj["paymentSourceId"] = "exclude_from_dedupe";
      const json = JSON.stringify(obj);
      const current2 = serverPricedPreviewRef.current;
      if (null != current2) {
        if (shouldReturnInvoiceCache(tmp, json)) {
          let resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      resolved = callback4(tmp).then((arg0) => arg0);
      const promise = callback4(tmp);
      const ref = json;
    } else {
      return null;
    }
  }, items), arg1);
};
export const useGetSubscriptionInvoice = function useGetSubscriptionInvoice(preventFetch) {
  const arg1 = preventFetch;
  let closure_1 = callback7(preventFetch);
  callback5(() => {
    closure_1.current = arg0;
  });
  const items = [JSON.stringify(preventFetch)];
  return useFetchGenericInvoicePreview(preventFetch, callback4(() => callback(ref.current), items), arg1);
};
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  let discounts;
  const arg1 = arg0;
  ({ subscriptionPlanPrice: closure_1, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / amount.quantity;
  });
  return importDefault;
};
