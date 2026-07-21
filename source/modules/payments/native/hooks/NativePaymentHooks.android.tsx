// Module ID: 7995
// Function ID: 63543
// Name: notSupported
// Dependencies: []
// Exports: useCancelSubscription, useCreateSubscription, useGoogleSkuIds, useResubscribeSubscription

// Module 7995 (notSupported)
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
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_6];
  const isFetchingGoogleSkus = arg1(dependencyMap[5]).useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  const dependencyMap = isFetchingGoogleSkus;
  let closure_3 = React.useRef([]);
  const fetchError = callback(React.useState(null), 2);
  const callback = fetchError[1];
  const items1 = [arg1, isFetchingGoogleSkus, arg0];
  const effect = React.useEffect(() => {
    async function _fetch() {
      if (callback) {
        ref.current = [];
      }
      const differenceResult = callback(closure_2[6]).difference(lib, ref.current);
      if (!closure_2) {
        if (!callback) {
          if (0 !== lib.length) {
            if (0 !== differenceResult.length) {
              yield lib(closure_2[7]).loadInAppSkus(differenceResult);
              const obj3 = lib(closure_2[7]);
              ref.current = callback(closure_2[6]).union(ref.current, differenceResult);
              callback2(null);
              const obj2 = callback(closure_2[6]);
            }
          }
        }
      }
    }
    !function fetch() {
      return _fetch(...arguments);
    }();
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("NativePaymentHooks.android.tsx");
let closure_8 = { <string:4146460452>: true, <string:3821771932>: true };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/payments/native/hooks/NativePaymentHooks.android.tsx");

export default { useNativeIAPPayments, useGoogleSkuIds, useCreateSubscription, useCancelSubscription, useResubscribeSubscription };
export { useNativeIAPPayments };
export { useGoogleSkuIds };
export { useResubscribeSubscription };
export { useCancelSubscription };
export { useCreateSubscription };
