// Module ID: 15049
// Function ID: 15050
// Name: OrbCheckoutModalContext
// Dependencies: [19, 21, 1266, 15050, 2]
// Exports: OrbCheckoutModalContextProvider, useOrbCheckoutModalContext, useOrbCheckoutModalContextProvider

// Module 15049 (OrbCheckoutModalContext)
import Fragment from "Fragment" /* 21 */;
import OrbCheckoutHooks from "OrbCheckoutHooks" /* 15050 */;
import react from "react" /* 19 */;
import v1_mod from "v1" /* 1266 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let createContext;
let v1;
({ useContext: c2, useMemo: c3, createContext } = react);
const jsx = Fragment.jsx;
let obj = {
  skuId: "123",
  skuProductLine: null,
  skuApplicationId: "r",
  loadId: v1.v4(),
  analyticsLocations: [],
  analyticsSourceLocation: null,
  isRedeeming: null,
  orbRedemptionError: "lg",
  orbProductContext: null,
  onRedeemVirtualCurrency() {

  }
};
v1 = v1_mod;
const redux = createContext(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export function useOrbCheckoutModalContextProvider(arg0) {
  let loadId;
  let onCheckoutSuccess;
  let onSignFailure;
  let orbProductContext;
  let order;
  let skuApplicationId;
  let skuId;
  let skuProductLine;
  ({ skuId, loadId } = arg0);
  ({ onCheckoutSuccess, onSignFailure, order } = arg0);
  const obj = OrbCheckoutHooks;
  const orbProductContext1 = obj.useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const obj2 = OrbCheckoutHooks;
  const orbCheckoutRedemption = obj2.useOrbCheckoutRedemption({ skuId, loadId, onCheckoutSuccess, onSignFailure, order });
  return { skuId, skuProductLine, skuApplicationId, loadId, orbProductContext, onRedeemVirtualCurrency: orbCheckoutRedemption.onRedeemVirtualCurrency, isRedeeming: orbCheckoutRedemption.isRedeeming, orbRedemptionError: orbCheckoutRedemption.orbRedemptionError };
}
export function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
  let isRedeeming;
  let loadId2;
  let onRedeemVirtualCurrency;
  let onSignFailure;
  let orbProductContext;
  let orbRedemptionError;
  let order;
  let skuApplicationId;
  let skuProductLine;
  const skuId = onCheckoutSuccess.skuId;
  const loadId = onCheckoutSuccess.loadId;
  const analyticsSourceLocation = onCheckoutSuccess.analyticsSourceLocation;
  const analyticsLocations = onCheckoutSuccess.analyticsLocations;
  orbProductContext = undefined;
  onRedeemVirtualCurrency = undefined;
  isRedeeming = undefined;
  orbRedemptionError = undefined;
  skuProductLine = undefined;
  skuApplicationId = undefined;
  let obj = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  const skuId2 = obj.skuId;
  const children = onCheckoutSuccess.children;
  ({ loadId: loadId2, onCheckoutSuccess, onSignFailure, order } = obj);
  const obj2 = OrbCheckoutHooks;
  const orbProductContext1 = obj2.useOrbProductContext({ skuId: skuId2, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const obj3 = OrbCheckoutHooks;
  const orbCheckoutRedemption = obj3.useOrbCheckoutRedemption({ skuId: skuId2, loadId: loadId2, onCheckoutSuccess, onSignFailure, order });
  ({ onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = orbCheckoutRedemption);
  let items = [skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations, analyticsSourceLocation, orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError];
  return <redux.Provider value={_false(() => {
    let items;
    const obj = { skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations: items, analyticsSourceLocation, orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError };
    items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    return obj;
  }, items)}>{children}</redux.Provider>;
}
export function useOrbCheckoutModalContext() {
  return React2(redux);
}
