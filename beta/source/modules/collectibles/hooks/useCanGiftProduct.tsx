// Module ID: 13505
// Function ID: 13506
// Name: useCanGiftProduct
// Dependencies: [558, 8484, 7833, 7832, 4450, 1977, 4463, 2]

// Module 13505 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4450 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7832 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7833 */;
import useCurrentUser from "useCurrentUser" /* 8484 */;
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
    result = tmp(7833).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7833);
  }
  if (!result) {
    result = !tmp(4463).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4463);
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
    result = tmp(7833).shouldHideGiftingForCurrency(currency);
    const tmpResult = tmp(7833);
  }
  if (!result) {
    result = !tmp(4463).isCollectibleGiftingSupported();
    const tmpResult2 = tmp(4463);
  }
  return !result;
});
