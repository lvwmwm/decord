// Module ID: 9518
// Function ID: 9519
// Name: useProductPurchaseState
// Dependencies: [8500, 9519, 2114, 504, 2]
// Exports: useProductPurchaseState

// Module 9518 (useProductPurchaseState)
import CollectiblesItemType from "CollectiblesItemType" /* 2114 */;
import compactDefault from "compact" /* 9519 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 8500 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getProductPurchaseState(CollectiblesPurchaseStore, skuId) {
  let flag2;
  let closure_0 = CollectiblesPurchaseStore;
  let tmp = null != CollectiblesPurchaseStore.getPurchase(skuId.skuId);
  let items = skuId.items;
  if (items == null) {
    items = [];
  }
  const tmp3 = compactDefault;
  const tmp3Result = tmp3(items.map((skuId) => closure_0.getPurchase(skuId.skuId)));
  let type;
  if (skuId != null) {
    type = skuId.type;
  }
  if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    if (!tmp) {
      tmp = items.length > 0 && tmp3Result.length === items.length;
    }
    return { isPurchased: tmp, isPartiallyOwnedBundle: tmp3Result.length > 0 && tmp3Result.length < items.length, isPartiallyOwnedVariantsGroup: false };
  } else if (CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP === type) {
    const variants = skuId.variants;
    let everyResult;
    if (variants != null) {
      everyResult = variants.every((skuId) => null != closure_0.getPurchase(skuId.skuId));
    }
    let flag = everyResult;
    if (everyResult == null) {
      flag = false;
    }
    const variants2 = skuId.variants;
    const obj3 = { isPurchased: flag, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: flag2 };
    flag2 = undefined;
    if (variants2 != null) {
      flag2 = variants2.some((skuId) => null != closure_0.getPurchase(skuId.skuId));
    }
    if (flag2) {
      flag2 = !everyResult;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    return obj3;
  } else {
    return { isPurchased: tmp, isPartiallyOwnedBundle: false, isPartiallyOwnedVariantsGroup: false };
  }
}
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductPurchaseState.tsx");

export { getProductPurchaseState };
export function useProductPurchaseState(product) {
  _require = product;
  const items = [CollectiblesPurchaseStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => getProductPurchaseState(CollectiblesPurchaseStore, _require));
}
