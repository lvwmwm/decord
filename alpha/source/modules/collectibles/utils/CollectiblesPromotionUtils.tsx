// Module ID: 15248
// Function ID: 15249
// Name: CollectiblesPromotionUtils
// Dependencies: [9631, 15249, 9702, 2]
// Exports: getPromotionForCollectiblesProduct

// Module 15248 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9631 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9702 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 15249 */;
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
