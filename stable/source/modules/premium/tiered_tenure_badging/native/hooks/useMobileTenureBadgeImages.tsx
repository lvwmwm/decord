// Module ID: 11592
// Function ID: 11593
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11593, 11594, 11595, 11596, 11597, 11598, 11599, 11600, 11601, 11602, 11603, 11604, 11605, 11606, 11607, 11608, 11609, 11610, 11611, 11612, 11613, 11614, 11615, 11616, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11592 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11593 */;
import _modDef11594 from "module_11594" /* 11594 */;
import _modDef11595 from "module_11595" /* 11595 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11596 */;
import _modDef11597 from "module_11597" /* 11597 */;
import _modDef11598 from "module_11598" /* 11598 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11599 */;
import _modDef11600 from "module_11600" /* 11600 */;
import _modDef11601 from "module_11601" /* 11601 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11602 */;
import _modDef11603 from "module_11603" /* 11603 */;
import _modDef11604 from "module_11604" /* 11604 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11605 */;
import _modDef11606 from "module_11606" /* 11606 */;
import _modDef11607 from "module_11607" /* 11607 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11608 */;
import _modDef11609 from "module_11609" /* 11609 */;
import _modDef11610 from "module_11610" /* 11610 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11611 */;
import _modDef11612 from "module_11612" /* 11612 */;
import _modDef11613 from "module_11613" /* 11613 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11614 */;
import _modDef11615 from "module_11615" /* 11615 */;
import _modDef11616 from "module_11616" /* 11616 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11594, large: _modDef11595 };
({ small: AssetRegistryDefault, medium: _modDef11594, large: _modDef11595 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11597, large: _modDef11598 };
({ small: AssetRegistryDefault2, medium: _modDef11597, large: _modDef11598 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11600, large: _modDef11601 };
({ small: AssetRegistryDefault3, medium: _modDef11600, large: _modDef11601 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11603, large: _modDef11604 };
({ small: AssetRegistryDefault4, medium: _modDef11603, large: _modDef11604 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11606, large: _modDef11607 };
({ small: AssetRegistryDefault5, medium: _modDef11606, large: _modDef11607 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11609, large: _modDef11610 };
({ small: AssetRegistryDefault6, medium: _modDef11609, large: _modDef11610 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11612, large: _modDef11613 };
({ small: AssetRegistryDefault7, medium: _modDef11612, large: _modDef11613 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11615, large: _modDef11616 };
({ small: AssetRegistryDefault8, medium: _modDef11615, large: _modDef11616 });
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
}
export function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
}
