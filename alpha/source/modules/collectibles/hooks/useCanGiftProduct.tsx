// Module ID: 13565
// Function ID: 13566
// Name: useCanGiftProduct
// Dependencies: [8526, 7884, 7883, 4483, 1973, 4496, 2]
// Exports: useCanGiftProduct

// Module 13565 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4483 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7883 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7884 */;
import useCurrentUser from "useCurrentUser" /* 8526 */;
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
    result = tmp(7884).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7884);
  }
  if (!result) {
    result = !tmp(4496).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4496);
  }
  return !result;
};
