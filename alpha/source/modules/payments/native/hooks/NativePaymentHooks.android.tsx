// Module ID: 9889
// Function ID: 9890
// Name: NativePaymentHooks
// Dependencies: [5, 32, 19, 502, 7590, 3, 504, 12, 9890, 4822, 2060, 2]
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useLoadedGoogleSkuIds, useMobileStoreFront, useNativeIAPPayments, useResubscribeSubscription

// Module 9889 (NativePaymentHooks)
import LoggerDefault from "Logger" /* 3 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import IAPStore from "IAPStore" /* 7590 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c5, ref, set;

function notSupported() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function notSupportedReturnVoid() {
  const error = new Error("Native hook not supported for android");
  throw error;
}
function useNativeIAPPayments() {
  return closure_9;
}
function useGoogleSkuIds(memo2, arg1, arg2) {
  let closure_4;
  let closure_5;
  let fetchError;
  _require = memo2;
  let closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  react = undefined;
  let obj = require("get initialized");
  const items = [IAPStore];
  const items1 = [flag];
  const isFetchingGoogleSkus = obj.useStateFromStores(items, () => {
    const isFetchingGoogleSkusResult = flag && IAPStore.isFetchingGoogleSkus();
    return isFetchingGoogleSkusResult;
  }, items1);
  _slicedToArray = react.useRef([]);
  [fetchError, react] = react.useState(null);
  const items2 = [arg1, isFetchingGoogleSkus, memo2];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch() {
      let logger;
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj5;
        let v3;
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
            if (0 === ref) {
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
                const obj4 = closure_2_1(flag[7]);
                const differenceResult = obj4.difference(closure_0, ref.current);
                c0 = differenceResult;
                const arr = closure_0;
                if (!c3) {
                  if (!closure_1) {
                    if (0 !== arr.length) {
                      if (0 !== differenceResult.length) {
                        c3 = 1;
                        ref = 2;
                        c5 = 1;
                        const obj7 = { value: obj5.loadInAppSkus(differenceResult), done: false };
                        obj5 = closure_2_0(flag[8]);
                        return obj7;
                      }
                    }
                  }
                }
              }
            } else if (1 === tmp4) {
              c3 = 0;
              closure_1 = closure_2;
              logger.error("Unable to fetch product IDs from google play store: ", closure_1);
              c5("Unable to fetch");
              const obj3 = closure_2_0(flag[9]);
              const result = obj3.captureBillingException(closure_1);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              obj = closure_2_1(flag[7]);
              ref.current = obj.union(ref.current, c0);
              c5(null);
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp34) {
            closure_2 = tmp34;
            if (0 === c3) {
              c5 = 3;
              throw tmp34;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !fetch();
  }, items2);
  return { isFetchingGoogleSkus, fetchError };
}
function useLoadedGoogleSkuIds(memo1) {
  let authenticated;
  let closure_2;
  let first;
  let ready;
  _require = memo1;
  [first, dependencyMap] = react.useState(() => {
    set = new Set();
    return set;
  });
  let obj = require("get initialized");
  let items = [IAPStore, AuthenticationStore];
  let items1 = [
    memo1,
    obj.useStateFromStores(items, () => {
      let isReadyResult;
      const obj = memo1(closure_2[10]);
      if (obj.isGooglePlayBillingSupported()) {
        isReadyResult = ready.isReady();
      } else {
        isReadyResult = authenticated.isAuthenticated();
      }
      return isReadyResult;
    })
  ];
  const effect = react.useEffect(() => {
    let settled;
    let c0 = true;
    const obj = memo1(closure_2[8]);
    ({ settled, release: first } = obj.retainInAppSkus(c0));
    obj.retainInAppSkus(c0);
    settled.then(() => {
      let args;
      const tmp = c0;
      if (tmp) {
        closure_2((arg0) => {
          const items = [...closure_1_0];
          set = new Set(items);
          return set;
        });
      }
    });
    return () => {
      c0 = false;
      first();
    };
  }, items1);
  const items2 = [IAPStore];
  const items3 = [memo1];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    let product;
    const found = memo1.filter((item) => null != product.getProduct(item));
    return found.join(",");
  }, items3);
  const items4 = [first, stateFromStores];
  return react.useMemo(() => {
    let items1;
    const items = [...first];
    const _Set = Set;
    const str = stateFromStores;
    if ("" === stateFromStores) {
      items1 = [];
    } else {
      items1 = str.split(",");
    }
    HermesBuiltin.arraySpread(items, items1, tmp2);
    const _Set1 = new _Set(items);
    return _Set1;
  }, items4);
}
function useResubscribeSubscription(id) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
}
function useCancelSubscription(id, isACOM) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: closure_9.nativePaymentsConnected };
}
function useCreateSubscription(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    return { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: closure_9.nativePaymentsConnected };
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
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let tmp2 = new LoggerDefault("NativePaymentHooks.android.tsx");
let closure_8 = tmp2;
let closure_9 = { nativePaymentsConnected: true, storeFront: null, canMakePayments: true };
let result = size.fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useLoadedGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription, useMobileStoreFront };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useLoadedGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
export { useMobileStoreFront };
