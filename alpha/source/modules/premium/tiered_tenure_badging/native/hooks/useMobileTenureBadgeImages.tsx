// Module ID: 10513
// Function ID: 10514
// Name: useMobileTenureBadgeImages
// Dependencies: [1391, 10514, 10515, 10516, 10517, 10518, 10519, 10520, 10521, 10522, 10523, 10524, 10525, 10526, 10527, 10528, 10529, 10530, 10531, 10532, 10533, 10534, 10535, 10536, 10537, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10513 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1391 */;
import AssetRegistryDefault from "AssetRegistry" /* 10514 */;
import _modDef10515 from "module_10515" /* 10515 */;
import _modDef10516 from "module_10516" /* 10516 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10517 */;
import _modDef10518 from "module_10518" /* 10518 */;
import _modDef10519 from "module_10519" /* 10519 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10520 */;
import _modDef10521 from "module_10521" /* 10521 */;
import _modDef10522 from "module_10522" /* 10522 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10523 */;
import _modDef10524 from "module_10524" /* 10524 */;
import _modDef10525 from "module_10525" /* 10525 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10526 */;
import _modDef10527 from "module_10527" /* 10527 */;
import _modDef10528 from "module_10528" /* 10528 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10529 */;
import _modDef10530 from "module_10530" /* 10530 */;
import _modDef10531 from "module_10531" /* 10531 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10532 */;
import _modDef10533 from "module_10533" /* 10533 */;
import _modDef10534 from "module_10534" /* 10534 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10535 */;
import _modDef10536 from "module_10536" /* 10536 */;
import _modDef10537 from "module_10537" /* 10537 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10515, large: _modDef10516 };
({ small: AssetRegistryDefault, medium: _modDef10515, large: _modDef10516 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10518, large: _modDef10519 };
({ small: AssetRegistryDefault2, medium: _modDef10518, large: _modDef10519 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10521, large: _modDef10522 };
({ small: AssetRegistryDefault3, medium: _modDef10521, large: _modDef10522 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10524, large: _modDef10525 };
({ small: AssetRegistryDefault4, medium: _modDef10524, large: _modDef10525 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10527, large: _modDef10528 };
({ small: AssetRegistryDefault5, medium: _modDef10527, large: _modDef10528 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10530, large: _modDef10531 };
({ small: AssetRegistryDefault6, medium: _modDef10530, large: _modDef10531 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10533, large: _modDef10534 };
({ small: AssetRegistryDefault7, medium: _modDef10533, large: _modDef10534 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10536, large: _modDef10537 };
({ small: AssetRegistryDefault8, medium: _modDef10536, large: _modDef10537 });
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
