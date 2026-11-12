// Module ID: 15334
// Function ID: 15335
// Name: CollectiblesPromotionBadgeUtils
// Dependencies: [9601, 7508, 2]
// Exports: shouldShowPromotionBadge

// Module 15334 (CollectiblesPromotionBadgeUtils)
import StorefrontTypes from "StorefrontTypes" /* 7508 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9601 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionBadgeUtils.tsx");

export function shouldShowPromotionBadge(collectiblesPromotionForProduct) {
  let type;
  if (collectiblesPromotionForProduct != null) {
    const tenantMetadata = collectiblesPromotionForProduct.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
    return collectiblesPromotionForProduct.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.IN_PROGRESS;
  } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
    return true;
  } else {
    return false;
  }
}
