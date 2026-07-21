// Module ID: 8705
// Function ID: 68900
// Name: getProductPurchaseState
// Dependencies: []
// Exports: useProductPurchaseState

// Module 8705 (getProductPurchaseState)
function getProductPurchaseState(closure_5, skuId) {
  skuId = closure_5;
  let tmp = null != closure_5.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (null == items) {
    items = [];
  }
  const tmp2Result = importDefault(dependencyMap[1])(items.map((skuId) => skuId.getPurchase(skuId.skuId)));
  let type;
  if (null != skuId) {
    type = skuId.type;
  }
  if (skuId(dependencyMap[2]).CollectiblesItemType.BUNDLE === type) {
    let obj = {};
    if (!tmp) {
      tmp = items.length > 0 && tmp2Result.length === items.length;
      const tmp6 = items.length > 0 && tmp2Result.length === items.length;
    }
    obj.isPurchased = tmp;
    obj.isPartiallyOwnedBundle = tmp2Result.length > 0 && tmp2Result.length < items.length;
    obj.isPartiallyOwnedVariantsGroup = false;
    return obj;
  } else if (skuId(dependencyMap[2]).CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (null != variants) {
      everyResult = variants.every((skuId) => null != skuId.getPurchase(skuId.skuId));
    }
    const variants2 = skuId.variants;
    let someResult;
    if (null != variants2) {
      someResult = variants2.some((skuId) => null != skuId.getPurchase(skuId.skuId));
    }
    if (someResult) {
      someResult = !everyResult;
    }
    obj = { isPurchased: null != everyResult && everyResult, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != someResult && someResult };
    return obj;
  } else {
    obj = { 0: "postal-address-country", 9223372036854775807: "password", -9223372036854775808: "email", isPurchased: tmp };
    return obj;
  }
  const tmp2 = importDefault(dependencyMap[1]);
}
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  const arg1 = product;
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStoresObject(items, () => callback(closure_3, arg0));
};
