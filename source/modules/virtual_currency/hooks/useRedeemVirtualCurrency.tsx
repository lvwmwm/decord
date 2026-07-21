// Module ID: 8718
// Function ID: 68999
// Name: useRedeemVirtualCurrency
// Dependencies: []
// Exports: useRedeemVirtualCurrency

// Module 8718 (useRedeemVirtualCurrency)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ useState: closure_5, useEffect: closure_6, useCallback: closure_7 } = arg1(dependencyMap[2]));
const OrderStatus = arg1(dependencyMap[3]).OrderStatus;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  let tmp2;
  [tmp2, closure_0] = callback(callback2(""), 2);
  const tmp3 = callback(callback2([]), 2);
  const entitlements = tmp3[0];
  const importDefault = entitlements;
  let closure_2 = tmp3[1];
  const tmp5 = callback(callback2(null), 2);
  const error = tmp5[0];
  let closure_3 = error;
  const callback = tmp5[1];
  const isSubmitting = callback(callback2(false), 2);
  const callback2 = isSubmitting[1];
  const tmp = callback(callback2(""), 2);
  const enabled = importDefault(closure_2[4]).useConfig({ location: "orb_checkout_modal" }).enabled;
  order = undefined;
  if (null != order) {
    order = order.order;
  }
  let tmp9 = null;
  if (null != order) {
    tmp9 = order;
  }
  let onSignFailure;
  if (null != order) {
    onSignFailure = order.onSignFailure;
  }
  const OrderStatus = onSignFailure;
  const items = [tmp9, onSignFailure];
  const tmp11 = tmp9(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = error(tmp);
    return function(arg0, arg1, arg2) {
      return callback(...arguments);
    };
  }(), items);
  const tmp12 = tmp9((skuId, loadId) => {
    let obj = arg2(closure_2[8]);
    obj = {
      skuId,
      loadId,
      onRedeemStart() {
        callback3(true);
        callback2(null);
      },
      onRedeemSucceed(arg0) {
        callback(arg0);
        callback3(false);
        if (null != arg2) {
          arg2(arg0);
        }
      },
      onRedeemFail(arg0) {
        callback2(arg0);
        callback3(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj);
  }, []);
  const items1 = [enabled, tmp11, tmp12];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = tmp9((arg0, arg1, arg2) => {
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
          const intl2 = callback(closure_2[9]).intl;
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
          callback(intl2.format(callback(closure_2[9]).t.JxNFav, obj));
        }
      }
      callback("");
    } else {
      const intl = callback(closure_2[9]).intl;
      obj = { amount: "1 orb", errorMessage: error.message };
      callback(intl.format(callback(closure_2[9]).t.7gHWrd, obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
};
