// Module ID: 8300
// Function ID: 8301
// Name: openProductDetailsActionSheet
// Dependencies: [7274, 7262, 5056, 8301, 2000, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 8300 (openProductDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7274 */;
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
  obj3.openLazy(asyncRequire(8301, tmp2.paths), c3, obj2, stack);
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
  obj2.openLazy(asyncRequire(8301, dependencyMap.paths), c3, obj3, stack);
};
