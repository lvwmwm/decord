// Module ID: 11832
// Function ID: 91717
// Name: useOrbCheckoutModalContextProvider
// Dependencies: [31, 1849, 4175, 33, 491, 566, 3776, 9452, 5615, 8206, 6785, 3791, 8726, 2]
// Exports: OrbCheckoutModalContextProvider, useOrbCheckoutModalContext

// Module 11832 (useOrbCheckoutModalContextProvider)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import v1 from "v1";

let closure_3;
let closure_4;
let closure_5;
function useOrbCheckoutModalContextProvider(skuId) {
  let error;
  let isSubmitting;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  let sKUOrbPrice;
  let callback2;
  let redeemVirtualCurrency;
  ({ onSignFailure, order } = skuId);
  let obj = skuId(onCheckoutSuccess[5]);
  const items = [redeemVirtualCurrency];
  const stateFromStores = obj.useStateFromStores(items, () => loadId(onCheckoutSuccess[6]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()));
  let obj1 = skuId(onCheckoutSuccess[5]);
  const items1 = [closure_7];
  const items2 = [skuId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (null != stateFromStores1) {
    applicationId = stateFromStores1.applicationId;
  }
  if (null == applicationId) {
    applicationId = skuId(onCheckoutSuccess[7]).get1PShopApplicationIdForSKU(skuId);
    const obj3 = skuId(onCheckoutSuccess[7]);
  }
  sKUOrbPrice = skuId(onCheckoutSuccess[8]).useSKUOrbPrice({ sku: stateFromStores1 });
  const obj4 = skuId(onCheckoutSuccess[8]);
  const product = skuId(onCheckoutSuccess[9]).useFetchCollectiblesProduct(skuId).product;
  callback2 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = callback2(() => {
    if (null != sKUOrbPrice) {
      let obj = { orbPriceAmount: sKUOrbPrice.amount };
      return obj;
    } else if (null != c5) {
      obj = skuId(onCheckoutSuccess[10]);
      obj = { product: c5, hasShopDiscount: stateFromStores };
      const productOrbPrice = obj.getProductOrbPrice(obj);
      const obj1 = {};
      let amount = null;
      if (null !== productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      obj1.orbPriceAmount = amount;
      return obj1;
    } else {
      return null;
    }
  }, items3);
  let orbPriceAmount;
  if (null != tmp8) {
    orbPriceAmount = tmp8.orbPriceAmount;
  }
  if (null == orbPriceAmount) {
    obj = {};
    obj = { sku_id: skuId };
    obj.tags = obj;
    const result = skuId(onCheckoutSuccess[11]).captureBillingMessage("Orb price not found for product", obj);
    const obj6 = skuId(onCheckoutSuccess[11]);
  }
  const obj5 = skuId(onCheckoutSuccess[9]);
  redeemVirtualCurrency = skuId(onCheckoutSuccess[12]).useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency.redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency);
  obj1 = {
    skuId,
    skuProductLine: productLine,
    skuApplicationId: applicationId,
    loadId,
    orbProductContext: tmp8,
    onRedeemVirtualCurrency: sKUOrbPrice((arg0) => {
      let closure_0 = arg0;
      redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
        if (null != outer1_2) {
          const obj = { entitlements, skuId: callback };
          outer1_2(obj);
        }
        callback(entitlements);
      });
    }, items4),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  return obj1;
}
({ useContext: closure_3, useCallback: closure_4, useMemo: closure_5 } = result);
let obj = { skuId: "123", skuProductLine: null, skuApplicationId: undefined };
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.analyticsSourceLocation = undefined;
obj.isRedeeming = false;
obj.orbRedemptionError = null;
obj.orbProductContext = null;
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency(arg0) {

};
const context = result.createContext(obj);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export { useOrbCheckoutModalContextProvider };
export const OrbCheckoutModalContextProvider = function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
  let analyticsLocations;
  let analyticsSourceLocation;
  let children;
  let isRedeeming;
  let loadId;
  let onRedeemVirtualCurrency;
  let orbProductContext;
  let orbRedemptionError;
  let skuId;
  ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
  let obj = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = useOrbCheckoutModalContextProvider(obj);
  obj = {};
  obj = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId };
  ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
  if (null == analyticsLocations) {
    analyticsLocations = [];
  }
  obj.analyticsLocations = analyticsLocations;
  obj.analyticsSourceLocation = analyticsSourceLocation;
  obj.orbProductContext = orbProductContext;
  obj.onRedeemVirtualCurrency = onRedeemVirtualCurrency;
  obj.isRedeeming = isRedeeming;
  obj.orbRedemptionError = orbRedemptionError;
  obj.value = obj;
  obj.children = children;
  return <redux.Provider skuId={skuId} skuProductLine={tmp.skuProductLine} skuApplicationId={tmp.skuApplicationId} loadId={loadId} />;
};
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return callback(closure_9);
};
