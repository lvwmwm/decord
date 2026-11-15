// Module ID: 11591
// Function ID: 11592
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11592, 11593, 11594, 11595, 11596, 11597, 11598, 11599, 11600, 11601, 11602, 11603, 11604, 11605, 11606, 11607, 11608, 11609, 11610, 11611, 11612, 11613, 11614, 11615, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11591 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11592 */;
import _modDef11593 from "module_11593" /* 11593 */;
import _modDef11594 from "module_11594" /* 11594 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11595 */;
import _modDef11596 from "module_11596" /* 11596 */;
import _modDef11597 from "module_11597" /* 11597 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11598 */;
import _modDef11599 from "module_11599" /* 11599 */;
import _modDef11600 from "module_11600" /* 11600 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11601 */;
import _modDef11602 from "module_11602" /* 11602 */;
import _modDef11603 from "module_11603" /* 11603 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11604 */;
import _modDef11605 from "module_11605" /* 11605 */;
import _modDef11606 from "module_11606" /* 11606 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11607 */;
import _modDef11608 from "module_11608" /* 11608 */;
import _modDef11609 from "module_11609" /* 11609 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11610 */;
import _modDef11611 from "module_11611" /* 11611 */;
import _modDef11612 from "module_11612" /* 11612 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11613 */;
import _modDef11614 from "module_11614" /* 11614 */;
import _modDef11615 from "module_11615" /* 11615 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11593, large: _modDef11594 };
({ small: AssetRegistryDefault, medium: _modDef11593, large: _modDef11594 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11596, large: _modDef11597 };
({ small: AssetRegistryDefault2, medium: _modDef11596, large: _modDef11597 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11599, large: _modDef11600 };
({ small: AssetRegistryDefault3, medium: _modDef11599, large: _modDef11600 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11602, large: _modDef11603 };
({ small: AssetRegistryDefault4, medium: _modDef11602, large: _modDef11603 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11605, large: _modDef11606 };
({ small: AssetRegistryDefault5, medium: _modDef11605, large: _modDef11606 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11608, large: _modDef11609 };
({ small: AssetRegistryDefault6, medium: _modDef11608, large: _modDef11609 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11611, large: _modDef11612 };
({ small: AssetRegistryDefault7, medium: _modDef11611, large: _modDef11612 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11614, large: _modDef11615 };
({ small: AssetRegistryDefault8, medium: _modDef11614, large: _modDef11615 });
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
