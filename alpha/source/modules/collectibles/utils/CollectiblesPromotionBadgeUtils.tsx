// Module ID: 8972
// Function ID: 8973
// Name: CollectiblesPromotionBadgeUtils
// Dependencies: [8928, 6854, 2]
// Exports: shouldShowPromotionBadge

// Module 8972 (CollectiblesPromotionBadgeUtils)
import StorefrontTypes from "StorefrontTypes" /* 6854 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 8928 */;
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
