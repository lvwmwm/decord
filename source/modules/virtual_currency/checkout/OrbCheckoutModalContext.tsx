// Module ID: 11821
// Function ID: 91642
// Name: useOrbCheckoutModalContextProvider
// Dependencies: [0, 4294967295, 0, 0, 0, 0, 0, 4294967295, 0, 0, 4294967295]
// Exports: OrbCheckoutModalContextProvider, useOrbCheckoutModalContext

// Module 11821 (useOrbCheckoutModalContextProvider)
import __exportStarResult1 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function useOrbCheckoutModalContextProvider(skuId) {
  let error;
  let isSubmitting;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const require = skuId;
  const loadId = skuId.loadId;
  const importDefault = loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  const dependencyMap = onCheckoutSuccess;
  let sKUOrbPrice;
  let product;
  let closure_6;
  ({ onSignFailure, order } = skuId);
  let obj = require(dependencyMap[5]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => loadId(onCheckoutSuccess[6]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()));
  let obj1 = require(dependencyMap[5]);
  const items1 = [closure_7];
  const items2 = [skuId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_7.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (null != stateFromStores1) {
    applicationId = stateFromStores1.applicationId;
  }
  if (null == applicationId) {
    applicationId = require(dependencyMap[7]).get1PShopApplicationIdForSKU(skuId);
    const obj3 = require(dependencyMap[7]);
  }
  sKUOrbPrice = require(dependencyMap[8]).useSKUOrbPrice({ sku: stateFromStores1 });
  const obj4 = require(dependencyMap[8]);
  product = require(dependencyMap[9]).useFetchCollectiblesProduct(skuId).product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = product(() => {
    if (null != sKUOrbPrice) {
      let obj = { orbPriceAmount: sKUOrbPrice.amount };
      return obj;
    } else if (null != product) {
      obj = skuId(onCheckoutSuccess[10]);
      obj = { product, hasShopDiscount: stateFromStores };
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
    const result = require(dependencyMap[11]).captureBillingMessage("Orb price not found for product", obj);
    const obj6 = require(dependencyMap[11]);
  }
  const obj5 = require(dependencyMap[9]);
  let redeemVirtualCurrency = require(dependencyMap[12]).useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency.redeemVirtualCurrency;
  closure_6 = redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency);
  obj1 = {
    skuId,
    skuProductLine: productLine,
    skuApplicationId: applicationId,
    loadId,
    orbProductContext: tmp8,
    onRedeemVirtualCurrency: sKUOrbPrice((arg0) => {
      const skuId = arg0;
      redeemVirtualCurrency(skuId, loadId, (entitlements) => {
        if (null != callback) {
          const obj = { entitlements, skuId: entitlements };
          callback(obj);
        }
        entitlements(entitlements);
      });
    }, items4),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  return obj1;
}
({ useContext: closure_3, useCallback: closure_4, useMemo: closure_5 } = __exportStarResult1);
let closure_6 = importDefault(dependencyMap[1]);
const obj = { skuApplicationId: undefined };
obj.loadId = __exportStarResult1.v4();
obj.analyticsLocations = [];
obj.analyticsSourceLocation = undefined;
obj.isRedeeming = false;
obj.orbRedemptionError = null;
obj.orbProductContext = null;
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency(arg0) {

};
const context = __exportStarResult1.createContext(obj);
const _module2 = require(dependencyMap[13]);
const result = _module2.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

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
  return <redux.Provider {...obj} />;
};
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return callback(closure_9);
};
