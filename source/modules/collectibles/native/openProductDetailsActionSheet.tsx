// Module ID: 8736
// Function ID: 69105
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: [6785, 6773, 4098, 8737, 1934, 2]
// Exports: openProductDetailsActionSheet

// Module 8736 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
const result = require("showActionSheet").fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

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
  let obj = require(6785) /* getProductOrbPrice */;
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
  require(6773) /* _createForOfIteratorHelperLoose */.productDetailsOpened(skuId);
  const obj2 = require(6773) /* _createForOfIteratorHelperLoose */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(8737, dependencyMap.paths), "Shop Product Preview", obj, stack);
};
