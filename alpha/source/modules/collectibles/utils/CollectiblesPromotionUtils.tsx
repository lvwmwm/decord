// Module ID: 15168
// Function ID: 15169
// Name: CollectiblesPromotionUtils
// Dependencies: [9612, 15169, 9683, 2]
// Exports: getPromotionForCollectiblesProduct

// Module 15168 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9612 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9683 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 15169 */;
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
