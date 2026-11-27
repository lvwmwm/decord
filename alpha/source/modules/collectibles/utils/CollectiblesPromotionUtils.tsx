// Module ID: 11279
// Function ID: 11280
// Name: CollectiblesPromotionUtils
// Dependencies: [11129, 11280, 11250, 11282, 11254, 2]
// Exports: getPromotionForCollectiblesProduct, hasFiatDiscountPromotion, isPromotionInInvoicePreview

// Module 11279 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 11129 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 11250 */;
import CollectiblesSequencedOfferPromotionUtils from "CollectiblesSequencedOfferPromotionUtils" /* 11254 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 11280 */;
import CollectiblesCollectionSalePromotionUtils from "CollectiblesCollectionSalePromotionUtils" /* 11282 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionUtils.tsx");

export function getPromotionForCollectiblesProduct(selectedProduct, tenantMetadata, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  if (null != tmp) {
    return tmp;
  } else {
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
    if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
      const tmp4Result = CollectiblesCollectAndClaimPromotionUtils;
      return tmp4Result.getCollectAndClaimPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
      const tmp4Result4 = CollectiblesTargetedOfferPromotionUtils;
      return tmp4Result4.getTargetedOfferPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SALE === type) {
      const tmp4Result5 = CollectiblesCollectionSalePromotionUtils;
      return tmp4Result5.getCollectionSalePromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECTION_SEQUENCED_OFFER === type) {
      const tmp4Result6 = CollectiblesSequencedOfferPromotionUtils;
      return tmp4Result6.getSequencedOfferPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else {
      return null;
    }
  }
}
export function isPromotionInInvoicePreview(getDiscountIdIfExists, rewardConfig) {
  let id;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const discount = rewardConfig.discount;
      if (discount != null) {
        id = discount.id;
      }
    }
  }
  let tmp2 = null != id;
  if (tmp2) {
    let discountIdIfExists;
    if (getDiscountIdIfExists != null) {
      discountIdIfExists = getDiscountIdIfExists.getDiscountIdIfExists();
    }
    const _String = String;
    tmp2 = discountIdIfExists === String(id);
  }
  return tmp2;
}
export function hasFiatDiscountPromotion(rewardConfig) {
  let fiatEnabled;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const discount = rewardConfig.discount;
      if (discount != null) {
        fiatEnabled = discount.fiatEnabled;
      }
    }
  }
  return true === fiatEnabled;
}
