// Module ID: 11631
// Function ID: 11632
// Name: CollectiblesPromotionDiscountCtaUtils
// Dependencies: [11278, 11253, 11250, 11255, 1112, 2]
// Exports: useDiscountPromotionPurchaseCtaText

// Module 11631 (CollectiblesPromotionDiscountCtaUtils)
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 11250 */;
import CollectiblesStorefrontPricingIntegrationExperiment from "CollectiblesStorefrontPricingIntegrationExperiment" /* 11253 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 11255 */;
import useCollectiblesPromotionForProduct from "useCollectiblesPromotionForProduct" /* 11278 */;
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
