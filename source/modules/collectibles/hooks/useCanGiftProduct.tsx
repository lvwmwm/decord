// Module ID: 12100
// Function ID: 12101
// Name: useCanGiftProduct
// Dependencies: [9283, 9286, 6953, 6952, 1930, 3947, 3960, 2]
// Exports: useCanGiftProduct

// Module 12100 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9283) /* useCurrentUser */.useCurrentUser();
  const obj = require(9283) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9286) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9286) /* apexExperiment */;
  let result = require(6953) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6953) /* getItemRecordsFromPurchases */;
  const result1 = require(6953) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(6953) /* getItemRecordsFromPurchases */;
  const result2 = require(6952) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6952) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3947);
  let tmpResult = tmp(6953);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3947).canUseShopDiscounts(currentUser));
  tmpResult = tmp(6953);
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
    result = product.type === tmp(1930).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(6953).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(6953);
  }
  if (!result) {
    result = !tmp(3960).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3960);
  }
  return !result;
};
