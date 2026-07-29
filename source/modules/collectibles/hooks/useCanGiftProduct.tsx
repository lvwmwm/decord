// Module ID: 11913
// Function ID: 11914
// Name: useCanGiftProduct
// Dependencies: [8664, 8666, 5810, 5809, 1901, 3835, 3848, 2]
// Exports: useCanGiftProduct

// Module 11913 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8664) /* useCurrentUser */.useCurrentUser();
  const obj = require(8664) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8666) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8666) /* apexExperiment */;
  let result = require(5810) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(5810) /* getItemRecordsFromPurchases */;
  const result1 = require(5810) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(5810) /* getItemRecordsFromPurchases */;
  const result2 = require(5809) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(5809) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3835);
  let tmpResult = tmp(5810);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3835).canUseShopDiscounts(currentUser));
  tmpResult = tmp(5810);
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
    result = product.type === tmp(1901).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(5810).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(5810);
  }
  if (!result) {
    result = !tmp(3848).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3848);
  }
  return !result;
};
