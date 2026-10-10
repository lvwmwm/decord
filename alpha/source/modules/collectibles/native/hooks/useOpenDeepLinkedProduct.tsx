// Module ID: 16187
// Function ID: 16188
// Name: useOpenDeepLinkedProduct
// Dependencies: [19, 7280, 558, 576, 504, 9088, 7274, 5056, 8300, 2]

// Module 16187 (useOpenDeepLinkedProduct)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
import react_mod from "react" /* 19 */;
import CollectiblesShopStore from "CollectiblesShopStore" /* 7280 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOpenDeepLinkedProduct(analyticsLocations) {
  let initialProductSkuId;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = analyticsLocations(stateFromStores[3]);
  const cResult = obj.c(10);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
  const enabled = analyticsLocations.enabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesShopStore];
    const fn = function c() {
      return initialProductSkuId.initialProductSkuId;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  stateFromStores = undefined;
  const tmpResult = analyticsLocations(stateFromStores[4]);
  if (enabled) {
    stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  }
  let tmp8 = null != stateFromStores;
  if (cResult[2] !== tmp8) {
    let obj2 = { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: tmp8 };
    cResult[2] = tmp8;
    cResult[3] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[3];
  }
  let str = stateFromStores;
  const useCollectiblesShopProduct = tmp(tmp2[5]).useCollectiblesShopProduct;
  analyticsLocations(stateFromStores[5]);
  if (stateFromStores == null) {
    str = "";
  }
  const product = useCollectiblesShopProduct(str, tmp9).product;
  react = product;
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === product) {
      if (cResult[6] === shopAnalyticsContext) {
        let tmp11;
        let tmp12;
        if (cResult[7] === stateFromStores) {
          tmp11 = cResult[8];
          tmp12 = cResult[9];
        }
        const effect = react.useEffect(tmp11, tmp12);
      }
    }
  }
  const fn2 = function v() {
    if (null != stateFromStores) {
      if (null != react) {
        let num = 0;
        const obj4 = CollectiblesProductUtils;
        const tmp8 = require;
        if (obj4.getIsVariantProduct(react)) {
          const _Math = Math;
          const variants = tmp7.variants;
          num = Math.max(0, variants.findIndex((skuId) => skuId.skuId === stateFromStores));
        }
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { product: react, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
        const tmp8Result = tmp8(8300);
        const result = tmp8Result.openProductDetailsActionSheet(obj2);
      }
    }
  };
  const items1 = [stateFromStores, product, analyticsLocations, shopAnalyticsContext];
  cResult[4] = analyticsLocations;
  cResult[5] = product;
  cResult[6] = shopAnalyticsContext;
  cResult[7] = stateFromStores;
  cResult[8] = fn2;
  cResult[9] = items1;
  tmp12 = items1;
  tmp11 = fn2;
}) : (function useOpenDeepLinkedProduct(analyticsLocations) {
  let initialProductSkuId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const shopAnalyticsContext = analyticsLocations.shopAnalyticsContext;
  let stateFromStores;
  react = undefined;
  const enabled = analyticsLocations.enabled;
  let obj = analyticsLocations(stateFromStores[4]);
  const items = [CollectiblesShopStore];
  stateFromStores = undefined;
  if (enabled) {
    stateFromStores = obj.useStateFromStores(items, () => initialProductSkuId.initialProductSkuId);
  }
  let str = stateFromStores;
  const useCollectiblesShopProduct = tmp(tmp2[5]).useCollectiblesShopProduct;
  analyticsLocations(stateFromStores[5]);
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
        const tmp8Result = tmp8(8300);
        const result = tmp8Result.openProductDetailsActionSheet(obj2);
      }
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useOpenDeepLinkedProduct.tsx");

export default tmp2;
