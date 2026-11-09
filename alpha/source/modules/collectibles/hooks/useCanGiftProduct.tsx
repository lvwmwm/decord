// Module ID: 15337
// Function ID: 15338
// Name: useCanGiftProduct
// Dependencies: [8820, 7808, 7807, 2171, 2111, 2183, 2]
// Exports: useCanGiftProduct

// Module 15337 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2183 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7807 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7808 */;
import useCurrentUser from "useCurrentUser" /* 8820 */;
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
    result = product.type === tmp(2111).CollectiblesItemType.EXTERNAL_SKU;
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
