// Module ID: 14132
// Function ID: 14133
// Name: useCanGiftProduct
// Dependencies: [558, 8521, 7492, 7491, 4825, 1993, 4838, 2]

// Module 14132 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4825 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4838 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7491 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7492 */;
import useCurrentUser from "useCurrentUser" /* 8521 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanGiftProduct(type) {
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  let result = obj2.isPremiumCollectiblesProduct(type);
  const obj3 = CollectiblesUtils;
  const result1 = obj3.isFreeCollectiblesProduct(type);
  const obj4 = CollectiblesProductUtils;
  const result2 = obj4.isOrbsExclusiveProduct(type);
  const obj5 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = CollectiblesUtils;
  const defaultPriceSetAssignmentPurchaseType = obj6.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = CollectiblesUtils;
  const result3 = obj7.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === tmp(1993).CollectiblesItemType.EXTERNAL_SKU;
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
}) : (function useCanGiftProduct(type) {
  const obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  const obj2 = CollectiblesUtils;
  let result = obj2.isPremiumCollectiblesProduct(type);
  const obj3 = CollectiblesUtils;
  const result1 = obj3.isFreeCollectiblesProduct(type);
  const obj4 = CollectiblesProductUtils;
  const result2 = obj4.isOrbsExclusiveProduct(type);
  const obj5 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = CollectiblesUtils;
  const defaultPriceSetAssignmentPurchaseType = obj6.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
  const obj7 = CollectiblesUtils;
  const result3 = obj7.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
  if (!result) {
    result = result1;
  }
  if (!result) {
    result = result2;
  }
  if (!result) {
    result = type.type === tmp(1993).CollectiblesItemType.EXTERNAL_SKU;
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
});
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = tmp2;
