// Module ID: 15302
// Function ID: 15303
// Name: CollectiblesPromotionBadgeUtils
// Dependencies: [9568, 7475, 2]
// Exports: shouldShowPromotionBadge

// Module 15302 (CollectiblesPromotionBadgeUtils)
import StorefrontTypes from "StorefrontTypes" /* 7475 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9568 */;
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
