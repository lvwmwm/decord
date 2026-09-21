// Module ID: 13469
// Function ID: 13470
// Name: useCanGiftProduct
// Dependencies: [558, 8452, 7801, 7800, 4418, 1977, 4431, 2]

// Module 13469 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4418 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7800 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7801 */;
import useCurrentUser from "useCurrentUser" /* 8452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(type);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(type);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(type);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === tmp(1977).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7801).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7801);
  }
  if (!result) {
    result = !tmp(4431).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4431);
  }
  return !result;
}) : ((type) => {
  const currentUser = useCurrentUser.useCurrentUser();
  let result = CollectiblesUtils.isPremiumCollectiblesProduct(type);
  const result1 = CollectiblesUtils.isFreeCollectiblesProduct(type);
  const result2 = CollectiblesProductUtils.isOrbsExclusiveProduct(type);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const defaultPriceSetAssignmentPurchaseType = CollectiblesUtils.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const result3 = CollectiblesUtils.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === tmp(1977).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = tmp(7801).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7801);
  }
  if (!result) {
    result = !tmp(4431).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4431);
  }
  return !result;
});
