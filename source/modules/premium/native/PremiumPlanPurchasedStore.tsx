// Module ID: 6660
// Function ID: 51234
// Name: usePremiumPlanPurchasedStore
// Dependencies: [3823, 1851, 621, 682, 6661, 5482, 2]
// Exports: handleMobileWebCheckoutStatus, reset, setInitiatedPurchaseFromNewFlow, setMobileWebRedirectCheckoutStatus, setPaymentSuccess, showOldPaymentFlowSuccess

// Module 6660 (usePremiumPlanPurchasedStore)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import GuildFeatures from "GuildFeatures";
import keys from "keys";

let closure_4;
let closure_5;
const require = arg1;
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_4, PremiumTypes: closure_5 } = GuildFeatures);
keys = keys.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const result = require("keys").fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = keys;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ productId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = arg0);
  require(682) /* batchUpdates */.batchUpdates(() => {
    outer1_6.setState({ productId: closure_0, initiatedPurchaseFromNewFlow: true, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 });
  });
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    const state = keys.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ isPaymentSuccess: true }));
    if (null != onPaymentSuccess) {
      onPaymentSuccess(state.productId);
    }
    const obj = require(682) /* batchUpdates */;
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_6.setState({ mobileWebRedirectCheckoutStatus: closure_0 }));
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(arg0) {
  const _require = arg0;
  if ("succeeded" === arg0) {
    const state = keys.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (key.getKey() !== closure_4) {
        const obj = { premiumType: TIER_2.TIER_2 };
        const items = [importDefault(5482).DEEPLINK];
        obj.analyticsLocations = items;
        obj.analyticsLocation = {};
        importDefault(6661)(obj);
        const tmp3 = importDefault(6661);
      }
      _require(682).batchUpdates(() => outer1_6.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus: closure_0 }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = _require(682);
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(arg0) {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    require(682) /* batchUpdates */.batchUpdates(() => outer1_6.setState({ isPaymentSuccess: true }));
    const obj = require(682) /* batchUpdates */;
  } else {
    arg0();
  }
};
export const reset = function reset() {
  let onPaymentDismiss;
  let require;
  const state = keys.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: require } = state);
  if (null != onPaymentDismiss) {
    let obj = { productId: tmp2, isSuccess: tmp3 };
    onPaymentDismiss(obj);
  }
  require(682) /* batchUpdates */.batchUpdates(() => {
    const obj = { productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false };
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
    outer1_6.setState(obj);
  });
};
