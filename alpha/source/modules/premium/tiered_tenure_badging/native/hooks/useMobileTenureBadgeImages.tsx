// Module ID: 9825
// Function ID: 9826
// Name: useMobileTenureBadgeImages
// Dependencies: [1389, 9826, 9827, 9828, 9829, 9830, 9831, 9832, 9833, 9834, 9835, 9836, 9837, 9838, 9839, 9840, 9841, 9842, 9843, 9844, 9845, 9846, 9847, 9848, 9849, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 9825 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import AssetRegistryDefault from "AssetRegistry" /* 9826 */;
import _modDef9827 from "module_9827" /* 9827 */;
import _modDef9828 from "module_9828" /* 9828 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9829 */;
import _modDef9830 from "module_9830" /* 9830 */;
import _modDef9831 from "module_9831" /* 9831 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9832 */;
import _modDef9833 from "module_9833" /* 9833 */;
import _modDef9834 from "module_9834" /* 9834 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9835 */;
import _modDef9836 from "module_9836" /* 9836 */;
import _modDef9837 from "module_9837" /* 9837 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9838 */;
import _modDef9839 from "module_9839" /* 9839 */;
import _modDef9840 from "module_9840" /* 9840 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 9841 */;
import _modDef9842 from "module_9842" /* 9842 */;
import _modDef9843 from "module_9843" /* 9843 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 9844 */;
import _modDef9845 from "module_9845" /* 9845 */;
import _modDef9846 from "module_9846" /* 9846 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 9847 */;
import _modDef9848 from "module_9848" /* 9848 */;
import _modDef9849 from "module_9849" /* 9849 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: AssetRegistryDefault, medium: _modDef9827, large: _modDef9828 };
({ small: AssetRegistryDefault, medium: _modDef9827, large: _modDef9828 });
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: AssetRegistryDefault2, medium: _modDef9830, large: _modDef9831 };
({ small: AssetRegistryDefault2, medium: _modDef9830, large: _modDef9831 });
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: AssetRegistryDefault3, medium: _modDef9833, large: _modDef9834 };
({ small: AssetRegistryDefault3, medium: _modDef9833, large: _modDef9834 });
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: AssetRegistryDefault4, medium: _modDef9836, large: _modDef9837 };
({ small: AssetRegistryDefault4, medium: _modDef9836, large: _modDef9837 });
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: AssetRegistryDefault5, medium: _modDef9839, large: _modDef9840 };
({ small: AssetRegistryDefault5, medium: _modDef9839, large: _modDef9840 });
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: AssetRegistryDefault6, medium: _modDef9842, large: _modDef9843 };
({ small: AssetRegistryDefault6, medium: _modDef9842, large: _modDef9843 });
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: AssetRegistryDefault7, medium: _modDef9845, large: _modDef9846 };
({ small: AssetRegistryDefault7, medium: _modDef9845, large: _modDef9846 });
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: AssetRegistryDefault8, medium: _modDef9848, large: _modDef9849 };
({ small: AssetRegistryDefault8, medium: _modDef9848, large: _modDef9849 });
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
