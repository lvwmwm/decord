// Module ID: 10689
// Function ID: 10690
// Name: NativePaymentContext
// Dependencies: [32, 19, 2051, 1083, 21, 7613, 9910, 7431, 10690, 504, 2]
// Exports: NativePaymentContextProvider

// Module 10689 (NativePaymentContext)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1083 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7431 */;
import ContextUtilsDefault from "ContextUtils" /* 7613 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2051 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let tmp4;
let tmp5;
const PaymentGateways = Constants.PaymentGateways;
const jsx = Fragment.jsx;
[metroImportDefault, tmp4, tmp5] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export function NativePaymentContextProvider(skuIDs) {
  skuIDs = skuIDs.skuIDs;
  const activeSubscription = skuIDs.activeSubscription;
  let nativePaymentsConnected;
  const children = skuIDs.children;
  let obj = activeSubscription(nativePaymentsConnected[6]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = storeFront.useEffect(() => {
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
  const tmp3 = activeSubscription(nativePaymentsConnected[8])();
  const selectedPlanId = tmp3.selectedPlanId;
  const setSelectedPlanId = tmp3.setSelectedPlanId;
  const items1 = [selectedPlanId];
  const items2 = [selectedPlanId];
  const obj2 = skuIDs(nativePaymentsConnected[9]);
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let value = null;
    if (null != selectedPlanId) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  }, items2);
  const items3 = [nativePaymentsConnected, setSelectedPlanId, stateFromStores, storeFront, activeSubscription];
  const obj3 = { value: storeFront.useMemo(() => ({ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: stateFromStores, storeFront, activeSubscription }), items3), children };
  return stateFromStores(redux.Provider, obj3);
}
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;
