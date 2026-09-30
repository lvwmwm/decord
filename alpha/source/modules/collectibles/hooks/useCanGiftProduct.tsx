// Module ID: 12932
// Function ID: 12933
// Name: useCanGiftProduct
// Dependencies: [7818, 7170, 7169, 4518, 1974, 4531, 2]
// Exports: useCanGiftProduct

// Module 12932 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4518 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7169 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7170 */;
import useCurrentUser from "useCurrentUser" /* 7818 */;
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
    result = tmp(7170).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7170);
  }
  if (!result) {
    result = !tmp(4531).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4531);
  }
  return !result;
};
