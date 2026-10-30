// Module ID: 15013
// Function ID: 15014
// Name: OrbCheckoutHooks
// Dependencies: [19, 1384, 6890, 504, 2048, 7403, 9668, 11349, 7724, 4822, 9537, 2]
// Exports: useOrbCheckoutRedemption, useOrbProductContext

// Module 15013 (OrbCheckoutHooks)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7724 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 9537 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import SKUStore from "SKUStore" /* 6890 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ useCallback: c3, useMemo: closure_4 } = react);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutHooks.tsx");

export function useOrbProductContext(skuId) {
  let currentUser;
  let obj5;
  skuId = skuId.skuId;
  let shouldCaptureExceptions = skuId.shouldCaptureExceptions;
  let sKUOrbPrice;
  let c3;
  const tmp = skuId;
  const tmp2 = sKUOrbPrice;
  let obj = skuId(sKUOrbPrice[3]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = stateFromStores(sKUOrbPrice[4]);
    return obj.canUseShopDiscounts(currentUser.getCurrentUser());
  });
  const obj2 = skuId(sKUOrbPrice[3]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let obj3 = skuId(sKUOrbPrice[5]);
  sKUOrbPrice = obj3.useSKUOrbPrice({ sku: stateFromStores1 });
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    const tmpResult = tmp(tmp2[6]);
    applicationId = tmpResult.get1PShopApplicationIdForSKU(skuId);
  }
  const tmpResult3 = tmp(tmp2[7]);
  const product = tmpResult3.useFetchCollectiblesProduct(skuId).product;
  c3 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = closure_4(() => {
    if (null != sKUOrbPrice) {
      return { orbPriceAmount: tmp.amount };
    } else if (null != c3) {
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
  if (shouldCaptureExceptions) {
    let orbPriceAmount;
    if (tmp8 != null) {
      orbPriceAmount = tmp8.orbPriceAmount;
    }
    shouldCaptureExceptions = null == orbPriceAmount;
  }
  if (shouldCaptureExceptions) {
    const obj4 = { tags: obj5, fingerprint: ["orb-price-not-found-for-product"] };
    obj5 = { sku_id: skuId };
    const tmpResult4 = tmp(tmp2[9]);
    const result = tmpResult4.captureBillingMessage("Orb price not found for product", obj4);
  }
  return { orbProductContext: tmp8, isLoading: null == tmp8, skuProductLine: productLine, skuApplicationId: applicationId };
}
export function useOrbCheckoutRedemption(skuId) {
  let error;
  let isSubmitting;
  let items;
  let onSetIsSubmitting;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  ({ onSignFailure, order, onSetIsSubmitting } = skuId);
  let obj = useRedeemVirtualCurrency;
  const redeemVirtualCurrency1 = obj.useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure, onSetIsSubmitting });
  const redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
  const obj2 = {
    onRedeemVirtualCurrency: _false((arg0) => {
      let closure_0 = arg0;
      const tmp = redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
        if (onCheckoutSuccess != null) {
          const obj = { entitlements, skuId };
          tmp(obj);
        }
        closure_0(entitlements);
      });
    }, items),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  items = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency1);
  return obj2;
}
