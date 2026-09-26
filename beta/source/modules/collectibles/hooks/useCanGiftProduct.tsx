// Module ID: 13495
// Function ID: 13496
// Name: useCanGiftProduct
// Dependencies: [8479, 7828, 7827, 4446, 1973, 4459, 2]
// Exports: useCanGiftProduct

// Module 13495 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4446 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7827 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7828 */;
import useCurrentUser from "useCurrentUser" /* 8479 */;
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
    result = product.type === tmp(1973).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7828).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7828);
  }
  if (!result) {
    result = !tmp(4459).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4459);
  }
  return !result;
};
