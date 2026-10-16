// Module ID: 10783
// Function ID: 10784
// Name: useMobileTenureBadgeImages
// Dependencies: [1394, 10784, 10785, 10786, 10787, 10788, 10789, 10790, 10791, 10792, 10793, 10794, 10795, 10796, 10797, 10798, 10799, 10800, 10801, 10802, 10803, 10804, 10805, 10806, 10807, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 10783 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import AssetRegistryDefault from "AssetRegistry" /* 10784 */;
import _modDef10785 from "module_10785" /* 10785 */;
import _modDef10786 from "module_10786" /* 10786 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import _modDef10789 from "module_10789" /* 10789 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10790 */;
import _modDef10791 from "module_10791" /* 10791 */;
import _modDef10792 from "module_10792" /* 10792 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 10793 */;
import _modDef10794 from "module_10794" /* 10794 */;
import _modDef10795 from "module_10795" /* 10795 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 10796 */;
import _modDef10797 from "module_10797" /* 10797 */;
import _modDef10798 from "module_10798" /* 10798 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 10799 */;
import _modDef10800 from "module_10800" /* 10800 */;
import _modDef10801 from "module_10801" /* 10801 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 10802 */;
import _modDef10803 from "module_10803" /* 10803 */;
import _modDef10804 from "module_10804" /* 10804 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 10805 */;
import _modDef10806 from "module_10806" /* 10806 */;
import _modDef10807 from "module_10807" /* 10807 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef10785, large: _modDef10786 };
({ small: AssetRegistryDefault, medium: _modDef10785, large: _modDef10786 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef10788, large: _modDef10789 };
({ small: AssetRegistryDefault2, medium: _modDef10788, large: _modDef10789 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef10791, large: _modDef10792 };
({ small: AssetRegistryDefault3, medium: _modDef10791, large: _modDef10792 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef10794, large: _modDef10795 };
({ small: AssetRegistryDefault4, medium: _modDef10794, large: _modDef10795 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef10797, large: _modDef10798 };
({ small: AssetRegistryDefault5, medium: _modDef10797, large: _modDef10798 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef10800, large: _modDef10801 };
({ small: AssetRegistryDefault6, medium: _modDef10800, large: _modDef10801 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef10803, large: _modDef10804 };
({ small: AssetRegistryDefault7, medium: _modDef10803, large: _modDef10804 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef10806, large: _modDef10807 };
({ small: AssetRegistryDefault8, medium: _modDef10806, large: _modDef10807 });
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
