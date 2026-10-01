// Module ID: 10620
// Function ID: 10621
// Name: useMobileTenureBadgeImages
// Dependencies: [1374, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10620 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import AssetRegistryDefault from "AssetRegistry" /* 10621 */;
import _modDef10622 from "module_10622" /* 10622 */;
import _modDef10623 from "module_10623" /* 10623 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10624 */;
import _modDef10625 from "module_10625" /* 10625 */;
import _modDef10626 from "module_10626" /* 10626 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10627 */;
import _modDef10628 from "module_10628" /* 10628 */;
import _modDef10629 from "module_10629" /* 10629 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10630 */;
import _modDef10631 from "module_10631" /* 10631 */;
import _modDef10632 from "module_10632" /* 10632 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10633 */;
import _modDef10634 from "module_10634" /* 10634 */;
import _modDef10635 from "module_10635" /* 10635 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10636 */;
import _modDef10637 from "module_10637" /* 10637 */;
import _modDef10638 from "module_10638" /* 10638 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10639 */;
import _modDef10640 from "module_10640" /* 10640 */;
import _modDef10641 from "module_10641" /* 10641 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10642 */;
import _modDef10643 from "module_10643" /* 10643 */;
import _modDef10644 from "module_10644" /* 10644 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10622, large: _modDef10623 };
({ small: AssetRegistryDefault, medium: _modDef10622, large: _modDef10623 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10625, large: _modDef10626 };
({ small: AssetRegistryDefault2, medium: _modDef10625, large: _modDef10626 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10628, large: _modDef10629 };
({ small: AssetRegistryDefault3, medium: _modDef10628, large: _modDef10629 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10631, large: _modDef10632 };
({ small: AssetRegistryDefault4, medium: _modDef10631, large: _modDef10632 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10634, large: _modDef10635 };
({ small: AssetRegistryDefault5, medium: _modDef10634, large: _modDef10635 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10637, large: _modDef10638 };
({ small: AssetRegistryDefault6, medium: _modDef10637, large: _modDef10638 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10640, large: _modDef10641 };
({ small: AssetRegistryDefault7, medium: _modDef10640, large: _modDef10641 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10643, large: _modDef10644 };
({ small: AssetRegistryDefault8, medium: _modDef10643, large: _modDef10644 });
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
