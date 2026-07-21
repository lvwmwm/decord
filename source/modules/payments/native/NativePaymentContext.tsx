// Module ID: 8761
// Function ID: 69263
// Name: NativePaymentContextProvider
// Dependencies: []
// Exports: NativePaymentContextProvider

// Module 8761 (NativePaymentContextProvider)
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const PaymentGateways = arg1(dependencyMap[3]).PaymentGateways;
const jsx = arg1(dependencyMap[4]).jsx;
const importDefaultResultResult = importDefault(dependencyMap[0])(importDefault(dependencyMap[5])(), 3);
let closure_7 = importDefaultResultResult[0];
const importDefaultResult = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  let activeSubscription;
  let children;
  skuIDs = skuIDs.skuIDs;
  const arg1 = skuIDs;
  ({ children, activeSubscription } = skuIDs);
  let obj = importDefault(dependencyMap[6]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  const storeFront = nativeIAPPayments.storeFront;
  const importDefault = storeFront;
  const items = [storeFront, skuIDs];
  const effect = React.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = closure_4.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = skuIDs(selectedPlanId[7]).fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, constants.APPLE_ADVANCED_COMMERCE);
      const obj = skuIDs(selectedPlanId[7]);
    }
  }, items);
  const tmp3 = importDefault(dependencyMap[8])();
  const selectedPlanId = tmp3.selectedPlanId;
  const dependencyMap = selectedPlanId;
  const items1 = [closure_4];
  const items2 = [selectedPlanId];
  obj = {};
  obj = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: arg1(dependencyMap[9]).useStateFromStores(items1, () => {
      let value = null;
      if (null != selectedPlanId) {
        value = closure_4.get(selectedPlanId);
      }
      return value;
    }, items2),
    storeFront,
    activeSubscription
  };
  obj.value = obj;
  obj.children = children;
  return <redux.Provider {...obj} />;
};
export const useNativeIAPPaymentContext = importDefaultResultResult[1];
export const useForwardedNativePaymentContext = importDefaultResultResult[2];
