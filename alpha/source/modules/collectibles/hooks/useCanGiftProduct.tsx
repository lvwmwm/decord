// Module ID: 11478
// Function ID: 11479
// Name: useCanGiftProduct
// Dependencies: [9274, 6197, 6196, 2173, 2112, 2185, 2]
// Exports: useCanGiftProduct

// Module 11478 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2185 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6196 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6197 */;
import useCurrentUser from "useCurrentUser" /* 9274 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export function useCanGiftProduct(product) {
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  let result = obj2.isPremiumCollectiblesProduct(product);
  const obj3 = CollectiblesUtils;
  const result1 = obj3.isFreeCollectiblesProduct(product);
  const obj4 = CollectiblesProductUtils;
  const result2 = obj4.isOrbsExclusiveProduct(product);
  const obj5 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = CollectiblesUtils;
  const defaultPriceSetAssignmentPurchaseType = obj6.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = CollectiblesUtils;
  const result3 = obj7.extractPriceByPurchaseTypes(product, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = product.type === tmp(2112).CollectiblesItemType.EXTERNAL_SKU;
  }
  if (!result) {
    let currency;
    const shouldHideGiftingForCurrency = CollectiblesUtils.shouldHideGiftingForCurrency;
    CollectiblesUtils;
    if (result3 != null) {
      currency = result3.currency;
    }
    result = shouldHideGiftingForCurrency(currency);
  }
  if (!result) {
    const tmpResult2 = BillingPlatformUtils;
    result = !tmpResult2.isCollectibleGiftingSupported();
  }
  return !result;
}
