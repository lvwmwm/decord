// Module ID: 12172
// Function ID: 12173
// Name: useCanGiftProduct
// Dependencies: [9354, 9357, 7016, 7015, 1949, 3966, 3979, 2]
// Exports: useCanGiftProduct

// Module 12172 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9354) /* useCurrentUser */.useCurrentUser();
  const obj = require(9354) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9357) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9357) /* apexExperiment */;
  let result = require(7016) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(7016) /* getItemRecordsFromPurchases */;
  const result1 = require(7016) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(7016) /* getItemRecordsFromPurchases */;
  const result2 = require(7015) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(7015) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3966);
  let tmpResult = tmp(7016);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3966).canUseShopDiscounts(currentUser));
  tmpResult = tmp(7016);
  const result3 = tmpResult.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = tmp8;
  }
  if (!result) {
    result = product.type === tmp(1949).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7016).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(7016);
  }
  if (!result) {
    result = !tmp(3979).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3979);
  }
  return !result;
};
