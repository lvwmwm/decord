// Module ID: 8667
// Function ID: 8668
// Name: NativePaymentHooks
// Dependencies: [5, 32, 19, 6658, 3, 504, 12, 8668, 4503, 2]
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useMobileStoreFront, useNativeIAPPayments, useResubscribeSubscription

// Module 8667 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_2, ref;

function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function useNativeIAPPayments() {
  return closure_8;
}
function useGoogleSkuIds(memo1, arg1) {
  let closure_4;
  let fetchError;
  let fetchingGoogleSkus;
  let isFetchingGoogleSkus;
  _require = memo1;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [IAPStore];
  isFetchingGoogleSkus = obj.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  let closure_3 = react.useRef([]);
  [fetchError, _slicedToArray] = react.useState(null);
  const items1 = [arg1, isFetchingGoogleSkus, memo1];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch() {
      let logger;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj5;
        let v1;
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
            let c0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_1 = tmp;
                let closure_0 = tmp10;
                c0 = undefined;
                if (closure_1) {
                  ref.current = [];
                }
                const obj4 = closure_2_1(isFetchingGoogleSkus[6]);
                const differenceResult = obj4.difference(closure_0, ref.current);
                c0 = differenceResult;
                const arr = closure_0;
                if (!closure_2) {
                  if (!closure_1) {
                    if (0 !== arr.length) {
                      if (0 !== differenceResult.length) {
                        ref = 1;
                        c4 = 2;
                        c5 = 1;
                        const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                        obj5 = closure_2_0(isFetchingGoogleSkus[7]);
                        return obj7;
                      }
                    }
                  }
                }
              }
            } else if (1 === tmp4) {
              ref = 0;
              closure_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_1);
              c4("Unable to fetch");
              const obj3 = closure_2_0(isFetchingGoogleSkus[8]);
              const result = obj3.captureBillingException(closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              obj = closure_2_1(isFetchingGoogleSkus[6]);
              ref.current = obj.union(ref.current, c0);
              c4(null);
              ref = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp34) {
            closure_2 = tmp34;
            if (0 === ref) {
              c5 = 3;
              throw tmp34;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetch();
  }, items1);
  return { isFetchingGoogleSkus, fetchError };
}
function useResubscribeSubscription(id) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
}
function useCancelSubscription(id, isACOM) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_8.nativePaymentsConnected };
}
function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    return { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_8.nativePaymentsConnected };
  }
}
function useMobileStoreFront() {
  let first;
  let tmp3;
  let obj = first(504);
  let items = [IAPStore];
  [first, tmp3] = obj.useStateFromStoresArray(items, () => {
    const items = [authStore.getUserCountry(), ];
    const products = authStore.getProducts();
    let currencyCode;
    if (products != null) {
      first = products[0];
      if (first != null) {
        currencyCode = first.currencyCode;
      }
    }
    items[1] = currencyCode;
    return items;
  });
  let closure_1 = tmp3;
  const items1 = [first, tmp3];
  return react.useMemo(() => {
    let tmp2 = null;
    if (null != first) {
      tmp2 = null;
      if (null != closure_1) {
        tmp2 = { country: tmp, currency: tmp3 };
        const obj = { country: tmp, currency: tmp3 };
      }
    }
    return tmp2;
  }, items1);
}
let tmp2 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_7 = tmp2;
let closure_8 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription, useMobileStoreFront };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
export { useMobileStoreFront };
