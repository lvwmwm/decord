// Module ID: 12085
// Function ID: 12086
// Name: useCanGiftProduct
// Dependencies: [9266, 9269, 6934, 6933, 1930, 3930, 3943, 2]
// Exports: useCanGiftProduct

// Module 12085 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9266) /* useCurrentUser */.useCurrentUser();
  const obj = require(9266) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9269) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9269) /* apexExperiment */;
  let result = require(6934) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6934) /* getItemRecordsFromPurchases */;
  const result1 = require(6934) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(6934) /* getItemRecordsFromPurchases */;
  const result2 = require(6933) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6933) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3930);
  let tmpResult = tmp(6934);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3930).canUseShopDiscounts(currentUser));
  tmpResult = tmp(6934);
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
    result = tmp(6934).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(6934);
  }
  if (!result) {
    result = !tmp(3943).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3943);
  }
  return !result;
};
