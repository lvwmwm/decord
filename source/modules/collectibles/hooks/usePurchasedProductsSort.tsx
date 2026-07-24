// Module ID: 14028
// Function ID: 107319
// Name: productPurchaseStatus
// Dependencies: [31, 6790, 1876, 6785, 624, 2]
// Exports: usePurchasedProductsSort

// Module 14028 (productPurchaseStatus)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function productPurchaseStatus(type, arr) {
  const _require = arr;
  if (type.type === _require(1876).CollectiblesItemType.BUNDLE) {
    const items = type.items;
    if (items.some((skuId) => arr.includes(skuId.skuId))) {
      return constants.PARTIAL_OWNED_BUNDLE;
    }
  }
  if (obj.getIsVariantProduct(type)) {
    const variants = type.variants;
    variants.every((skuId) => arr.includes(skuId.skuId)) ? constants.PURCHASED : constants.NOT_PURCHASED;
  } else {
    return arr.includes(type.skuId) ? constants.PURCHASED : constants.NOT_PURCHASED;
  }
}
let closure_4 = { NOT_PURCHASED: 0, [0]: "NOT_PURCHASED", PARTIAL_OWNED_BUNDLE: 1, [1]: "PARTIAL_OWNED_BUNDLE", PURCHASED: 2, [2]: "PURCHASED" };
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/usePurchasedProductsSort.tsx");

export const usePurchasedProductsSort = function usePurchasedProductsSort(memo) {
  const _require = memo;
  let items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_3.purchases);
  const items1 = [stateFromStores];
  const tmp2 = useMemo(() => {
    const items = [...stateFromStores];
    return items.map((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp;
    });
  }, items1);
  useMemo = tmp2;
  const items2 = [memo, tmp2];
  return useMemo(() => {
    const items = [...closure_0];
    return items.sort((arg0, arg1) => outer2_5(arg0, outer1_2) - outer2_5(arg1, outer1_2));
  }, items2);
};
