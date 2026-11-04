// Module ID: 11608
// Function ID: 11609
// Name: useMobileTenureBadgeImages
// Dependencies: [1387, 11609, 11610, 11611, 11612, 11613, 11614, 11615, 11616, 11617, 11618, 11619, 11620, 11621, 11622, 11623, 11624, 11625, 11626, 11627, 11628, 11629, 11630, 11631, 11632, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11608 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 11609 */;
import _modDef11610 from "module_11610" /* 11610 */;
import _modDef11611 from "module_11611" /* 11611 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11612 */;
import _modDef11613 from "module_11613" /* 11613 */;
import _modDef11614 from "module_11614" /* 11614 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11615 */;
import _modDef11616 from "module_11616" /* 11616 */;
import _modDef11617 from "module_11617" /* 11617 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11618 */;
import _modDef11619 from "module_11619" /* 11619 */;
import _modDef11620 from "module_11620" /* 11620 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11621 */;
import _modDef11622 from "module_11622" /* 11622 */;
import _modDef11623 from "module_11623" /* 11623 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 11624 */;
import _modDef11625 from "module_11625" /* 11625 */;
import _modDef11626 from "module_11626" /* 11626 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 11627 */;
import _modDef11628 from "module_11628" /* 11628 */;
import _modDef11629 from "module_11629" /* 11629 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 11630 */;
import _modDef11631 from "module_11631" /* 11631 */;
import _modDef11632 from "module_11632" /* 11632 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef11610, large: _modDef11611 };
({ small: AssetRegistryDefault, medium: _modDef11610, large: _modDef11611 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef11613, large: _modDef11614 };
({ small: AssetRegistryDefault2, medium: _modDef11613, large: _modDef11614 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef11616, large: _modDef11617 };
({ small: AssetRegistryDefault3, medium: _modDef11616, large: _modDef11617 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef11619, large: _modDef11620 };
({ small: AssetRegistryDefault4, medium: _modDef11619, large: _modDef11620 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef11622, large: _modDef11623 };
({ small: AssetRegistryDefault5, medium: _modDef11622, large: _modDef11623 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef11625, large: _modDef11626 };
({ small: AssetRegistryDefault6, medium: _modDef11625, large: _modDef11626 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef11628, large: _modDef11629 };
({ small: AssetRegistryDefault7, medium: _modDef11628, large: _modDef11629 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef11631, large: _modDef11632 };
({ small: AssetRegistryDefault8, medium: _modDef11631, large: _modDef11632 });
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
