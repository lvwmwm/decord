// Module ID: 8726
// Function ID: 69063
// Name: useRedeemVirtualCurrency
// Dependencies: [5, 57, 31, 4113, 8727, 3798, 5627, 3791, 8725, 1212, 2]
// Exports: useRedeemVirtualCurrency

// Module 8726 (useRedeemVirtualCurrency)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { OrderStatus } from "CustomCheckoutFlow";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ useState: closure_5, useEffect: closure_6, useCallback: closure_7 } = result);
result = require("result").fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  let require;
  let tmp2;
  [tmp2, require] = callback(callback2(""), 2);
  const tmp3 = callback(callback2([]), 2);
  const entitlements = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = callback(callback2(null), 2);
  const error = tmp5[0];
  callback = tmp5[1];
  const isSubmitting = callback(callback2(false), 2);
  callback2 = isSubmitting[1];
  const tmp = callback(callback2(""), 2);
  const enabled = entitlements(8727).useConfig({ location: "orb_checkout_modal" }).enabled;
  order = undefined;
  if (null != order) {
    order = order.order;
  }
  let tmp9 = null;
  if (null != order) {
    tmp9 = order;
  }
  const callback3 = tmp9;
  let onSignFailure;
  if (null != order) {
    onSignFailure = order.onSignFailure;
  }
  const items = [tmp9, onSignFailure];
  const tmp11 = callback3((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = error(tmp);
    return function(arg0, arg1, arg2) {
      return callback(...arguments);
    };
  })(), items);
  let closure_9 = tmp11;
  const tmp12 = callback3((skuId, loadId) => {
    let closure_0 = arg2;
    let obj = outer1_0(8725);
    obj = {
      skuId,
      loadId,
      onRedeemStart() {
        outer1_5(true);
        outer1_4(null);
      },
      onRedeemSucceed(arg0) {
        outer1_2(arg0);
        outer1_5(false);
        if (null != callback) {
          callback(arg0);
        }
      },
      onRedeemFail(arg0) {
        outer1_4(arg0);
        outer1_5(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj);
  }, []);
  let closure_10 = tmp12;
  const items1 = [enabled, tmp11, tmp12];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = callback3((arg0, arg1, arg2) => {
    if (enabled) {
      tmp11(arg0, arg1, arg2);
    } else {
      tmp12(arg0, arg1, arg2);
    }
  }, items1);
  enabled(() => {
    if (null == error) {
      if (null != entitlements) {
        if (entitlements.length > 0) {
          const mapped = entitlements.map((sku) => {
            sku = sku.sku;
            let name;
            if (null != sku) {
              name = sku.name;
            }
            return name;
          });
          const intl2 = outer1_0(1212).intl;
          let obj = { amountDescription: "1 orb" };
          let str4 = "SKUs";
          if (1 === mapped.length) {
            str4 = "SKU";
          }
          const joined = mapped.join(", ");
          let str6 = "IDs";
          if (1 === entitlements.length) {
            str6 = "ID";
          }
          const mapped1 = entitlements.map((id) => id.id);
          const _HermesInternal = HermesInternal;
          obj.redeemedItemDescription = "" + str4 + ": " + joined + ". Entitlement " + str6 + ": " + mapped1.join(", ");
          callback(intl2.format(outer1_0(1212).t.JxNFav, obj));
        }
      }
      callback("");
    } else {
      const intl = outer1_0(1212).intl;
      obj = { amount: "1 orb", errorMessage: error.message };
      callback(intl.format(outer1_0(1212).t["7gHWrd"], obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
};
