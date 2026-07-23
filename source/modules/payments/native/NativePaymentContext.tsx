// Module ID: 8769
// Function ID: 69316
// Name: NativePaymentContextProvider
// Dependencies: [57, 31, 3781, 482, 33, 6667, 8002, 5638, 8770, 566, 2]
// Exports: NativePaymentContextProvider

// Module 8769 (NativePaymentContextProvider)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PaymentGateways } from "sum";
import { jsx } from "jsxProd";
import importDefaultResult from "_slicedToArray";

const require = arg1;
const importDefaultResultResult = require("_slicedToArray")(require("createDefinedContext")(), 3);
let closure_7 = importDefaultResultResult[0];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  let activeSubscription;
  let children;
  skuIDs = skuIDs.skuIDs;
  ({ children, activeSubscription } = skuIDs);
  let obj = storeFront(selectedPlanId[6]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = React.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = outer1_4.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = skuIDs(selectedPlanId[7]).fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, outer1_5.APPLE_ADVANCED_COMMERCE);
      const obj = skuIDs(selectedPlanId[7]);
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  const items1 = [_isNativeReflectConstruct];
  const items2 = [selectedPlanId];
  obj = {};
  obj = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[9]).useStateFromStores(items1, () => {
      let value = null;
      if (null != selectedPlanId) {
        value = outer1_4.get(selectedPlanId);
      }
      return value;
    }, items2),
    storeFront,
    activeSubscription
  };
  obj.value = obj;
  obj.children = children;
  return <redux.Provider isReadyToPurchase={nativeIAPPayments.nativePaymentsConnected} setSelectedPlanId={tmp3.setSelectedPlanId} selectedPlan={skuIDs(selectedPlanId[9]).useStateFromStores(items1, () => {
    let value = null;
    if (null != selectedPlanId) {
      value = outer1_4.get(selectedPlanId);
    }
    return value;
  }, items2)} storeFront={storeFront} activeSubscription={activeSubscription} />;
};
export const useNativeIAPPaymentContext = importDefaultResultResult[1];
export const useForwardedNativePaymentContext = importDefaultResultResult[2];
