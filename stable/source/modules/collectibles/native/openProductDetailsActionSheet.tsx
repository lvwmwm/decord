// Module ID: 8293
// Function ID: 8294
// Name: openProductDetailsActionSheet
// Dependencies: [7656, 7644, 4603, 8294, 1896, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 8293 (openProductDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7644 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7656 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Product Preview";
const result = size.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  ({ product, initialVariantIndex } = arg0);
  if (initialVariantIndex === undefined) {
    initialVariantIndex = 0;
  }
  ({ analyticsLocations, shopAnalyticsContext } = arg0);
  const isVariantProduct = CollectiblesProductUtils.getIsVariantProduct(product);
  let num = 0;
  if (isVariantProduct) {
    num = 0;
    if (initialVariantIndex < product.variants.length) {
      num = initialVariantIndex;
    }
  }
  if (isVariantProduct) {
    let skuId = product.variants[num].skuId;
  } else {
    skuId = product.skuId;
  }
  const tmp2 = dependencyMap;
  CollectiblesActionCreators.productDetailsOpened(skuId);
  const tmpResult = CollectiblesActionCreators;
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8294, tmp2.paths), c3, { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext }, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile } = skuId);
  CollectiblesActionCreators.productDetailsOpened(skuId);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8294, dependencyMap.paths), c3, { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile }, stack);
};
