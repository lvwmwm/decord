// Module ID: 9657
// Function ID: 9658
// Name: CollectiblesTargetedOfferPromotionUtils
// Dependencies: [9586, 7498, 7831, 7830, 1113, 2]
// Exports: getTargetedOfferPromotionFlavorModalGradient, getTargetedOfferPromotionFlavorStyleOTPCheckout, getTargetedOfferPromotionForCollectiblesProduct, getTargetedOfferPromotionPurchaseCtaText, hasFiatExclusiveTargetedOfferPromotion, isCollectiblesTargetedOfferPromotion

// Module 9657 (CollectiblesTargetedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 7498 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7830 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7831 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9586 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesTargetedOfferPromotionUtils.tsx");

export function isCollectiblesTargetedOfferPromotion(tenantMetadata) {
  let type;
  if (tenantMetadata != null) {
    tenantMetadata = tenantMetadata.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  return type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER;
}
export function getTargetedOfferPromotionForCollectiblesProduct(isFirstParty, rewardStatus) {
  if (null != rewardStatus) {
    if (rewardStatus.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
      let type;
      if (rewardStatus != null) {
        const tenantMetadata = rewardStatus.tenantMetadata;
        if (tenantMetadata != null) {
          const collectibles = tenantMetadata.collectibles;
          if (collectibles != null) {
            type = collectibles.type;
          }
        }
      }
      if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
        const rewardConfig = rewardStatus.rewardConfig;
        let discount;
        if (rewardConfig != null) {
          discount = rewardConfig.discount;
        }
        let tmp3 = null;
        if (null != discount) {
          tmp3 = null;
          const tmp8Result = CollectiblesUtils;
          if (!tmp8Result.isPremiumCollectiblesProduct(isFirstParty)) {
            let tmp5 = null;
            if (isFirstParty.isFirstParty) {
              let tmp6;
              const tmp8Result3 = CollectiblesUtils;
              if (!tmp8Result3.isBundleProduct(isFirstParty)) {
                let tmp7 = null;
                if (discount.fiatEnabled) {
                  tmp7 = null;
                  const tmp8Result4 = CollectiblesProductUtils;
                  if (tmp8Result4.getHasNonOrbPrice(isFirstParty)) {
                    tmp7 = rewardStatus;
                  }
                }
                tmp6 = tmp7;
              } else {
                tmp6 = null;
              }
              tmp5 = tmp6;
            }
            tmp3 = tmp5;
          }
        }
        return tmp3;
      }
    }
  }
  return null;
}
export function getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct) {
  let type;
  if (targetedOfferPromotionForCollectiblesProduct != null) {
    const tenantMetadata = targetedOfferPromotionForCollectiblesProduct.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  let tmp4 = null;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    let discount1;
    if (targetedOfferPromotionForCollectiblesProduct != null) {
      const rewardConfig = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      if (rewardConfig != null) {
        discount1 = rewardConfig.discount;
      }
    }
    tmp4 = null;
    if (null != discount1) {
      let stringResult;
      const rewardConfig2 = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      let type1;
      if (rewardConfig2 != null) {
        const discount = rewardConfig2.discount;
        if (discount != null) {
          type1 = discount.type;
        }
      }
      const tmp7 = type1 === tmp2(7498).StorefrontDiscountTypes.PERCENT && 100 === targetedOfferPromotionForCollectiblesProduct.rewardConfig.discount.amount;
      const intl = tmp2(1113).intl;
      const string = intl.string;
      const t = tmp2(1113).t;
      if (tmp7) {
        stringResult = string(t["302tKP"]);
      } else {
        stringResult = string(t["7EGhnE"]);
      }
      tmp4 = stringResult;
    }
  }
  return tmp4;
}
export function hasFiatExclusiveTargetedOfferPromotion(targetedOfferPromotionForCollectiblesProduct) {
  let type;
  if (targetedOfferPromotionForCollectiblesProduct != null) {
    const tenantMetadata = targetedOfferPromotionForCollectiblesProduct.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    let discount;
    if (targetedOfferPromotionForCollectiblesProduct != null) {
      const rewardConfig = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      if (rewardConfig != null) {
        discount = rewardConfig.discount;
      }
    }
    return null != discount && discount.fiatEnabled;
  } else {
    return false;
  }
}
export function getTargetedOfferPromotionFlavorStyleOTPCheckout(arg0) {
  let str = "collectibles";
  if (arg0 === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesFlavor.NITRO) {
    str = "nitro-pink";
  }
  return str;
}
export function getTargetedOfferPromotionFlavorModalGradient(arg0) {
  let str = "purple";
  if (arg0 === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesFlavor.NITRO) {
    str = "nitro-pink";
  }
  return str;
}
