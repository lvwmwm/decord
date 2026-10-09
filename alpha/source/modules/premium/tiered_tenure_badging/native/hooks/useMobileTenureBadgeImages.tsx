// Module ID: 10503
// Function ID: 10504
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10504, 10505, 10506, 10507, 10508, 10509, 10510, 10511, 10512, 10513, 10514, 10515, 10516, 10517, 10518, 10519, 10520, 10521, 10522, 10523, 10524, 10525, 10526, 10527, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10503 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10504 */;
import _modDef10505 from "module_10505" /* 10505 */;
import _modDef10506 from "module_10506" /* 10506 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10507 */;
import _modDef10508 from "module_10508" /* 10508 */;
import _modDef10509 from "module_10509" /* 10509 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10510 */;
import _modDef10511 from "module_10511" /* 10511 */;
import _modDef10512 from "module_10512" /* 10512 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10513 */;
import _modDef10514 from "module_10514" /* 10514 */;
import _modDef10515 from "module_10515" /* 10515 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10516 */;
import _modDef10517 from "module_10517" /* 10517 */;
import _modDef10518 from "module_10518" /* 10518 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10519 */;
import _modDef10520 from "module_10520" /* 10520 */;
import _modDef10521 from "module_10521" /* 10521 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10522 */;
import _modDef10523 from "module_10523" /* 10523 */;
import _modDef10524 from "module_10524" /* 10524 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10525 */;
import _modDef10526 from "module_10526" /* 10526 */;
import _modDef10527 from "module_10527" /* 10527 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10505, large: _modDef10506 };
({ small: AssetRegistryDefault, medium: _modDef10505, large: _modDef10506 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10508, large: _modDef10509 };
({ small: AssetRegistryDefault2, medium: _modDef10508, large: _modDef10509 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10511, large: _modDef10512 };
({ small: AssetRegistryDefault3, medium: _modDef10511, large: _modDef10512 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10514, large: _modDef10515 };
({ small: AssetRegistryDefault4, medium: _modDef10514, large: _modDef10515 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10517, large: _modDef10518 };
({ small: AssetRegistryDefault5, medium: _modDef10517, large: _modDef10518 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10520, large: _modDef10521 };
({ small: AssetRegistryDefault6, medium: _modDef10520, large: _modDef10521 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10523, large: _modDef10524 };
({ small: AssetRegistryDefault7, medium: _modDef10523, large: _modDef10524 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10526, large: _modDef10527 };
({ small: AssetRegistryDefault8, medium: _modDef10526, large: _modDef10527 });
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};
