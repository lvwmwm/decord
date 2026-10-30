// Module ID: 15233
// Function ID: 15234
// Name: PremiumSubscriptionInvoice
// Dependencies: [109, 32, 5, 19, 2056, 1072, 2048, 1283, 572, 6440, 38, 6449, 2]
// Exports: getItemUnitPriceWithDiscount, useFetchGenericInvoicePreview, useFetchSubscriptionGiftInvoicePreview, useFetchSubscriptionInvoicePreview, useGetSubscriptionInvoice

// Module 15233 (PremiumSubscriptionInvoice)
import Constants from "Constants" /* 1072 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import InvoiceRecord from "InvoiceRecord" /* 2056 */;
import size from "module_2" /* 2 */;

let apply_wallet_balance, payment_source_id, planId, sku_subscription_plan_id;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function createSubscriptionInvoicePreview() {
  return obj(...arguments);
}
let obj = function _createSubscriptionInvoicePreview() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let applyEntitlements;
    let c0;
    let c1;
    let c2;
    let c3;
    let c5;
    let c6;
    let c7;
    let c8;
    let currency;
    let renewal;
    let result;
    let closure_0 = arg0;
    if (renewal === 2) {
      renewal = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let paymentSourceId;
        let trial_id;
        let code;
        let metadata;
        let load_id;
        let obj5;
        let body;
        renewal = 2;
        if (0 === currency) {
          if (arg0 === 1) {
            renewal = 3;
            throw value;
          } else if (arg0 === 2) {
            renewal = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            paymentSourceId = undefined;
            trial_id = undefined;
            code = undefined;
            applyEntitlements = undefined;
            currency = undefined;
            renewal = undefined;
            metadata = undefined;
            load_id = undefined;
            ({ items: c0, paymentSourceId: c1, trialId: c2, code: c3, applyEntitlements } = closure_0);
            const tmp54 = closure_0;
            if (applyEntitlements === undefined) {
              applyEntitlements = false;
            }
            ({ currency: c5, renewal: c6, metadata: c7, loadId: c8 } = tmp54);
            obj5 = undefined;
            body = undefined;
            value = undefined;
            currency = 1;
            renewal = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === currency) {
          if (arg0 === 1) {
            renewal = 3;
            throw value;
          } else if (arg0 === 2) {
            renewal = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            obj5 = {
              items: result.map((planId) => {
                        planId = planId.planId;
                        obj = { plan_id: planId };
                        const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
                        return obj;
                      }),
              payment_source_id: paymentSourceId,
              trial_id,
              code,
              apply_entitlements: applyEntitlements,
              currency,
              renewal,
              metadata,
              load_id
            };
            const obj10 = closure_130_0(closure_130_2[6]);
            result = obj10.coerceExistingItemsToNewItemInterval(c0);
            c0 = result;
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[7]).HTTP;
            const request = { url: closure_130_12.BILLING_SUBSCRIPTIONS_PREVIEW, body: obj5, oldFormErrors: true, rejectWithError: false };
            currency = 3;
            renewal = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (2 === currency) {
          c4 = 0;
          let closure_12 = closure_3;
          const self = this;
          const self2 = this;
          const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_12);
          throw billingError;
        } else if (arg0 === 1) {
          renewal = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          renewal = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          value = closure_130_11.createInvoiceFromServer(body.body);
          const checkoutContext = value.checkoutContext;
          let payment_sources;
          if (checkoutContext != null) {
            payment_sources = checkoutContext.payment_sources;
          }
          if (null != payment_sources) {
            obj = closure_130_1(closure_130_2[8]);
            const obj8 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: value.checkoutContext, paymentSourceId };
            obj.dispatch(obj8);
          }
          c4 = 0;
          renewal = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp23) {
        closure_3 = tmp23;
        if (0 === c4) {
          renewal = 3;
          throw tmp23;
        } else {
          currency = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function updateSubscriptionInvoicePreview() {
  return obj(...arguments);
}
obj = function _updateSubscriptionInvoicePreview() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let applyEntitlements;
    let c0;
    let c2;
    let c3;
    let c4;
    let c6;
    let c7;
    let c8;
    let c9;
    let closure_1;
    let location_stack;
    let obj7;
    let closure_0 = arg0;
    if (location_stack === 2) {
      location_stack = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let currency;
      try {
        let renewal;
        let _location;
        let user_discount_offer_id;
        let load_id;
        let obj6;
        let body;
        location_stack = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            location_stack = 3;
            throw value;
          } else if (arg0 === 2) {
            location_stack = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c0 = undefined;
            closure_1 = undefined;
            renewal = undefined;
            currency = undefined;
            applyEntitlements = undefined;
            location_stack = undefined;
            _location = undefined;
            user_discount_offer_id = undefined;
            load_id = undefined;
            ({ subscriptionId: c0, items: closure_1, paymentSourceId: c2, renewal: c3, currency: c4, applyEntitlements } = closure_0);
            const tmp62 = closure_0;
            if (applyEntitlements === undefined) {
              applyEntitlements = false;
            }
            ({ analyticsLocations: c6, analyticsLocation: c7, userDiscountOfferId: c8, loadId: c9 } = tmp62);
            obj6 = undefined;
            body = undefined;
            value = undefined;
            c5 = 1;
            location_stack = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            location_stack = 3;
            throw value;
          } else if (arg0 === 2) {
            location_stack = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (null != closure_1) {
              const obj5 = closure_130_0(closure_130_2[6]);
              closure_1 = obj5.coerceExistingItemsToNewItemInterval(closure_1);
            }
            let mapped;
            const arr = closure_1;
            if (closure_1 != null) {
              mapped = arr.map((planId) => {
                planId = planId.planId;
                obj = { plan_id: planId };
                const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
                return obj;
              });
            }
            obj6 = { items: mapped, payment_source_id: tmp, renewal, apply_entitlements: applyEntitlements, currency, user_discount_offer_id, load_id };
            currency = 1;
            const HTTP = closure_130_0(closure_130_2[7]).HTTP;
            const request = { url: closure_130_12.BILLING_SUBSCRIPTION_PREVIEW(c0), query: obj7, body: obj6, oldFormErrors: true, rejectWithError: false };
            const patch = HTTP.patch;
            obj7 = { location: _location, location_stack };
            c5 = 3;
            location_stack = 1;
            const obj8 = { value: patch(request), done: false };
            return obj8;
          }
        } else if (2 === c5) {
          currency = 0;
          let closure_13 = closure_3;
          const self = this;
          const self2 = this;
          const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_13);
          throw billingError;
        } else if (arg0 === 1) {
          location_stack = 3;
          throw value;
        } else if (arg0 === 2) {
          currency = 0;
          location_stack = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value;
          value = closure_130_11.createInvoiceFromServer(body.body);
          let tmp8 = null != tmp;
          if (tmp8) {
            const checkoutContext = value.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            tmp8 = null != payment_sources;
          }
          if (tmp8) {
            obj = closure_130_1(closure_130_2[8]);
            const obj10 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: value.checkoutContext, paymentSourceId: tmp };
            obj.dispatch(obj10);
          }
          currency = 0;
          location_stack = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
      } catch (tmp48) {
        closure_3 = tmp48;
        if (0 === currency) {
          location_stack = 3;
          throw tmp48;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function createOneTimePurchaseInvoicePreview() {
  return obj(...arguments);
}
obj = function _createOneTimePurchaseInvoicePreview() {
  obj = _asyncToGenerator(async (payment_source_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      if (apply_wallet_balance === 2) {
        apply_wallet_balance = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let obj5;
          apply_wallet_balance = 2;
          if (0 === quantity) {
            if (arg0 === 1) {
              apply_wallet_balance = 3;
              throw value;
            } else if (arg0 === 2) {
              apply_wallet_balance = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              payment_source_id = undefined;
              c1 = undefined;
              sku_subscription_plan_id = undefined;
              currency = undefined;
              load_id = undefined;
              ({ paymentSourceId: c0, skuId: c1, subscriptionPlanId: c2, currency: c3, loadId: c4, quantity: c5, applyWalletBalance: c6 } = closure_0);
              obj5 = undefined;
              body = undefined;
              quantity = 1;
              apply_wallet_balance = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === quantity) {
            if (arg0 === 1) {
              apply_wallet_balance = 3;
              throw value;
            } else if (arg0 === 2) {
              apply_wallet_balance = 3;
              return { value, done: true };
            } else {
              let tmp20 = null != c1;
              const tmp55 = closure_130_1(closure_130_2[10]);
              if (tmp20) {
                tmp20 = "" !== c1;
              }
              tmp55(tmp20, "SKU ID is missing for one time purchase gift invoice preview");
              obj5 = { gift: true, payment_source_id, sku_subscription_plan_id, currency, load_id };
              if (null != quantity) {
                obj5.quantity = quantity;
              }
              if (null != apply_wallet_balance) {
                obj5.apply_wallet_balance = apply_wallet_balance;
              }
              load_id = 1;
              const request = { url: closure_130_12.STORE_SKU_PURCHASE(c1), query: obj5, oldFormErrors: true, rejectWithError: false };
              const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[11]).httpGetWithCountryCodeQuery;
              closure_130_0(closure_130_2[11]);
              quantity = 3;
              apply_wallet_balance = 1;
              const obj6 = { value: httpGetWithCountryCodeQuery(request), done: false };
              return obj6;
            }
          } else if (2 === quantity) {
            load_id = 0;
            let closure_9 = closure_3;
            const self = this;
            const self2 = this;
            const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_9);
            throw billingError;
          } else if (arg0 === 1) {
            apply_wallet_balance = 3;
            throw value;
          } else if (arg0 === 2) {
            load_id = 0;
            apply_wallet_balance = 3;
            return { value, done: true };
          } else {
            body = value;
            load_id = 0;
            apply_wallet_balance = 3;
            obj = { value: closure_130_11.createFromOTPPreview(body.body), done: true };
            return obj;
          }
        } catch (tmp44) {
          closure_3 = tmp44;
          if (0 === load_id) {
            apply_wallet_balance = 3;
            throw tmp44;
          } else {
            quantity = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function getSubscriptionInvoice() {
  return obj(...arguments);
}
obj = function _getSubscriptionInvoice() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let body;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ subscriptionId: c0, preventFetch: c1 } = closure_0);
            body = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp20 = c1;
            if (tmp20) {
              c4 = 3;
              return { value: null, done: true };
            } else {
              const HTTP = closure_130_0(closure_130_2[7]).HTTP;
              const obj5 = { url: closure_130_12.BILLING_SUBSCRIPTION_INVOICE(c0), oldFormErrors: true, rejectWithError: false };
              const get = HTTP.get;
              c3 = 2;
              c4 = 1;
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          c4 = 3;
          obj = { value: closure_130_11.createInvoiceFromServer(body.body), done: true };
          return obj;
        }
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["subscriptionId"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: metroImportDefault, useEffect: metroImportAll, useState: c9, useRef: c10 } = react);
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
  let c2;
  let first;
  let tmp2;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  let closure_1 = arg1;
  c2 = undefined;
  closure_3 = undefined;
  [tmp2, c2] = closure_9(null);
  _slicedToArray(closure_9(null), 2);
  [first, closure_3] = closure_9(null);
  let closure_4 = closure_10(null);
  const items = [flag, arg1, arg2];
  closure_8(() => {
    function loadPreview() {
      return obj(...arguments);
    }
    obj = function _loadPreview() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_2;
        let tmp;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                current = undefined;
                c3 = 1;
                c3(null);
                ref = 2;
                c5 = 1;
                const obj4 = { value: tmp(ref.current), done: false };
                return obj4;
              }
            } else {
              if (1 === ref) {
                c3 = 0;
                tmp = tmp28;
                const tmp17 = closure_129_0;
                if (!tmp17) {
                  ref.current = null;
                  c3(tmp);
                  tmp28(null);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                current = value;
                const tmp7 = closure_129_0;
                if (!tmp7) {
                  ref.current = current;
                  tmp28(current);
                }
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp28) {
            if (0 === c3) {
              c5 = 3;
              throw tmp28;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = c0;
    if (!tmp) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [tmp2, first];
  return items1;
}
export function useFetchSubscriptionGiftInvoicePreview(preventFetch, arg1) {
  let c2;
  let c3;
  let tmp6;
  let tmp8;
  let current = preventFetch;
  let tmp = closure_10;
  closure_10(preventFetch);
  const ref2 = closure_10(false);
  let tmp2 = closure_8;
  closure_8(() => {
    ref.current = current;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp4 = closure_7(() => {
    current = ref.current;
    let tmp2 = current;
    const tmp = ref2;
    if (!ref2.current) {
      obj = { paymentSourceId: null };
      const merged = Object.assign(current);
      tmp2 = obj;
    }
    tmp.current = true;
    return createOneTimePurchaseInvoicePreview(tmp2);
  }, items);
  let ref;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  ref = tmp4;
  c2 = undefined;
  c3 = undefined;
  [tmp6, c2] = closure_9(null);
  _slicedToArray(closure_9(null), 2);
  [tmp8, c3] = closure_9(null);
  _slicedToArray(closure_9(null), 2);
  let closure_4 = tmp(null);
  const items1 = [flag, tmp4, arg1];
  tmp2(() => {
    function loadPreview() {
      return obj(...arguments);
    }
    obj = function _loadPreview() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_2;
        let tmp;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                current = undefined;
                c3 = 1;
                c3(null);
                ref = 2;
                c5 = 1;
                const obj4 = { value: tmp(ref.current), done: false };
                return obj4;
              }
            } else {
              if (1 === ref) {
                c3 = 0;
                tmp = tmp28;
                const tmp17 = closure_129_0;
                if (!tmp17) {
                  ref.current = null;
                  c3(tmp);
                  tmp28(null);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                current = value;
                const tmp7 = closure_129_0;
                if (!tmp7) {
                  ref.current = current;
                  tmp28(current);
                }
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp28) {
            if (0 === c3) {
              c5 = 3;
              throw tmp28;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = c0;
    if (!tmp) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  }, items1);
  const items2 = [tmp6, tmp8];
  return items2;
}
export function useFetchSubscriptionInvoicePreview(subscriptionId, arg1) {
  let c2;
  let c3;
  let closure_4;
  let closure_5;
  let ref2;
  let tmp15;
  let tmp17;
  let current = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    let tmp2 = null;
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = _objectWithoutProperties(subscriptionId, ref2);
      current = tmp5;
      tmp = tmp5;
    }
  }
  let tmp6 = closure_10;
  closure_10(tmp);
  const ref = closure_10(false);
  const tmp7 = closure_10(null);
  current = tmp7;
  const items = [arg1];
  closure_8(() => {
    ref.current = null;
  }, items);
  const tmp10 = closure_7((paymentSourceId, arg1) => {
    current = ref.current;
    return null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId && arg1 === current.dedupeKey;
  }, []);
  const tmp11 = closure_7((record, dedupeKey, arg2) => {
    let tmp6;
    let tmp2 = null;
    const tmp = ref;
    if (null == arg2) {
      const checkoutContext = record.checkoutContext;
      let payment_sources;
      obj = { record, dedupeKey, serverSelectedPaymentSourceId: tmp6 };
      if (checkoutContext != null) {
        payment_sources = checkoutContext.payment_sources;
      }
      tmp6 = null;
      if (null != payment_sources) {
        const found = payment_sources.find((enabled) => enabled.enabled);
        let id;
        if (found != null) {
          id = found.id;
        }
        if (id == null) {
          id = null;
        }
        tmp6 = id;
      }
      tmp2 = obj;
    }
    tmp.current = tmp2;
  }, []);
  ref2 = tmp7;
  _objectWithoutProperties = tmp10;
  _slicedToArray = tmp11;
  closure_8(() => {
    closure_1.current = current;
  });
  const items1 = [JSON.stringify(tmp), tmp7, tmp10, tmp11];
  const tmp13 = closure_7(() => {
    let json;
    current = json.current;
    let tmp2 = current;
    if (!ref.current) {
      obj = { paymentSourceId: null };
      const merged = Object.assign(current);
      tmp2 = obj;
    }
    obj = tmp2;
    if ("subscriptionId" in tmp2) {
      ref.current = true;
      return updateSubscriptionInvoicePreview(tmp2);
    } else if ("items" in tmp2) {
      ref.current = true;
      const _JSON = JSON;
      const obj2 = { paymentSourceId: "exclude_from_dedupe" };
      const merged1 = Object.assign(tmp2);
      json = stringify(obj2);
      const current2 = ref2.current;
      if (null != current2) {
        let resolved;
        if (closure_4(tmp2, json)) {
          resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      const promise = createSubscriptionInvoicePreview(tmp2);
      resolved = promise.then((result) => {
        closure_5(result, json, obj.paymentSourceId);
        return result;
      });
    } else {
      return null;
    }
  }, items1);
  let closure_1;
  let flag = tmp.preventFetch;
  const tmp8 = closure_8;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = tmp13;
  c2 = undefined;
  c3 = undefined;
  [tmp15, c2] = _slicedToArray(closure_9(null), 2);
  const tmp14 = _slicedToArray(closure_9(null), 2);
  [tmp17, c3] = _slicedToArray(closure_9(null), 2);
  const tmp16 = _slicedToArray(closure_9(null), 2);
  _objectWithoutProperties = tmp6(null);
  const items2 = [flag, tmp13, arg1];
  tmp8(() => {
    function loadPreview() {
      return obj(...arguments);
    }
    obj = function _loadPreview() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_2;
        let tmp;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                current = undefined;
                c3 = 1;
                c3(null);
                ref = 2;
                c5 = 1;
                const obj4 = { value: tmp(ref.current), done: false };
                return obj4;
              }
            } else {
              if (1 === ref) {
                c3 = 0;
                tmp = tmp28;
                const tmp17 = closure_129_0;
                if (!tmp17) {
                  ref.current = null;
                  c3(tmp);
                  tmp28(null);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                current = value;
                const tmp7 = closure_129_0;
                if (!tmp7) {
                  ref.current = current;
                  tmp28(current);
                }
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp28) {
            if (0 === c3) {
              c5 = 3;
              throw tmp28;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = c0;
    if (!tmp) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  }, items2);
  const items3 = [tmp15, tmp17];
  return items3;
}
export function useGetSubscriptionInvoice(preventFetch, arg1) {
  let c2;
  let c3;
  let tmp6;
  let tmp8;
  let current = preventFetch;
  let tmp = closure_10;
  closure_10(preventFetch);
  const tmp2 = closure_8;
  const tmp3 = closure_8(() => {
    ref.current = current;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp4 = closure_7(() => getSubscriptionInvoice(ref.current), items);
  let ref;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  ref = tmp4;
  c2 = undefined;
  c3 = undefined;
  [tmp6, c2] = _slicedToArray(closure_9(null), 2);
  const tmp5 = _slicedToArray(closure_9(null), 2);
  let tmp7 = _slicedToArray(closure_9(null), 2);
  [tmp8, c3] = tmp7;
  let closure_4 = tmp(null);
  const items1 = [flag, tmp4, arg1];
  tmp2(() => {
    function loadPreview() {
      return obj(...arguments);
    }
    obj = function _loadPreview() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_2;
        let tmp;
        let v0;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                current = undefined;
                c3 = 1;
                c3(null);
                ref = 2;
                c5 = 1;
                const obj4 = { value: tmp(ref.current), done: false };
                return obj4;
              }
            } else {
              if (1 === ref) {
                c3 = 0;
                tmp = tmp28;
                const tmp17 = closure_129_0;
                if (!tmp17) {
                  ref.current = null;
                  c3(tmp);
                  tmp28(null);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                current = value;
                const tmp7 = closure_129_0;
                if (!tmp7) {
                  ref.current = current;
                  tmp28(current);
                }
                c3 = 0;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp28) {
            if (0 === c3) {
              c5 = 3;
              throw tmp28;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    let tmp = c0;
    if (!tmp) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  }, items1);
  const items2 = [tmp6, tmp8];
  return items2;
}
export function getItemUnitPriceWithDiscount(arg0) {
  let closure_1;
  let discounts;
  const quantity = arg0;
  ({ subscriptionPlanPrice: closure_1, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return closure_1;
}
