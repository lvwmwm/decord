// Module ID: 13474
// Function ID: 13475
// Name: useCanGiftProduct
// Dependencies: [8451, 7799, 7798, 4415, 1973, 4428, 2]
// Exports: useCanGiftProduct

// Module 13474 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4415 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7798 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7799 */;
import useCurrentUser from "useCurrentUser" /* 8451 */;
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
    result = tmp(7799).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7799);
  }
  if (!result) {
    result = !tmp(4428).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4428);
  }
  return !result;
};
