// Module ID: 8524
// Function ID: 8525
// Name: openProductDetailsActionSheet
// Dependencies: [7883, 7871, 4796, 8525, 1980, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 8524 (openProductDetailsActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7871 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7883 */;
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
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8525, tmp2.paths), c3, { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext }, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile } = skuId);
  CollectiblesActionCreators.productDetailsOpened(skuId);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(8525, dependencyMap.paths), c3, { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile }, stack);
};
