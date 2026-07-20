// Module ID: 6649
// Function ID: 51125
// Name: usePremiumPlanPurchasedStore
// Dependencies: [469762048, 469827584, 31260672, 357498880, 125829120, 325124096, 470351872]
// Exports: handleMobileWebCheckoutStatus, reset, setInitiatedPurchaseFromNewFlow, setMobileWebRedirectCheckoutStatus, setPaymentSuccess, showOldPaymentFlowSuccess

// Module 6649 (usePremiumPlanPurchasedStore)
let closure_3 = importDefault(dependencyMap[0]);
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_4, PremiumTypes: closure_5 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = obj.create(() => ({ end: -17962651706971920000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, guildId: 3514440513969197600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, body: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001273197474584, type: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000213897175736414 }));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = obj;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  ({ productId: closure_0, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 } = arg0);
  arg1(dependencyMap[3]).batchUpdates(() => {
    state.setState({ productId: closure_0, initiatedPurchaseFromNewFlow: true, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 });
  });
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (obj.getState().initiatedPurchaseFromNewFlow) {
    const state = obj.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    const obj = arg1(dependencyMap[3]);
    obj.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (null != onPaymentSuccess) {
      onPaymentSuccess(state.productId);
    }
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[3]).batchUpdates(() => state.setState({ mobileWebRedirectCheckoutStatus: arg0 }));
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(arg0) {
  const arg1 = arg0;
  if ("succeeded" === arg0) {
    const state = obj.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (key.getKey() !== closure_4) {
        const obj = { premiumType: TIER_2.TIER_2 };
        const items = [importDefault(dependencyMap[5]).DEEPLINK];
        obj.analyticsLocations = items;
        obj.analyticsLocation = {};
        importDefault(dependencyMap[4])(obj);
        const tmp3 = importDefault(dependencyMap[4]);
      }
      arg1(dependencyMap[3]).batchUpdates(() => state.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus: arg0 }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = arg1(dependencyMap[3]);
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(arg0) {
  if (obj.getState().initiatedPurchaseFromNewFlow) {
    const obj = arg1(dependencyMap[3]);
    obj.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
  } else {
    arg0();
  }
};
export const reset = function reset() {
  let onPaymentDismiss;
  const state = obj.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: closure_0 } = state);
  if (null != onPaymentDismiss) {
    const obj = { productId: tmp2, isSuccess: tmp3 };
    onPaymentDismiss(obj);
  }
  arg1(dependencyMap[3]).batchUpdates(() => {
    const obj = { "Null": -17962651706971920000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 3514440513969197600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001273197474584 };
    let str = null;
    if (null != closure_0) {
      str = null;
      if ("in_mobile_web" !== closure_0) {
        str = "dismissed";
      }
    }
    obj.mobileWebRedirectCheckoutStatus = str;
    obj.onPaymentSuccess = undefined;
    obj.onPaymentDismiss = undefined;
    state.setState(obj);
  });
};
