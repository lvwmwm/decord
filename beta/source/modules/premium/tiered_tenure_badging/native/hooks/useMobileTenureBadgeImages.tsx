// Module ID: 10609
// Function ID: 10610
// Name: useMobileTenureBadgeImages
// Dependencies: [1380, 10610, 10611, 10612, 10613, 10614, 10615, 10616, 10617, 10618, 10619, 10620, 10621, 10622, 10623, 10624, 10625, 10626, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10609 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1380 */;
import AssetRegistryDefault from "AssetRegistry" /* 10610 */;
import _modDef10611 from "module_10611" /* 10611 */;
import _modDef10612 from "module_10612" /* 10612 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10613 */;
import _modDef10614 from "module_10614" /* 10614 */;
import _modDef10615 from "module_10615" /* 10615 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10616 */;
import _modDef10617 from "module_10617" /* 10617 */;
import _modDef10618 from "module_10618" /* 10618 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10619 */;
import _modDef10620 from "module_10620" /* 10620 */;
import _modDef10621 from "module_10621" /* 10621 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10622 */;
import _modDef10623 from "module_10623" /* 10623 */;
import _modDef10624 from "module_10624" /* 10624 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10625 */;
import _modDef10626 from "module_10626" /* 10626 */;
import _modDef10627 from "module_10627" /* 10627 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10628 */;
import _modDef10629 from "module_10629" /* 10629 */;
import _modDef10630 from "module_10630" /* 10630 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10631 */;
import _modDef10632 from "module_10632" /* 10632 */;
import _modDef10633 from "module_10633" /* 10633 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10611, large: _modDef10612 };
({ small: AssetRegistryDefault, medium: _modDef10611, large: _modDef10612 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10614, large: _modDef10615 };
({ small: AssetRegistryDefault2, medium: _modDef10614, large: _modDef10615 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10617, large: _modDef10618 };
({ small: AssetRegistryDefault3, medium: _modDef10617, large: _modDef10618 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10620, large: _modDef10621 };
({ small: AssetRegistryDefault4, medium: _modDef10620, large: _modDef10621 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10623, large: _modDef10624 };
({ small: AssetRegistryDefault5, medium: _modDef10623, large: _modDef10624 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10626, large: _modDef10627 };
({ small: AssetRegistryDefault6, medium: _modDef10626, large: _modDef10627 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10629, large: _modDef10630 };
({ small: AssetRegistryDefault7, medium: _modDef10629, large: _modDef10630 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10632, large: _modDef10633 };
({ small: AssetRegistryDefault8, medium: _modDef10632, large: _modDef10633 });
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
