// Module ID: 7625
// Function ID: 7626
// Name: openProductDetailsActionSheet
// Dependencies: [6977, 6965, 4801, 7626, 1987, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 7625 (openProductDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6965 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6977 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Product Preview";
const result = size.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let shopAnalyticsContext;
  let skuId;
  ({ product, initialVariantIndex } = arg0);
  if (initialVariantIndex === undefined) {
    initialVariantIndex = 0;
  }
  ({ analyticsLocations, shopAnalyticsContext } = arg0);
  const obj = CollectiblesProductUtils;
  const isVariantProduct = obj.getIsVariantProduct(product);
  let num = 0;
  const tmp2 = dependencyMap;
  if (isVariantProduct) {
    num = 0;
    if (initialVariantIndex < product.variants.length) {
      num = initialVariantIndex;
    }
  }
  if (isVariantProduct) {
    skuId = product.variants[num].skuId;
  } else {
    skuId = product.skuId;
  }
  const tmpResult = CollectiblesActionCreators;
  tmpResult.productDetailsOpened(skuId);
  const obj2 = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  const obj3 = ActionSheetActionCreatorsDefault;
  obj3.openLazy(asyncRequire(7626, tmp2.paths), c3, obj2, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  let analyticsLocations;
  let initialVariantIndex;
  let shopAnalyticsContext;
  let stageCollectibleChangeForEditProfile;
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile } = skuId);
  const obj = CollectiblesActionCreators;
  obj.productDetailsOpened(skuId);
  const obj2 = ActionSheetActionCreatorsDefault;
  const obj3 = { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext, stageCollectibleChangeForEditProfile };
  obj2.openLazy(asyncRequire(7626, dependencyMap.paths), c3, obj3, stack);
};
