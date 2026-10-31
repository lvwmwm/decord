// Module ID: 8747
// Function ID: 8748
// Name: openProductDetailsActionSheet
// Dependencies: [7731, 7719, 5258, 8748, 1994, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 8747 (openProductDetailsActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7731 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Product Preview";
const result = size.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export function openProductDetailsActionSheet(arg0, stack) {
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
  obj3.openLazy(asyncRequire(8748, tmp2.paths), c3, obj2, stack);
}
export function openProductDetailsActionSheetForSku(skuId, stack) {
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
  obj2.openLazy(asyncRequire(8748, dependencyMap.paths), c3, obj3, stack);
}
