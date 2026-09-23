// Module ID: 13556
// Function ID: 13557
// Name: useCanGiftProduct
// Dependencies: [8522, 7882, 7881, 4481, 1973, 4494, 2]
// Exports: useCanGiftProduct

// Module 13556 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4481 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7881 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7882 */;
import useCurrentUser from "useCurrentUser" /* 8522 */;
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
    result = tmp(7882).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7882);
  }
  if (!result) {
    result = !tmp(4494).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4494);
  }
  return !result;
};
