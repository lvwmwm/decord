// Module ID: 12229
// Function ID: 12230
// Name: useCanGiftProduct
// Dependencies: [9394, 9397, 7055, 7054, 1949, 4007, 4020, 2]
// Exports: useCanGiftProduct

// Module 12229 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9394) /* useCurrentUser */.useCurrentUser();
  const obj = require(9394) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9397) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9397) /* apexExperiment */;
  let result = require(7055) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(7055) /* getItemRecordsFromPurchases */;
  const result1 = require(7055) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(7055) /* getItemRecordsFromPurchases */;
  const result2 = require(7054) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(7054) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(4007);
  let tmpResult = tmp(7055);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(4007).canUseShopDiscounts(currentUser));
  tmpResult = tmp(7055);
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
    result = tmp(7055).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(7055);
  }
  if (!result) {
    result = !tmp(4020).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4020);
  }
  return !result;
};
