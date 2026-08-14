// Module ID: 12250
// Function ID: 12251
// Name: useCanGiftProduct
// Dependencies: [9412, 9415, 7083, 7082, 1949, 4007, 4020, 2]
// Exports: useCanGiftProduct

// Module 12250 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9412) /* useCurrentUser */.useCurrentUser();
  const obj = require(9412) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9415) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9415) /* apexExperiment */;
  let result = require(7083) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(7083) /* getItemRecordsFromPurchases */;
  const result1 = require(7083) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(7083) /* getItemRecordsFromPurchases */;
  const result2 = require(7082) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(7082) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1949) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(4007);
  let tmpResult = tmp(7083);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(4007).canUseShopDiscounts(currentUser));
  tmpResult = tmp(7083);
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
    result = tmp(7083).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(7083);
  }
  if (!result) {
    result = !tmp(4020).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4020);
  }
  return !result;
};
