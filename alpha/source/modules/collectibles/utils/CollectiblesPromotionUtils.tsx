// Module ID: 9382
// Function ID: 9383
// Name: CollectiblesPromotionUtils
// Dependencies: [9351, 9383, 9385, 2]
// Exports: getPromotionForCollectiblesProduct

// Module 9382 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9351 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 9383 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9385 */;
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
      const tmp4Result2 = CollectiblesTargetedOfferPromotionUtils;
      return tmp4Result2.getTargetedOfferPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else {
      return null;
    }
  }
}
