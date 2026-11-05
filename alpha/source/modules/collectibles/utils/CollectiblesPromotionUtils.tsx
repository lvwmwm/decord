// Module ID: 15262
// Function ID: 15263
// Name: CollectiblesPromotionUtils
// Dependencies: [9637, 15263, 9708, 2]
// Exports: getPromotionForCollectiblesProduct

// Module 15262 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9637 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9708 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 15263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionUtils.tsx");

export function getPromotionForCollectiblesProduct(selectedProduct, tenantMetadata) {
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
    const tmp2Result = CollectiblesCollectAndClaimPromotionUtils;
    return tmp2Result.getCollectAndClaimPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
  } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
    const tmp2Result2 = CollectiblesTargetedOfferPromotionUtils;
    return tmp2Result2.getTargetedOfferPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
  } else {
    return null;
  }
}
