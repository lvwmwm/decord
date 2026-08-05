// Module ID: 12051
// Function ID: 12052
// Name: useCanGiftProduct
// Dependencies: [9237, 9240, 6907, 6906, 1901, 3901, 3914, 2]
// Exports: useCanGiftProduct

// Module 12051 (useCanGiftProduct)
let result = require("getItemRecordsFromPurchases").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9237) /* useCurrentUser */.useCurrentUser();
  const obj = require(9237) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(9240) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(9240) /* apexExperiment */;
  let result = require(6907) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6907) /* getItemRecordsFromPurchases */;
  const result1 = require(6907) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj4 = require(6907) /* getItemRecordsFromPurchases */;
  const result2 = require(6906) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6906) /* getProductOrbPrice */;
  const tmp8 = product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3901);
  let tmpResult = tmp(6907);
  const defaultPriceSetAssignmentPurchaseType = tmpResult.getDefaultPriceSetAssignmentPurchaseType(importDefault(3901).canUseShopDiscounts(currentUser));
  tmpResult = tmp(6907);
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
    result = tmp(6907).shouldHideGiftingForCurrency(currency);
    const tmpResult1 = tmp(6907);
  }
  if (!result) {
    result = !tmp(3914).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(3914);
  }
  return !result;
};
