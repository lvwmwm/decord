// Module ID: 12719
// Function ID: 12720
// Name: useCanGiftProduct
// Dependencies: [7616, 6969, 6968, 4485, 1973, 4498, 2]
// Exports: useCanGiftProduct

// Module 12719 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4485 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6968 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6969 */;
import useCurrentUser from "useCurrentUser" /* 7616 */;
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
    result = tmp(6969).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(6969);
  }
  if (!result) {
    result = !tmp(4498).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4498);
  }
  return !result;
};
