// Module ID: 11831
// Function ID: 91716
// Name: useCanGiftProduct
// Dependencies: []
// Exports: useCanGiftProduct

// Module 11831 (useCanGiftProduct)
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(dependencyMap[0]).useCurrentUser();
  const obj = require(dependencyMap[0]);
  const isProfileFrameGiftingEnabled = require(dependencyMap[1]).useIsProfileFrameGiftingEnabled("useCanGiftProduct");
  const obj2 = require(dependencyMap[1]);
  let result = require(dependencyMap[2]).isPremiumCollectiblesProduct(product);
  const obj3 = require(dependencyMap[2]);
  const result1 = require(dependencyMap[2]).isFreeCollectiblesProduct(product);
  const obj4 = require(dependencyMap[2]);
  const result2 = require(dependencyMap[3]).isOrbsExclusiveProduct(product);
  const obj5 = require(dependencyMap[3]);
  const tmp6 = product.type === require(dependencyMap[4]).CollectiblesItemType.PROFILE_FRAME && !isProfileFrameGiftingEnabled;
  const obj6 = importDefault(dependencyMap[5]);
  const canUseShopDiscountsResult = importDefault(dependencyMap[5]).canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = require(dependencyMap[2]).getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = require(dependencyMap[2]);
  const result3 = require(dependencyMap[2]).extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
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
    result = product.type === require(dependencyMap[4]).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (null != result3) {
      currency = result3.currency;
    }
    result = require(dependencyMap[2]).shouldHideGiftingForCurrency(currency);
    const obj9 = require(dependencyMap[2]);
  }
  if (!result) {
    result = !require(dependencyMap[6]).isCollectibleGiftingSupported();
    const obj10 = require(dependencyMap[6]);
  }
  return !result;
};
