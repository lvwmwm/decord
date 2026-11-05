// Module ID: 11616
// Function ID: 11617
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11617, 11618, 11619, 11620, 11621, 11622, 11623, 11624, 11625, 11626, 11627, 11628, 11629, 11630, 11631, 11632, 11633, 11634, 11635, 11636, 11637, 11638, 11639, 11640, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11616 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11617 */;
import _modDef11618 from "module_11618" /* 11618 */;
import _modDef11619 from "module_11619" /* 11619 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11620 */;
import _modDef11621 from "module_11621" /* 11621 */;
import _modDef11622 from "module_11622" /* 11622 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11623 */;
import _modDef11624 from "module_11624" /* 11624 */;
import _modDef11625 from "module_11625" /* 11625 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11626 */;
import _modDef11627 from "module_11627" /* 11627 */;
import _modDef11628 from "module_11628" /* 11628 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11629 */;
import _modDef11630 from "module_11630" /* 11630 */;
import _modDef11631 from "module_11631" /* 11631 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11632 */;
import _modDef11633 from "module_11633" /* 11633 */;
import _modDef11634 from "module_11634" /* 11634 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11635 */;
import _modDef11636 from "module_11636" /* 11636 */;
import _modDef11637 from "module_11637" /* 11637 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11638 */;
import _modDef11639 from "module_11639" /* 11639 */;
import _modDef11640 from "module_11640" /* 11640 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11618, large: _modDef11619 };
({ small: AssetRegistryDefault, medium: _modDef11618, large: _modDef11619 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11621, large: _modDef11622 };
({ small: AssetRegistryDefault2, medium: _modDef11621, large: _modDef11622 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11624, large: _modDef11625 };
({ small: AssetRegistryDefault3, medium: _modDef11624, large: _modDef11625 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11627, large: _modDef11628 };
({ small: AssetRegistryDefault4, medium: _modDef11627, large: _modDef11628 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11630, large: _modDef11631 };
({ small: AssetRegistryDefault5, medium: _modDef11630, large: _modDef11631 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11633, large: _modDef11634 };
({ small: AssetRegistryDefault6, medium: _modDef11633, large: _modDef11634 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11636, large: _modDef11637 };
({ small: AssetRegistryDefault7, medium: _modDef11636, large: _modDef11637 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11639, large: _modDef11640 };
({ small: AssetRegistryDefault8, medium: _modDef11639, large: _modDef11640 });
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
