// Module ID: 10146
// Function ID: 10147
// Name: NativePaymentContext
// Dependencies: [32, 19, 4733, 1096, 21, 7141, 558, 576, 9371, 6953, 10147, 504, 2]

// Module 10146 (NativePaymentContext)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1096 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6953 */;
import ContextUtilsDefault from "ContextUtils" /* 7141 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4733 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let tmp4;
let tmp5;
const PaymentGateways = Constants.PaymentGateways;
const jsx = Fragment.jsx;
[metroImportDefault, tmp4, tmp5] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function NativePaymentContextProvider(activeSubscription) {
  let children;
  let nativePaymentsConnected;
  let selectedPlanId;
  let skuIDs;
  let storeFront;
  let tmp = skuIDs;
  let obj = skuIDs(selectedPlanId[7]);
  const cResult = obj.c(17);
  ({ children, skuIDs } = activeSubscription);
  activeSubscription = activeSubscription.activeSubscription;
  const obj2 = storeFront(selectedPlanId[8]);
  const nativeIAPPayments = obj2.useNativeIAPPayments();
  const tmp4 = storeFront;
  ({ nativePaymentsConnected, storeFront } = nativeIAPPayments);
  if (cResult[0] === skuIDs) {
    let tmp6;
    let tmp7;
    let tmp12;
    let tmp15;
    let tmp14;
    if (cResult[1] === storeFront) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = react.useEffect(tmp6, tmp7);
    const tmp10 = tmp4(selectedPlanId[10])();
    selectedPlanId = tmp10.selectedPlanId;
    const setSelectedPlanId = tmp10.setSelectedPlanId;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SubscriptionPlanStore];
      cResult[4] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== selectedPlanId) {
      class E {
        constructor() {
          let value = null;
          if (null != selectedPlanId) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
      const items1 = [selectedPlanId];
      cResult[5] = selectedPlanId;
      cResult[6] = E;
      cResult[7] = items1;
      tmp15 = items1;
      tmp14 = E;
    } else {
      class E {
        constructor() {
          let value = null;
          if (null != selectedPlanId) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
      tmp15 = cResult[7];
    }
    const tmpResult = tmp(selectedPlanId[11]);
    const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp14, tmp15);
    if (cResult[8] === activeSubscription) {
      class E {
        constructor() {
          let value = null;
          if (null != selectedPlanId) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        }
      }
    }
    const obj3 = { isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: stateFromStores, storeFront, activeSubscription };
    cResult[8] = activeSubscription;
    cResult[9] = nativePaymentsConnected;
    cResult[10] = stateFromStores;
    cResult[11] = setSelectedPlanId;
    cResult[12] = storeFront;
    cResult[13] = obj3;
  }
  const fn = function l() {
    let isFetchingForSKUsResult = null == storeFront;
    const tmp = storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const obj = SubscriptionPlanActionCreators;
      const subscriptionPlansBySKUs = obj.fetchSubscriptionPlansBySKUs(skuIDs, tmp.country, PaymentGateways.APPLE_ADVANCED_COMMERCE);
    }
  };
  const items2 = [storeFront, skuIDs];
  cResult[0] = skuIDs;
  cResult[1] = storeFront;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp7 = items2;
  tmp6 = fn;
}) : (function NativePaymentContextProvider(skuIDs) {
  let activeSubscription;
  let children;
  const f103747 = () => {
    let value = null;
    if (null != selectedPlanId) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  };
  skuIDs = skuIDs.skuIDs;
  let storeFront;
  let selectedPlanId;
  ({ children, activeSubscription } = skuIDs);
  let obj = storeFront(selectedPlanId[8]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const effect = react.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    const tmp = storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const obj = SubscriptionPlanActionCreators;
      const subscriptionPlansBySKUs = obj.fetchSubscriptionPlansBySKUs(skuIDs, tmp.country, PaymentGateways.APPLE_ADVANCED_COMMERCE);
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[10])();
  selectedPlanId = tmp3.selectedPlanId;
  const setSelectedPlanId = tmp3.setSelectedPlanId;
  const items1 = [SubscriptionPlanStore];
  const items2 = [selectedPlanId];
  const obj2 = skuIDs(selectedPlanId[11]);
  ({ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: obj2.useStateFromStores(items1, f103747, items2), storeFront, activeSubscription });
  return <redux.Provider value={{ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: obj2.useStateFromStores(items1, f103747, items2), storeFront, activeSubscription }}>{children}</redux.Provider>;
});
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = tmp6;
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;
