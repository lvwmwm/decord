// Module ID: 11869
// Function ID: 92017
// Name: useCanGiftProduct
// Dependencies: [8708, 8710, 6786, 6785, 1876, 3776, 3789, 2]
// Exports: useCanGiftProduct

// Module 11869 (useCanGiftProduct)
let result = require("getPriceForCollectiblesProduct").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8708) /* useCurrentUser */.useCurrentUser();
  const obj = require(8708) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8710) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8710) /* apexExperiment */;
  let result = require(6786) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(product);
  const obj3 = require(6786) /* getPriceForCollectiblesProduct */;
  const result1 = require(6786) /* getPriceForCollectiblesProduct */.isFreeCollectiblesProduct(product);
  const obj4 = require(6786) /* getPriceForCollectiblesProduct */;
  const result2 = require(6785) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(6785) /* getProductOrbPrice */;
  const tmp6 = product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3776);
  const canUseShopDiscountsResult = importDefault(3776).canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = require(6786) /* getPriceForCollectiblesProduct */.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = require(6786) /* getPriceForCollectiblesProduct */;
  const result3 = require(6786) /* getPriceForCollectiblesProduct */.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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
    result = product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (null != result3) {
      currency = result3.currency;
    }
    result = require(6786) /* getPriceForCollectiblesProduct */.shouldHideGiftingForCurrency(currency);
    const obj9 = require(6786) /* getPriceForCollectiblesProduct */;
  }
  if (!result) {
    result = !require(3789) /* isPremiumGiftingSupported */.isCollectibleGiftingSupported();
    const obj10 = require(3789) /* isPremiumGiftingSupported */;
  }
  return !result;
};
