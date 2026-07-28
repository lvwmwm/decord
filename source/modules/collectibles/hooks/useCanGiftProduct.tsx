// Module ID: 11889
// Function ID: 91997
// Name: useCanGiftProduct
// Dependencies: [8640, 8642, 5792, 5791, 1877, 3811, 3824, 2]
// Exports: useCanGiftProduct

// Module 11889 (useCanGiftProduct)
let result = require("getPriceForCollectiblesProduct").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(8640) /* useCurrentUser */.useCurrentUser();
  const obj = require(8640) /* useCurrentUser */;
  const isProfileFrameGiftingEnabled = require(8642) /* apexExperiment */.useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(8642) /* apexExperiment */;
  let result = require(5792) /* getPriceForCollectiblesProduct */.isPremiumCollectiblesProduct(product);
  const obj3 = require(5792) /* getPriceForCollectiblesProduct */;
  const result1 = require(5792) /* getPriceForCollectiblesProduct */.isFreeCollectiblesProduct(product);
  const obj4 = require(5792) /* getPriceForCollectiblesProduct */;
  const result2 = require(5791) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj5 = require(5791) /* getProductOrbPrice */;
  const tmp6 = product.type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(3811);
  const canUseShopDiscountsResult = importDefault(3811).canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = require(5792) /* getPriceForCollectiblesProduct */.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = require(5792) /* getPriceForCollectiblesProduct */;
  const result3 = require(5792) /* getPriceForCollectiblesProduct */.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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
    result = require(5792) /* getPriceForCollectiblesProduct */.shouldHideGiftingForCurrency(currency);
    const obj9 = require(5792) /* getPriceForCollectiblesProduct */;
  }
  if (!result) {
    result = !require(3824) /* isPremiumGiftingSupported */.isCollectibleGiftingSupported();
    const obj10 = require(3824) /* isPremiumGiftingSupported */;
  }
  return !result;
};
