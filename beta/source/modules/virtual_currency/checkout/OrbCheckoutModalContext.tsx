// Module ID: 12728
// Function ID: 12729
// Name: OrbCheckoutModalContext
// Dependencies: [19, 1372, 5822, 21, 1255, 504, 4488, 10684, 6652, 10508, 6973, 4503, 8323, 2]
// Exports: OrbCheckoutModalContextProvider, useOrbCheckoutModalContext

// Module 12728 (OrbCheckoutModalContext)
import Fragment from "Fragment" /* 21 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5822 */;
import v1_mod from "v1" /* 1255 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let createContext;
let hasOwnProperty;
let v1;
function useOrbCheckoutModalContextProvider(skuId) {
  let error;
  let isSubmitting;
  let obj4;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  let sKUOrbPrice;
  let c5;
  let redeemVirtualCurrency;
  let tmp = skuId;
  const tmp2 = onCheckoutSuccess;
  ({ onSignFailure, order } = skuId);
  let obj = skuId(onCheckoutSuccess[5]);
  const items = [redeemVirtualCurrency];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = loadId(onCheckoutSuccess[6]);
    return obj.canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser());
  });
  const obj2 = skuId(onCheckoutSuccess[5]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    const tmpResult = tmp(tmp2[7]);
    applicationId = tmpResult.get1PShopApplicationIdForSKU(skuId);
  }
  const tmpResult5 = tmp(tmp2[8]);
  sKUOrbPrice = tmpResult5.useSKUOrbPrice({ sku: stateFromStores1 });
  const tmpResult6 = tmp(tmp2[9]);
  const product = tmpResult6.useFetchCollectiblesProduct(skuId).product;
  c5 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = c5(() => {
    if (null != sKUOrbPrice) {
      return { orbPriceAmount: tmp.amount };
    } else if (null != c5) {
      const obj3 = { product: tmp2, hasShopDiscount: stateFromStores };
      const obj = CollectiblesProductUtils;
      const productOrbPrice = obj.getProductOrbPrice(obj3);
      let amount = null;
      if (null !== productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      return { orbPriceAmount: amount };
    } else {
      return null;
    }
  }, items3);
  let orbPriceAmount;
  if (tmp8 != null) {
    orbPriceAmount = tmp8.orbPriceAmount;
  }
  if (null == orbPriceAmount) {
    let obj3 = { tags: obj4 };
    obj4 = { sku_id: skuId };
    const tmpResult7 = tmp(tmp2[11]);
    const result = tmpResult7.captureBillingMessage("Orb price not found for product", obj3);
  }
  const tmpResult8 = tmp(tmp2[12]);
  const redeemVirtualCurrency1 = tmpResult8.useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency1);
  const obj5 = {
    skuId,
    skuProductLine: productLine,
    skuApplicationId: applicationId,
    loadId,
    orbProductContext: tmp8,
    onRedeemVirtualCurrency: sKUOrbPrice((arg0) => {
      let closure_0 = arg0;
      const tmp = redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
        if (onCheckoutSuccess != null) {
          const obj = { entitlements, skuId };
          tmp(obj);
        }
        closure_0(entitlements);
      });
    }, items4),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  return obj5;
}
({ useContext: c3, useCallback: closure_4, useMemo: hasOwnProperty, createContext } = react);
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
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

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
  const obj = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = useOrbCheckoutModalContextProvider(obj);
  const obj2 = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId, analyticsLocations, analyticsSourceLocation, orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError };
  ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
  const Provider = redux.Provider;
  const tmp2 = jsx;
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  return tmp2(Provider, { value: obj2, children });
};
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return _false(redux);
};
