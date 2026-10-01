// Module ID: 10282
// Function ID: 10283
// Name: NativePaymentContext
// Dependencies: [32, 19, 4493, 1085, 21, 6848, 8667, 6675, 10283, 504, 2]
// Exports: NativePaymentContextProvider

// Module 10282 (NativePaymentContext)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6675 */;
import ContextUtilsDefault from "ContextUtils" /* 6848 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let tmp4;
let tmp5;
const PaymentGateways = Constants.PaymentGateways;
const jsx = Fragment.jsx;
[metroImportDefault, tmp4, tmp5] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 3);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  let activeSubscription;
  let children;
  const f91005 = () => {
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
  let obj = storeFront(selectedPlanId[6]);
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
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  const setSelectedPlanId = tmp3.setSelectedPlanId;
  const items1 = [SubscriptionPlanStore];
  const items2 = [selectedPlanId];
  const obj2 = skuIDs(selectedPlanId[9]);
  ({ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: obj2.useStateFromStores(items1, f91005, items2), storeFront, activeSubscription });
  return <redux.Provider value={{ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: obj2.useStateFromStores(items1, f91005, items2), storeFront, activeSubscription }}>{children}</redux.Provider>;
};
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;
