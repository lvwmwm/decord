// Module ID: 9440
// Function ID: 9441
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: [7015, 7003, 4271, 9441, 2007, 2]
// Exports: openProductDetailsActionSheet

// Module 9440 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
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
  let obj = require(7015) /* getProductOrbPrice */;
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
  require(7003) /* openCollectiblesShop */.productDetailsOpened(skuId);
  const tmp2 = dependencyMap;
  const tmpResult = require(7003) /* openCollectiblesShop */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(9441, tmp2.paths), c3, obj, stack);
};
