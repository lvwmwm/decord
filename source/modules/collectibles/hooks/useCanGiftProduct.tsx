// Module ID: 11996
// Function ID: 11997
// Name: useCanGiftProduct
// Dependencies: [9176, 5313, 5312, 4039, 1949, 4052, 2]
// Exports: useCanGiftProduct

// Module 11996 (useCanGiftProduct)
let result = require("getProductOrbPrice").fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = require(9176) /* useCurrentUser */.useCurrentUser();
  const obj = require(9176) /* useCurrentUser */;
  let result = require(5313) /* getItemRecordsFromPurchases */.isPremiumCollectiblesProduct(product);
  const obj2 = require(5313) /* getItemRecordsFromPurchases */;
  const result1 = require(5313) /* getItemRecordsFromPurchases */.isFreeCollectiblesProduct(product);
  const obj3 = require(5313) /* getItemRecordsFromPurchases */;
  const result2 = require(5312) /* getProductOrbPrice */.isOrbsExclusiveProduct(product);
  const obj4 = require(5312) /* getProductOrbPrice */;
  const obj5 = importDefault(4039);
  const canUseShopDiscountsResult = importDefault(4039).canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = require(5313) /* getItemRecordsFromPurchases */.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj6 = require(5313) /* getItemRecordsFromPurchases */;
  const result3 = require(5313) /* getItemRecordsFromPurchases */.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === tmp(1949).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let tmpResult = tmp(5313);
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmpResult.shouldHideGiftingForCurrency(currency);
  }
  if (!result) {
    tmpResult = tmp(4052);
    result = !tmpResult.isCollectibleGiftingSupported();
  }
  return !result;
};
