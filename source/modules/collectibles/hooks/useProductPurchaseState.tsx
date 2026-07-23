// Module ID: 8713
// Function ID: 68963
// Name: getProductPurchaseState
// Dependencies: [6790, 8714, 1876, 566, 2]
// Exports: useProductPurchaseState

// Module 8713 (getProductPurchaseState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getProductPurchaseState(outer2_5, skuId) {
  const _require = outer2_5;
  let tmp = null != outer2_5.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (null == items) {
    items = [];
  }
  const tmp2Result = importDefault(8714)(items.map((skuId) => outer2_5.getPurchase(skuId.skuId)));
  let type;
  if (null != skuId) {
    type = skuId.type;
  }
  if (_require(1876).CollectiblesItemType.BUNDLE === type) {
    let obj = {};
    if (!tmp) {
      tmp = items.length > 0 && tmp2Result.length === items.length;
      const tmp6 = items.length > 0 && tmp2Result.length === items.length;
    }
    obj.isPurchased = tmp;
    obj.isPartiallyOwnedBundle = tmp2Result.length > 0 && tmp2Result.length < items.length;
    obj.isPartiallyOwnedVariantsGroup = false;
    return obj;
  } else if (_require(1876).CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (null != variants) {
      everyResult = variants.every((skuId) => null != outer2_5.getPurchase(skuId.skuId));
    }
    const variants2 = skuId.variants;
    let someResult;
    if (null != variants2) {
      someResult = variants2.some((skuId) => null != outer2_5.getPurchase(skuId.skuId));
    }
    if (someResult) {
      someResult = !everyResult;
    }
    obj = { isPurchased: null != everyResult && everyResult, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: null != someResult && someResult };
    return obj;
  } else {
    obj = { isPurchased: tmp, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
    return obj;
  }
  const tmp2 = importDefault(8714);
}
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export const useProductPurchaseState = function useProductPurchaseState(product) {
  const _require = product;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresObject(items, () => outer1_4(outer1_3, closure_0));
};
