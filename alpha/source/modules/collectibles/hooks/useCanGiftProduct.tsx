// Module ID: 12905
// Function ID: 12906
// Name: useCanGiftProduct
// Dependencies: [7788, 7140, 7139, 4488, 1974, 4501, 2]
// Exports: useCanGiftProduct

// Module 12905 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7139 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7140 */;
import useCurrentUser from "useCurrentUser" /* 7788 */;
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
    result = tmp(7140).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7140);
  }
  if (!result) {
    result = !tmp(4501).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4501);
  }
  return !result;
};
