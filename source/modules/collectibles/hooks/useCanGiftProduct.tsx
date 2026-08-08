// Module ID: 12167
// Function ID: 12168
// Name: useCanGiftProduct
// Dependencies: [9348, 9351, 7013, 7012, 1930, 3947, 3960, 2]
// Exports: useCanGiftProduct

// Module 12167 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9348) /* useCurrentUser */.useCurrentUser();
  const obj = require(9348) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9351) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9351) /* apexExperiment */;
  let result = require(7013) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(7013) /* getItemRecordsFromPurchases */;
  const result1 = require(7013) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(7013) /* getItemRecordsFromPurchases */;
  const result2 = require(7012) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(7012) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3947);
  let tmpResult = tmp(7013);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3947).canUseShopDiscounts(currentUser));
  tmpResult = tmp(7013);
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
    result = tmp(7013).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(7013);
  }
  if (!result) {
    result = !tmp(3960).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3960);
  }
  return !result;
};
