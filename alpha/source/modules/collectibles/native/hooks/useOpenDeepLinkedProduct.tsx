// Module ID: 18485
// Function ID: 18486
// Name: useOpenDeepLinkedProduct
// Dependencies: [19, 8525, 504, 10457, 8496, 5552, 9407, 2]
// Exports: default

// Module 18485 (useOpenDeepLinkedProduct)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8496 */;
import react_mod from "react" /* 19 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 8525 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useOpenDeepLinkedProduct.tsx");

export default function useOpenDeepLinkedProduct(analyticsLocations) {
  let initialProductSkuId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
  let stateFromStores;
  react = undefined;
  const enabled = analyticsLocations.enabled;
  let obj = analyticsLocations(stateFromStores[2]);
  const items = [CollectiblesShopStore];
  stateFromStores = undefined;
  if (enabled) {
    stateFromStores = obj.useStateFromStores(items, () => initialProductSkuId.initialProductSkuId);
  }
  let str = stateFromStores;
  const useCollectiblesShopProduct = tmp(tmp2[3]).useCollectiblesShopProduct;
  analyticsLocations(stateFromStores[3]);
  if (stateFromStores == null) {
    str = "";
  }
  let obj2 = { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: null != stateFromStores };
  const product = useCollectiblesShopProduct(str, obj2).product;
  react = product;
  const items1 = [stateFromStores, product, analyticsLocations, shopAnalyticsContext];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      if (null != product) {
        let num = 0;
        const obj4 = CollectiblesProductUtils;
        const tmp8 = require;
        if (obj4.getIsVariantProduct(product)) {
          const _Math = Math;
          const variants = tmp7.variants;
          num = Math.max(0, variants.findIndex((skuId) => skuId.skuId === stateFromStores));
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
        const tmp8Result = tmp8(9407);
        const result = tmp8Result.openProductDetailsActionSheet(obj2);
      }
    }
  }, items1);
};
