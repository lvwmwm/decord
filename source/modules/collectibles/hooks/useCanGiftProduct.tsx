// Module ID: 11845
// Function ID: 91822
// Name: useCanGiftProduct
// Dependencies: [8596, 8598, 5782, 5781, 1877, 3777, 3790, 2]
// Exports: useCanGiftProduct

// Module 11845 (useCanGiftProduct)
let result = require("getPriceForCollectiblesProduct").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8596) /* useCurrentUser */.useCurrentUser();
  const obj = require(8596) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8598) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8598) /* apexExperiment */;
  let result = require(5782) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(product);
  const obj3 = require(5782) /* getPriceForCollectiblesProduct */;
  const result1 = require(5782) /* getPriceForCollectiblesProduct */.isFreeCollectiblesProduct(product);
  const obj4 = require(5782) /* getPriceForCollectiblesProduct */;
  const result2 = require(5781) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(5781) /* getProductOrbPrice */;
  const tmp6 = product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3777);
  const canUseShopDiscountsResult = importDefault(3777).canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = require(5782) /* getPriceForCollectiblesProduct */.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = require(5782) /* getPriceForCollectiblesProduct */;
  const result3 = require(5782) /* getPriceForCollectiblesProduct */.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = tmp6;
  }
  if (!result) {
    result = product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (null != result3) {
      currency = result3.currency;
    }
    result = require(5782) /* getPriceForCollectiblesProduct */.shouldHideGiftingForCurrency(currency);
    const obj9 = require(5782) /* getPriceForCollectiblesProduct */;
  }
  if (!result) {
    result = !require(3790) /* isPremiumGiftingSupported */.isCollectibleGiftingSupported();
    const obj10 = require(3790) /* isPremiumGiftingSupported */;
  }
  return !result;
};
