// Module ID: 10771
// Function ID: 10772
// Name: useMobileTenureBadgeImages
// Dependencies: [1392, 10772, 10773, 10774, 10775, 10776, 10777, 10778, 10779, 10780, 10781, 10782, 10783, 10784, 10785, 10786, 10787, 10788, 10789, 10790, 10791, 10792, 10793, 10794, 10795, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10771 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1392 */;
import AssetRegistryDefault from "AssetRegistry" /* 10772 */;
import _modDef10773 from "module_10773" /* 10773 */;
import _modDef10774 from "module_10774" /* 10774 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10775 */;
import _modDef10776 from "module_10776" /* 10776 */;
import _modDef10777 from "module_10777" /* 10777 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10778 */;
import _modDef10779 from "module_10779" /* 10779 */;
import _modDef10780 from "module_10780" /* 10780 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10781 */;
import _modDef10782 from "module_10782" /* 10782 */;
import _modDef10783 from "module_10783" /* 10783 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10784 */;
import _modDef10785 from "module_10785" /* 10785 */;
import _modDef10786 from "module_10786" /* 10786 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import _modDef10789 from "module_10789" /* 10789 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10790 */;
import _modDef10791 from "module_10791" /* 10791 */;
import _modDef10792 from "module_10792" /* 10792 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10793 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10773, large: _modDef10774 };
({ small: AssetRegistryDefault, medium: _modDef10773, large: _modDef10774 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10776, large: _modDef10777 };
({ small: AssetRegistryDefault2, medium: _modDef10776, large: _modDef10777 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10779, large: _modDef10780 };
({ small: AssetRegistryDefault3, medium: _modDef10779, large: _modDef10780 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10782, large: _modDef10783 };
({ small: AssetRegistryDefault4, medium: _modDef10782, large: _modDef10783 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10785, large: _modDef10786 };
({ small: AssetRegistryDefault5, medium: _modDef10785, large: _modDef10786 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10788, large: _modDef10789 };
({ small: AssetRegistryDefault6, medium: _modDef10788, large: _modDef10789 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10791, large: _modDef10792 };
({ small: AssetRegistryDefault7, medium: _modDef10791, large: _modDef10792 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10794, large: _modDef10795 };
({ small: AssetRegistryDefault8, medium: _modDef10794, large: _modDef10795 });
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
