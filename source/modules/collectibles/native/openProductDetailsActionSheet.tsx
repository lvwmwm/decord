// Module ID: 8724
// Function ID: 69029
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: []
// Exports: openProductDetailsActionSheet

// Module 8724 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

export const PRODUCT_DETAILS_ACTION_SHEET_KEY = "Shop Product Preview";
export const openProductDetailsActionSheet = function openProductDetailsActionSheet(arg0, stack) {
  let analyticsLocations;
  let initialVariantIndex;
  let product;
  let shopAnalyticsContext;
  ({ product, initialVariantIndex } = arg0);
  if (initialVariantIndex === undefined) {
    initialVariantIndex = 0;
  }
  ({ analyticsLocations, shopAnalyticsContext } = arg0);
  let obj = require(dependencyMap[0]);
  const isVariantProduct = obj.getIsVariantProduct(product);
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
  require(dependencyMap[1]).productDetailsOpened(skuId);
  const obj2 = require(dependencyMap[1]);
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(dependencyMap[2]).openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "Shop Product Preview", obj, stack);
};
