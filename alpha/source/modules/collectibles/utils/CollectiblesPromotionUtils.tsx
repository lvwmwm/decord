// Module ID: 11133
// Function ID: 11134
// Name: CollectiblesPromotionUtils
// Dependencies: [10983, 11134, 11104, 11136, 11108, 2]
// Exports: getPromotionForCollectiblesProduct, hasFiatDiscountPromotion, isPromotionInInvoicePreview

// Module 11133 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 10983 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 11104 */;
import CollectiblesSequencedOfferPromotionUtils from "CollectiblesSequencedOfferPromotionUtils" /* 11108 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 11134 */;
import CollectiblesCollectionSalePromotionUtils from "CollectiblesCollectionSalePromotionUtils" /* 11136 */;
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
