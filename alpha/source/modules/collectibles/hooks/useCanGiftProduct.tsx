// Module ID: 12940
// Function ID: 12941
// Name: useCanGiftProduct
// Dependencies: [7805, 7162, 7161, 4517, 1974, 4530, 2]
// Exports: useCanGiftProduct

// Module 12940 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4517 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7161 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7162 */;
import useCurrentUser from "useCurrentUser" /* 7805 */;
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
    result = tmp(7162).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7162);
  }
  if (!result) {
    result = !tmp(4530).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4530);
  }
  return !result;
};
