// Module ID: 13016
// Function ID: 13017
// Name: useCanGiftProduct
// Dependencies: [558, 7860, 7078, 7077, 4534, 1980, 4547, 2]

// Module 13016 (useCanGiftProduct)
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4547 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import useCurrentUser from "useCurrentUser" /* 7860 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
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
    result = type.type === tmp(1980).CollectiblesItemType.EXTERNAL_SKU;
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
}) : ((type) => {
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
    result = type.type === tmp(1980).CollectiblesItemType.EXTERNAL_SKU;
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
