// Module ID: 13466
// Function ID: 13467
// Name: useCanGiftProduct
// Dependencies: [8447, 7796, 7795, 4414, 1973, 4427, 2]
// Exports: useCanGiftProduct

// Module 13466 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7795 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7796 */;
import useCurrentUser from "useCurrentUser" /* 8447 */;
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
    result = tmp(7796).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7796);
  }
  if (!result) {
    result = !tmp(4427).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4427);
  }
  return !result;
};
