// Module ID: 9369
// Function ID: 9370
// Name: PRODUCT_DETAILS_ACTION_SHEET_KEY
// Dependencies: [6952, 6940, 4270, 9370, 1988, 2]
// Exports: openProductDetailsActionSheet

// Module 9369 (PRODUCT_DETAILS_ACTION_SHEET_KEY)
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
  let obj = require(6952) /* getProductOrbPrice */;
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
  require(6940) /* openCollectiblesShop */.productDetailsOpened(skuId);
  const tmp2 = dependencyMap;
  const tmpResult = require(6940) /* openCollectiblesShop */;
  obj = { product, initialVariantIndex: num, analyticsLocations, shopAnalyticsContext };
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(9370, tmp2.paths), c3, obj, stack);
};
