// Module ID: 8663
// Function ID: 68798
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: [5781, 5769, 4099, 8664, 1935, 2]
// Exports: openProductDetailsActionSheet

// Module 8663 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
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
  let obj = require(5781) /* getProductOrbPrice */;
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
  require(5769) /* _createForOfIteratorHelperLoose */.productDetailsOpened(skuId);
  const obj2 = require(5769) /* _createForOfIteratorHelperLoose */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(8664, dependencyMap.paths), "Shop Product Preview", obj, stack);
};
