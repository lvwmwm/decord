// Module ID: 9497
// Function ID: 9498
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: [7082, 7070, 4310, 9498, 2007, 2]
// Exports: openProductDetailsActionSheet, openProductDetailsActionSheetForSku

// Module 9497 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
let c3 = "Shop Product Preview";
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/collectibles/native/openProductDetailsActionSheet.tsx");

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
  let obj = require(7082) /* getProductOrbPrice */;
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
  require(7070) /* openCollectiblesShop */.productDetailsOpened(skuId);
  const tmp2 = dependencyMap;
  const tmpResult = require(7070) /* openCollectiblesShop */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(9498, tmp2.paths), c3, obj, stack);
};
export const openProductDetailsActionSheetForSku = function openProductDetailsActionSheetForSku(skuId, stack) {
  let analyticsLocations;
  let initialVariantIndex;
  let shopAnalyticsContext;
  skuId = skuId.skuId;
  ({ initialVariantIndex, analyticsLocations, shopAnalyticsContext } = skuId);
  let obj = require(7070) /* openCollectiblesShop */;
  obj.productDetailsOpened(skuId);
  obj = { skuId, initialVariantIndex, analyticsLocations, shopAnalyticsContext };
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(9498, dependencyMap.paths), c3, obj, stack);
};
