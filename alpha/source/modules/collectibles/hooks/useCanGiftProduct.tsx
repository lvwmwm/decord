// Module ID: 12736
// Function ID: 12737
// Name: useCanGiftProduct
// Dependencies: [7623, 6974, 6973, 4488, 1974, 4501, 2]
// Exports: useCanGiftProduct

// Module 12736 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
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
    result = product.type === tmp(1974).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(6974).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(6974);
  }
  if (!result) {
    result = !tmp(4501).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4501);
  }
  return !result;
};
