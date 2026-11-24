// Module ID: 14245
// Function ID: 14246
// Name: CollectiblesPromotionDiscountCtaUtils
// Dependencies: [8960, 8964, 8970, 8966, 1112, 2]
// Exports: useDiscountPromotionPurchaseCtaText

// Module 14245 (CollectiblesPromotionDiscountCtaUtils)
import useCollectiblesPromotionForProduct from "useCollectiblesPromotionForProduct" /* 8960 */;
import CollectiblesStorefrontPricingIntegrationExperiment from "CollectiblesStorefrontPricingIntegrationExperiment" /* 8964 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8966 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 8970 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountCtaUtils.tsx");

export function useDiscountPromotionPurchaseCtaText(product) {
  const obj = useCollectiblesPromotionForProduct;
  const collectiblesPromotionForProduct = obj.useCollectiblesPromotionForProduct(product);
  let discount;
  const obj2 = CollectiblesStorefrontPricingIntegrationExperiment;
  const collectiblesStorefrontPricingIntegrationEnabled = obj2.useCollectiblesStorefrontPricingIntegrationEnabled("collectibles_discount_promotion_purchase_cta");
  if (collectiblesPromotionForProduct != null) {
    const rewardConfig = collectiblesPromotionForProduct.rewardConfig;
    if (rewardConfig != null) {
      discount = rewardConfig.discount;
    }
  }
  let tmp6 = null;
  if (null != discount) {
    if (!collectiblesStorefrontPricingIntegrationEnabled) {
      let stringResult;
      const tmpResult = CollectiblesPromotionDiscountUtils;
      if (100 === tmpResult.getPromotionFiatPercentOff(collectiblesPromotionForProduct)) {
        const intl2 = tmp(1112).intl;
        stringResult = intl2.string(tmp(1112).t["302tKP"]);
      } else {
        const intl = tmp(1112).intl;
        stringResult = intl.string(tmp(1112).t["7EGhnE"]);
      }
      tmp6 = stringResult;
    } else {
      tmp6 = null;
      CollectiblesTargetedOfferPromotionUtils;
    }
  }
  return tmp6;
}
