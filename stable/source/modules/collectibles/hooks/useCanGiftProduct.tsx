// Module ID: 13296
// Function ID: 13297
// Name: useCanGiftProduct
// Dependencies: [8295, 7657, 7656, 4294, 1889, 4307, 2]
// Exports: useCanGiftProduct

// Module 13296 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4294 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7656 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7657 */;
import useCurrentUser from "useCurrentUser" /* 8295 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = function useCanGiftProduct(product) {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(product);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === tmp(1889).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7657).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7657);
  }
  if (!result) {
    result = !tmp(4307).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4307);
  }
  return !result;
};
