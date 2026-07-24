// Module ID: 7433
// Function ID: 59778
// Name: notSupported
// Dependencies: [5, 57, 31, 5619, 3, 566, 22, 7160, 3791, 2]
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useResubscribeSubscription

// Module 7433 (notSupported)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
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
function useGoogleSkuIds(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  isFetchingGoogleSkus = _require(isFetchingGoogleSkus[5]).useStateFromStores(items, () => outer1_6.isFetchingGoogleSkus());
  let initialize = React.useRef([]);
  const fetchError = callback(React.useState(null), 2);
  callback = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = React.useEffect(() => {
    async function _fetch() {
      if (outer3_1) {
        outer3_3.current = [];
      }
      const differenceResult = callback2(isFetchingGoogleSkus[6]).difference(_fetch, outer3_3.current);
      if (!outer3_2) {
        if (!outer3_1) {
          if (0 !== _fetch.length) {
            if (0 !== differenceResult.length) {
              yield callback(isFetchingGoogleSkus[7]).loadInAppSkus(differenceResult);
              const obj3 = callback(isFetchingGoogleSkus[7]);
              outer3_3.current = callback2(isFetchingGoogleSkus[6]).union(outer3_3.current, differenceResult);
              outer3_4(null);
              const obj2 = callback2(isFetchingGoogleSkus[6]);
            }
          }
        }
      }
    }
    !(function fetch() {
      return _fetch(...arguments);
    })();
  }, items1);
  return { isFetchingGoogleSkus, fetchError: fetchError[0] };
}
function useResubscribeSubscription(arg0) {
  return { resubscribeSubscription: notSupported, nativePaymentsConnected: useNativeIAPPayments().nativePaymentsConnected };
}
function useCancelSubscription(arg0, arg1) {
  return { cancelSubscription: notSupported, nativePaymentsConnected: useNativeIAPPayments().nativePaymentsConnected };
}
function useCreateSubscription(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const obj = { createSubscription: notSupportedReturnVoid, nativePaymentsConnected: useNativeIAPPayments().nativePaymentsConnected };
    return obj;
  }
}
importDefaultResult = new importDefaultResult("NativePaymentHooks.android.tsx");
let closure_8 = { nativePaymentsConnected: true, storeFront: null };
const result = require("result").fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
