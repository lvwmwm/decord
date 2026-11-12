// Module ID: 10370
// Function ID: 10371
// Name: useRedeemVirtualCurrency
// Dependencies: [5, 32, 19, 10371, 7195, 9973, 1113, 2]
// Exports: useRedeemVirtualCurrency

// Module 10370 (useRedeemVirtualCurrency)
import intl3 from "intl" /* 1113 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_5, sku, v0, v3;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ useState: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire } = react);
let result = size.fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export function useRedeemVirtualCurrency(useOrdersAPI) {
  let closure_4;
  let entitlements;
  let error;
  let isSubmitting;
  let tmp2;
  let tmp = _slicedToArray(closure_4(""), 2);
  [tmp2, require] = tmp;
  [entitlements, _asyncToGenerator] = closure_4([]);
  const tmp5 = _slicedToArray(closure_4(null), 2);
  [error, _slicedToArray] = tmp5;
  [isSubmitting, closure_4] = closure_4(false);
  useOrdersAPI = useOrdersAPI.useOrdersAPI;
  let order = useOrdersAPI.order;
  if (order == null) {
    order = null;
  }
  const onSignFailure = useOrdersAPI.onSignFailure;
  let obj = require("useOrderSigning");
  const orderSigning = obj.useOrderSigning({ order, errorSource: "orb_redeem_orders_api", onSignFailure });
  const signOrder = orderSigning.signOrder;
  const _reportError = orderSigning.reportError;
  if (useOrdersAPI) {
    error = orderSigning.error;
  }
  const onSetIsSubmitting = useOrdersAPI.onSetIsSubmitting;
  const items = [onSetIsSubmitting];
  const tmp10 = signOrder((arg0) => {
    closure_4(arg0);
    if (null != onSetIsSubmitting) {
      onSetIsSubmitting(arg0);
    }
  }, items);
  let closure_10 = tmp10;
  let closure_0 = _asyncToGenerator(async (skuId, loadId, arg2) => {
    closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj5;
      let obj6;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = undefined;
              entitlements = undefined;
              closure_1_10(true);
              const obj4 = { loadId, errorExtra: obj6 };
              v3 = 1;
              c8 = 1;
              obj6 = { skuId, loadId };
              const obj7 = { value: v0(obj4), done: false };
              return obj7;
            }
          } else {
            if (1 === v3) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_3 = value;
                if ("signed" === closure_3.type) {
                  v0 = 2;
                  v3 = 4;
                  c8 = 1;
                  const obj9 = { value: obj5.fetchOrderEntitlementsWithRetry(closure_3.order.id), done: false };
                  obj5 = skuId(closure_2_1[4]);
                  return obj9;
                } else {
                  closure_1_10(false);
                }
              }
            } else if (2 === v3) {
              v0 = 0;
              closure_1_10(false);
              throw closure_5;
            } else {
              if (3 === v3) {
                v0 = 1;
                const obj10 = { skuId, loadId, orderId: closure_3.order.id };
                v3(closure_5, obj10);
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                closure_1_10(false);
                c8 = 3;
                return { value, done: true };
              } else {
                entitlements = value;
                if (0 === entitlements.length) {
                  const self = this;
                  const self2 = this;
                  const orderProcessingPendingError = new skuId(closure_2_1[4]).OrderProcessingPendingError();
                  throw orderProcessingPendingError;
                } else {
                  closure_2(entitlements);
                  const obj12 = { skuId, entitlements };
                  const obj = skuId(closure_2_1[5]);
                  const result = obj.dispatchVirtualCurrencyRedeemSuccess(obj12);
                  if (closure_2 != null) {
                    tmp15(entitlements);
                  }
                  v0 = 1;
                }
              }
              v0 = 0;
              closure_1_10(false);
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp52) {
          closure_5 = tmp52;
          if (0 === v0) {
            c8 = 3;
            throw tmp52;
          } else if (1 === tmp54) {
            v3 = 2;
          } else {
            v3 = 3;
          }
        }
      }
    })();
  });
  const items1 = [signOrder, _reportError, tmp10];
  const tmp11 = signOrder(function() {
    return closure_0(...arguments);
  }, items1);
  let closure_11 = tmp11;
  const items2 = [tmp10];
  const tmp12 = signOrder((skuId, loadId, arg2) => {
    let closure_0;
    require = arg2;
    const obj = require("VirtualCurrencyActionCreators");
    const obj2 = {
      skuId,
      loadId,
      onRedeemStart() {
        closure_1_10(true);
        closure_1_3(null);
      },
      onRedeemSucceed(arg0) {
        closure_2(arg0);
        closure_10(false);
        if (closure_0 != null) {
          closure_0(arg0);
        }
      },
      onRedeemFail(arg0) {
        closure_1_3(arg0);
        closure_1_10(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj2);
  }, items2);
  let closure_12 = tmp12;
  const items3 = [useOrdersAPI, tmp11, tmp12];
  const items4 = [entitlements, error];
  const redeemVirtualCurrency = signOrder((arg0, arg1, arg2) => {
    const tmp = useOrdersAPI;
    if (tmp) {
      closure_11(arg0, arg1, arg2);
    } else {
      closure_12(arg0, arg1, arg2);
    }
  }, items3);
  useOrdersAPI(() => {
    let mapped1;
    if (null == error) {
      if (null != entitlements) {
        if (entitlements.length > 0) {
          const mapped = arr.map((sku) => {
            sku = sku.sku;
            let name;
            if (sku != null) {
              name = sku.name;
            }
            return name;
          });
          const intl2 = intl3.intl;
          const format = intl2.format;
          let str2 = "SKUs";
          const JxNFav = intl3.t.JxNFav;
          if (1 === mapped.length) {
            str2 = "SKU";
          }
          const joined = mapped.join(", ");
          let str4 = "IDs";
          if (1 === entitlements.length) {
            str4 = "ID";
          }
          const obj2 = { amountDescription: "1 orb", redeemedItemDescription: "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ") };
          mapped1 = arr.map((id) => id.id);
          const _HermesInternal = HermesInternal;
          require(format(JxNFav, obj2));
        }
      }
      require("");
    } else {
      const intl = intl3.intl;
      const obj = { amount: "1 orb", errorMessage: tmp.message };
      require(intl.format(intl3.t["7gHWrd"], obj));
    }
  }, items4);
  return { entitlements, error, isSubmitting, responseMessage, redeemVirtualCurrency };
}
