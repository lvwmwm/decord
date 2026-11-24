// Module ID: 9683
// Function ID: 9684
// Name: useMobileTenureBadgeImages
// Dependencies: [1388, 9684, 9685, 9686, 9687, 9688, 9689, 9690, 9691, 9692, 9693, 9694, 9695, 9696, 9697, 9698, 9699, 9700, 9701, 9702, 9703, 9704, 9705, 9706, 9707, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9683 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import AssetRegistryDefault from "AssetRegistry" /* 9684 */;
import _modDef9685 from "module_9685" /* 9685 */;
import _modDef9686 from "module_9686" /* 9686 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9687 */;
import _modDef9688 from "module_9688" /* 9688 */;
import _modDef9689 from "module_9689" /* 9689 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9690 */;
import _modDef9691 from "module_9691" /* 9691 */;
import _modDef9692 from "module_9692" /* 9692 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9693 */;
import _modDef9694 from "module_9694" /* 9694 */;
import _modDef9695 from "module_9695" /* 9695 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9696 */;
import _modDef9697 from "module_9697" /* 9697 */;
import _modDef9698 from "module_9698" /* 9698 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9699 */;
import _modDef9700 from "module_9700" /* 9700 */;
import _modDef9701 from "module_9701" /* 9701 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9702 */;
import _modDef9703 from "module_9703" /* 9703 */;
import _modDef9704 from "module_9704" /* 9704 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9705 */;
import _modDef9706 from "module_9706" /* 9706 */;
import _modDef9707 from "module_9707" /* 9707 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef9685, large: _modDef9686 };
({ small: AssetRegistryDefault, medium: _modDef9685, large: _modDef9686 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef9688, large: _modDef9689 };
({ small: AssetRegistryDefault2, medium: _modDef9688, large: _modDef9689 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef9691, large: _modDef9692 };
({ small: AssetRegistryDefault3, medium: _modDef9691, large: _modDef9692 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef9694, large: _modDef9695 };
({ small: AssetRegistryDefault4, medium: _modDef9694, large: _modDef9695 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef9697, large: _modDef9698 };
({ small: AssetRegistryDefault5, medium: _modDef9697, large: _modDef9698 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef9700, large: _modDef9701 };
({ small: AssetRegistryDefault6, medium: _modDef9700, large: _modDef9701 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef9703, large: _modDef9704 };
({ small: AssetRegistryDefault7, medium: _modDef9703, large: _modDef9704 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef9706, large: _modDef9707 };
({ small: AssetRegistryDefault8, medium: _modDef9706, large: _modDef9707 });
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
